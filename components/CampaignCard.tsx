"use client";

import { BACKGROUNDLIST, cn } from "@/lib/utils";
import { Campaign } from "@/types";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPoll } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { Button } from "./Button";

export const CampaignCard = ({
  index,
  fullWidth = false,
  campaign,
}: {
  color?: string;
  index: number;
  fullWidth?: boolean;
  campaign: Campaign;
}) => {
  const color = BACKGROUNDLIST[index % BACKGROUNDLIST.length];
  const router = useRouter();

  return (
    <Link
      href={`/campaigns/anon-${campaign._id}`}
      className={cn(
        "flex flex-shrink-0 flex-col justify-between gap-4 rounded-xl border border-black bg-white p-4 text-black shadow-cs-3 shadow-green-500 ease-in hover:border-2",
        fullWidth ? "h-full w-full gap-4" : " h-80 w-72",
      )}
      style={{ boxShadow: `5px 5px 0 ${color}` }}
    >
      <p className="line-clamp-4 text-xl font-bold sm:text-3xl">
        {campaign.title}
      </p>

      <div className="space-y-4">
        <div className="flex gap-4">
          {campaign.type === "general" ? (
            <FaPoll size={20} title="Poll" />
          ) : (
            <IoMdChatboxes size={23} title="Text" />
          )}
          <p>{dayjs(campaign.createdAt).toString()}</p>
        </div>

        <Button
          surpriseMe
          index={index}
          onClick={() => router.push("/campaigns/2")}
        >
          Go to campaign
        </Button>
      </div>
    </Link>
  );
};
