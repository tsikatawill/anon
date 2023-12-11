import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HowIWStep } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BtnBaseStyles, BtnVariantStyles } from "./Button";
import { Container } from "./Container";

export const HowItWorks = () => {
  return (
    <section id="public-campaigns">
      <Container className="space-y-10 py-8 sm:py-16 md:py-32">
        <div className="text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold capitalize text-orange-600 md:text-4xl xl:text-5xl">
              How it works
            </h2>

            <p>Follow this simple step by step guide to help you get started</p>
          </div>
        </div>

        <ul className="space-y-16 md:space-y-20">
          {HOW_IT_WORKS_STEPS.map((_, idx) => (
            <HowItWorksCard
              key={idx}
              {..._}
              step={idx + 1}
              reversed={!!(idx % 2)}
              last={idx === 2}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

type StepCardProps = {
  step: number;
  reversed?: boolean;
  last?: boolean;
} & HowIWStep;

const HowItWorksCard = ({
  last,
  reversed = false,
  step = 1,
  title,
  description,
  link,
  image,
}: StepCardProps) => {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-[1fr,48px,1fr]")}>
      <div
        className={cn(
          "col-start-1 row-start-2",
          reversed ? "sm:col-start-3 sm:row-start-1" : "sm:row-start-1",
          "space-y-4",
        )}
      >
        <h3 className="text-xl font-bold text-orange-600 md:text-2xl">
          {title}
        </h3>

        <p className="text-neutral-500">{description}</p>

        {link && (
          <Link
            href={link.href}
            className={cn(BtnBaseStyles, BtnVariantStyles.noire)}
          >
            {link.text}
          </Link>
        )}
      </div>

      <div className="middle hidden flex-shrink-0 space-y-5 font-bold sm:block">
        <div className="text-center">
          <p>STEP</p>
          <p className="text-5xl">{step}</p>
        </div>

        <div
          className={cn(
            " flex-col items-center gap-4",
            last ? "hidden" : "flex",
          )}
        >
          {Array.from({ length: 7 }).map((_, idx) => (
            <div key={idx} className="h-2 w-2 rounded-full bg-neutral-500" />
          ))}
        </div>
      </div>

      <div
        className={cn(
          "col-start-1 row-start-1",
          reversed ? "sm:col-start-1 sm:row-start-1" : "sm:col-start-3",
        )}
      >
        <Image
          className="h-auto w-1/3 sm:h-72 sm:w-full xl:h-80"
          src={image}
          width={500}
          height={500}
          alt="..."
        />
      </div>
    </div>
  );
};
