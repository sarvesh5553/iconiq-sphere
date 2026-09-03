"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

type NewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

const newsItems: NewsItem[] = [
  {
    id: 1,
    category: "BUSINESS",
    date: "SEP 02, 2026",
    title: "Global Business Leaders Prepare for a New Era of Growth",
    description:
      "Leaders across industries are adapting strategies, technology and talent for a rapidly changing global economy.",
    image: "/news1.jpg",
    href: "/news/global-business-leaders",
  },
  {
    id: 2,
    category: "TECHNOLOGY",
    date: "SEP 01, 2026",
    title: "Technology Innovation Continues to Reshape Modern Enterprise",
    description:
      "New technologies are creating opportunities for organizations to improve performance and build smarter businesses.",
    image: "/news2.jpg",
    href: "/news/technology-innovation",
  },
  {
    id: 3,
    category: "LEADERSHIP",
    date: "AUG 30, 2026",
    title: "The Leadership Ideas Shaping Tomorrow's Organizations",
    description:
      "A closer look at the leadership principles helping organizations navigate change and create lasting impact.",
    image: "/news3.jpg",
    href: "/news/future-leadership",
  },
  {
    id: 4,
    category: "INNOVATION",
    date: "AUG 28, 2026",
    title: "The Next Wave of Innovation Is Already Underway",
    description:
      "From emerging technologies to new business models, innovation is opening new possibilities across industries.",
    image: "/news4.jpg",
    href: "/news/next-wave-innovation",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="w-full border-b border-slate-100 bg-white scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-14">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-7 flex items-end justify-between gap-4 border-b border-slate-200 pb-5 sm:mb-8 sm:pb-6">
          {/* LEFT */}

          <div className="min-w-0">
            <span className="mb-2 block whitespace-nowrap text-[8px] font-black uppercase tracking-[0.18em] text-[#2a619d] sm:text-[10px] sm:tracking-[0.15em]">
              NEWS &amp; UPDATES
            </span>

            <h2 className="whitespace-nowrap text-[27px] font-black uppercase leading-none tracking-[-0.045em] text-[#082e63] sm:text-[36px] lg:text-[42px]">
              Latest News
            </h2>
          </div>

          {/* RIGHT */}

          <Link
            href="/news"
            className="group flex shrink-0 items-center gap-2 border-b-2 border-[#285a9c] pb-1 text-[8px] font-black uppercase tracking-[0.08em] text-[#174a84] transition-all duration-200 hover:gap-3 sm:text-[10px]"
          >
            <span className="whitespace-nowrap">
              View All News
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.8}
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
            />
          </Link>
        </div>

        {/* =====================================================
            NEWS GRID / MOBILE HORIZONTAL SCROLL
        ====================================================== */}

        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide lg:overflow-visible">
          <div
            className="
              flex
              gap-3
              sm:grid
              sm:grid-cols-2
              sm:gap-5
              lg:grid
              lg:grid-cols-4
              lg:gap-5
            "
          >
            {newsItems.map((news) => (
              <NewsCard
                key={news.id}
                news={news}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLLBAR HIDE
      ====================================================== */}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   NEWS CARD
========================================================= */

function NewsCard({
  news,
}: {
  news: NewsItem;
}) {
  return (
    <Link
      href={news.href}
      className="
        group
        relative
        flex
        min-w-0
        flex-col
        overflow-hidden
        border
        border-[#dce4ed]
        bg-white

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#b9c8d9]
        hover:shadow-[0_14px_35px_rgba(8,46,99,0.10)]

        /* MOBILE */
        w-[calc((100vw-52px)/3)]
        min-w-[calc((100vw-52px)/3)]
        min-h-[265px]

        /* TABLET */
        sm:w-auto
        sm:min-w-0
        sm:min-h-[295px]

        /* DESKTOP */
        lg:min-h-[300px]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[105px] w-full shrink-0 overflow-hidden bg-[#eaf0f7] sm:h-[125px] lg:h-[130px]">
        {/* MAIN IMAGE */}

        <img
          src={news.image}
          alt={news.title}
          className="
            relative
            z-10
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.04]
          "
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* =================================================
            PREMIUM FALLBACK
        ================================================== */}

        <div className="absolute inset-0 flex items-end bg-[#e8eef6]">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-[-30px] top-[-40px] h-[150px] w-[150px] rounded-full border border-[#9db2cb]" />

            <div className="absolute left-[45px] top-[-15px] h-[120px] w-[120px] rounded-full border border-[#b4c4d7]" />

            <div className="absolute bottom-[-65px] right-[-25px] h-[170px] w-[170px] rounded-full border border-[#9db2cb]" />
          </div>

          <div className="relative z-10 p-3 sm:p-4">
            <span className="text-[7px] font-black tracking-[0.18em] text-[#2d63a8] sm:text-[8px]">
              ICONIQSPHERE
            </span>
          </div>
        </div>

        {/* =================================================
            CATEGORY
        ================================================== */}

        <div className="absolute left-2.5 top-2.5 z-20 bg-[#082e63] px-2 py-1.5 sm:left-3 sm:top-3 sm:px-2.5">
          <span className="text-[6px] font-black uppercase tracking-[0.12em] text-white sm:text-[7px] sm:tracking-[0.14em]">
            {news.category}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-4">
        {/* DATE */}

        <div className="mb-2 flex items-center gap-1.5 text-[6.5px] font-bold uppercase tracking-[0.1em] text-[#8194ac] sm:mb-2.5 sm:text-[8px]">
          <Clock3
            size={10}
            strokeWidth={1.6}
            className="shrink-0 sm:h-[11px] sm:w-[11px]"
          />

          <span>{news.date}</span>
        </div>

        {/* TITLE */}

        <h3 className="line-clamp-2 text-[12px] font-black leading-[1.18] tracking-[-0.015em] text-[#082e63] transition-colors duration-200 group-hover:text-[#2d63a8] sm:text-[15px] sm:leading-[1.15] lg:text-[15px]">
          {news.title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2 line-clamp-2 text-[8px] leading-[1.5] text-[#7186a3] sm:mt-2.5 sm:text-[9.5px] sm:leading-[1.55]">
          {news.description}
        </p>

        {/* FOOTER */}

        <div className="mt-auto flex items-center justify-between border-t border-[#e5eaf0] pt-2.5 sm:pt-3">
          <span className="text-[6.5px] font-black uppercase tracking-[0.13em] text-[#082e63] sm:text-[8px] sm:tracking-[0.16em]">
            Read News
          </span>

          <span className="flex h-6 w-6 items-center justify-center border border-[#cdd8e4] text-[#082e63] transition-all duration-200 group-hover:border-[#082e63] group-hover:bg-[#082e63] group-hover:text-white sm:h-7 sm:w-7">
            <ArrowUpRight
              size={11}
              strokeWidth={1.8}
              className="sm:h-[13px] sm:w-[13px]"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}