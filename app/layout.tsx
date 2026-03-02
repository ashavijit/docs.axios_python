import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { GeistSans } from 'geist/font/sans';
import localFont from 'next/font/local';

const domaine = localFont({
  src: '../fonts/DomaineDispNar-Regular.otf',
  variable: '--font-domaine',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${domaine.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
