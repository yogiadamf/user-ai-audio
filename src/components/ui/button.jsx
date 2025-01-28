import PropTypes from "prop-types";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./variants/buttonVariants";

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "outline",
    "ghost",
    "destructive",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "icon", "iconSm"]),
  asChild: PropTypes.bool,
};
Button.displayName = "Button";

export { Button };
