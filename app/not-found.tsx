"use client";

import Image from "next/image";
import Link from "next/link";
import { BtnBaseStyles, BtnVariantStyles } from "../components/Button";
import { Container } from "../components/Container";
import { cn } from "../lib/utils";

export default function NotFound() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center gap-4 md:gap-8">
      <Image src="/anon-logoo.png" width={200} height={200} alt="..." />

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">404: Page not found</h1>
        <p>You seem a bit lost, let&rsquo;s get you back on track</p>

        <Link
          href="/"
          className={cn(BtnBaseStyles, BtnVariantStyles.primary, "mx-auto")}
        >
          Go home
        </Link>
      </div>
    </Container>
  );
}
