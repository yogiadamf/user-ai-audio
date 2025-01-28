import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}
Skeleton.propTypes = {
  className: PropTypes.string,
};
export { Skeleton };
