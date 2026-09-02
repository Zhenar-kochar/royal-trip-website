import type { Metadata } from "next";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "About & Services — Royal Trip",
  description:
    "Royal Trip helps individuals, families, students, and businesses plan and complete journeys with clarity and reliable human support.",
};

const VALUES = [
  "Customer care",
  "Clarity",
  "Reliability",
  "Knowledge",
  "Transparency",
  "Growth",
];

const TRACK_RECORD_STATS = [
  { value: "40%", label: "United Kingdom" },
  { value: "20%", label: "Canada" },
  { value: "55%", label: "Schengen countries" },
  { value: "None", label: "Yearly error margin", note: "currently reported" },
] as const;

const SERVICES = [
  {
    title: "Flights",
    icon: "flights",
    description:
      "We book domestic and international flights across all major carriers, comparing routes and fares to fit your schedule and budget. From single tickets to multi-city itineraries, our advisors handle changes, connections, and special requests directly.",
  },
  {
    title: "Hotels",
    icon: "hotels",
    description:
      "We match accommodation to your itinerary and budget, from business stays to family holidays, with bookings confirmed directly with trusted partners in Iraq and abroad.",
  },
  {
    title: "Visa Services",
    icon: "visas",
    description:
      "We prepare and submit visa applications for tourist, business, and study travel, checking documentation against each country's current requirements before submission. Coverage includes Canada, the United Kingdom, the United States, Ireland, New Zealand, Australia, and the following Schengen countries: Greece, France, Spain, Italy, Belgium, Czech Republic, Hungary, Portugal, Sweden, Norway, Switzerland, Austria, Finland, Netherlands, and Poland.",
  },
  {
    title: "Study Abroad",
    icon: "study",
    description:
      "We support students from application through admission, helping select programs, prepare university applications, and organize the visa and travel logistics that follow acceptance.",
  },
  {
    title: "Immigration & Residency",
    icon: "immigration",
    description:
      "We guide individuals and families through residency and immigration pathways, preparing required documentation and coordinating with the relevant authorities at each stage.",
  },
  {
    title: "Travel Groups",
    icon: "groups",
    description:
      "We organize group travel for families, companies, and organizations, handling coordinated bookings, itineraries, and logistics for parties of any size.",
  },
  {
    title: "Medical Travel",
    icon: "medical",
    description:
      "We coordinate care abroad — from appointment scheduling to travel and accommodation — so patients and companions can focus on treatment rather than logistics.",
  },
  {
    title: "International Investment",
    icon: "investment",
    description:
      "We advise individuals and businesses exploring investment opportunities abroad, connecting clients with the guidance needed to evaluate and pursue cross-border ventures.",
  },
  {
    title: "Transfers",
    icon: "transfers",
    description:
      "We arrange airport and intercity transfers, so you're never stranded between a flight and a hotel.",
  },
  {
    title: "Insurance",
    icon: "insurance",
    description:
      "We source travel insurance and explain it in plain terms before you leave.",
  },
  {
    title: "Translation",
    icon: "translation",
    description:
      "We handle document translation and certified copies for visa and immigration paperwork.",
  },
] as const;

export default function InfoPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 md:pt-24">
        <h1 className="font-serif text-4xl text-body sm:text-5xl lg:text-6xl">
          About <span className="text-maroon italic">Royal Trip</span>
        </h1>
        <p className="mt-6 text-base text-muted">
          Royal Trip helps individuals, families, students, and businesses
          plan and complete journeys with clarity and reliable human
          support.
        </p>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-body">Our mission</h2>
          <p className="mt-4 text-base text-muted">
            To become Iraq&rsquo;s most trusted travel partner by combining
            accurate information, responsive service, transparent processes,
            and genuine care for every traveler.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-2xl text-body">Our values</h2>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {VALUES.map((value) => (
              <li
                key={value}
                className="flex items-center gap-2 text-sm text-body"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-maroon"
                  aria-hidden="true"
                />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl text-body">Services</h2>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="group flex gap-5 py-8 transition-colors"
              >
                <ServiceIcon
                  name={service.icon}
                  className="h-8 w-8 shrink-0 text-maroon transition-transform duration-200 group-hover:scale-110"
                />
                <div>
                  <h3 className="font-serif text-lg text-maroon">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-maroon-tint">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl text-body">
            Our visa track record
          </h2>
          <p className="mt-4 text-base text-muted">
            We process approximately 30 visa applications per month —
            around 360 per year.
          </p>

          <dl className="mt-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:hidden">
              {TRACK_RECORD_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <dd className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-maroon px-2 text-center font-serif text-lg text-maroon">
                    {stat.value}
                  </dd>
                  <dt className="text-sm text-body">
                    {stat.label}
                    {"note" in stat && (
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
                {TRACK_RECORD_STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="flex flex-1 items-center last:flex-none"
                  >
                    <dd className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-maroon px-2 text-center font-serif text-xl text-maroon">
                      {stat.value}
                    </dd>
                    {i < TRACK_RECORD_STATS.length - 1 && (
                      <span
                        className="mx-2 h-px flex-1 border-t-2 border-dashed border-maroon/40"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-4 gap-6 text-center">
                {TRACK_RECORD_STATS.map((stat) => (
                  <dt key={stat.label} className="text-sm text-body">
                    {stat.label}
                    {"note" in stat && (
                      <span className="mt-0.5 block text-xs text-muted">
                        {stat.note}
                      </span>
                    )}
                  </dt>
                ))}
              </div>
            </div>
          </dl>

          <p className="mt-8 text-sm text-muted">
            Approval rates are historical averages and vary depending on
            the applicant&rsquo;s financial situation, travel history,
            employment, supporting documents, and the specific
            requirements of the destination country. They are not a
            guarantee of outcome for any individual application.
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-sm font-medium text-muted">Please note</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              Visa approvals, admissions, and residency decisions are made
              solely by the relevant embassy, university, or government
              authority — Royal Trip prepares and submits applications but
              cannot guarantee outcomes.
            </li>
            <li>Prices are subject to confirmation at time of booking.</li>
            <li>
              Any approval-rate figures are historical averages, not
              predictions for an individual case.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
