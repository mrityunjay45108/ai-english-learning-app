import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Admin Console - AI English Learning Platform',
  description: 'Control center for microservices management and analytics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}