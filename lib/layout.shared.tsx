import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: 'avijit',
  repo: 'axios_python',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            alt="axios_python logo"
            src="/logo.png"
            width={24}
            height={24}
            aria-label="axios_python logo"
          />
          <span className="font-medium">axios_python</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
