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

        <ul className="space-y-12">
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
    <div
      className={cn(
        "flex items-center justify-center gap-4 sm:items-start",
        reversed && "flex-row-reverse",
      )}
    >
      <div className="left space-y-4 sm:flex-1">
        <h3 className="text-xl font-bold text-orange-600 md:text-2xl">
          {title}
        </h3>

        <p className="text-neutral-700">{description}</p>

        {link && (
          <Link
            href={link.href}
            className={cn(BtnBaseStyles, BtnVariantStyles.noire)}
          >
            {link.text}
          </Link>
        )}
      </div>

      <div className="middle hidden w-12 flex-shrink-0 space-y-5 font-bold sm:block md:w-24">
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
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className="h-2 w-2 rounded-full bg-gray-900" />
          ))}
        </div>
      </div>

      <div className="left w-1/3 flex-shrink-0 sm:w-auto sm:flex-1 sm:flex-shrink">
        <Image
          className="h-auto w-full sm:h-60"
          src={image}
          width={500}
          height={500}
          alt="..."
        />
      </div>
    </div>
  );
};
