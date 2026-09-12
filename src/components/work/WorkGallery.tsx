"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { IndustryFilter } from "@/components/work/IndustryFilter";
import { CaseStudyFeatured } from "@/components/work/CaseStudyFeatured";
import { CaseStudyCollage } from "@/components/work/CaseStudyCollage";
import { CaseStudySequence } from "@/components/work/CaseStudySequence";
import { CaseStudyCinematic } from "@/components/work/CaseStudyCinematic";
import { Container } from "@/components/ui/Container";
import { CLOUD_COMFORT, DEARGALS, BOTANICAL_SKINCARE, RESTAURANT_CONCEPT, WORK_INDUSTRIES } from "@/data/case-studies";

const CASE_STUDIES = [
  { study: CLOUD_COMFORT, Component: CaseStudyFeatured },
  { study: DEARGALS, Component: CaseStudyCollage },
  { study: BOTANICAL_SKINCARE, Component: CaseStudySequence },
  { study: RESTAURANT_CONCEPT, Component: CaseStudyCinematic },
];

export function WorkGallery() {
  const searchParams = useSearchParams();
  const requestedIndustry = searchParams.get("industry");
  const validIndustry =
    requestedIndustry && (WORK_INDUSTRIES as readonly string[]).includes(requestedIndustry)
      ? requestedIndustry
      : "All";

  const [active, setActive] = useState(validIndustry);

  const visible = CASE_STUDIES.filter(({ study }) => active === "All" || study.industry === active);

  return (
    <>
      <IndustryFilter active={active} onChange={setActive} />

      {visible.length === 0 ? (
        <section className="bg-ivory py-24 text-center md:py-32">
          <Container>
            <p className="font-display text-2xl text-espresso">More {active} work is on the way.</p>
            <p className="mt-3 text-brown">
              Get in touch — this could be the first project we feature here.
            </p>
          </Container>
        </section>
      ) : (
        visible.map(({ study, Component }) => <Component key={study.slug} study={study} />)
      )}
    </>
  );
}
