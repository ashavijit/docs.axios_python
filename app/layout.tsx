import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import localFont from 'next/font/local';

const domaine = localFont({
  src: '../fonts/Moderat.ttf',
  variable: '--font-domaine',
});

const haskoy = localFont({
  src: '../fonts/Haskoy.ttf',
  variable: '--font-haskoy',
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${haskoy.variable} ${domaine.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
