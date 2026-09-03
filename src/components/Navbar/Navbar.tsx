"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  Search,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Cover Stories",
    href: "/cover-stories",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Magazines",
    href: "/magazines",
  },
  {
    label: "Hall of Fame",
    href: "/hall-of-fame",
  },
  {
    label: "Awards",
    href: "/awards",
  },
  {
    label: "Podcasts",
    href: "/podcasts",
  },
];

/* =========================================================
   CATEGORIES
========================================================= */

const categoryItems = [
  {
    title: "Technology",
    description:
      "News, innovation and digital transformation shaping the future.",
    href: "/categories/technology",
  },
  {
    title: "Startups",
    description:
      "Emerging companies, founders and ideas building what comes next.",
    href: "/categories/startups",
  },
  {
    title: "Leadership",
    description:
      "Visionary leaders, strategy and ideas driving meaningful change.",
    href: "/categories/leadership",
  },
  {
    title: "AI & Innovation",
    description:
      "Artificial intelligence, breakthrough ideas and emerging technologies.",
    href: "/categories/ai-innovation",
  },
];

/* =========================================================
   SPOTLIGHT
========================================================= */

const spotlightItems = [
  {
    title: "Beyond Generative AI",
    href: "/spotlight/beyond-generative-ai",
  },
  {
    title: "Digital Transformation",
    href: "/spotlight/digital-transformation",
  },
  {
    title: "Future of Business",
    href: "/spotlight/future-of-business",
  },
  {
    title: "Innovation Leaders",
    href: "/spotlight/innovation-leaders",
  },
];

/* =========================================================
   NEWS
========================================================= */

const newsItems = [
  {
    title: "Latest Business News",
    href: "/articles",
  },
  {
    title: "Technology Updates",
    href: "/articles/technology",
  },
  {
    title: "Leadership News",
    href: "/articles/leadership",
  },
  {
    title: "Industry Insights",
    href: "/articles/industries",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navbarRef = useRef<HTMLElement | null>(null);
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  /* =======================================================
     SCROLL STATE
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     NAVBAR HEIGHT
  ======================================================= */

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (!navbarRef.current) return;

      const height =
        navbarRef.current.getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    updateNavbarHeight();

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateNavbarHeight();
      });

      if (navbarRef.current) {
        resizeObserver.observe(navbarRef.current);
      }
    }

    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        updateNavbarHeight
      );
    };
  }, []);

  /* =======================================================
     MOBILE BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =======================================================
     CLOSE MOBILE MENU ON DESKTOP
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =======================================================
     CLOSE CATEGORY DROPDOWN OUTSIDE
  ======================================================= */

  useEffect(() => {
    const handlePointerDown = (
      event: MouseEvent | TouchEvent
    ) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(
          event.target as Node
        )
      ) {
        setCategoriesOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handlePointerDown
    );

    document.addEventListener(
      "touchstart",
      handlePointerDown
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown
      );

      document.removeEventListener(
        "touchstart",
        handlePointerDown
      );
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setCategoriesOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <motion.header
        ref={navbarRef}
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        initial={{
          y: 0,
          opacity: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <div className="navbar-inner">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="navbar-brand"
            aria-label="ICONIQ SPHERE home"
            onClick={() => {
              setCategoriesOpen(false);
              setMenuOpen(false);
            }}
          >
            <Image
              src="/iconiq-sphere-logo.svg"
              alt="ICONIQ SPHERE"
              width={260}
              height={95}
              priority
              className="navbar-logo"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav
            className="navbar-nav"
            aria-label="Main navigation"
          >

            {/* HOME */}

            <Link
              href="/"
              className="navbar-link navbar-link-active"
              onClick={() =>
                setCategoriesOpen(false)
              }
            >
              <span>Home</span>

              <motion.span
                className="navbar-active-line"
                layoutId="navbar-active-line"
              />
            </Link>

            {/* CATEGORIES */}

            <div
              ref={categoriesRef}
              className="navbar-category-wrapper"
            >
              <button
                type="button"
                className={`navbar-link navbar-category-button ${
                  categoriesOpen
                    ? "navbar-category-open"
                    : ""
                }`}
                aria-haspopup="true"
                aria-expanded={categoriesOpen}
                onClick={(event) => {
                  event.stopPropagation();

                  setCategoriesOpen(
                    (value) => !value
                  );
                }}
              >
                <span>Categories</span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.8}
                  className={`navbar-category-chevron ${
                    categoriesOpen
                      ? "navbar-category-chevron-open"
                      : ""
                  }`}
                />
              </button>

              {/* CATEGORY DROPDOWN */}

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    className="categories-dropdown"
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                  >
                    <div className="categories-dropdown-inner">

                      {/* CATEGORIES */}

                      <div className="categories-column categories-column-main">
                        <div className="categories-column-heading">
                          <span>
                            CATEGORIES
                          </span>

                          <span className="categories-heading-line" />
                        </div>

                        <div className="categories-list">
                          {categoryItems.map(
                            (item) => (
                              <Link
                                href={item.href}
                                key={item.title}
                                className="category-dropdown-item"
                                onClick={() =>
                                  setCategoriesOpen(
                                    false
                                  )
                                }
                              >
                                <div className="category-item-top">
                                  <span>
                                    {item.title}
                                  </span>

                                  <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.7}
                                  />
                                </div>

                                <p>
                                  {item.description}
                                </p>
                              </Link>
                            )
                          )}
                        </div>

                        <Link
                          href="/categories"
                          className="categories-more"
                          onClick={() =>
                            setCategoriesOpen(
                              false
                            )
                          }
                        >
                          <span>
                            MORE CATEGORIES
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.7}
                          />
                        </Link>
                      </div>

                      {/* SPOTLIGHT */}

                      <div className="categories-column categories-column-side">
                        <div className="categories-column-heading">
                          <span>
                            SPOTLIGHT
                          </span>

                          <span className="categories-heading-line" />
                        </div>

                        <div className="dropdown-story-list">
                          {spotlightItems.map(
                            (item, index) => (
                              <Link
                                href={item.href}
                                key={item.title}
                                className="dropdown-story-item"
                                onClick={() =>
                                  setCategoriesOpen(
                                    false
                                  )
                                }
                              >
                                <div className="dropdown-story-number">
                                  {String(
                                    index + 1
                                  ).padStart(
                                    2,
                                    "0"
                                  )}
                                </div>

                                <div className="dropdown-story-content">
                                  <span>
                                    {item.title}
                                  </span>

                                  <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.7}
                                  />
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>

                      {/* NEWS */}

                      <div className="categories-column categories-column-side">
                        <div className="categories-column-heading">
                          <span>
                            NEWS
                          </span>

                          <span className="categories-heading-line" />
                        </div>

                        <div className="dropdown-story-list">
                          {newsItems.map(
                            (item, index) => (
                              <Link
                                href={item.href}
                                key={item.title}
                                className="dropdown-story-item"
                                onClick={() =>
                                  setCategoriesOpen(
                                    false
                                  )
                                }
                              >
                                <div className="dropdown-story-number">
                                  {String(
                                    index + 1
                                  ).padStart(
                                    2,
                                    "0"
                                  )}
                                </div>

                                <div className="dropdown-story-content">
                                  <span>
                                    {item.title}
                                  </span>

                                  <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.7}
                                  />
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* REMAINING NAVIGATION */}

            {navItems
              .filter(
                (item) =>
                  item.label !== "Home"
              )
              .map((item) => (
                <Link
                  href={item.href}
                  key={item.label}
                  className="navbar-link"
                  onClick={() =>
                    setCategoriesOpen(false)
                  }
                >
                  <span>
                    {item.label}
                  </span>
                </Link>
              ))}
          </nav>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div className="navbar-actions">

            {/* SEARCH */}

            <button
              className="navbar-search"
              aria-label="Search"
              type="button"
              onClick={() =>
                setCategoriesOpen(false)
              }
            >
              <Search
                size={20}
                strokeWidth={1.8}
              />
            </button>

            {/* SUBMIT */}

            <Link
              href="/submit-story"
              className="navbar-submit"
              onClick={() =>
                setCategoriesOpen(false)
              }
            >
              <span>
                SUBMIT YOUR STORY
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
              />
            </Link>

            {/* MOBILE MENU */}

            <button
              className="navbar-menu-button"
              type="button"
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              onClick={() => {
                setCategoriesOpen(false);

                setMenuOpen(
                  (value) => !value
                );
              }}
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </motion.header>

      {/* =====================================================
          NAVBAR SPACER
      ===================================================== */}

      <div
        className="navbar-spacer"
        aria-hidden="true"
      />

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <div className="mobile-menu-inner">

              <div className="mobile-menu-label">
                <span>
                  EXPLORE ICONIQ SPHERE
                </span>

                <span className="mobile-menu-line" />
              </div>

              <nav className="mobile-nav">

                {navItems.map(
                  (item, index) => (
                    <Fragment
                      key={item.label}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                        className="mobile-nav-link"
                      >
                        <span className="mobile-nav-number">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span>
                          {item.label}
                        </span>

                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.7}
                        />
                      </Link>

                      {item.label ===
                        "Magazines" && (
                        <Link
                          href="/categories"
                          onClick={() =>
                            setMenuOpen(false)
                          }
                          className="mobile-nav-link"
                        >
                          <span className="mobile-nav-number">
                            {String(
                              index + 2
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span>
                            Categories
                          </span>

                          <ArrowUpRight
                            size={19}
                            strokeWidth={1.7}
                          />
                        </Link>
                      )}
                    </Fragment>
                  )
                )}

              </nav>

              <Link
                href="/submit-story"
                className="mobile-submit"
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                <span>
                  Submit Your Story
                </span>

                <ArrowUpRight
                  size={18}
                />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          STYLES
      ===================================================== */}
      <style jsx global>{`
        .navbar {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          z-index: 99999 !important;
          background: #ffffff !important;
          isolation: isolate;
          overflow: visible !important;
          border-bottom: 1px solid rgba(8, 46, 99, 0.08);
        }

        .navbar-inner {
          width: 100% !important;
          height: 78px !important;
          min-height: 78px !important;
          margin: 0 !important;
          display: grid !important;
          grid-template-columns: 235px minmax(0, 1fr) auto !important;
          align-items: center !important;
          column-gap: 18px !important;
          padding: 0 20px 0 22px !important;
          box-sizing: border-box !important;
          overflow: visible !important;
        }

        .navbar-spacer {
          height: 78px !important;
          width: 100% !important;
        }

        .navbar-brand {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          width: 235px !important;
          min-width: 235px !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .navbar-logo {
          width: 225px !important;
          height: auto !important;
          max-width: 100% !important;
          object-fit: contain !important;
          object-position: left center !important;
          display: block !important;
        }

        .navbar-nav {
          min-width: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: clamp(14px, 1.45vw, 26px) !important;
          white-space: nowrap !important;
          overflow: visible !important;
        }

        .navbar-link {
          position: relative !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 100% !important;
          flex-shrink: 0 !important;
          white-space: nowrap !important;
          color: #10194d !important;
          text-decoration: none !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          transition: color 0.2s ease, opacity 0.2s ease !important;
        }

        .navbar-link:hover {
          color: #285aa4 !important;
        }

        .navbar-active-line {
          position: absolute !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 12px !important;
          height: 2px !important;
          background: #d4af37 !important;
          border-radius: 999px !important;
        }

        .navbar-category-wrapper {
          position: relative !important;
          display: flex !important;
          align-items: center !important;
          height: 100% !important;
          z-index: 100000 !important;
          overflow: visible !important;
        }

        .navbar-category-button {
          appearance: none !important;
          border: 0 !important;
          background: transparent !important;
          font: inherit !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          line-height: 1 !important;
          color: #10194d !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 5px !important;
          white-space: nowrap !important;
          padding: 0 !important;
        }

        .navbar-category-chevron {
          flex-shrink: 0 !important;
          transition: transform 0.2s ease, opacity 0.2s ease !important;
        }

        .navbar-category-chevron-open {
          transform: rotate(180deg);
        }

        .navbar-category-open {
          color: #0b376f !important;
        }

        /* FIXED DROPDOWN POSITIONING TO PREVENT HIDING */
        .categories-dropdown {
          position: absolute !important;
          top: calc(100% + 4px) !important;
          left: 0 !important;
          transform: none !important;
          width: 860px !important;
          max-width: 90vw !important;
          background: #ffffff !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 35px -10px rgba(16, 25, 77, 0.12), 0 4px 12px rgba(0, 0, 0, 0.06) !important;
          border: 1px solid rgba(8, 46, 99, 0.08) !important;
          z-index: 999999 !important;
          padding: 24px !important;
          box-sizing: border-box !important;
        }

        .categories-dropdown-inner {
          display: grid !important;
          grid-template-columns: 1.2fr 1fr 1fr !important;
          gap: 24px !important;
          width: 100% !important;
        }

        .categories-column {
          display: flex !important;
          flex-direction: column !important;
          min-width: 0 !important;
        }

        .categories-column-heading {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.08em !important;
          color: #64748b !important;
          margin-bottom: 14px !important;
        }

        .categories-heading-line {
          flex-grow: 1 !important;
          height: 1px !important;
          background: #e2e8f0 !important;
          margin-left: 10px !important;
        }

        .categories-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 8px !important;
        }

        .category-dropdown-item {
          display: flex !important;
          flex-direction: column !important;
          gap: 3px !important;
          padding: 8px 10px !important;
          border-radius: 6px !important;
          text-decoration: none !important;
          background: transparent !important;
          transition: background 0.15s ease !important;
        }

        .category-dropdown-item:hover {
          background: #f8fafc !important;
        }

        .category-item-top {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          font-size: 13.5px !important;
          font-weight: 600 !important;
          color: #10194d !important;
        }

        .category-dropdown-item p {
          margin: 0 !important;
          font-size: 12px !important;
          font-weight: 400 !important;
          color: #64748b !important;
          line-height: 1.35 !important;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .categories-more {
          display: inline-flex !important;
          align-items: center !important;
          gap: 6px !important;
          margin-top: 14px !important;
          font-size: 11.5px !important;
          font-weight: 700 !important;
          color: #28589d !important;
          text-decoration: none !important;
          padding-left: 10px !important;
        }

        .categories-more:hover {
          text-decoration: underline !important;
        }

        .dropdown-story-list {
          display: flex !important;
          flex-direction: column !important;
          gap: 6px !important;
        }

        .dropdown-story-item {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 8px 10px !important;
          border-radius: 6px !important;
          text-decoration: none !important;
          transition: background 0.15s ease !important;
        }

        .dropdown-story-item:hover {
          background: #f8fafc !important;
        }

        .dropdown-story-number {
          font-size: 11px !important;
          font-weight: 700 !important;
          color: #94a3b8 !important;
          min-width: 18px !important;
        }

        .dropdown-story-content {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          width: 100% !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          color: #10194d !important;
        }

        .navbar-actions {
          min-width: 0 !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-end !important;
          gap: 12px !important;
          flex-shrink: 0 !important;
        }

        .navbar-search {
          flex-shrink: 0 !important;
          width: 40px !important;
          height: 40px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 0 !important;
          border: 0 !important;
          background: transparent !important;
          color: #10194d !important;
          cursor: pointer !important;
        }

        .navbar-search:hover {
          color: #285aa4 !important;
        }

        .navbar-submit {
          flex-shrink: 0 !important;
          width: auto !important;
          height: 38px !important;
          min-height: 38px !important;
          padding: 0 12px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 6px !important;
          box-sizing: border-box !important;
          white-space: nowrap !important;
          font-size: 10.5px !important;
          font-weight: 700 !important;
          line-height: 1 !important;
          letter-spacing: 0.3px !important;
          text-decoration: none !important;
          color: #475569 !important;
          background: #f8fafc !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 6px !important;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease !important;
        }

        .navbar-submit:hover {
          transform: translateY(-1px);
          background: #f1f5f9 !important;
          border-color: #cbd5e1 !important;
        }
      `}</style>
    </>
  );
}