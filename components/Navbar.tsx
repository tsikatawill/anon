"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BtnBaseStyles, BtnVariantStyles, Button } from "./Button";
import { Container } from "./Container";
import { LogoLink } from "./LogoLink";

export const Navbar = ({
  user,
  inHeader = false,
}: {
  inHeader?: boolean;
  user?:
    | {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      }
    | undefined
    | null;
}) => {
  const [transparentBg, setTransparentBg] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTransparentBg(false);
      } else {
        setTransparentBg(true);
      }
    };

    window.addEventListener("scroll", () => handleScroll());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "bg-red-00 top-0 z-30 w-full",
        inHeader ? "fixed" : "static",
        inHeader && !transparentBg && "bg-white",
        pathname === "/" && !inHeader && "hidden",
      )}
      animate={{ y: transparentBg ? [-10, 0] : [10, 0] }}
    >
      <Container
        className={cn("flex items-center justify-between py-2 md:py-4")}
      >
        <LogoLink />

        {user ? (
          <div className="flex items-center gap-2">
            {user.image && (
              <Image
                src={user.image}
                width={200}
                height={200}
                alt={user.name as string}
                className="h-10 w-10 rounded-full object-cover md:h-16 md:w-16"
              />
            )}

            <Button
              variant="blanc"
              className="px-2 py-1 md:px-2 md:py-1"
              onClick={() => {
                if (window.confirm("Logout?")) {
                  signOut();
                }
              }}
            >
              <div className="flex items-center gap-1">
                Logout
                <BiLogOut />
              </div>
            </Button>
          </div>
        ) : (
          <Link
            href="/login"
            className={cn(
              BtnBaseStyles,
              BtnVariantStyles.noire,
              "px-3 py-1 md:px-4 md:py-2",
            )}
          >
            Login
          </Link>
        )}
      </Container>
    </motion.nav>
  );
};
