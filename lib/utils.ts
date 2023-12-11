import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(...input));
}

export const BACKGROUNDLIST = [
  "#e3a018",
  "#4e4444",
  "#6600ff",
  "#0E4749",
  "#A89F68",
  "#027BCE",
  "#8d0e0e",
];
