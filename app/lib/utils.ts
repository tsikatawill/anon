import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

export function getRandomNumbersInRange(start: number, end: number) {
  // Create an array with numbers in the specified range
  const numbers = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index,
  );

  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
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
