"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Headphones,
  Mic2,
  Play,
  Radio,
  Sparkles,
} from "lucide-react";

const episodes = [
  {
    season: "S2",
    episode: "EP 11",
    number: "11",
    title: "The Leadership Code for a Disruptive Era",
    guest: "Mark Thompson",
    role: "CEO, Global Innovate Labs",
    date: "May 18, 2025",
    duration: "38:21",
    listeners: "1.2K",
    image: "/podcast-1.jpg",
  },
  {
    season: "S2",
    episode: "EP 10",
    number: "10",
    title: "Women Leading with Impact",
    guest: "Ananya Mehta",
    role: "Founder, Rise & Lead Initiative",
    date: "May 11, 2025",
    duration: "32:47",
    listeners: "987",
    image: "/podcast-2.jpg",
  },
  {
    season: "S2",
    episode: "EP 09",
    number: "09",
    title: "Tech, Trust & Transformation",
    guest: "Rahul Verma",
    role: "CTO, NextGen Systems",
    date: "May 04, 2025",
    duration: "41:05",
    listeners: "1.1K",
    image: "/podcast-3.jpg",
  },
  {
    season: "S2",
    episode: "EP 08",
    number: "08",
    title: "Sustainability as Strategy",
    guest: "Elena Rodriguez",
    role: "Sustainability Advisor",
    date: "Apr 27, 2025",
    duration: "29:14",
    listeners: "856",
    image: "/podcast-4.jpg",
  },
  {
    season: "S2",
    episode: "EP 07",
    number: "07",
    title: "The Future of Work is Human",
    guest: "James Collins",
    role: "Futurist & Workplace Strategist",
    date: "Apr 20, 2025",
    duration: "36:18",
    listeners: "1.3K",
    image: "/podcast-5.jpg",
  },
];

const features = [
  {
    icon: Mic2,
    title: "EXPERT CONVERSATIONS",
    text: "Insights from industry leaders & visionaries.",
  },
  {
    icon: Sparkles,
    title: "DIVERSE PERSPECTIVES",
    text: "Exploring ideas that shape tomorrow.",
  },
  {
    icon: Radio,
    title: "GLOBAL VOICES",
    text: "Stories from changemakers around the world.",
  },
  {
    icon: Clock3,
    title: "NEW EPISODES WEEKLY",
    text: "Fresh conversations, every week.",
  },
];

export default function PodcastsSection() {
  return (
    <>
      <section
        id="podcasts"
        className="w-full border-b border-slate-100 bg-white scroll-mt-24 podcasts-section"
      >
        <div className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14 podcasts-container">

          {/* =====================================================
              HEADER (Aligned with NewsSection style)
          ====================================================== */}
          <div className="mb-7 flex items-end justify-between gap-4 border-b border-slate-200 pb-5 sm:mb-8 sm:pb-6 podcasts-heading-wrapper">
            {/* LEFT */}
            <div className="min-w-0">
              <span className="mb-2 block whitespace-nowrap text-[8px] font-black uppercase tracking-[0.18em] text-[#2a619d] sm:text-[10px] sm:tracking-[0.15em]">
                PODCASTS &amp; UPDATES
              </span>

              <h2 className="whitespace-nowrap text-[27px] font-black uppercase leading-none tracking-[-0.045em] text-[#082e63] sm:text-[36px] lg:text-[42px]">
                Podcasts
              </h2>
            </div>

            {/* RIGHT */}
            <Link
              href="/podcasts"
              className="group flex shrink-0 items-center gap-2 border-b-2 border-[#285a9c] pb-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#174a84] transition-all duration-200 hover:gap-3 sm:text-[10px]"
            >
              <span className="whitespace-nowrap">
                View All Episodes
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
              />
            </Link>
          </div>

          {/* =====================================================
              FEATURED PODCAST SECTION
          ====================================================== */}
          <article className="featured-podcast">

            {/* Left text box */}
            <div className="featured-text-overlay">
              <span className="overlay-eyebrow">ICONIQSPHERE</span>
              <h2 className="overlay-title">
                VOICES THAT
                <br />
                <span>INSPIRE</span>
                <br />
                CHANGE.
              </h2>
              <p className="overlay-desc">
                ICONIQSPHERE Podcasts bring you thought-provoking
                conversations with leaders, innovators, and changemakers
                from around the world.
              </p>
            </div>

            {/* Center microphone visual */}
            <div className="featured-visual">
              <div className="visual-grid" />

              <div className="sound-wave">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span
                    key={index}
                    style={{
                      height: `${16 + ((index * 13) % 45)}px`,
                    }}
                  />
                ))}
              </div>

              <div className="microphone">
                <div className="mic-head">
                  <div className="mic-highlight" />
                </div>

                <div className="mic-body">
                  <div className="mic-line" />
                  <div className="mic-line" />
                  <div className="mic-line" />
                  <div className="mic-line" />
                </div>

                <div className="mic-stand" />
                <div className="mic-base" />
              </div>
            </div>

            {/* =====================================================
                COMPACT, PREMIUM, PROFESSIONAL RIGHT CARD
            ====================================================== */}
            <div className="featured-card">
              <div className="featured-card-top">
                <span>FEATURED EPISODE</span>

                <div className="featured-wave">
                  <i style={{ height: "8px" }} />
                  <i style={{ height: "13px" }} />
                  <i style={{ height: "18px" }} />
                  <i style={{ height: "11px" }} />
                  <i style={{ height: "20px" }} />
                  <i style={{ height: "14px" }} />
                  <i style={{ height: "10px" }} />
                </div>

                <button
                  type="button"
                  className="featured-play"
                  aria-label="Play featured episode"
                >
                  <Play size={9} fill="currentColor" />
                </button>
              </div>

              <div className="featured-card-content">
                <div className="featured-image">
                  <img
                    src="/podcast-featured.jpg"
                    alt="Featured podcast guest"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="featured-image-placeholder">
                    <Headphones size={28} strokeWidth={1.1} />
                  </div>
                </div>

                <div className="featured-info">
                  <span className="episode-meta">S2 · EP 12</span>

                  <h3>
                    Building Future-Ready
                    <br />
                    Organizations
                  </h3>

                  <p className="featured-guest">
                    with <strong>Priya Nair</strong>
                  </p>

                  <p className="featured-role">
                    Chief People Officer, TechNova Global
                  </p>

                  <div className="featured-bottom">
                    <button type="button" className="listen-button">
                      <span>LISTEN NOW</span>
                      <Play size={7} fill="currentColor" />
                    </button>

                    <span className="featured-duration">45:32</span>
                  </div>
                </div>
              </div>
            </div>

          </article>

          {/* =====================================================
              FEATURE STRIP
          ====================================================== */}
          <div className="podcast-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="podcast-feature" key={feature.title}>
                  <div className="feature-icon">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <div className="feature-content">
                    <span>{feature.title}</span>
                    <p>{feature.text}</p>
                  </div>

                  {index !== features.length - 1 && (
                    <div className="feature-divider" />
                  )}
                </div>
              );
            })}
          </div>

          {/* =====================================================
              BROWSE HEADER
          ====================================================== */}
          <div className="browse-header">
            <h3>BROWSE PODCASTS</h3>

            <Link href="/podcasts" className="browse-all">
              <span>VIEW ALL EPISODES</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </Link>
          </div>

          {/* =====================================================
              EPISODE CARDS
          ====================================================== */}
          <div className="episodes-grid">
            {episodes.map((episode) => (
              <article className="episode-card" key={episode.number}>
                <Link href="/podcasts" className="episode-image">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="episode-image-placeholder">
                    <Mic2 size={36} strokeWidth={1} />
                  </div>

                  <div className="episode-image-overlay" />

                  <span className="episode-number">
                    {episode.season} - {episode.episode}
                  </span>

                  <span className="episode-play">
                    <Play size={14} fill="currentColor" />
                  </span>

                  <span className="episode-duration">
                    {episode.duration}
                  </span>
                </Link>

                <div className="episode-content">
                  <h4>{episode.title}</h4>

                  <div className="episode-guest">
                    with <strong>{episode.guest}</strong>
                  </div>

                  <div className="episode-role">{episode.role}</div>

                  <div className="episode-footer">
                    <span>{episode.date}</span>
                    <span className="episode-listeners">◉ {episode.listeners}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* =====================================================
              NEVER MISS
          ====================================================== */}
          <div className="never-miss">
            <div className="never-miss-left">
              <div className="never-miss-icon">
                <Radio size={20} strokeWidth={1.4} />
              </div>

              <div>
                <h3>Never Miss an Episode</h3>
                <p>Subscribe now and get notified when new conversations go live.</p>
              </div>
            </div>

            <form
              className="subscribe-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

        </div>
      </section>

      {/* =========================================================
          STYLES
      ========================================================== */}
      <style jsx global>{`
        .podcasts-section,
        .podcasts-section * {
          box-sizing: border-box;
        }

        .podcasts-section {
          width: 100%;
          background: #ffffff;
          color: #082e63;
          overflow: hidden;
        }

        .featured-podcast {
          min-height: 310px;
          max-height: 350px;
          display: grid;
          grid-template-columns: 1fr 1.1fr 1fr;
          background: #edf3f9;
          overflow: hidden;
          position: relative;
          align-items: center;
        }

        .featured-text-overlay {
          padding: 30px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #edf3f9;
          z-index: 2;
        }

        .overlay-eyebrow {
          display: block;
          color: #082e63;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
        }

        .overlay-title {
          margin: 0 0 10px 0;
          color: #082e63;
          font-size: clamp(20px, 2.2vw, 28px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.03em;
          text-transform: uppercase;
        }

        .overlay-title span {
          color: #2860a6;
        }

        .overlay-desc {
          margin: 0;
          color: #5a7393;
          font-size: 10px;
          line-height: 1.45;
          font-weight: 500;
        }

        .featured-visual {
          position: relative;
          min-height: 310px;
          height: 100%;
          overflow: hidden;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(67, 112, 177, 0.2),
            transparent 50%
          );
        }

        .visual-grid {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image: linear-gradient(
              rgba(8, 46, 99, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 46, 99, 0.05) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .sound-wave {
          position: absolute;
          left: 5%;
          top: 50%;
          width: 90%;
          height: 120px;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          opacity: 0.35;
        }

        .sound-wave span {
          width: 2px;
          min-height: 6px;
          background: #3b6ec4;
          border-radius: 4px;
        }

        .microphone {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 135px;
          height: 240px;
          transform: translate(-50%, -50%);
          filter: drop-shadow(0 18px 18px rgba(8, 46, 99, 0.15));
        }

        .mic-head {
          position: absolute;
          left: 50%;
          top: 4px;
          width: 66px;
          height: 95px;
          transform: translateX(-50%);
          border-radius: 34px 34px 24px 24px;
          background: linear-gradient(
            100deg,
            #111b28,
            #45515e 50%,
            #101823
          );
          border: 2px solid rgba(255, 255, 255, 0.12);
        }

        .mic-highlight {
          position: absolute;
          left: 12px;
          top: 12px;
          width: 10px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          transform: rotate(9deg);
        }

        .mic-body {
          position: absolute;
          left: 50%;
          top: 75px;
          width: 102px;
          height: 74px;
          transform: translateX(-50%);
          border: 5px solid #121c29;
          border-radius: 48%;
          background: #1d2835;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 0 14px;
        }

        .mic-line {
          width: 100%;
          height: 2px;
          background: #78838e;
          opacity: 0.55;
        }

        .mic-stand {
          position: absolute;
          left: 50%;
          top: 145px;
          width: 4px;
          height: 68px;
          transform: translateX(-50%);
          background: #1b2735;
        }

        .mic-base {
          position: absolute;
          left: 50%;
          bottom: 1px;
          width: 85px;
          height: 6px;
          transform: translateX(-50%);
          background: #172230;
          border-radius: 50%;
        }

        /* =====================================================
           COMPACT, PREMIUM, PROFESSIONAL RIGHT CARD STYLING
        ====================================================== */
        .featured-card {
          position: relative;
          z-index: 3;
          width: 320px;
          justify-self: end;
          align-self: center;
          margin-right: 28px;
          background: #ffffff;
          border-radius: 14px;
          padding: 14px 16px 16px 16px;
          box-shadow: 0 10px 30px rgba(8, 46, 99, 0.1);
          border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .featured-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 11px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
        }

        .featured-card-top > span {
          color: #082e63;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .featured-wave {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 3px;
          height: 16px;
        }

        .featured-wave i {
          width: 1.5px;
          display: block;
          background: #cbd5e1;
          border-radius: 2px;
        }

        .featured-play {
          width: 26px;
          height: 26px;
          min-width: 26px;
          border: 1.5px solid #082e63;
          background: #ffffff;
          border-radius: 50%;
          color: #082e63;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .featured-play:hover {
          background: #082e63;
          color: #ffffff;
        }

        .featured-card-content {
          display: grid;
          grid-template-columns: 95px 1fr;
          gap: 12px;
          align-items: center;
        }

        .featured-image {
          position: relative;
          height: 120px;
          width: 95px;
          overflow: hidden;
          border-radius: 10px;
          background: #081d40;
        }

        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          z-index: 2;
        }

        .featured-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
        }

        .episode-meta {
          display: block;
          color: #64748b;
          font-size: 9.5px;
          margin-bottom: 3px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .featured-info h3 {
          margin: 0 0 6px 0;
          color: #082e63;
          font-size: 13px;
          line-height: 1.22;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .featured-guest {
          margin: 0 0 2px 0;
          color: #475569;
          font-size: 10px;
        }

        .featured-guest strong {
          color: #082e63;
          font-weight: 700;
        }

        .featured-role {
          margin: 0 0 10px 0;
          color: #64748b;
          font-size: 9px;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .featured-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .listen-button {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border: 0;
          background: #082e63;
          color: #ffffff;
          padding: 6px 10px;
          border-radius: 16px;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .listen-button:hover {
          opacity: 0.9;
        }

        .featured-duration {
          color: #475569;
          font-size: 10px;
          font-weight: 700;
        }

        /* =====================================================
           OTHER SECTIONS
        ====================================================== */
        .podcast-features {
          min-height: 82px;
          margin-top: 18px;
          background: #ffffff;
          border: 1px solid #edf1f5;
          border-radius: 13px;
          box-shadow: 0 8px 30px rgba(8, 46, 99, 0.06);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .podcast-feature {
          position: relative;
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px 24px;
        }

        .feature-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border: 1px solid #cbd9e8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #082e63;
        }

        .feature-content span {
          display: block;
          color: #082e63;
          font-size: 8px;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: 0.04em;
        }

        .feature-content p {
          margin: 5px 0 0;
          color: #7d92ad;
          font-size: 8px;
          line-height: 1.35;
        }

        .feature-divider {
          position: absolute;
          right: 0;
          top: 19px;
          bottom: 19px;
          width: 1px;
          background: #dce4ed;
        }

        .browse-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 55px 0 20px;
        }

        .browse-header h3 {
          margin: 0;
          color: #082e63;
          font-size: 20px;
          line-height: 1;
          letter-spacing: -0.02em;
          font-weight: 900;
          text-transform: uppercase;
        }

        .browse-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #082e63;
          text-decoration: none;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: opacity 0.2s ease;
        }

        .browse-all:hover {
          opacity: 0.75;
        }

        .episodes-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .episode-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(8, 46, 99, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .episode-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(8, 46, 99, 0.12);
        }

        .episode-image {
          display: block;
          position: relative;
          height: 145px;
          overflow: hidden;
          background: #081d40;
        }

        .episode-image img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .episode-image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.4);
        }

        .episode-image-overlay {
          position: absolute;
          z-index: 3;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.5)
          );
        }

        .episode-number {
          position: absolute;
          z-index: 5;
          top: 10px;
          left: 10px;
          padding: 3px 7px;
          background: rgba(8, 25, 48, 0.85);
          color: #ffffff;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .episode-play {
          position: absolute;
          z-index: 5;
          left: 10px;
          bottom: 10px;
          width: 30px;
          height: 30px;
          border: 1.5px solid rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: rgba(8, 25, 48, 0.4);
        }

        .episode-duration {
          position: absolute;
          z-index: 5;
          right: 10px;
          bottom: 10px;
          color: #ffffff;
          font-size: 10px;
          font-weight: 700;
        }

        .episode-content {
          padding: 14px 14px 12px;
        }

        .episode-content h4 {
          margin: 0 0 8px;
          color: #082e63;
          font-size: 13.5px;
          line-height: 1.32;
          font-weight: 800;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 36px;
        }

        .episode-guest {
          margin: 0 0 2px;
          color: #64748b;
          font-size: 10.5px;
        }

        .episode-guest strong {
          color: #082e63;
        }

        .episode-role {
          margin: 0 0 14px;
          color: #64748b;
          font-size: 10.5px;
          min-height: 28px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .episode-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #f1f5f9;
          padding-top: 10px;
          color: #64748b;
          font-size: 10px;
        }

        .episode-listeners {
          color: #64748b;
        }

        .never-miss {
          min-height: 68px;
          margin-top: 30px;
          padding: 16px 24px;
          border-radius: 12px;
          background: #061f47;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .never-miss-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .never-miss-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .never-miss h3 {
          margin: 0;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
        }

        .never-miss p {
          margin: 3px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
        }

        .subscribe-form {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 400px;
        }

        .subscribe-form input {
          flex: 1;
          min-width: 0;
          height: 42px;
          padding: 0 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          outline: none;
          background: transparent;
          color: #ffffff;
          font-size: 13px;
        }

        .subscribe-form input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .subscribe-form button {
          height: 42px;
          padding: 0 20px;
          border: 0;
          border-radius: 6px;
          background: #ffffff;
          color: #082e63;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.05em;
          cursor: pointer;
          white-space: nowrap;
        }

        @media (max-width: 1200px) {
          .episodes-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .featured-podcast {
            grid-template-columns: 1fr;
            max-height: none;
          }

          .featured-visual {
            min-height: 240px;
          }

          .featured-card {
            width: auto;
            margin: -24px 16px 16px;
            justify-self: stretch;
          }

          .podcast-features {
            grid-template-columns: repeat(2, 1fr);
          }

          .episodes-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .never-miss {
            align-items: flex-start;
            flex-direction: column;
          }

          .subscribe-form {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .podcast-features {
            grid-template-columns: 1fr;
          }

          .podcast-feature {
            padding: 14px 16px;
          }

          .feature-divider {
            display: none;
          }

          .episodes-grid {
            grid-template-columns: 1fr;
          }

          .never-miss {
            padding: 16px;
          }

          .subscribe-form {
            flex-direction: column;
          }

          .subscribe-form input,
          .subscribe-form button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}