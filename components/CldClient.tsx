"use client";

import { CldImage } from "next-cloudinary";

export const CldClient = ({ src }: { src: string }) => {
  return (
    <CldImage
      alt="..."
      width="1920"
      height="1080"
      src={src}
      overlays={[
        {
          width: 1800,
          height: 700,
          crop: "fit",
          text: {
            color: "black",
            fontFamily: "Lato",
            fontSize: 100,
            fontWeight: "bold",
            text: "Lorem kjh jkh kjh kgbkhjg gk hg hgkjgkjhggkgjh gkjjghguyg uguy guyguy giuygy ygo gu ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eum totam nostrum quisquam nobis architecto. kjhkjhl hgkl jgljk l glkg kg ljkglk jg lkgk lg",
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
