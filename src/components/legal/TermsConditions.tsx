import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE_CONFIG } from "@/lib/constants";

export function TermsConditions() {
  return (
    <>
      <LegalHero title="Website Terms & Conditions" updated="Last Updated: September 2026" />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-brown md:text-lg">
              <p>
                These Website Terms &amp; Conditions govern your use of the Absoluteli Digital
                website. Absoluteli Digital is a brand operated by Brand Station FZE, a company
                registered in the United Arab Emirates (&ldquo;Brand Station&rdquo;,
                &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
              </p>
              <p>By accessing or using this website, you agree to these terms.</p>
            </div>

            <LegalSection title="About Absoluteli Digital">
              <p>
                Absoluteli Digital is a creative and digital growth studio providing services that
                may include creative production, social media and content, campaign and brand
                creative, performance marketing, website and ecommerce solutions, and related
                digital services.
              </p>
              <p>
                Information presented on this website is provided for general informational and
                promotional purposes and does not constitute a binding offer or service agreement.
              </p>
            </LegalSection>

            <LegalSection title="Legal Entity">
              <p>
                Absoluteli Digital is a trading brand operated by Brand Station FZE. Unless
                expressly stated otherwise in writing, commercial engagements entered into through
                or in connection with Absoluteli Digital are contracted with Brand Station FZE.
              </p>
            </LegalSection>

            <LegalSection title="Website Content">
              <p>
                We aim to keep the information on this website accurate and current. However,
                services, capabilities, descriptions, availability, processes, and other
                information may change without notice.
              </p>
              <p>
                Nothing published on this website guarantees the availability, scope, price,
                timeline, or outcome of any service.
              </p>
              <p>
                Specific services are governed by the proposal, quotation, statement of work,
                contract, or other agreement entered into with the client.
              </p>
            </LegalSection>

            <LegalSection title="Intellectual Property">
              <p>
                Unless otherwise stated, the Absoluteli Digital website and its original content,
                including branding, text, graphics, layouts, creative concepts, videos, animations,
                designs, and other materials created by Absoluteli Digital are protected by
                applicable intellectual property laws.
              </p>
              <p>You may view and share links to our website for legitimate purposes.</p>
              <p>
                You may not reproduce, copy, modify, distribute, commercially exploit, republish,
                or present our original website content or creative work as your own without prior
                written permission.
              </p>
            </LegalSection>

            <LegalSection title="Portfolio & Creative Work">
              <p>
                Our website may feature commissioned client work, internal creative work,
                demonstrations, experimental work, speculative campaigns, or concept projects.
              </p>
              <p>
                Where appropriate, non-commissioned work may be identified using descriptions such
                as &ldquo;Concept Project,&rdquo; &ldquo;Concept,&rdquo; &ldquo;Creative
                Experiment,&rdquo; or similar terminology.
              </p>
              <p>
                Concept work is created to demonstrate creative thinking, production capability,
                visual direction, or potential applications. Its inclusion does not imply a
                commercial relationship, endorsement, partnership, or commissioned engagement with
                any brand that may be referenced.
              </p>
              <p>
                Third-party trademarks, brand names, and intellectual property remain the property
                of their respective owners.
              </p>
            </LegalSection>

            <LegalSection title="AI & Technology-Assisted Production">
              <p>
                Absoluteli Digital may use artificial intelligence and other digital technologies
                as part of its research, ideation, design, production, editing, optimization, or
                creative workflows.
              </p>
              <p>
                Technology is used as part of our production capability and does not imply that
                all work displayed or delivered by Absoluteli Digital is entirely AI-generated.
              </p>
            </LegalSection>

            <LegalSection title="No Performance Guarantee">
              <p>
                Creative, advertising, social media, marketing, ecommerce, website, and digital
                services are affected by numerous factors outside our control.
              </p>
              <p>
                Examples, concepts, strategies, case studies, or information presented on this
                website do not constitute a guarantee of specific commercial results, revenue,
                sales, engagement, reach, leads, return on advertising spend, or other performance
                outcomes.
              </p>
            </LegalSection>

            <LegalSection title="Enquiries and Proposals">
              <p>
                Submitting an enquiry through this website, email, WhatsApp, a booking platform, or
                another communication channel does not create a client relationship or contractual
                obligation.
              </p>
              <p>
                A commercial engagement begins only when the relevant proposal, agreement,
                quotation, statement of work, or other applicable terms have been accepted by the
                parties.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Platforms">
              <p>
                Our services and website may involve or reference third-party platforms, software,
                social networks, advertising platforms, ecommerce platforms, hosting providers, AI
                tools, and other external services.
              </p>
              <p>
                Absoluteli Digital does not control these third parties and is not responsible for
                changes to their pricing, policies, algorithms, availability, functionality, terms,
                outages, or other actions.
              </p>
            </LegalSection>

            <LegalSection title="External Links">
              <p>
                Our website may contain links to third-party websites or services. These links are
                provided for convenience or reference only.
              </p>
              <p>
                We are not responsible for the content, security, availability, or privacy
                practices of external websites.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of Liability">
              <p>
                To the extent permitted by applicable law, Absoluteli Digital shall not be liable
                for indirect, incidental, consequential, or special losses arising solely from the
                use of, or inability to use, this website or reliance on general information
                presented on it.
              </p>
              <p>
                Nothing in these Terms excludes or limits liability where such exclusion or
                limitation is prohibited by applicable law.
              </p>
            </LegalSection>

            <LegalSection title="Governing Law">
              <p>
                These Website Terms &amp; Conditions shall be governed by the applicable laws of
                the United Arab Emirates and the laws and regulations applicable to the
                jurisdiction in which Absoluteli Digital is legally established, unless otherwise
                required by applicable law.
              </p>
              <p>
                Client engagements may be subject to separate governing-law and dispute-resolution
                provisions contained in the relevant service agreement.
              </p>
            </LegalSection>

            <LegalSection title="Changes to These Terms">
              <p>
                We may revise these Terms &amp; Conditions from time to time. The latest version
                published on this website will apply from its stated effective date.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>For questions regarding these Terms &amp; Conditions:</p>
              <div className="flex flex-col gap-1 text-espresso">
                <span className="font-display text-lg">Absoluteli Digital</span>
                <span>Operated by Brand Station FZE</span>
                <span>United Arab Emirates</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-copper transition-colors hover:text-espresso"
                >
                  Email: {SITE_CONFIG.email}
                </a>
              </div>
            </LegalSection>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
