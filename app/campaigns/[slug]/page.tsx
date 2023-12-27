import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { getCldOgImageUrl } from "next-cloudinary";
import { FaPoll } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

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

export default async function CampaignPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const session = await getServerSession();
  const id = session
    ? session.user?.email
    : (uuidv4().split("-") as []).slice(-1);

  return (
    <div>
      <header className="relative">
        <div className="fixed left-0 top-0 -z-10 h-full w-full bg-[url(/header-bg/noise-1.png)] bg-cover bg-center bg-no-repeat" />

        <Container className="space-y-4 py-10 md:py-16">
          <h1 className="mx-auto max-w-xl text-center text-2xl font-bold md:text-4xl lg:max-w-2xl">
            Have you ever had a secret crush on my girlfriend while we were
            still dating?
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="h-10 w-10 rounded-full bg-red-800"></div>
            <p className="text-lg font-semibold">Anonuser1234</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-4">
              <FaPoll size={20} title="Poll" />
              <IoMdChatboxes size={23} title="Text" />
              <p>20th, Dec</p>
            </div>
          </div>
        </Container>
      </header>

      <div className="py-10">
        <Container>
          <form className="mx-auto w-full max-w-xl space-y-2 lg:max-w-2xl">
            <textarea
              className={cn(
                "min-h-[200px] w-full rounded-md border border-black px-4 py-2 shadow-cs-2 outline-none focus:bg-white md:p-5 md:shadow-cs-3",
              )}
              placeholder="Share your opinion"
            ></textarea>
            <Button variant="noire" type="button" className="w-full">
              Reply
            </Button>
          </form>
        </Container>
      </div>
    </div>
  );
}
