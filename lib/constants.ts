import { HowIWStep } from "@/types";

export const HOW_IT_WORKS_STEPS: HowIWStep[] = [
  {
    title: "Create A Free Account",
    description:
      "You need an account to be able to create campaigns. A free account grants you access to the full features of Anon. Comes with a dashboard where you can track all your previous campaigns.",
    link: {
      href: "/sign-up",
      text: "Create a free account",
    },
    image: "/step-1.svg",
  },
  {
    title: "Create & Configure campagin",
    description:
      "We currently run two types of campaigns, polls and general text campaigns. You can choose between these two and lorem u can choose between these two and lorem",
    link: {
      href: "/sign-up",
      text: "Create a free account",
    },
    image: "/step-2.svg",
  },
  {
    title: "Share campaign link",
    description:
      "Send your campaign link to your audience and wait for their responses. It couldn't be any easier.",
    link: {
      href: "/campagins/create",
      text: "Start a campagin",
    },
    image: "/step-3.svg",
  },
];
