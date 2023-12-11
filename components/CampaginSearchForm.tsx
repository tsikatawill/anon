"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
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
    // redirect(`/campaigns/reply?campaign-id=${campaignId}`);
  };

  return (
    <form
      className="max-w-screen-md space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <input
          {...register("campaignId", { required: "Enter a campaign id" })}
          className="w-full rounded-sm border border-black px-4 py-2 text-center shadow-cs-2 shadow-red-500 outline-none focus:bg-white md:p-5 md:text-left"
          placeholder="Paste campaign id"
          name="campaign-id"
        />

        {errors.campaignId && (
          <p
            className={
              "mt-2 animate-shake text-left text-sm font-semibold text-red-500"
            }
          >
            {errors.campaignId.message}
          </p>
        )}
      </div>

      <Button className="mx-auto md:mx-0" variant="noire">
        Get started
      </Button>
    </form>
  );
};
