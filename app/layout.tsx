import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Portfolio - Vivek Tiwari",
  description: "Personal portfolio showcasing my work and experience",
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
