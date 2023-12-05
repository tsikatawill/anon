import Link from "next/link";
import { cn } from "../lib/utils";
import { BtnBaseStyles, BtnVariantStyles } from "./Button";
import { Container } from "./Container";

export const ServiceImprovement = () => {
  return (
    <section id="public-campaigns">
      <Container className="py-8 sm:py-16 md:py-32">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-6 rounded-md border border-black bg-orange-500 bg-opacity-20 p-5 shadow-cs-2 sm:p-8 md:max-w-2xl md:p-10 xl:max-w-3xl">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            Got ideas on how we can improve Anon? Let us know.
          </h2>

          <Link
            href="mailto:https://tsikatawill@gmail.com"
            className={cn(BtnBaseStyles, BtnVariantStyles.noire)}
          >
            Send mail
          </Link>
        </div>
      </Container>
    </section>
  );
};
