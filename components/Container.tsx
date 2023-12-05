import { cn } from "../lib/utils";

type Props = React.ComponentProps<"div">;

export const Container = ({ className, children, ...rest }: Props) => {
  return (
    <div className={cn("mx-auto max-w-screen-xl px-4", className)} {...rest}>
      {children}
    </div>
  );
};
