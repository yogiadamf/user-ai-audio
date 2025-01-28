import PropTypes from "prop-types";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/variants/toggleVariants";

const Toggle = React.forwardRef(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
);

Toggle.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(toggleVariants.variants.variant),
  size: PropTypes.oneOf(toggleVariants.variants.size),
};

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
