"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkHero() {
  return (
    <section className="bg-ivory px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="eyebrow text-copper"
        >
          Selected Work
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
          className="font-display text-display-xl leading-[0.98] text-espresso max-w-4xl"
        >
          Ideas made visible.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
          className="font-display text-2xl italic text-brown md:text-3xl"
        >
          Products transformed. Stories brought to life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
          className="max-w-xl text-base leading-relaxed text-brown md:text-lg"
        >
          A selection of campaign films, product transformations, social content and visual
          storytelling created for brands across visually driven industries.
        </motion.p>
      </div>
    </section>
  );
}
