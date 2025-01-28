import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./variants/badgeVariants";

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
};

export { Badge };
