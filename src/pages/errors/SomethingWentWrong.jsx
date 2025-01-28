import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import PropTypes from "prop-types";

const SomethingWentWrong = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Something Went Wrong</h2>
        <p className="text-muted-foreground max-w-md">{error.message}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button onClick={() => window.location.reload()}>
          <RotateCw className="w-4 h-4 mr-2" />
          Reload
        </Button>
      </div>
    </div>
  );
};

SomethingWentWrong.propTypes = {
  error: PropTypes.object,
};

export default SomethingWentWrong;
