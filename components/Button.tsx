import { BACKGROUNDLIST, cn } from "@/lib/utils";

type BtnVariant = "primary" | "secondary" | "blanc" | "noire";
type BtnProps = React.ComponentProps<"button"> & {
  variant?: BtnVariant;
  surpriseMe?: boolean;
  index?: number;
};

export const Button = ({
  surpriseMe = false,
  variant = "primary",
  index = 1,
  children,
  className,
  ...rest
}: BtnProps) => {
  return (
    <button
      className={cn(BtnBaseStyles, BtnVariantStyles[variant], className)}
      style={
        surpriseMe
          ? {
              background: BACKGROUNDLIST[index % BACKGROUNDLIST.length],
            }
          : { backgroundColor: "dosgerblue" }
      }
      {...rest}
    >
      {children}
    </button>
  );
};

export const BtnBaseStyles =
  "rounded-md border border-black bg-inherit px-4 py-3 text-white hover:bg-opacity-90 active:scale-[.98] block w-fit md:px-8 md:py-4";

export const BtnVariantStyles: Record<BtnVariant, string> = {
  blanc: "bg-white text-black shadow-cs-1 hover:shadow-cs-2",
  noire: "bg-neutral-900 text-white shadow-cs-1 hover:shadow-cs-2 border-white",
  primary: "bg-green-600 shadow-cs-1 hover:shadow-cs-2",
  secondary: "bg-purple-600 shadow-cs-1 hover:shadow-cs-2",
};
