
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Calendar, 
  BarChart2, 
  MessageSquare, 
  Settings, 
  Users, 
  Instagram,
  Twitter, 
  Facebook, 
  Linkedin,
  Youtube 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ElementType;
  href: string;
  label: string;
  current?: boolean;
}

const NavItem = ({ icon: Icon, href, label, current }: NavItemProps) => (
  <Link 
    to={href}
    className={cn(
      "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
      current 
        ? "bg-accent text-accent-foreground" 
        : "hover:bg-accent hover:text-accent-foreground"
    )}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
  </Link>
);

const SidebarNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-1 flex-col py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
          Dashboard
        </h2>
        <div className="space-y-1">
          <NavItem
            icon={LayoutDashboard}
            href="/"
            label="Overview"
            current={path === "/"}
          />
          <NavItem
            icon={Calendar}
            href="/content-calendar"
            label="Content Calendar"
            current={path === "/content-calendar"}
          />
          <NavItem
            icon={BarChart2}
            href="/analytics"
            label="Analytics"
            current={path === "/analytics"}
          />
          <NavItem
            icon={MessageSquare}
            href="/engagement"
            label="Engagement"
            current={path === "/engagement"}
          />
          <NavItem
            icon={Users}
            href="/audience"
            label="Audience"
            current={path === "/audience"}
          />
        </div>
      </div>

      <div className="px-3 py-2">
        <h2 className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
          Platforms
        </h2>
        <div className="space-y-1">
          <NavItem
            icon={Instagram}
            href="/platform/instagram"
            label="Instagram"
            current={path === "/platform/instagram"}
          />
          <NavItem
            icon={Twitter}
            href="/platform/twitter"
            label="Twitter"
            current={path === "/platform/twitter"}
          />
          <NavItem
            icon={Facebook}
            href="/platform/facebook"
            label="Facebook"
            current={path === "/platform/facebook"}
          />
          <NavItem
            icon={Linkedin}
            href="/platform/linkedin"
            label="LinkedIn"
            current={path === "/platform/linkedin"}
          />
          <NavItem
            icon={Youtube}
            href="/platform/youtube"
            label="YouTube"
            current={path === "/platform/youtube"}
          />
        </div>
      </div>

      <div className="mt-auto px-3 py-2">
        <NavItem
          icon={Settings}
          href="/settings"
          label="Settings"
          current={path === "/settings"}
        />
      </div>
    </div>
  );
};

export { SidebarNav };
