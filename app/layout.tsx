import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import "./github-markdown.css";

const pt = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awesome Base",
  description:
    "Awesome Base is a list of Base ecosystem links including (d)apps, projects and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pt.className}>{children}</body>
    </html>
  );
}
