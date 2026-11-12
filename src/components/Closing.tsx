import Image from "next/image";
import { baraatNote, families, homeVenue } from "@/data/wedding";
import { Ornament, PinIcon, SectionHeading } from "./Ornament";
import { Reveal } from "./Reveal";

export function Baraat() {
  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="relative h-56 w-56 shrink-0">
          <Image
            src="/images/baraat-horse.webp"
            alt="A decorated white mare with dhol and shehnai"
            fill
            sizes="224px"
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">The Baraat</p>
          <p lang="hi" className="mt-3 font-hindi text-lg leading-relaxed text-ink">
            {baraatNote.hi}
          </p>
          <p className="mt-3 text-lg italic text-ink/65">{baraatNote.en}</p>
        </div>
      </Reveal>
    </section>
  );
}

export function Venue() {
  return (
    <section className="relative overflow-hidden pt-24">
      <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <SectionHeading eyebrow="Where we celebrate" titleHi="स्थान" title="Venue" />
        <p lang="hi" className="font-hindi text-2xl text-saffron">
          {homeVenue.nameHi}
        </p>
        <p className="mt-1 text-xl text-ink">{homeVenue.name}</p>
        <p className="mt-2 text-lg italic text-ink/65">All ceremonies and the Preetibhoj are held here.</p>
        <a
          href={homeVenue.mapUrl}
          target="_blank"
          rel="noopener"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-saffron/60 bg-ivory px-6 py-2.5 text-sm uppercase tracking-[0.25em] text-saffron transition-colors hover:bg-saffron hover:text-ivory"
        >
          <PinIcon className="h-4 w-4" />
          Get directions
        </a>
      </Reveal>
      {/* Scene sits below the text; its sky fades into the page */}
      <div className="relative -mt-8 aspect-[3/2] w-full md:-mt-24 md:aspect-[16/7]">
        <Image
          src="/images/udaipur-pichola.webp"
          alt="Watercolour of Lake Pichola and the City Palace, Udaipur"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="sky-fade absolute inset-0" />
      </div>
    </section>
  );
}

function NameGroup({
  title,
  names,
  place,
  small = false,
}: {
  title: string;
  names: string[];
  place?: string;
  small?: boolean;
}) {
  return (
    <div className="text-center">
      <p lang="hi" className="font-hindi text-lg text-saffron">
        {title}
      </p>
      <p
        lang="hi"
        className={`mx-auto mt-2 max-w-xl font-hindi leading-loose text-ink/80 ${small ? "text-sm" : "text-[15px]"}`}
      >
        {names.join("  ·  ")}
      </p>
      {place && (
        <p lang="hi" className="mt-1 font-hindi text-sm text-gold">
          {place}
        </p>
      )}
    </div>
  );
}

export function Families() {
  const groups: { titleHi: string; names: string[]; place?: string }[] = [
    families.hosts,
    families.darshanabhilashi,
    families.nanihal,
    families.jawai,
    families.vishesh,
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="With love" titleHi="परिवारजन" title="The Families" />
        <div className="grid gap-12 md:grid-cols-2">
          {groups.map((g, i) => (
            <Reveal key={g.titleHi} delay={(i % 2) * 120}>
              <NameGroup title={g.titleHi} names={g.names} place={g.place} />
            </Reveal>
          ))}
        </div>
        <Ornament className="my-14" />
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <NameGroup title={families.balManuhar.titleHi} names={families.balManuhar.names} small />
          </Reveal>
          <Reveal delay={120}>
            <NameGroup
              title={families.visheshBalManuhar.titleHi}
              names={families.visheshBalManuhar.names}
              small
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative flex min-h-[90svh] flex-col items-center overflow-hidden px-6 pt-24 text-center md:min-h-[900px]">
      {/* Portrait scene: full-bleed on phones, a centred column with feathered sides on desktop */}
      <div className="absolute inset-y-0 left-1/2 w-full -translate-x-1/2 md:w-[600px] md:[mask-image:linear-gradient(to_right,transparent,black_22%,black_78%,transparent)]">
        <Image
          src="/images/shiv-statue.webp"
          alt="Watercolour of the Vishwas Swaroopam Shiva statue above Nathdwara"
          fill
          sizes="(min-width: 768px) 600px, 100vw"
          className="object-cover object-bottom"
        />
      </div>
      <div className="sky-fade absolute inset-0" />
      <Reveal className="relative">
        <p lang="hi" className="font-hindi text-xl leading-relaxed text-ink">
          आपका आगमन ही हमारे लिए गौरव की अनुभूति होगी ।
        </p>
        <p className="mt-2 text-lg italic text-ink/65">Your presence will be our honour.</p>
        <p className="mt-8 font-script text-5xl text-saffron">Neha &amp; Pawan</p>
        <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gold">21 · 11 · 2026</p>
      </Reveal>
      <p className="absolute bottom-4 z-10 rounded-full bg-ivory/85 px-4 py-1.5 text-xs tracking-[0.2em] text-ink/70">
        Created by{" "}
        <a
          href="https://bpss.in"
          target="_blank"
          rel="noopener"
          className="text-saffron underline decoration-gold/50 underline-offset-4 hover:decoration-saffron"
        >
          bpss.in
        </a>
      </p>
    </footer>
  );
}
