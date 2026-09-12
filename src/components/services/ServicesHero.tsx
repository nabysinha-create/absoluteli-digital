"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ServicesHero() {
  return (
    <section className="bg-ivory px-6 pb-16 pt-36 md:px-10 md:pb-20 md:pt-44 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="eyebrow text-copper"
          >
            What We Do
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-display-xl leading-[0.98] text-espresso"
          >
            From idea to attention.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.18 }}
            className="font-display text-2xl italic text-brown md:text-3xl"
          >
            Creative that doesn&rsquo;t stop at creation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.26 }}
            className="max-w-lg text-base leading-relaxed text-brown md:text-lg"
          >
            We create the content, build the campaign and help put it in front of the people who matter.
          </motion.p>

          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.34 }}
            className="eyebrow text-copper"
          >
            Create → Manage → Amplify
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.42 }}
            className="pt-2"
          >
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative aspect-video w-full overflow-hidden"
        >
          <video
            className="h-full w-full object-cover"
            src="/images/services/creative-production/source-asset.mp4"
            poster="/images/services/creative-production/source-asset-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
