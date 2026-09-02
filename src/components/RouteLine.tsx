type Step = {
  stage: string;
  description: string;
};

export default function RouteLine({ steps }: { steps: Step[] }) {
  return (
    <div>
      <ol className="md:hidden">
        {steps.map((step, i) => (
          <li key={step.stage} className="relative pb-8 pl-8 last:pb-0">
            {i < steps.length - 1 && (
              <span
                className="absolute top-4 bottom-0 left-[5px] w-px border-l-2 border-dashed border-maroon/40"
                aria-hidden="true"
              />
            )}
            <span
              className="absolute top-1 left-0 h-3 w-3 rounded-full bg-maroon"
              aria-hidden="true"
            />
            <p className="font-serif text-lg text-maroon italic">
              {step.stage}
            </p>
            <p className="mt-1 text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="hidden md:block">
        <div className="flex items-center">
          {steps.map((step, i) => (
            <div key={step.stage} className="flex flex-1 items-center last:flex-none">
              <span
                className="h-3 w-3 shrink-0 rounded-full bg-maroon"
                aria-hidden="true"
              />
              {i < steps.length - 1 && (
                <span
                  className="mx-2 h-px flex-1 border-t-2 border-dashed border-maroon/40"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.stage}>
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
