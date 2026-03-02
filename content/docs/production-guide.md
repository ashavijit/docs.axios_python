---
title: "Building a Production-level App"
description: "A comprehensive guide to architecting a real-world application using axios_python."
---

# Building a Production-level App

When moving beyond simple scripts, your application architecture needs to be robust, maintainable, and observable. `axios_python` provides the foundational orchestration features required to build enterprise-grade network layers.

In this guide, we will walk through a production-level setup for a theoretical FastAPI microservice that communicates with multiple external providers (Stripe and GitHub).

## 1. Directory Structure

A good practice is to isolate all external HTTP client logic into a dedicated `clients` or `integrations` directory, separated from your core business logic.

```
src/
├── app.py
├── core/
│   ├── config.py       # Pydantic BaseSettings
│   └── logger.py       # Centralized logging configuration
├── clients/
│   ├── __init__.py
│   ├── github.py       # GitHub client instance & methods
│   └── stripe.py       # Stripe client instance & methods
└── services/
    └── billing.py      # Business logic that uses the clients
```

## 2. Centralized Configuration
Don't hardcode URLs or API keys. Use dependency injection or a centralized config.

```python
# core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    github_token: str
    github_api_url: str = "https://api.github.com"
    stripe_key: str
    stripe_api_url: str = "https://api.stripe.com/v1"
    
settings = Settings()
```

## 3. Defining Isolated Client Instances

Create a single instance per external service. This allows connection pooling to work efficiently and prevents headers/middleware from leaking between services.

```python
# clients/github.py
import axios_python
from axios_python import ExponentialBackoff, LoggerPlugin
from src.core.config import settings
import logging

# 1. Setup specific logger
logger = logging.getLogger("github_client")

# 2. Create the instance
github_client = axios_python.create({
    "base_url": settings.github_api_url,
    "timeout": 5.0, # Fail fast on GitHub API
    "max_retries": 3,
    "retry_strategy": ExponentialBackoff(base=1.0, multiplier=2.0),
    "headers": {
        "Authorization": f"Bearer {settings.github_token}",
        "Accept": "application/vnd.github.v3+json",
        "User-Agent": "MyProductionApp/1.0"
    }
})

# 3. Add Plugins for Observability
github_client.plugin(LoggerPlugin(logger=logger))

# 4. Add custom interceptors
def extract_data(response):
    # GitHub often wraps arrays or adds metadata we don't need in the app layer
    if isinstance(response.data, dict) and "items" in response.data:
        response.data = response.data["items"]
    return response

github_client.interceptors.response.use(extract_data)

# 5. Define abstract methods for the rest of your app to use
async def fetch_user_repos(username: str):
    # Notice how clean the actual request is!
    response = await github_client.async_get(f"/users/{username}/repos")
    response.raise_for_status()
    # The interceptor already extracted the list
    return response.data 
```

## 4. Applying Global Middleware Wrapper

For production apps, you often want a correlation ID attached to every request to track it across microservices. We can build this using `axios_python`'s middleware pipeline.

```python
# core/middleware.py
import contextvars
from uuid import uuid4

# Assume your web framework (FastAPI) sets this per incoming request
correlation_id_ctx = contextvars.ContextVar("correlation_id", default=str(uuid4()))

async def tracing_middleware(ctx, next_fn):
    # Inject the correlation ID into every outgoing request header
    correlation_id = correlation_id_ctx.get()
    ctx["headers"]["X-Correlation-ID"] = correlation_id
    
    # Yield to the next step
    result = await next_fn(ctx)
    return result
```

You can then attach this to any client instance `github_client.use(tracing_middleware)`.

## 5. Integrating with Business Logic

Your business logic should not care about HTTP connections, retries, headers, or JSON parsing. It should just call the functions you defined in your `clients/` folder.

```python
# services/user_sync.py
from src.clients.github import fetch_user_repos
import logging

logger = logging.getLogger(__name__)

async def sync_repositories(username: str):
    try:
        repos = await fetch_user_repos(username)
        # ... business logic to save repos to database ...
        logger.info(f"Successfully synced {len(repos)} repositories for {username}")
        
    except axios_python.TimeoutError:
        logger.error("GitHub API timed out. Try again later.")
    except axios_python.HTTPStatusError as e:
        logger.error(f"GitHub returned an error: {e.response.status_code}")
```

## Key Takeaways

By structuring your HTTP layer with `axios_python`:
1. **Business logic is decoupled** from network implementations.
2. **Resilience is built-in** at the client definition level via retries and timeouts.
3. **Observability is unified** using Plugins and Middleware.
4. **Code is extremely DRY**. You define headers and base URLs exactly once.
