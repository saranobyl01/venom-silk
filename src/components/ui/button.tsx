import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "ghost" | "icon";
};

export function Button({ asChild, variant = "primary", className, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-3 border text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "border-primary bg-primary px-6 py-3 text-primary-foreground hover:bg-transparent hover:text-primary",
        variant === "ghost" && "border-border/70 bg-transparent px-6 py-3 text-foreground hover:border-primary hover:text-primary",
        variant === "icon" && "size-11 border-border/70 bg-background/50 text-foreground hover:border-primary hover:text-primary",
        className,
      )}
      {...props}
    />
  );
}