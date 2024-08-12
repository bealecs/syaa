import type { Metadata } from "next";
import "./globals.css";
import { ar } from "./lib/fonts";


export const metadata: Metadata = {
  title: "SYAA",
  description: "Suffolk Youth Athletic Association",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.svg"/>
      <body className={ar.className}>{children}</body>
    </html>
  );
}
