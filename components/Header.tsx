import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Button } from "./Button";
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import { SpinningHeaderText } from "./SpinningHeaderText";

export const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex h-[500px] flex-col  bg-[url(/header-bg/noise-1.png)] bg-cover bg-fixed bg-center bg-no-repeat md:min-h-screen">
      <Navbar user={session && session.user && session.user} />
      <header className="md:pb80 mt-1 flex flex-1 bg-cover bg-center bg-no-repeat pb-4 pt-16 md:pt-20">
        <Container className="relative z-10 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start">
          <div className="left space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="hidden max-w-xl text-3xl font-bold sm:text-5xl md:max-w-full md:text-6xl lg:w-4/5 xl:text-8xl">
                Express your views Anonymously
              </h1>
              <h1 className="mx-auto w-full max-w-xl text-2xl font-bold sm:text-4xl md:mx-0 md:max-w-full md:text-5xl lg:w-4/5 xl:text-7xl">
                Speak Freely, Stay Secure: Your Safe Haven for Authentic
                Expression.
              </h1>
              <p className="mx-auto text-lg sm:w-4/5 md:mx-0 md:w-3/5 md:text-xl">
                Where Confidence Thrives and Voices Flourish, Embrace the Power
                of Unrestricted Self-Expression
              </p>
            </div>

            <form
              className="max-w-screen-md space-y-8"
              action="/campaigns/reply"
            >
              <input
                className="w-full rounded-sm border border-black px-4 py-2 text-center shadow-cs-2 shadow-red-500 outline-none focus:border-red-500  md:p-5 md:text-left"
                placeholder="Paste campaign id"
                name="campaignId"
              />

              <Button className="mx-auto md:mx-0" variant="noire">
                Get started
              </Button>
            </form>
          </div>

          <SpinningHeaderText />
        </Container>
      </header>
    </div>
  );
};
