import { Header } from "../components/Header";
import { HowItWorks } from "../components/HowItWorks";
import { PublicCampaigns } from "../components/PublicCampaigns";
import { ServiceImprovement } from "../components/ServiceImprovement";

export default async function Home() {
  return (
    <>
      <Header />
      <PublicCampaigns />
      <HowItWorks />
      <ServiceImprovement />
    </>
  );
}
