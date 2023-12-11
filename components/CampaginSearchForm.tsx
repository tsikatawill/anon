"use client";

import { REGEX } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "./Button";

type FormValue = { campaignId: string };

export const CampaginSearchForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = ({ campaignId }) => {
    reset();
    redirect(`/campaigns/${campaignId}`);
  };

  return (
    <form
      className="max-w-screen-md space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        {errors.campaignId?.message && (
          <p
            className={cn("mb-2 text-left text-sm font-semibold text-red-500")}
          >
            {errors.campaignId.message}
          </p>
        )}
        <input
          {...register("campaignId", {
            required: "Enter campaign url",
            pattern: {
              value: REGEX.anonCampaignUrl,
              message: "Enter a valid Anon campaign link",
            },
          })}
          className={cn(
            "w-full rounded-sm border border-black px-4 py-2 text-center shadow-cs-2 outline-none focus:bg-white md:p-5 md:text-left md:shadow-cs-3",
            errors.campaignId && "animate-shake",
          )}
          placeholder="Paste campaign url"
        />
      </div>

      <Button className="mx-auto md:mx-0" type="submit" variant="noire">
        Get started
      </Button>
    </form>
  );
};
