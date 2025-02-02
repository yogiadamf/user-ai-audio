import useUserStore from "@/store/userStore";
import ThemeSwitcher from "./theme-switcher";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Cookies from "js-cookie";

export function Topbar() {
  const { user, setUser } = useUserStore();
  return (
    <div className="flex items-center gap-2 text-sm">
      Halo, <strong className="capitalize">{user.username}</strong>
      <ThemeSwitcher />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="-ml-2"
              onClick={() => {
                Cookies.remove("user_information");
                setUser(null);
              }}
            >
              <LogOut />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Keluar, dari sesi ini</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
