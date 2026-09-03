"use client";

import { useState } from "react";

type Magazine = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const magazines: Magazine[] = [
  {
    id: 1,
    title: "Leaders Build Legacies",
    subtitle: "Leadership Edition",
    image: "/magazine1.jpg",
  },
  {
    id: 2,
    title: "The Future of Business",
    subtitle: "Innovation Edition",
    image: "/magazine2.jpg",
  },
  {
    id: 3,
    title: "Beyond Boundaries",
    subtitle: "Global Edition",
    image: "/magazine3.jpg",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const getPosition = (index: number) => {
    const total = magazines.length;
    const difference = (index - activeIndex + total) % total;

    if (difference === 0) return "active";
    if (difference === 1) return "right";

    return "left";
  };

  const handleMagazineClick = (index: number) => {
    setActiveIndex(index);
  };

  const scrollToStories = () => {
    const stories = document.getElementById("stories");

    if (stories) {
      stories.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section className="hero">
        {/* ================= BACKGROUND ================= */}
        <div className="hero-background">
          <div className="hero-grid" />

          <div className="hero-globe">
            <div className="globe-ring globe-ring-1" />
            <div className="globe-ring globe-ring-2" />
            <div className="globe-ring globe-ring-3" />

            <div className="globe-line globe-line-1" />
            <div className="globe-line globe-line-2" />
            <div className="globe-line globe-line-3" />
          </div>

          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />

          <div className="hero-wave hero-wave-one" />
          <div className="hero-wave hero-wave-two" />
        </div>

        {/* ================= MAIN HERO ================= */}
        <div className="hero-inner">
          {/* ================= LEFT CONTENT ================= */}
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="hero-kicker-dot" />
              <span className="hero-kicker-text">
                GLOBAL BUSINESS &amp; TECHNOLOGY MEDIA
              </span>
            </div>

            <h1 className="hero-title">
              STORIES OF VISION.
              <br />
              VOICES OF IMPACT.
            </h1>

            <p className="hero-description">
              ICONIQSPHERE brings you inspiring stories of leaders and
              organizations shaping a better tomorrow.
            </p>

            {/* ================= ACTIONS ================= */}
            <div className="hero-actions">
              <button
                type="button"
                className="hero-button"
                onClick={scrollToStories}
              >
                <span>EXPLORE STORIES</span>
                <span className="hero-button-arrow">→</span>
              </button>

              <div className="hero-stats">
                <div className="hero-stat-item">
                  <span className="hero-stat-number">50K+</span>
                  <span className="hero-stat-label">Global Readers</span>
                </div>
                <div className="hero-stat-divider" />
                <div className="hero-stat-item">
                  <span className="hero-stat-number">100+</span>
                  <span className="hero-stat-label">Cover Stories</span>
                </div>
              </div>

              <button
                type="button"
                className="hero-secondary-button"
                onClick={() =>
                  window.open("mailto:subscribe@iconiqsphere.com")
                }
              >
                <span>SUBSCRIBE</span>
              </button>
            </div>

            {/* ================= SMALL TAG ================= */}
            <div className="hero-bottom-label">
              <span className="bottom-label-line" />

              <span>
                A BRIGHTER TOMORROW,
                <br />
                TOGETHER
              </span>
            </div>
          </div>

          {/* ================= MAGAZINES ================= */}
          <div className="magazine-area">
            <div className="magazine-stage">
              {magazines.map((magazine, index) => {
                const position = getPosition(index);

                return (
                  <button
                    key={magazine.id}
                    type="button"
                    className={`magazine-card magazine-${position}`}
                    onClick={() => handleMagazineClick(index)}
                    aria-label={`View ${magazine.title}`}
                  >
                    <div className="magazine-image-wrap">
                      <img
                        src={magazine.image}
                        alt={magazine.title}
                        className="magazine-image"
                      />

                      {/* Fallback content */}
                      <div className="magazine-fallback">
                        <div className="fallback-brand">
                          ICONIQ<span>SPHERE</span>
                        </div>

                        <div className="fallback-small">
                          GLOBAL BUSINESS &amp;
                          <br />
                          TECHNOLOGY MEDIA
                        </div>

                        <div className="fallback-edition">
                          {magazine.subtitle}
                        </div>

                        <div className="fallback-title">
                          {magazine.title}
                        </div>

                        <div className="fallback-footer">
                          MAY 2025 | EDITION 23
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ================= MAGAZINE SHELF ================= */}
            <div className="magazine-shelf">
              <span />
            </div>

            {/* ================= DOTS ================= */}
            <div className="magazine-dots">
              {magazines.map((magazine, index) => (
                <button
                  key={magazine.id}
                  type="button"
                  className={
                    index === activeIndex ? "dot active" : "dot"
                  }
                  onClick={() => handleMagazineClick(index)}
                  aria-label={`Select magazine ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESPONSIVE STYLES ================= */}
      <style jsx global>{`
        .hero {
          position: relative;
          width: 100%;
          background: #f5f8ff;
          overflow: hidden;
          box-sizing: border-box;
          padding: 40px 0 30px 0;
          margin: 0;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(18, 61, 126, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18, 61, 126, 0.06) 1px, transparent 1px);
          background-size: 54px 54px;
        }

        .hero-globe {
          position: absolute;
          width: 620px;
          height: 620px;
          left: -260px;
          top: -170px;
          border-radius: 50%;
          opacity: 0.18;
        }

        .globe-ring {
          position: absolute;
          inset: 0;
          border: 1px solid #6d8dcc;
          border-radius: 50%;
        }

        .globe-ring-1 { transform: scale(1); }
        .globe-ring-2 { transform: scale(0.78); }
        .globe-ring-3 { transform: scale(0.56); }

        .globe-line {
          position: absolute;
          left: 50%;
          top: -10%;
          width: 1px;
          height: 120%;
          background: #6d8dcc;
          transform-origin: center;
        }

        .globe-line-1 { transform: rotate(25deg); }
        .globe-line-2 { transform: rotate(-25deg); }
        .globe-line-3 { transform: rotate(90deg); }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
        }

        .hero-glow-left {
          width: 420px;
          height: 420px;
          left: -120px;
          bottom: -160px;
          background: rgba(57, 103, 183, 0.13);
        }

        .hero-glow-right {
          width: 520px;
          height: 520px;
          right: -160px;
          top: -100px;
          background: rgba(94, 130, 205, 0.13);
        }

        .hero-wave {
          position: absolute;
          left: -5%;
          width: 110%;
          height: 150px;
          border-top: 1px solid rgba(54, 98, 170, 0.18);
          border-radius: 50%;
        }

        .hero-wave-one { bottom: -45px; transform: rotate(-5deg); }
        .hero-wave-two { bottom: -75px; transform: rotate(4deg); }

        /* HERO INNER CONTAINER */
        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(100% - 60px, 1400px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 40px;
        }

        .hero-copy {
          position: relative;
          z-index: 5;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
          background: rgba(220, 228, 242, 0.6);
          border-radius: 50px;
          margin-bottom: 24px;
        }

        .hero-kicker-dot {
          width: 8px;
          height: 8px;
          background: #0a214f;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hero-kicker-text {
          color: #0a214f;
          font-size: clamp(12px, 0.9vw, 15px);
          font-weight: 700;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .hero-title {
          margin: 0;
          color: #0a214f;
          font-size: clamp(36px, 3.8vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .hero-description {
          margin: 20px 0 0;
          color: #52719f;
          font-size: clamp(16px, 1.2vw, 22px);
          line-height: 1.5;
          max-width: 650px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 24px;
        }

        .hero-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 220px;
          height: 52px;
          padding: 0 20px;
          border: none;
          border-radius: 12px;
          color: white;
          /* Updated button background color to match the reference image */
          background: #28589d;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 24px rgba(40, 88, 157, 0.22);
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .hero-button:hover {
          transform: translateY(-2px);
          background: #1f467e;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
        }

        .hero-stat-number {
          color: #0a214f;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.1;
        }

        .hero-stat-label {
          color: #52719f;
          font-size: 13px;
          font-weight: 500;
          margin-top: 2px;
        }

        .hero-stat-divider {
          width: 1px;
          height: 32px;
          background: #cbd5e1;
        }

        .hero-secondary-button {
          display: none !important;
        }

        .hero-bottom-label {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-top: 24px;
          color: #52719f;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          line-height: 1.5;
        }

        .bottom-label-line {
          width: 3px;
          height: 36px;
          flex-shrink: 0;
          background: #28589d;
        }

        /* MAGAZINE AREA */
        .magazine-area {
          position: relative;
          width: 100%;
          height: 380px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .magazine-stage {
          position: relative;
          width: 100%;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .magazine-card {
          position: absolute;
          padding: 0;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
        }

        .magazine-image-wrap {
          position: relative;
          width: clamp(160px, 13vw, 210px);
          height: clamp(250px, 20vw, 330px);
          overflow: hidden;
          background: #071d3b;
          box-shadow: 0 20px 40px rgba(9, 31, 69, 0.2);
          border-radius: 4px;
        }

        .magazine-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .magazine-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 14px 16px;
          color: white;
          background: #071d3b;
          text-align: center;
        }

        .fallback-brand {
          font-size: clamp(14px, 1.1vw, 20px);
          font-weight: 800;
          white-space: nowrap;
        }

        .fallback-brand span { font-weight: 400; }

        .fallback-small {
          margin-top: 6px;
          font-size: 8px;
          line-height: 1.3;
          font-weight: 600;
        }

        .fallback-edition {
          margin-top: 20px;
          font-size: 11px;
          font-weight: 600;
        }

        .fallback-title {
          margin: auto 0;
          max-width: 160px;
          font-size: clamp(20px, 1.6vw, 28px);
          line-height: 1.05;
          font-weight: 800;
          text-transform: uppercase;
        }

        .fallback-footer {
          width: 100%;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 7px;
          font-weight: 600;
        }

        .magazine-active {
          z-index: 5;
          transform: translateY(-10px) scale(1.05);
          opacity: 1;
        }

        .magazine-left {
          z-index: 2;
          transform: translateX(-120px) translateY(5px) scale(0.9);
          opacity: 0.9;
        }

        .magazine-right {
          z-index: 2;
          transform: translateX(120px) translateY(5px) scale(0.9);
          opacity: 0.9;
        }

        .magazine-shelf {
          position: absolute;
          left: 50%;
          bottom: 15px;
          width: 85%;
          height: 12px;
          transform: translateX(-50%);
          background: white;
          box-shadow: 0 5px 0 rgba(36, 75, 132, 0.08), 0 10px 20px rgba(36, 75, 132, 0.08);
        }

        .magazine-shelf span {
          position: absolute;
          left: 5%;
          right: 5%;
          bottom: -5px;
          height: 3px;
          background: rgba(67, 105, 160, 0.18);
        }

        .magazine-dots {
          position: absolute;
          bottom: -15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: #abc0df;
          cursor: pointer;
          transition: width 0.25s ease, background 0.25s ease;
        }

        .dot.active {
          width: 28px;
          border-radius: 10px;
          background: #28589d;
        }

        /* RESPONSIVE BREAKPOINTS */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 50px;
          }
          .hero-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            max-width: 700px;
          }
          .hero-description {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-kicker {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-bottom-label {
            justify-content: center;
          }
        }

        @media (max-width: 650px) {
          .hero {
            padding: 30px 0 20px 0;
          }
          .hero-inner {
            width: min(100% - 30px, 600px);
            gap: 35px;
          }
          .hero-kicker {
            margin-bottom: 18px;
          }
          .hero-title {
            font-size: 34px;
          }
          .hero-description {
            font-size: 15px;
          }
          .magazine-area {
            height: 320px;
          }
          .magazine-left {
            transform: translateX(-85px) translateY(4px) scale(0.85);
          }
          .magazine-right {
            transform: translateX(85px) translateY(4px) scale(0.85);
          }
        }
      `}</style>
    </>
  );
}