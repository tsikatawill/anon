import { CampaignCard } from "@/components/CampaignCard";
import { getPublicCampaigns } from "@/lib/queries";
import { Metadata } from "next";
import { Container } from "../../components/Container";

export const metadata: Metadata = {
  title: "Public campaigns",
  description:
    "Engage in Public Campaigns Share Your Anonymous Views to Shape the Conversation.",
};

export default async function CampaignsPage() {
  const campaigns = await getPublicCampaigns();
  return (
    <Container className="space-y-10 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Public Campaigns</h1>
        <p>Anonymous users need your anonymous views on these campaigns</p>
      </div>

      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {campaigns &&
          campaigns.map((campaign, idx) => (
            <li key={idx}>
              <CampaignCard campaign={campaign} index={idx} fullWidth />
            </li>
          ))}
      </ul>

      <p className="mx-auto max-w-md text-center text-lg text-neutral-700 lg:max-w-xl">
        There are currently no public campaigns available. Check back tomorrow.
      </p>
    </Container>
  );
}
