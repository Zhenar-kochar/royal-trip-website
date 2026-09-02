"use client";

import type { CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

type Step = {
  stage: string;
  description: string;
};

const STEP_DELAY = 550;
const DOT_DURATION = 350;
const CONNECTOR_GAP = 200;
const CONNECTOR_DURATION = 350;
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function RouteLine({ steps }: { steps: Step[] }) {
  const { ref, inView, reducedMotion } = useInView<HTMLDivElement>(0.3);

  const dotStyle = (i: number): CSSProperties =>
    reducedMotion
      ? {}
      : {
          opacity: inView ? 1 : 0,
          transform: inView ? "scale(1)" : "scale(0.4)",
          transition: `opacity ${DOT_DURATION}ms ${EASE}, transform ${DOT_DURATION}ms ${EASE}`,
          transitionDelay: `${i * STEP_DELAY}ms`,
        };

  const labelStyle = (i: number): CSSProperties =>
    reducedMotion
      ? {}
      : {
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(8px)",
          transition: `opacity ${DOT_DURATION}ms ease-out, transform ${DOT_DURATION}ms ease-out`,
          transitionDelay: `${i * STEP_DELAY}ms`,
        };

  const connectorStyleX = (i: number): CSSProperties =>
    reducedMotion
      ? {}
      : {
          clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transition: `clip-path ${CONNECTOR_DURATION}ms ${EASE}`,
          transitionDelay: `${i * STEP_DELAY + CONNECTOR_GAP}ms`,
        };

  const connectorStyleY = (i: number): CSSProperties =>
    reducedMotion
      ? {}
      : {
          clipPath: inView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
          transition: `clip-path ${CONNECTOR_DURATION}ms ${EASE}`,
          transitionDelay: `${i * STEP_DELAY + CONNECTOR_GAP}ms`,
        };

  return (
    <div ref={ref}>
      <ol className="md:hidden">
        {steps.map((step, i) => (
          <li key={step.stage} className="relative pb-8 pl-8 last:pb-0">
            {i < steps.length - 1 && (
              <span
                className="absolute top-4 bottom-0 left-[5px] w-px border-l-2 border-dashed border-maroon/40"
                style={connectorStyleY(i)}
                aria-hidden="true"
              />
            )}
            <span
              className="absolute top-1 left-0 h-3 w-3 rounded-full bg-maroon"
              style={dotStyle(i)}
              aria-hidden="true"
            />
            <p
              className="font-serif text-lg text-maroon italic"
              style={labelStyle(i)}
            >
              {step.stage}
            </p>
            <p className="mt-1 text-sm text-muted" style={labelStyle(i)}>
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="hidden md:block">
        <div className="flex items-center">
          {steps.map((step, i) => (
            <div
              key={step.stage}
              className="flex flex-1 items-center last:flex-none"
            >
              <span
                className="h-3 w-3 shrink-0 rounded-full bg-maroon"
                style={dotStyle(i)}
                aria-hidden="true"
              />
              {i < steps.length - 1 && (
                <span
                  className="mx-2 h-px flex-1 border-t-2 border-dashed border-maroon/40"
                  style={connectorStyleX(i)}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.stage} style={labelStyle(i)}>
              <p className="font-serif text-lg text-maroon italic">
                {step.stage}
              </p>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
