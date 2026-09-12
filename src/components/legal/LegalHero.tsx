import { Container } from "@/components/ui/Container";

export function LegalHero({ title, updated }: { title: string; updated?: string }) {
  return (
    <section className="bg-espresso-deep px-6 pb-16 pt-36 text-cream md:px-10 md:pb-20 md:pt-44 xl:px-16">
      <Container className="flex flex-col gap-4">
        <span className="eyebrow text-copper-light">Legal</span>
        <h1 className="font-display text-display-lg leading-[1.02] text-cream">{title}</h1>
        {updated ? <p className="text-sm text-cream-dim">{updated}</p> : null}
      </Container>
    </section>
  );
}
