"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import {
  FileText,
  BookOpen,
  Library,
  Award,
  Mic2,
  Megaphone,
  Search,
  Bell,
  ArrowUpRight,
  Plus,
  ChevronRight,
  Clock3,
  BarChart3,
} from "lucide-react";

/* =========================================================
   STATISTICS
========================================================= */

const stats = [
  { label: "Articles", value: "128", change: "+12", icon: FileText },
  { label: "Cover Stories", value: "24", change: "+4", icon: BookOpen },
  { label: "Magazines", value: "18", change: "+2", icon: Library },
  { label: "Awards", value: "36", change: "+6", icon: Award },
];

/* =========================================================
   RECENT CONTENT
========================================================= */

const recentContent = [
  { title: "The Future of African Enterprise", type: "Cover Story", status: "PUBLISHED", date: "02 Sep 2026" },
  { title: "Leadership in a Changing World", type: "Article", status: "PUBLISHED", date: "01 Sep 2026" },
  { title: "Innovators & Influencers", type: "Magazine", status: "DRAFT", date: "30 Aug 2026" },
  { title: "Global Business Excellence Awards", type: "Award", status: "PUBLISHED", date: "28 Aug 2026" },
  { title: "The Next Wave of Technology", type: "Article", status: "DRAFT", date: "27 Aug 2026" },
];

/* =========================================================
   RECENT ACTIVITY
========================================================= */

const recentActivity = [
  { title: "New article published", subtitle: "The Future of African Enterprise", time: "10:24 AM" },
  { title: "Magazine updated", subtitle: "Innovators & Influencers", time: "Yesterday" },
  { title: "New award added", subtitle: "Global Business Excellence Awards", time: "02 Sep 2026" },
  { title: "Podcast published", subtitle: "Leadership in Focus · Ep. 12", time: "01 Sep 2026" },
];

/* =========================================================
   QUICK ACTIONS
========================================================= */

const quickActions = [
  ["New Article", "/admin/articles/add"],
  ["New Magazine", "/admin/magazines/add"],
  ["New Cover Story", "/admin/cover-stories/add"],
  ["New Award", "/admin/awards/add"],
  ["New Podcast", "/admin/podcasts/add"],
  ["New Category", "/admin/categories/add"],
];

const mobileNavItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: FileText },
  { label: "Articles", href: "/admin/articles/view", icon: FileText },
  { label: "Cover Stories", href: "/admin/cover-stories/view", icon: BookOpen },
  { label: "Magazines", href: "/admin/magazines/view", icon: Library },
  { label: "Awards", href: "/admin/awards/view", icon: Award },
];

/* =========================================================
   ADMIN DASHBOARD
========================================================= */

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated via local storage[cite: 1]
    const loggedIn = localStorage.getItem("iconiq_admin_logged_in");

    if (loggedIn !== "true") {
      router.replace("/admin/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="admin-shell" style={{ background: "#f5f7fa" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", color: "#082e63", fontSize: "12px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Verifying authorization...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      {/* =====================================================
          SIDEBAR COMPONENT
      ====================================================== */}
      <AdminSidebar />

      {/* =====================================================
          MAIN AREA
      ====================================================== */}
      <div className="admin-main">
        {/* ===================================================
            TOP HEADER
        ==================================================== */}
        <header className="top-header">
          <div className="top-header-search">
            <Search size={16} strokeWidth={1.7} />
            <input type="text" placeholder="Search content..." aria-label="Search content" />
          </div>

          <div className="top-header-right">
            <button type="button" className="notification-button" aria-label="Notifications">
              <Bell size={19} strokeWidth={1.7} />
              <span className="notification-dot" />
            </button>

            <div className="header-divider" />

            <div className="admin-profile">
              <div className="admin-avatar">IS</div>
              <div className="admin-profile-text">
                <p>Administrator</p>
                <span>Content Manager</span>
              </div>
            </div>
          </div>
        </header>

        {/* ===================================================
            DASHBOARD CONTENT
        ==================================================== */}
        <main className="dashboard-content">
          <div className="breadcrumb">
            <span>ADMIN</span>
            <b>/</b>
            <strong>DASHBOARD</strong>
          </div>

          <div className="page-header">
            <div className="page-heading">
              <p className="eyebrow">Overview</p>
              <h1>Dashboard</h1>
              <p className="page-description">Welcome back. Here's what's happening across your platform.</p>
            </div>

            <div className="page-header-actions">
              <Link href="/" className="view-website">
                <span>VIEW WEBSITE</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="stats-grid">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-icon">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-label">{stat.label}</p>
                    <div className="stat-number-row">
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-change">↑ {stat.change.replace("+", "")}</span>
                    </div>
                    <p className="stat-period">vs last 30 days</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MAIN DASHBOARD GRID */}
          <div className="main-dashboard-grid">
            <section className="panel content-overview">
              <div className="panel-header">
                <div>
                  <p className="panel-eyebrow">Content</p>
                  <h2>Content Overview</h2>
                </div>
                <select defaultValue="this-month" className="month-select" aria-label="Select time period">
                  <option value="this-month">This Month</option>
                  <option value="january">January 2026</option>
                  <option value="february">February 2026</option>
                  <option value="march">March 2026</option>
                  <option value="april">April 2026</option>
                  <option value="may">May 2026</option>
                  <option value="june">June 2026</option>
                  <option value="july">July 2026</option>
                  <option value="august">August 2026</option>
                  <option value="september">September 2026</option>
                  <option value="last-month">Last Month</option>
                  <option value="last-3-months">Last 3 Months</option>
                  <option value="last-6-months">Last 6 Months</option>
                  <option value="this-year">This Year</option>
                  <option value="last-year">Last Year</option>
                </select>
              </div>

              <div className="overview-summary">
                <div>
                  <p>Total</p>
                  <strong>206</strong>
                  <span className="positive">+18 this month</span>
                </div>
                <div>
                  <p>Published</p>
                  <strong>158</strong>
                  <span>76.7% of total</span>
                </div>
                <div>
                  <p>Drafts</p>
                  <strong>48</strong>
                  <span>23.3% of total</span>
                </div>
              </div>

              <div className="content-bars">
                {[
                  ["Articles", "128", "72%"],
                  ["Cover Stories", "24", "25%"],
                  ["Magazines", "18", "18%"],
                ].map(([label, value, width]) => (
                  <div className="content-bar-item" key={label}>
                    <div className="content-bar-label">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                    <div className="bar-background">
                      <div className="bar-fill" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="quick-actions">
              <div className="quick-heading">
                <p>Shortcuts</p>
                <h2>Quick Actions</h2>
                <span>Create and manage editorial content quickly.</span>
              </div>
              <div className="quick-grid">
                {quickActions.map(([label, href]) => (
                  <Link key={label} href={href} className="quick-action-button">
                    <span>
                      <Plus size={13} />
                      {label}
                    </span>
                    <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </section>

            <section className="panel recent-activity">
              <div className="panel-header">
                <div>
                  <p className="panel-eyebrow">Activity</p>
                  <h2>Recent Activity</h2>
                </div>
                <Link href="/admin/activity" className="view-all">VIEW ALL</Link>
              </div>

              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div
                    className={`activity-item ${index !== recentActivity.length - 1 ? "activity-border" : ""}`}
                    key={activity.title}
                  >
                    <div className="activity-icon">
                      <Clock3 size={14} strokeWidth={1.6} />
                    </div>
                    <div className="activity-content">
                      <p>{activity.title}</p>
                      <span>{activity.subtitle}</span>
                    </div>
                    <time>{activity.time}</time>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="panel recent-content">
            <div className="panel-header">
              <div>
                <p className="panel-eyebrow">Editorial</p>
                <h2>Recent Content</h2>
              </div>
              <Link href="/admin/content" className="view-all-icon">
                VIEW ALL
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentContent.map((item) => (
                    <tr key={item.title}>
                      <td>{item.title}</td>
                      <td className="muted">{item.type}</td>
                      <td>
                        <span className={`status ${item.status === "PUBLISHED" ? "published" : "draft"}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="muted">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="panel advertisements">
            <div className="advertisement-header">
              <div>
                <p className="panel-eyebrow">Monetization</p>
                <div className="advertisement-title">
                  <Megaphone size={16} strokeWidth={1.6} />
                  <h2>Advertisements</h2>
                </div>
                <p className="advertisement-description">Manage advertisements displayed across the website.</p>
              </div>
              <Link href="/admin/advertisements" className="manage-ads">
                MANAGE ADS
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="advertisement-stats">
              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <Megaphone size={16} strokeWidth={1.6} />
                </div>
                <div>
                  <p>Active Ads</p>
                  <strong>12</strong>
                  <span>+3 this month</span>
                </div>
              </div>

              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <BarChart3 size={16} strokeWidth={1.6} />
                </div>
                <div>
                  <p>Impressions</p>
                  <strong>24.8K</strong>
                  <span>This month</span>
                </div>
              </div>

              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </div>
                <div>
                  <p>Clicks</p>
                  <strong>3.2K</strong>
                  <span>6.6% CTR</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* MOBILE NAVIGATION */}
      <div className="mobile-nav">
        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              key={item.label}
              className={index === 0 ? "mobile-nav-item mobile-nav-active" : "mobile-nav-item"}
            >
              <Icon size={17} strokeWidth={1.7} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* EXACT STYLING PRESERVED */}
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        body {
          background: #f5f7fa;
          color: #082e63;
        }

        .admin-shell {
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          display: flex;
          overflow: hidden;
          background: #f5f7fa;
          color: #082e63;
        }

        .admin-sidebar {
          position: fixed;
          inset: 0 auto 0 0;
          z-index: 50;
          width: 235px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #082e63;
          color: white;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sidebar-logo-area {
          height: 88px;
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-logo-box {
          width: 190px;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px 7px;
          background: white;
          border-radius: 5px;
          overflow: hidden;
        }

        .sidebar-logo {
          display: block;
          width: 182px;
          height: 52px;
          max-width: 100%;
          object-fit: contain;
        }

        .sidebar-scroll {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 25px 12px 20px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.06);
        }

        .sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .sidebar-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.06);
        }

        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
        }

        .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: #d4af37;
        }

        .sidebar-section-title {
          margin: 0 12px 10px;
          color: #d4af37;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .sidebar-link {
          position: relative;
          min-height: 42px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 12px;
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .sidebar-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: white;
        }

        .sidebar-link-active {
          background: rgba(255, 255, 255, 0.12);
          color: white;
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #d4af37;
          border-radius: 0 4px 4px 0;
        }

        .sidebar-icon {
          flex-shrink: 0;
          color: rgba(255, 255, 255, 0.82);
        }

        .sidebar-link:hover .sidebar-icon {
          color: #d4af37;
        }

        .sidebar-link-active .sidebar-icon {
          color: white;
        }

        .sidebar-divider {
          height: 1px;
          margin: 21px 2px;
          background: rgba(255, 255, 255, 0.11);
        }

        .sidebar-signout {
          flex-shrink: 0;
          padding: 9px 12px;
          background: #082e63;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .signout-button {
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid rgba(212, 175, 55, 0.75);
          border-radius: 6px;
          color: white;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .signout-button:hover {
          background: #d4af37;
          color: #082e63;
        }

        .signout-icon {
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #061b3a;
          color: white;
          font-size: 9px;
          letter-spacing: 0;
        }

        .admin-main {
          width: calc(100% - 235px);
          margin-left: 235px;
          height: 100vh;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .top-header {
          height: 56px;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 24px;
          background: white;
          border-bottom: 1px solid #dce3ec;
        }

        .top-header-search {
          width: 230px;
          height: 36px;
          margin-right: auto;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 11px;
          background: #fafbfd;
          border: 1px solid #dce3ec;
        }

        .top-header-search svg {
          flex-shrink: 0;
          color: #8ba0ba;
        }

        .top-header-search input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #082e63;
          font-size: 11px;
        }

        .top-header-search input::placeholder {
          color: #9aabc0;
        }

        .top-header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .notification-button {
          position: relative;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          background: transparent;
          color: #082e63;
          cursor: pointer;
        }

        .notification-dot {
          position: absolute;
          top: 6px;
          right: 5px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d4af37;
        }

        .header-divider {
          width: 1px;
          height: 27px;
          background: #dce3ec;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .admin-avatar {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #082e63;
          color: white;
          font-size: 11px;
          font-weight: 800;
        }

        .admin-profile-text p {
          margin: 0;
          color: #082e63;
          font-size: 12px;
          font-weight: 800;
        }

        .admin-profile-text span {
          display: block;
          margin-top: 2px;
          color: #8ba0ba;
          font-size: 10px;
        }

        .dashboard-content {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding: 13px 24px 22px;
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }

        .dashboard-content::-webkit-scrollbar {
          width: 5px;
        }

        .dashboard-content::-webkit-scrollbar-track {
          background: transparent;
        }

        .dashboard-content::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 5px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.2em;
        }

        .breadcrumb span {
          color: #91a4ba;
        }

        .breadcrumb b {
          color: #b4c0ce;
        }

        .breadcrumb strong {
          color: #082e63;
        }

        .page-header {
          min-height: 55px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 11px;
        }

        .eyebrow {
          margin: 0 0 2px;
          color: #c69b22;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .page-heading h1 {
          margin: 0;
          color: #082e63;
          font-size: 27px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: -0.04em;
        }

        .page-description {
          margin: 4px 0 0;
          color: #7188a5;
          font-size: 11px;
        }

        .page-header-actions {
          display: flex;
          align-items: center;
          padding-bottom: 1px;
        }

        .view-website {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 4px;
          border-bottom: 1px solid #082e63;
          color: #082e63;
          text-decoration: none;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          white-space: nowrap;
        }

        .view-website:hover {
          color: #c69b22;
          border-color: #c69b22;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 11px;
          margin-bottom: 12px;
        }

        .stat-card {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 11px 13px;
          background: white;
          border: 1px solid #dce3ec;
        }

        .stat-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f5f9;
          color: #082e63;
        }

        .stat-content {
          min-width: 0;
        }

        .stat-label {
          margin: 0;
          color: #8da0b8;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .stat-number-row {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 2px;
        }

        .stat-number {
          color: #082e63;
          font-size: 23px;
          line-height: 1;
          font-weight: 850;
          letter-spacing: -0.04em;
        }

        .stat-change {
          color: #059669;
          font-size: 8px;
          font-weight: 800;
        }

        .stat-period {
          margin: 3px 0 0;
          color: #9aabc0;
          font-size: 8px;
        }

        .main-dashboard-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(245px, 0.85fr) minmax(250px, 0.9fr);
          gap: 12px;
        }

        .panel {
          background: white;
          border: 1px solid #dce3ec;
        }

        .panel-header {
          min-height: 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 17px;
          border-bottom: 1px solid #e7ebf0;
        }

        .panel-eyebrow {
          margin: 0;
          color: #c69b22;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .panel-header h2 {
          margin: 4px 0 0;
          color: #082e63;
          font-size: 17px;
          font-weight: 750;
        }

        .month-select {
          width: 150px;
          height: 37px;
          padding: 0 10px;
          border: 1px solid #dce3ec;
          background: white;
          color: #082e63;
          outline: none;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
        }

        .month-select:focus {
          border-color: #082e63;
        }

        .overview-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #e7ebf0;
        }

        .overview-summary > div {
          min-width: 0;
          padding: 13px 17px;
        }

        .overview-summary > div + div {
          border-left: 1px solid #e7ebf0;
        }

        .overview-summary p {
          margin: 0;
          color: #91a4ba;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .overview-summary strong {
          display: block;
          margin-top: 3px;
          color: #082e63;
          font-size: 25px;
          line-height: 1;
          font-weight: 850;
        }

        .overview-summary span {
          display: block;
          margin-top: 4px;
          color: #8da0b8;
          font-size: 8px;
        }

        .overview-summary .positive {
          color: #059669;
          font-weight: 700;
        }

        .content-bars {
          padding: 13px 17px 15px;
        }

        .content-bar-item + .content-bar-item {
          margin-top: 11px;
        }

        .content-bar-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;
          color: #5d7593;
          font-size: 9px;
        }

        .content-bar-label strong {
          color: #082e63;
          font-size: 9px;
        }

        .bar-background {
          width: 100%;
          height: 5px;
          background: #edf1f5;
        }

        .bar-fill {
          height: 100%;
          background: #082e63;
        }

        .quick-actions {
          padding: 16px;
          background: #082e63;
          color: white;
        }

        .quick-heading p {
          margin: 0;
          color: #d4af37;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .quick-heading h2 {
          margin: 4px 0 0;
          color: white;
          font-size: 17px;
          font-weight: 750;
        }

        .quick-heading span {
          display: block;
          max-width: 230px;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 9px;
          line-height: 1.45;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px;
          margin-top: 14px;
        }

        .quick-action-button {
          min-height: 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 5px;
          padding: 0 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          text-decoration: none;
          font-size: 9px;
          font-weight: 700;
          transition: background 0.2s ease, border 0.2s ease;
        }

        .quick-action-button:hover {
          border-color: rgba(212, 175, 55, 0.65);
          background: rgba(255, 255, 255, 0.1);
        }

        .quick-action-button span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .quick-action-button span svg {
          flex-shrink: 0;
          color: #d4af37;
        }

        .quick-action-button > svg {
          flex-shrink: 0;
          color: rgba(255, 255, 255, 0.4);
        }

        .view-all,
        .view-all-icon {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #082e63;
          text-decoration: none;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          white-space: nowrap;
        }

        .view-all:hover,
        .view-all-icon:hover {
          color: #c69b22;
        }

        .activity-item {
          min-height: 53px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 15px;
        }

        .activity-border {
          border-bottom: 1px solid #edf0f4;
        }

        .activity-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f5f9;
          color: #082e63;
        }

        .activity-content {
          min-width: 0;
          flex: 1;
        }

        .activity-content p {
          margin: 0;
          overflow: hidden;
          color: #082e63;
          font-size: 9px;
          font-weight: 750;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .activity-content span {
          display: block;
          margin-top: 2px;
          overflow: hidden;
          color: #8da0b8;
          font-size: 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .activity-item time {
          flex-shrink: 0;
          color: #9aabc0;
          font-size: 8px;
          white-space: nowrap;
        }

        .recent-content {
          margin-top: 12px;
        }

        .table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .recent-content table {
          width: 100%;
          border-collapse: collapse;
        }

        .recent-content th {
          padding: 8px 17px;
          border-bottom: 1px solid #e7ebf0;
          color: #8ca0ba;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-align: left;
          text-transform: uppercase;
        }

        .recent-content td {
          padding: 9px 17px;
          border-bottom: 1px solid #edf0f4;
          color: #082e63;
          font-size: 9px;
        }

        .recent-content tbody tr:last-child td {
          border-bottom: 0;
        }

        .recent-content tbody tr:hover {
          background: #fafbfd;
        }

        .recent-content td:first-child {
          font-weight: 650;
        }

        .recent-content .muted {
          color: #7188a5;
        }

        .status {
          display: inline-flex;
          padding: 4px 7px;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .status.published {
          background: #ecfdf5;
          color: #059669;
        }

        .status.draft {
          background: #fffbeb;
          color: #d97706;
        }

        .advertisements {
          margin-top: 12px;
        }

        .advertisement-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 13px 17px;
          border-bottom: 1px solid #e7ebf0;
        }

        .advertisement-title {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
          color: #082e63;
        }

        .advertisement-title h2 {
          margin: 0;
          font-size: 17px;
          font-weight: 750;
        }

        .advertisement-description {
          margin: 3px 0 0;
          color: #8da0b8;
          font-size: 9px;
        }

        .manage-ads {
          display: flex;
          align-items: center;
          gap: 5px;
          padding-bottom: 3px;
          border-bottom: 1px solid #082e63;
          color: #082e63;
          text-decoration: none;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.15em;
          white-space: nowrap;
        }

        .manage-ads:hover {
          color: #c69b22;
          border-color: #c69b22;
        }

        .advertisement-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .advertisement-stat {
          min-height: 70px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 17px;
        }

        .advertisement-stat + .advertisement-stat {
          border-left: 1px solid #e7ebf0;
        }

        .advertisement-icon {
          width: 33px;
          height: 33px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f2f5f9;
          color: #082e63;
        }

        .advertisement-stat p {
          margin: 0;
          color: #91a4ba;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .advertisement-stat strong {
          display: block;
          margin-top: 2px;
          color: #082e63;
          font-size: 20px;
          line-height: 1;
          font-weight: 850;
        }

        .advertisement-stat span {
          display: block;
          margin-top: 3px;
          color: #8da0b8;
          font-size: 8px;
        }

        .mobile-nav {
          display: none;
        }

        @media (max-width: 1200px) {
          .admin-sidebar {
            width: 220px;
          }
          .admin-main {
            width: calc(100% - 220px);
            margin-left: 220px;
          }
          .sidebar-logo-box {
            width: 180px;
          }
          .sidebar-logo {
            width: 172px;
          }
          .dashboard-content {
            padding-left: 18px;
            padding-right: 18px;
          }
          .main-dashboard-grid {
            grid-template-columns: minmax(0, 1.35fr) minmax(220px, 0.9fr);
          }
          .recent-activity {
            grid-column: span 2;
          }
          .top-header-search {
            width: 205px;
          }
        }

        @media (max-width: 900px) {
          .admin-sidebar {
            width: 205px;
          }
          .admin-main {
            width: calc(100% - 205px);
            margin-left: 205px;
          }
          .page-header {
            align-items: flex-start;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .main-dashboard-grid {
            grid-template-columns: 1fr;
          }
          .recent-activity {
            grid-column: auto;
          }
          .advertisement-stats {
            grid-template-columns: 1fr;
          }
          .advertisement-stat + .advertisement-stat {
            border-left: 0;
            border-top: 1px solid #e7ebf0;
          }
        }

        @media (max-width: 700px) {
          .admin-shell {
            padding-bottom: 58px;
          }
          .admin-sidebar {
            display: none;
          }
          .admin-main {
            width: 100%;
            margin-left: 0;
          }
          .top-header {
            height: 55px;
            min-height: 55px;
            padding: 0 13px;
            gap: 10px;
          }
          .top-header-search {
            width: auto;
            flex: 1;
            margin-right: 0;
            height: 34px;
          }
          .admin-profile-text {
            display: none;
          }
          .dashboard-content {
            padding: 12px 13px 20px;
          }
          .page-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 11px;
          }
          .page-heading h1 {
            font-size: 25px;
          }
          .page-description {
            font-size: 10px;
          }
          .page-header-actions {
            width: 100%;
            justify-content: flex-end;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .stat-card {
            min-height: 68px;
            padding: 9px;
            gap: 8px;
          }
          .stat-icon {
            width: 31px;
            height: 31px;
          }
          .stat-number {
            font-size: 20px;
          }
          .panel-header {
            padding: 11px 12px;
          }
          .month-select {
            width: 135px;
            height: 34px;
            font-size: 10px;
          }
          .overview-summary > div {
            padding: 11px 12px;
          }
          .content-bars {
            padding: 11px 12px 13px;
          }
          .quick-actions {
            padding: 14px;
          }
          .recent-content th,
          .recent-content td {
            padding-left: 11px;
            padding-right: 11px;
          }
          .advertisement-header {
            align-items: flex-start;
            flex-direction: column;
            padding: 12px;
          }
          .advertisement-stat {
            padding: 11px 12px;
          }
          .mobile-nav {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 100;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            background: white;
            border-top: 1px solid #dce3ec;
          }
          .mobile-nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3px;
            color: #8da0b8;
            text-decoration: none;
            font-size: 7px;
            font-weight: 700;
          }
          .mobile-nav-active {
            color: #082e63;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
          .overview-summary {
            grid-template-columns: 1fr;
          }
          .overview-summary > div + div {
            border-left: 0;
            border-top: 1px solid #e7ebf0;
          }
          .panel-header {
            align-items: flex-start;
            flex-direction: column;
          }
          .month-select {
            width: 100%;
          }
          .top-header-search {
            width: 100%;
          }
          .top-header-right {
            gap: 7px;
          }
          .admin-avatar {
            width: 34px;
            height: 34px;
          }
          .header-divider {
            display: none;
          }
          .view-website {
            font-size: 7px;
          }
        }
      `}</style>
    </div>
  );
}