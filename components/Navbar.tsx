"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";

export const Navbar = () => {
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
      <Container className="py-2 md:py-4">
        <Link href="/" className="block w-12 md:w-full">
          <Image src="/anon-logoo.png" width={80} height={80} alt="logo" />
        </Link>
      </Container>
    </motion.nav>
  );
};
