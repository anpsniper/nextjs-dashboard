import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | admanl Dashboard',
    default: 'admanl Dashboard',
  },
  description: 'Web Management System',
  metadataBase: new URL('https://nextjs-dashboard-delta-nine-30.vercel.app'),
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}