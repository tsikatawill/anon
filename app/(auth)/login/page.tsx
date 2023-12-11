import { Container } from "@/components/Container";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");

  return (
    <Container>
      Login page
      <LoginWithGoogle />
    </Container>
  );
}
