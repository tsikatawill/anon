import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 3;

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={cn(inter.className, "flex min-h-screen flex-col")}>
        <div className="flex-1">
          <Navbar user={session?.user} />

          {children}
        </div>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
