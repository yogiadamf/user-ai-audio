import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { InformationForm } from "./form/InformationForm";

export default function LandingPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden lg:block bg-[#F4F4FA]">
        <DotLottieReact src="/animations/landing-bg.lottie" loop autoplay />
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full max-w-sm">
          <InformationForm />
        </div>
      </div>
    </div>
  );
}
