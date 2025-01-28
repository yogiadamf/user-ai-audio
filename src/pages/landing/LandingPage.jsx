import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { InformationForm } from "./form/InformationForm";
import Cookies from "js-cookie";

export default function LandingPage() {
  const navigate = useNavigate();
  const user_information = Cookies.get("user_information");

  useEffect(() => {
    if (user_information) {
      navigate("/chat");
    }
  }, [user_information, navigate]);

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
