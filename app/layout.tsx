import type { Metadata } from "next";
import "./globals.css";
import { gluten } from "./components/lib/fonts";
import Footer from "./components/Footer";


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
      <body className={`${gluten.className} bg-neutral-100`}>{children}
        <Footer />
      </body>
    </html>
  );
}
