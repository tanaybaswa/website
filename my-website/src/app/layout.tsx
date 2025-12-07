import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanay Baswa",
  description: "Tanay Baswa - AI Security Researcher",
  icons: {
    icon: '/yin_yang.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
