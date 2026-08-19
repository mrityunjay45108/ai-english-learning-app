import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI English Learning App",
  description: "AI-Powered English Learning Ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-slate-950 text-slate-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
