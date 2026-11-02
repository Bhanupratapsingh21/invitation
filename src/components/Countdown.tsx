"use client";

import { useSyncExternalStore } from "react";
import { weddingDate } from "@/data/wedding";
import { Reveal } from "./Reveal";

const TARGET = new Date(weddingDate).getTime();

function remaining(now: number) {
  const ms = Math.max(0, TARGET - now);
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor(ms / 3_600_000) % 24,
    Minutes: Math.floor(ms / 60_000) % 60,
    Seconds: Math.floor(ms / 1000) % 60,
  };
}

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

// Whole seconds, so the snapshot stays stable between ticks.
const getNow = () => Math.floor(Date.now() / 1000) * 1000;
// Null on the server so the first client render matches the static HTML.
const getServerNow = () => null;

export function Countdown() {
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);
  const parts = now === null ? null : remaining(now);

  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Counting down to</p>
        <p lang="hi" className="mt-2 font-hindi text-2xl text-saffron">
          पाणिग्रहण संस्कार
        </p>
        <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-5">
          {(["Days", "Hours", "Minutes", "Seconds"] as const).map((label) => (
            <div
              key={label}
              className="rounded-t-full border border-gold/40 bg-white/50 px-2 pb-4 pt-6"
            >
              <p className="text-3xl tabular-nums text-ink sm:text-5xl">
                {parts ? String(parts[label]).padStart(2, "0") : "--"}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-lg italic text-ink/70">Saturday, 21 November 2026 · 9:00 AM</p>
      </Reveal>
    </section>
  );
}
