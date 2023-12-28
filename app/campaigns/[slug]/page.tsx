import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { getCampaign } from "@/lib/queries";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import { getServerSession } from "next-auth";
import { getCldOgImageUrl } from "next-cloudinary";
import { notFound } from "next/navigation";
import { FaPoll } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  if (!!/^anon-/.test(slug)) notFound();

  const campaign = await getCampaign(slug.split("anon-")[1]);

  return {
    title: `${campaign.title} - Anon`,
    description: campaign.description,
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
                  text: campaign.title,
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
}

export default async function CampaignPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const session = await getServerSession();
  const id = session
    ? session.user?.email
    : (uuidv4().split("-") as []).slice(-1);

  const campaignId = slug.split("anon-")[1];

  const campaign = await getCampaign(campaignId);

  return (
    <div>
      <header className="relative">
        <div className="fixed left-0 top-0 -z-10 h-full w-full bg-[url(/header-bg/noise-1.png)] bg-cover bg-center bg-no-repeat" />

        <Container className="space-y-4 py-10 md:py-16">
          <div className="mx-auto max-w-xl space-y-4 text-center">
            <h1 className="text-2xl font-bold md:text-4xl lg:max-w-2xl">
              {campaign.title}
            </h1>

            <p>{campaign.description}</p>
          </div>

          <div className="flex items-center justify-center gap-4">
            {/* <div className="h-10 w-10 rounded-full bg-red-800"></div> */}
            <p className="rounded-full bg-black/50 px-3 py-1 text-sm font-semibold text-white sm:text-lg">
              Anonuser1234
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-4">
              {campaign.type === "general" ? (
                <IoMdChatboxes size={23} title="Text" />
              ) : (
                <FaPoll size={20} title="Poll" />
              )}
              <p>{dayjs(campaign.createdAt).format("ddd DD MMM, hh a")}</p>
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
