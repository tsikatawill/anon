import { getPublicCampaigns } from "@/lib/queries";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BtnBaseStyles, BtnVariantStyles } from "./Button";
import { CampaignCard } from "./CampaignCard";
import { Container } from "./Container";

export const PublicCampaigns = async () => {
  const campaigns = await getPublicCampaigns();

  return (
    <section id="public-campaigns">
      <Container className="grid grid-cols-1 gap-20 py-8 sm:py-16 md:grid-cols-5 md:gap-10 md:py-32">
        <div className="mx-auto max-w-md space-y-4 text-center md:col-span-2  md:mx-0 md:max-w-full md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold md:text-4xl xl:text-5xl">
              Public campaigns
            </h2>

            <p>
              These are some public campaigns started by members of the Anon
              community. You may reply with your views or partake in the polls
              here.
            </p>
          </div>

          <Link
            href="/campaigns"
            className={cn(
              BtnBaseStyles,
              BtnVariantStyles.blanc,
              "mx-auto md:mx-0",
            )}
          >
            See more
          </Link>
        </div>

        {campaigns && (
          <div className="md:col-span-3">
            <div className="flex w-full gap-4 overflow-x-auto pb-5 pr-5">
              {campaigns.map((campaign, idx) => (
                <CampaignCard
                  key={campaign._id}
                  index={idx}
                  campaign={campaign}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
