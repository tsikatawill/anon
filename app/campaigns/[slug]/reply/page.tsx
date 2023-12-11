import { Container } from "@/components/Container";

export default function ReplyPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <Container>{slug}: reply page</Container>;
}
