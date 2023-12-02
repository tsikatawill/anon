import Link from "next/link";
import { cn } from "../lib/utils";
import { BtnBaseStyles, BtnVariantStyles } from "./Button";
import { CampaignCard } from "./CampaignCard";
import { Container } from "./Container";

export const PublicCampaigns = () => {
  return (
    <section id="public-campaigns">
      <Container className="grid grid-cols-1 gap-10 py-20 md:grid-cols-5 md:py-32">
        <div className="col-span-2  space-y-4">
          <h2 className="text-4xl font-semibold md:text-4xl xl:text-5xl">
            Public campaigns
          </h2>
          <p>
            These are some public campaigns started by members of the Anon
            community. You may reply with your views or partake in the polls
            here.
          </p>

          <Link
            href="/campaigns"
            className={cn(BtnBaseStyles, BtnVariantStyles.primary)}
          >
            See more
          </Link>
        </div>

        <div className="col-span-3">
          <div className="flex w-full gap-4 overflow-x-auto pb-5 pr-5">
            {Array.from({ length: 12 }).map((item, idx) => (
              <CampaignCard key={idx} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
