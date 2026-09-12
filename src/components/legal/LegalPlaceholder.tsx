import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Used for legal pages whose final copy hasn't been provided yet (Terms,
 * Cookies). Do not fill this with invented legal text — these are real
 * documents with real consequences if wrong. Swap in the real copy once
 * it's confirmed, following the pattern in PrivacyPolicy.tsx.
 */
export function LegalPlaceholder({ title }: { title: string }) {
  return (
    <>
      <LegalHero title={title} />

      <section className="bg-ivory py-16 md:py-24">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col gap-6">
            <p className="text-base leading-relaxed text-brown md:text-lg">
              This page is being finalized and will be published here shortly.
            </p>
            <p className="text-base leading-relaxed text-brown md:text-lg">
              In the meantime, if you have any questions, please contact us directly at{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-copper underline underline-offset-4 transition-colors hover:text-espresso"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
