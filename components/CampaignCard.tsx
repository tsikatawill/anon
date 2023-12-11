"use client";

import { BACKGROUNDLIST } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./Button";

export const CampaignCard = ({ index }: { color?: string; index: number }) => {
  const color = BACKGROUNDLIST[index % BACKGROUNDLIST.length];
  const router = useRouter();

  return (
    <Link
      href="/campaigns/12"
      className="flex h-72 w-72 flex-shrink-0 flex-col justify-between rounded-sm border border-black bg-white p-4 text-black shadow-cs-3 shadow-green-500 ease-in hover:border-2"
      style={{ boxShadow: `5px 5px 0 ${color}` }}
    >
      <p className="line-clamp-5 text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        ratione hic at ducimus odio culpa officia veniam sint amet a, impedit,
        magnam consectetur unde, distinctio labore voluptatibus mollitia numquam
        pariatur.
      </p>
      <small>20th, Dec</small>

      <Button
        surpriseMe
        index={index}
        onClick={() => router.push("/campaigns/2")}
      >
        Go to campaign
      </Button>
    </Link>
  );
};
