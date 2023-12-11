import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anon-ruby.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Anon - Send anonymous messages",
  description:
    "Explore a unique take on self-expression in a safe, judgment-free space. Join us for a fresh perspective on anonymity, where individuals can freely share thoughts and opinions without constraints. Embrace the freedom to be yourself securely.",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
