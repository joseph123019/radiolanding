import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instore Radio Solutions',
  description:
    "Elevate your brand's presence with Instore Radio Solutions – a tailored audio advertising experience for your business. This service allows you to broadcast your own advertisements, exclusively designed for your store, ensuring a cohesive and personalized shopping atmosphere. By integrating your brand's unique voice and messaging, Instore Radio Solutions not only enhances customer engagement but also reinforces brand identity directly at the point of sale. Experience a seamless blend of your marketing content with in-store ambience, creating a memorable and impactful shopping experience for your customers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
