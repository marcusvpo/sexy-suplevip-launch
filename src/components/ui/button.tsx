import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-gold-glow shadow-gold hover:shadow-gold-strong transition-all duration-300 hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-black-pure transition-all duration-300 hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline hover:text-gold-glow transition-all duration-300",
        hero: "bg-gradient-gold-shine text-black-pure font-bold hover:bg-gold-glow shadow-gold-strong hover:shadow-gold-strong transition-all duration-300 transform hover:scale-105 hover:brightness-110",
        cta: "bg-gradient-gold-shine text-black-pure font-bold hover:brightness-110 shadow-gold-strong transition-all duration-300 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    };

    if (asChild) {
      return (
        <Slot className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
      );
    }
    
    const { onAnimationStart, onAnimationEnd, onDrag, onDragEnd, onDragStart, ...restProps } = props as any;
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        animate={
          isHovering
            ? {
                x: mousePosition.x * 0.1,
                y: mousePosition.y * 0.1,
              }
            : { x: 0, y: 0 }
        }
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        whileTap={{ scale: 0.97 }}
        {...restProps}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
