import ThemeSwitcher from "./theme-switcher";

export function Topbar() {
  return (
    <div className="flex items-center gap-2 text-sm">
      Hello, <strong>John Doe</strong>
      <ThemeSwitcher />
    </div>
  );
}
