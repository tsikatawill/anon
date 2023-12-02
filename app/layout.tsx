import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anon - Send anonymous messages",
  description:
    "Explore a unique take on self-expression in a safe, judgment-free space. Join us for a fresh perspective on anonymity, where individuals can freely share thoughts and opinions without constraints. Embrace the freedom to be yourself securely.",
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
