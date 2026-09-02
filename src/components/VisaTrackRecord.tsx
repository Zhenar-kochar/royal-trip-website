"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export type TrackRecordStat = {
  value: number | null;
  suffix?: string;
  display?: string;
  label: string;
  note?: string;
};

function StatCircle({
  stat,
  inView,
  sizeClass,
  textClass,
}: {
  stat: TrackRecordStat;
  inView: boolean;
  sizeClass: string;
  textClass: string;
}) {
  const count = useCountUp(stat.value ?? 0, inView && stat.value !== null);
  const display =
    stat.value === null ? stat.display : `${count}${stat.suffix ?? ""}`;

  return (
    <dd
      className={`tabular-nums flex ${sizeClass} items-center justify-center rounded-full border-2 border-maroon px-2 text-center font-serif text-maroon ${textClass}`}
    >
      {display}
    </dd>
  );
}

export default function VisaTrackRecord({
  stats,
  monthly,
  yearly,
}: {
  stats: TrackRecordStat[];
  monthly: number;
  yearly: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const monthlyCount = useCountUp(monthly, inView);
  const yearlyCount = useCountUp(yearly, inView);

  return (
    <div ref={ref}>
      <p className="mt-4 text-base text-muted">
        We process approximately{" "}
        <span className="tabular-nums">{monthlyCount}</span> visa
        applications per month — around{" "}
        <span className="tabular-nums">{yearlyCount}</span> per year.
      </p>

      <dl className="mt-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:hidden">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-3 text-center"
            >
              <StatCircle
                stat={stat}
                inView={inView}
                sizeClass="h-20 w-20"
                textClass="text-lg"
              />
              <dt className="text-sm text-body">
                {stat.label}
                {stat.note && (
                  <span className="mt-0.5 block text-xs text-muted">
                    {stat.note}
                  </span>
                )}
              </dt>
            </div>
          ))}
        </div>

        <div className="hidden sm:block">
          <div className="flex items-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-1 items-center last:flex-none"
              >
                <StatCircle
                  stat={stat}
                  inView={inView}
                  sizeClass="h-24 w-24 shrink-0"
                  textClass="text-xl"
                />
                {i < stats.length - 1 && (
                  <span
                    className="mx-2 h-px flex-1 border-t-2 border-dashed border-maroon/40"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <dt key={stat.label} className="text-sm text-body">
                {stat.label}
                {stat.note && (
                  <span className="mt-0.5 block text-xs text-muted">
                    {stat.note}
                  </span>
                )}
              </dt>
            ))}
          </div>
        </div>
      </dl>
    </div>
  );
}
