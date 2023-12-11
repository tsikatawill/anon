import { Container } from "@/components/Container";

export default function CampaignPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <Container className="py-5">Campaign id: {slug} page</Container>
    </div>
  );
}
