"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BtnBaseStyles, BtnVariantStyles, Button } from "./Button";
import { Container } from "./Container";

export const Navbar = ({
  user,
}: {
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setTransparentBg(false);
        console.log("greater");
      } else {
        setTransparentBg(true);
        console.log("less");
      }

      console.log(window.scrollY);
    };

    window.addEventListener("scroll", () => handleScroll());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={"fixed top-0 z-30 w-full bg-contain bg-center bg-repeat"}
      animate={{
        background: transparentBg ? "transparent" : "white",
        top: transparentBg ? [-10, 0] : [10, 0],
        transition: {
          duration: 0.5,
          ease: "easeIn",
        },
      }}
    >
      <Container className="flex items-center justify-between py-2 md:py-4">
        <Link href="/" className="block w-12 md:w-auto">
          <Image src="/anon-logoo.png" width={80} height={80} alt="logo" />
        </Link>

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
              "px-2 py-1 md:px-4 md:py-2",
            )}
          >
            Login
          </Link>
        )}
      </Container>
    </motion.nav>
  );
};
