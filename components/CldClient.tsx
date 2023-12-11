"use client";

import { CldImage } from "next-cloudinary";

export const CldClient = ({ src }: { src: string }) => {
  return (
    <CldImage
      alt="..."
      className="h-[1080px] w-[1920px] object-cover"
      width={1920}
      height={1080}
      src={src}
      overlays={[
        {
          width: 1800,
          height: 700,
          crop: "fit",
          text: {
            color: "black",
            fontFamily: "Lato",
            fontSize: 150,
            lineSpacing: -20,
            fontWeight: "bold",
            text: "Have you ever had a secret crush on my girlfriend while we were still dating?",
          },
          position: {
            x: 100,
            y: 200,
            gravity: "north_west",
          },
        },
      ]}
    />
  );
};
