import { Container } from "@/components/Container";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

const desc =
  "Have you ever had a secret crush on my girlfriend while we were still dating?";

export const metadata: Metadata = {
  title: "Campaign - Anon",
  description: desc,
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: getCldOgImageUrl({
          src: "zlra5l8wdyorvmi49zqf",
          overlays: [
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
                text: desc,
              },
              position: {
                x: 100,
                y: 200,
                gravity: "north_west",
              },
            },
          ],
        }),
      },
    ],
  },
};

export default function CampaignPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Container className="py-5">
        Campaign id: {slug} page
        {/* <CldClient src="zlra5l8wdyorvmi49zqf" /> */}
      </Container>
    </div>
  );
}
