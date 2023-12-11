import { Container } from "@/components/Container";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import { authOptions } from "@/lib/auth";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Log in for Secure Expression: Your Safe Hub for Authentic Communication. Join us and Speak Freely, Stay Secure",
  keywords: ["login", "create account", "anon login"],
};

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) return redirect("/");

  return (
    <>
      <div className="absolute top-0 -z-10 h-screen w-full bg-[url(/header-bg/noise-1.png)] bg-cover bg-center bg-no-repeat" />

      <Container className="flex min-h-[70vh] items-center justify-center py-2 md:py-4">
        <LoginWithGoogle />
      </Container>
    </>
  );
}
