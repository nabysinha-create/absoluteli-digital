import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalSection } from "@/components/legal/LegalSection";
import { SITE_CONFIG } from "@/lib/constants";

function CookieCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-display text-xl text-espresso">{title}</h3>
      {children}
    </div>
  );
}

export function CookiePolicy() {
  return (
    <>
      <LegalHero title="Cookie Policy" updated="Last Updated: September 2026" />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto flex max-w-3xl flex-col gap-14">
            <p className="text-base leading-relaxed text-brown md:text-lg">
              This Cookie Policy explains how Absoluteli Digital, a brand operated by Brand
              Station FZE, uses cookies and similar technologies when you visit this website.
            </p>

            <LegalSection title="What Are Cookies?">
              <p>Cookies are small data files stored on your device when you visit a website.</p>
              <p>
                They can help websites function correctly, remember preferences, understand how
                visitors use the website, measure performance, and support advertising and
                marketing activities.
              </p>
            </LegalSection>

            <LegalSection title="How We May Use Cookies">
              <p>Our website may use the following categories of cookies:</p>

              <CookieCategory title="Essential Cookies">
                <p>
                  These cookies are necessary for core website functionality, security,
                  navigation, and other essential features.
                </p>
              </CookieCategory>

              <CookieCategory title="Analytics Cookies">
                <p>
                  These cookies help us understand how visitors interact with our website,
                  including information such as pages visited, traffic sources, session activity,
                  and website performance.
                </p>
                <p>We may use this information to improve our website and services.</p>
              </CookieCategory>

              <CookieCategory title="Functional Cookies">
                <p>
                  These cookies may help remember preferences or enable functionality provided
                  through third-party services.
                </p>
              </CookieCategory>

              <CookieCategory title="Advertising and Marketing Cookies">
                <p>
                  Where implemented, these cookies or similar technologies may help us understand
                  campaign performance, measure conversions, build relevant audiences, and deliver
                  or evaluate advertising.
                </p>
                <p>
                  These technologies may be provided by advertising and social media platforms.
                </p>
              </CookieCategory>
            </LegalSection>

            <LegalSection title="Third-Party Technologies">
              <p>
                Our website may use third-party services that place or access cookies or similar
                technologies.
              </p>
              <p>
                Depending on the features currently implemented on the website, these may include
                analytics providers, advertising platforms, social media services, embedded
                content, scheduling platforms, or other digital tools.
              </p>
              <p>These third parties process information according to their own privacy policies.</p>
            </LegalSection>

            <LegalSection title="Managing Cookies">
              <p>
                Most browsers allow you to view, block, restrict, or delete cookies through
                browser settings.
              </p>
              <p>Disabling certain cookies may affect some website functionality.</p>
              <p>
                Where required by applicable law, visitors may also be provided with controls to
                accept or reject non-essential cookies.
              </p>
            </LegalSection>

            <LegalSection title="Changes to This Cookie Policy">
              <p>
                We may update this Cookie Policy when our website, technologies, or legal
                obligations change.
              </p>
              <p>The latest version will be published on this page.</p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>For questions about our use of cookies:</p>
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
