import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE_CONFIG } from "@/lib/constants";

const USES = [
  "Respond to enquiries and requests.",
  "Understand your business, project, or creative requirements.",
  "Prepare proposals, quotations, strategies, or recommendations.",
  "Provide and manage our services.",
  "Communicate with existing and prospective clients.",
  "Improve our website, services, content, and user experience.",
  "Measure website and marketing performance.",
  "Maintain security and prevent misuse of our website.",
  "Comply with applicable legal and regulatory requirements.",
];

export function PrivacyPolicy() {
  return (
    <>
      <LegalHero title="Privacy Policy" updated="Last Updated: September 2026" />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-brown md:text-lg">
              <p>
                Absoluteli Digital (&ldquo;Absoluteli Digital&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a brand operated by Brand Station FZE, a
                company registered in the United Arab Emirates. Brand Station FZE is the legal
                entity responsible for operating this website and, where applicable, processing
                personal information collected through it.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, store, and protect information
                when you visit our website, contact us, submit an enquiry, or engage with our
                services.
              </p>
            </div>

            <LegalSection title="Information We Collect">
              <p>
                We may collect personal information that you voluntarily provide to us, including
                your name, company or brand name, email address, telephone number, project
                details, budget information, and any other information you provide through our
                contact forms, email, WhatsApp, discovery calls, or other communication channels.
              </p>
              <p>
                We may also automatically collect limited technical information when you visit our
                website, such as your IP address, browser type, device information, pages visited,
                referral source, and website interaction data.
              </p>
            </LegalSection>

            <LegalSection title="How We Use Your Information">
              <p>We may use the information we collect to:</p>
              <ul className="flex flex-col gap-2 pl-5 marker:text-copper list-disc">
                {USES.map((use) => (
                  <li key={use}>{use}</li>
                ))}
              </ul>
              <p className="font-medium text-espresso">
                We do not sell your personal information.
              </p>
            </LegalSection>

            <LegalSection title="Marketing Communications">
              <p>
                Where permitted by applicable law, we may contact businesses or individuals
                regarding Absoluteli Digital services that we reasonably believe may be relevant
                to them.
              </p>
              <p>
                You may ask us to stop sending marketing communications at any time by using an
                unsubscribe option where provided or by contacting us directly.
              </p>
            </LegalSection>

            <LegalSection title="Cookies and Analytics">
              <p>
                Our website may use cookies and similar technologies to operate the website,
                understand visitor behaviour, measure performance, and support marketing
                activities.
              </p>
              <p>
                These may include services provided by third parties such as analytics,
                advertising, scheduling, hosting, or social media platforms.
              </p>
              <p>
                More information is available in our{" "}
                <Link
                  href="/cookies"
                  className="text-copper underline underline-offset-4 transition-colors hover:text-espresso"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Services">
              <p>
                We may use trusted third-party service providers to operate our business and
                website, including hosting providers, analytics platforms, advertising platforms,
                scheduling tools, email services, cloud services, and other technology providers.
              </p>
              <p>
                These providers may process limited information on our behalf in accordance with
                their own privacy policies and applicable data protection requirements.
              </p>
              <p>
                Our website may also contain links to third-party websites. Absoluteli Digital is
                not responsible for the privacy practices or content of external websites.
              </p>
            </LegalSection>

            <LegalSection title="Data Retention">
              <p>
                We retain personal information only for as long as reasonably necessary for the
                purposes for which it was collected, to maintain appropriate business records,
                resolve disputes, enforce agreements, or comply with legal obligations.
              </p>
            </LegalSection>

            <LegalSection title="Data Security">
              <p>
                We take reasonable administrative and technical measures to protect information
                against unauthorized access, loss, misuse, alteration, or disclosure.
              </p>
              <p>
                However, no internet transmission or electronic storage system can be guaranteed
                to be completely secure.
              </p>
            </LegalSection>

            <LegalSection title="Your Rights">
              <p>
                Depending on your location and applicable law, you may have rights regarding your
                personal information, including the right to request access, correction, deletion,
                restriction, or withdrawal of consent.
              </p>
              <p>
                To make a privacy-related request, please contact us using the email address
                below.
              </p>
            </LegalSection>

            <LegalSection title="International Visitors">
              <p>
                Absoluteli Digital is based in the United Arab Emirates and may work with clients
                and service providers internationally. As a result, information may be processed
                or stored in jurisdictions outside your country of residence where permitted by
                applicable law.
              </p>
            </LegalSection>

            <LegalSection title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our
                services, technologies, or legal requirements. The latest version will always be
                published on this page with the updated date.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                For questions regarding this Privacy Policy or the handling of your personal
                information, contact:
              </p>
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
