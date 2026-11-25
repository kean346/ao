import type { Metadata } from 'next';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/inter';
import '@fontsource-variable/cormorant-garamond';
import '@fontsource-variable/cormorant-garamond/wght-italic.css';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: 'AO Enterprises | Commercial Supply & Procurement',
    template: '%s | AO Enterprises',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: siteConfig.name,
    title: 'AO Enterprises | Commercial Supply & Procurement',
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <div className="site-frame">
          <Navbar />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
