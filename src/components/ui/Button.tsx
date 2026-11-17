import { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "outline";
};

export function Button({ variant = "outline", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        "inline-block rounded-full px-8 py-3 text-sm uppercase tracking-[0.2em] transition",
        variant === "outline" &&
          "border border-gold text-gold-bright hover:bg-gold hover:text-bg-deep",
        variant === "solid" && "bg-gold text-bg-deep hover:bg-gold-bright",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
