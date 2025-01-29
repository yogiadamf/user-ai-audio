import useUserStore from "@/store/userStore";
import ThemeSwitcher from "./theme-switcher";

export function Topbar() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex items-center gap-2 text-sm">
      Hello, <strong className="capitalize">{user.username}</strong>
      <ThemeSwitcher />
    </div>
  );
}
