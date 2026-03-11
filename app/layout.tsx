import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';
import { DM_Mono } from 'next/font/google';

const domaine = localFont({
  src: '../fonts/d.otf',
  variable: '--font-domaine',
});

const haskoy = localFont({
  src: '../fonts/Haskoy.ttf',
  variable: '--font-haskoy',
});

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

export const metadata = {
  metadataBase: new URL('https://docs-axios-python.vercel.app'),
  title: 'axios_python',
  description: 'Python HTTP Client inspired by Axios',
  openGraph: {
    title: 'axios_python',
    description: 'Python HTTP Client inspired by Axios',
    url: 'https://docs-axios-python.vercel.app',
    siteName: 'axios_python',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'axios_python logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${haskoy.variable} ${domaine.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
