import Link from "next/link";
import { cn } from "../lib/utils";
import { BtnBaseStyles, BtnVariantStyles } from "./Button";
import { Container } from "./Container";

export const HowItWorks = () => {
  return (
    <section id="public-campaigns">
      <Container className="grid grid-cols-1 gap-20 py-20 md:grid-cols-5 md:gap-10 md:py-32">
        <div className="mx-auto max-w-md space-y-4 text-center md:col-span-2  md:mx-0 md:max-w-full md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold md:text-4xl xl:text-5xl">
              How it works
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
              BtnVariantStyles.primary,
              "mx-auto md:mx-0",
            )}
          >
            See more
          </Link>
        </div>
      </Container>
    </section>
  );
};
