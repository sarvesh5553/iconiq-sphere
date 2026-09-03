"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FileText,
  BookOpen,
  Library,
  Award,
  Mic2,
  Megaphone,
  Grid,
  Tags,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("iconiq_admin_logged_in");
    router.replace("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      {/* LOGO AREA */}
      <div className="sidebar-logo-area">
        <div className="sidebar-logo-box">
          <img
            src="/iconiq-sphere-logo.svg"
            alt="Iconiq Logo"
            className="sidebar-logo"
            onError={(e) => {
              // Fallback text rendering if image asset isn't found
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* SCROLLABLE NAV */}
      <div className="sidebar-scroll">
        <p className="sidebar-section-title">Navigation</p>
        <nav className="sidebar-nav">
          <SidebarItem
            href="/admin/dashboard"
            label="Dashboard"
            icon={FileText}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/articles/view"
            label="Articles"
            icon={FileText}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/cover-stories/view"
            label="Cover Stories"
            icon={BookOpen}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/magazines/view"
            label="Magazines"
            icon={Library}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/awards/view"
            label="Awards"
            icon={Award}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/podcasts/view"
            label="Podcasts"
            icon={Mic2}
            currentPath={pathname}
          />
        </nav>

        <div className="sidebar-divider" />

        <p className="sidebar-section-title">Management</p>
        <nav className="sidebar-nav">
          <SidebarItem
            href="/admin/advertisements"
            label="Advertisements"
            icon={Megaphone}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/categories/view"
            label="Categories"
            icon={Grid}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/tags/view"
            label="Tags"
            icon={Tags}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/users/view"
            label="Users"
            icon={Users}
            currentPath={pathname}
          />
          <SidebarItem
            href="/admin/settings"
            label="Settings"
            icon={Settings}
            currentPath={pathname}
          />
        </nav>
      </div>

      {/* SIGN OUT */}
      <div className="sidebar-signout">
        <button
          onClick={handleSignOut}
          className="signout-button"
          style={{ width: "100%", cursor: "pointer", background: "transparent" }}
        >
          <span className="signout-icon">
            <LogOut size={13} strokeWidth={2} />
          </span>
          <span>SIGN OUT</span>
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({
  href,
  label,
  icon: Icon,
  currentPath,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  currentPath: string;
}) {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
    >
      {isActive && <div className="active-indicator" />}
      <span className="sidebar-icon">
        <Icon size={16} />
      </span>
      <span>{label}</span>
    </Link>
  );
}