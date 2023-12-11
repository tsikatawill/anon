import { Container } from "@/components/Container";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");

  return (
    <Container className=" grid min-h-screen place-content-center bg-[url(/header-bg/noise-1.png)] bg-cover bg-center bg-no-repeat">
      <LoginWithGoogle />
    </Container>
  );
}
