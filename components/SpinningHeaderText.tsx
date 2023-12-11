"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export const SpinningHeaderText = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
        transition: { ease: "linear", repeat: Infinity, duration: 20 },
      }}
      className="absolute bottom-0 right-0 -z-10 hidden md:block md:h-52 md:w-52 xl:h-72 xl:w-72"
    >
      <Image src="/Group 1.svg" alt="..." fill />
    </motion.div>
  );
};
