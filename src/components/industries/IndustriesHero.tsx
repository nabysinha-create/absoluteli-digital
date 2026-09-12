"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STRIP = ["Interiors", "Furniture", "Food", "Beauty", "Fashion", "Hospitality"];

export function IndustriesHero() {
  return (
    <section className="bg-ivory px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow text-copper"
          >
            Industries
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-display-xl leading-[0.98] text-espresso"
          >
            Some brands have to be seen to be understood.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="max-w-lg text-base leading-relaxed text-brown md:text-lg"
          >
            We work with visually driven businesses where products, spaces and experiences are
            central to the story.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.26 }}
            className="eyebrow flex flex-wrap gap-x-2 gap-y-1 text-brown/60"
          >
            {STRIP.map((item, i) => (
              <span key={item}>
                {item}
                {i < STRIP.length - 1 ? <span className="mx-2 text-brown/30">·</span> : null}
              </span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.34 }}
            className="pt-2"
          >
            <Link
              href="#interiors-furniture"
              className="eyebrow inline-flex items-center gap-2 text-espresso transition-colors hover:text-copper"
            >
              Find Your Industry
              <span aria-hidden>↓</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative aspect-[4/5] w-full overflow-hidden"
        >
          <Image
            src="/images/industries-page/hero/spectrum.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
