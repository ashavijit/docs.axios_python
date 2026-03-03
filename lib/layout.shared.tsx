import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'ashavijit',
  repo: 'docs.axios_python',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-lg p-1.5 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-blue-500/40 transition-all duration-300">
            <Image
              alt="axios_python logo"
              src="/logo.png"
              width={22}
              height={22}
              aria-label="axios_python logo"
              className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 drop-shadow-md"
            />
          </div>
          <span className="font-bold tracking-tight text-foreground transition-colors group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-yellow-500 dark:group-hover:from-blue-500 dark:group-hover:to-yellow-400">
            axios_python
          </span>
        </div>
      ),
    },
    links: [
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
