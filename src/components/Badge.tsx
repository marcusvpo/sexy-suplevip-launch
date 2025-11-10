import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "outline";
  className?: string;
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors",
        {
          "bg-primary text-black-pure": variant === "default",
          "bg-gradient-gold text-black-pure shadow-gold": variant === "gold",
          "border border-primary text-primary bg-background": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
};
