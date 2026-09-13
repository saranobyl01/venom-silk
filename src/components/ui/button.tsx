import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap border text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
        primary: "border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
        ghost: "border-transparent bg-transparent text-foreground hover:border-primary hover:text-primary",
        outline: "border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
        icon: "border-border bg-background/50 text-foreground hover:border-primary hover:text-primary",
      },
      size: {
        default: "min-h-11 px-6 py-3",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "size-11 shrink-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, variant, size, className, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return <Component ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";