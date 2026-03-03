import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';

const domaine = localFont({
  src: '../fonts/d.otf',
  variable: '--font-domaine',
});

const haskoy = localFont({
  src: '../fonts/Haskoy.ttf',
  variable: '--font-haskoy',
});

export const metadata = {
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
    <html lang="en" className={`${haskoy.variable} ${domaine.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
