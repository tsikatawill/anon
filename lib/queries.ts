import { Campaign } from "@/types";
import { cache } from "react";

export const getPublicCampaigns: () => Promise<Campaign[] | null> = cache(
  async () => {
    try {
      const res = await fetch(
        `${process.env.BACKEND_URL}/api/campaigns?public=true`,
      );

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data.data;
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.log(e);
      }
      return null;
    }

    // return data.data as Campaign[];
  },
);

export const getCampaign: (id: string) => Promise<Campaign> = cache(
  async (id) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/campaigns/${id}`);

      if (!res.ok) {
        throw new Error(`${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return data;
    } catch (e) {
      if (process.env.NODE_ENV === "development") {
        console.log(e);
      }
      return null;
    }
  },
);
