import Link from "next/link";
import PassportStamp from "@/components/PassportStamp";
import RouteLine from "@/components/RouteLine";
import ServiceIcon from "@/components/ServiceIcon";

const SERVICES = [
  { title: "Flights", blurb: "Domestic and international booking.", icon: "flights" },
  { title: "Hotels", blurb: "Stays matched to your itinerary.", icon: "hotels" },
  { title: "Visas", blurb: "Applications prepared and checked.", icon: "visas" },
  { title: "Study Abroad", blurb: "Admissions and placement support.", icon: "study" },
  { title: "Immigration", blurb: "Residency and relocation guidance.", icon: "immigration" },
  { title: "Travel Groups", blurb: "Organized trips, planned together.", icon: "groups" },
  { title: "Medical Travel", blurb: "Care abroad, coordinated end to end.", icon: "medical" },
  {
    title: "International Investment",
    blurb: "Guidance for cross-border opportunities.",
    icon: "investment",
  },
  { title: "Transfers", blurb: "Airport and intercity transfers, sorted.", icon: "transfers" },
  { title: "Insurance", blurb: "Travel insurance, sourced and explained.", icon: "insurance" },
  {
    title: "Translation",
    blurb: "Certified translations for visa paperwork.",
    icon: "translation",
  },
] as const;

const STEPS = [
  {
    stage: "Sulaymaniyah",
    description: "Tell us where you're going. Call, message, or stop by.",
  },
  {
    stage: "In review",
    description:
      "Get a verified proposal. We check routes, requirements, and pricing before anything is confirmed.",
  },
  {
    stage: "Confirmed",
    description:
      "Lock it in with an advisor. A real person walks you through documents, costs, and dates.",
  },
  {
    stage: "Destination",
    description:
      "Travel with support. We stay reachable before you leave and while you're away.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-medium text-muted">
              Iraq-based travel &amp; mobility agency
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-body sm:text-5xl lg:text-6xl">
              The world is closer with{" "}
              <span className="text-maroon italic">Royal Trip.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted">
              First class service, everytime. Flights, hotels, visas, study
              placements, and immigration support — planned by people who
              pick up the phone.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
              >
                Contact us
              </Link>
              <a
                href="tel:+9647735199595"
                className="link-underline text-sm text-muted hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
              >
                or call +964 773 519 9595
              </a>
            </div>

            <p className="mt-10 border-t border-border pt-6 text-sm text-muted">
              Visas prepared for the UK, Canada, US, Ireland, New Zealand,
              Australia, and Schengen countries — Greece, France, Spain,
              Italy, Belgium, Czech Republic, Hungary, Portugal, Sweden,
              Norway, Switzerland, Austria, Finland, Netherlands, and Poland.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <PassportStamp className="aspect-square w-72 max-w-full sm:w-80 md:w-96 lg:w-[26rem]" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-body">
            Where we can help
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Link
                key={service.title}
                href="/contact"
                className={`group relative flex flex-col justify-between gap-8 bg-white p-8 transition-all duration-200 hover:z-10 hover:-translate-y-0.5 hover:bg-maroon-tint hover:shadow-md focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-maroon ${
                  i === SERVICES.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <ServiceIcon
                  name={service.icon}
                  className="h-9 w-9 text-maroon transition-transform duration-200 group-hover:scale-110"
                />
                <div>
                  <h3 className="font-serif text-lg text-body group-hover:text-maroon">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{service.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-maroon-tint">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-body">How it works</h2>
          <div className="mt-12">
            <RouteLine steps={STEPS} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-maroon-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <h2 className="max-w-md font-serif text-2xl text-cream sm:text-3xl">
            Ready to start planning your trip?
          </h2>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-maroon-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Start planning
            </Link>
            <a
              href="tel:+9647735199595"
              className="link-underline text-sm text-cream/80 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              or call +964 773 519 9595
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
