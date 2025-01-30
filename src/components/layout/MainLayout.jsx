import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Topbar } from "./topbar/topbar";
import { Outlet } from "react-router-dom";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex sticky top-0 px-3 bg-card z-10 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <Calendar size={16}/>
            {format(new Date(), "dd MMMM yyyy")}
          </div>
          <div className="ml-auto">
            <Topbar />
          </div>
        </header>
        <section className="p-4">
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;
