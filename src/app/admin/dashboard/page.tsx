"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";
import {
  FileText,
  BookOpen,
  Library,
  Award,
  Search,
  Bell,
  ArrowUpRight,
  Plus,
  ChevronRight,
  Clock3,
  BarChart3,
  Megaphone,
} from "lucide-react";

import "./dashboard.css";

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
  {
    title: "The Future of African Enterprise",
    type: "Cover Story",
    status: "PUBLISHED",
    date: "02 Sep 2026",
  },
  {
    title: "Leadership in a Changing World",
    type: "Article",
    status: "PUBLISHED",
    date: "01 Sep 2026",
  },
  {
    title: "Innovators & Influencers",
    type: "Magazine",
    status: "DRAFT",
    date: "30 Aug 2026",
  },
  {
    title: "Global Business Excellence Awards",
    type: "Award",
    status: "PUBLISHED",
    date: "28 Aug 2026",
  },
  {
    title: "The Next Wave of Technology",
    type: "Article",
    status: "DRAFT",
    date: "27 Aug 2026",
  },
];

/* =========================================================
   RECENT ACTIVITY
========================================================= */

const recentActivity = [
  {
    title: "New article published",
    subtitle: "The Future of African Enterprise",
    time: "10:24 AM",
  },
  {
    title: "Magazine updated",
    subtitle: "Innovators & Influencers",
    time: "Yesterday",
  },
  {
    title: "New award added",
    subtitle: "Global Business Excellence Awards",
    time: "02 Sep 2026",
  },
  {
    title: "Podcast published",
    subtitle: "Leadership in Focus · Ep. 12",
    time: "01 Sep 2026",
  },
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

/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const mobileNavItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: FileText,
  },
  {
    label: "Articles",
    href: "/admin/articles/view",
    icon: FileText,
  },
  {
    label: "Cover Stories",
    href: "/admin/cover-stories/view",
    icon: BookOpen,
  },
  {
    label: "Magazines",
    href: "/admin/magazines/view",
    icon: Library,
  },
  {
    label: "Awards",
    href: "/admin/awards/view",
    icon: Award,
  },
];

/* =========================================================
   ADMIN DASHBOARD
========================================================= */

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("iconiq_admin_logged_in");

    if (loggedIn !== "true") {
      router.replace("/admin/login");
    }
  }, [router]);

  /*
   * We intentionally do NOT use setState inside the effect.
   *
   * The page initially renders the verification screen.
   * After mounting, localStorage is checked. If the user is not
   * authenticated, they are redirected to login.
   *
   * For authenticated users, the dashboard is rendered directly.
   */

  const isLoggedIn =
    typeof window !== "undefined" &&
    localStorage.getItem("iconiq_admin_logged_in") === "true";

  if (!isLoggedIn) {
    return (
      <div
        className="admin-shell"
        style={{
          background: "#f5f7fa",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            color: "#082e63",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Verifying authorization...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      {/* =====================================================
          SIDEBAR
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

            <input
              type="text"
              placeholder="Search content..."
              aria-label="Search content"
            />
          </div>

          <div className="top-header-right">
            <button
              type="button"
              className="notification-button"
              aria-label="Notifications"
            >
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
          {/* BREADCRUMB */}

          <div className="breadcrumb">
            <span>ADMIN</span>
            <b>/</b>
            <strong>DASHBOARD</strong>
          </div>

          {/* PAGE HEADER */}

          <div className="page-header">
            <div className="page-heading">
              <p className="eyebrow">Overview</p>

              <h1>Dashboard</h1>

              <p className="page-description">
                Welcome back. Here&apos;s what&apos;s happening across your
                platform.
              </p>
            </div>

            <div className="page-header-actions">
              <Link href="/" className="view-website">
                <span>VIEW WEBSITE</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================== */}

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

                      <span className="stat-change">
                        ↑ {stat.change.replace("+", "")}
                      </span>
                    </div>

                    <p className="stat-period">vs last 30 days</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =================================================
              MAIN DASHBOARD GRID
          ================================================== */}

          <div className="main-dashboard-grid">
            {/* CONTENT OVERVIEW */}

            <section className="panel content-overview">
              <div className="panel-header">
                <div>
                  <p className="panel-eyebrow">Content</p>

                  <h2>Content Overview</h2>
                </div>

                <select
                  defaultValue="this-month"
                  className="month-select"
                  aria-label="Select time period"
                >
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
                      <div
                        className="bar-fill"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* QUICK ACTIONS */}

            <section className="quick-actions">
              <div className="quick-heading">
                <p>Shortcuts</p>

                <h2>Quick Actions</h2>

                <span>
                  Create and manage editorial content quickly.
                </span>
              </div>

              <div className="quick-grid">
                {quickActions.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="quick-action-button"
                  >
                    <span>
                      <Plus size={13} />
                      {label}
                    </span>

                    <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </section>

            {/* RECENT ACTIVITY */}

            <section className="panel recent-activity">
              <div className="panel-header">
                <div>
                  <p className="panel-eyebrow">Activity</p>
                  <h2>Recent Activity</h2>
                </div>

                <Link href="/admin/activity" className="view-all">
                  VIEW ALL
                </Link>
              </div>

              <div className="activity-list">
                {recentActivity.map((activity, index) => (
                  <div
                    className={`activity-item ${
                      index !== recentActivity.length - 1
                        ? "activity-border"
                        : ""
                    }`}
                    key={`${activity.title}-${activity.time}`}
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

          {/* =================================================
              RECENT CONTENT
          ================================================== */}

          <section className="panel recent-content">
            <div className="panel-header">
              <div>
                <p className="panel-eyebrow">Editorial</p>
                <h2>Recent Content</h2>
              </div>

              <Link
                href="/admin/content"
                className="view-all-icon"
              >
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

                      <td className="muted">
                        {item.type}
                      </td>

                      <td>
                        <span
                          className={`status ${
                            item.status === "PUBLISHED"
                              ? "published"
                              : "draft"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="muted">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* =================================================
              ADVERTISEMENTS
          ================================================== */}

          <section className="panel advertisements">
            <div className="advertisement-header">
              <div>
                <p className="panel-eyebrow">Monetization</p>

                <div className="advertisement-title">
                  <Megaphone
                    size={16}
                    strokeWidth={1.6}
                  />

                  <h2>Advertisements</h2>
                </div>

                <p className="advertisement-description">
                  Manage advertisements displayed across the website.
                </p>
              </div>

              <Link
                href="/admin/advertisements"
                className="manage-ads"
              >
                MANAGE ADS
                <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="advertisement-stats">
              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <Megaphone
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p>Active Ads</p>
                  <strong>12</strong>
                  <span>+3 this month</span>
                </div>
              </div>

              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <BarChart3
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p>Impressions</p>
                  <strong>24.8K</strong>
                  <span>This month</span>
                </div>
              </div>

              <div className="advertisement-stat">
                <div className="advertisement-icon">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
                  />
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

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div className="mobile-nav">
        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              href={item.href}
              key={item.label}
              className={
                index === 0
                  ? "mobile-nav-item mobile-nav-active"
                  : "mobile-nav-item"
              }
            >
              <Icon size={17} strokeWidth={1.7} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

