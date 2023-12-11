"use client";

import { BACKGROUNDLIST, cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPoll } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
import { Button } from "./Button";

export const CampaignCard = ({
  index,
  fullWidth = false,
}: {
  color?: string;
  index: number;
  fullWidth?: boolean;
}) => {
  const color = BACKGROUNDLIST[index % BACKGROUNDLIST.length];
  const router = useRouter();

  return (
    <Link
      href="/campaigns/12"
      className={cn(
        "flex flex-shrink-0 flex-col justify-between gap-4 rounded-sm border border-black bg-white p-4 text-black shadow-cs-3 shadow-green-500 ease-in hover:border-2",
        fullWidth ? "h-full w-full gap-4" : " h-80 w-72",
      )}
      style={{ boxShadow: `5px 5px 0 ${color}` }}
    >
      <p className="line-clamp-5 text-2xl font-bold">
        Would you still love me if I were broke and had nothing to my name?
        {!!(index % 2) &&
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quaerat rerum quibusdam. Totam excepturi enim ratione natus accusantium esse repellat perferendis praesentium? Commodi quaerat quas est illum rem ipsam fugiat."}
      </p>

      <div className="space-y-4">
        <div className="flex gap-4">
          <FaPoll size={20} title="Poll" />
          <IoMdChatboxes size={23} title="Text" />
          <p>20th, Dec</p>
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
