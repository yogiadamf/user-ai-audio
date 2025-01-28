import PropTypes from "prop-types";
import { Suspense } from "react";

const Loadable = ({ children }) => {
  return (
    <Suspense fallback={<div className="top-0 left-0 fixed loader" />}>
      {children}
    </Suspense>
  );
};

Loadable.propTypes = {
  children: PropTypes.node,
};
export default Loadable;
