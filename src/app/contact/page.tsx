import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Royal Trip",
  description:
    "Reach Royal Trip by phone, WhatsApp, or in person at Andazaran street, As Sulaymaniyah, Iraq.",
};

const PHONES = [
  { label: "+964 773 519 9595", href: "tel:+9647735199595" },
  { label: "+964 773 222 4000", href: "tel:+9647732224000" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/royaltrip2021/" },
  {
    label: "Instagram — Royal Trip (Travel)",
    href: "https://www.instagram.com/royaltrip.travel/",
  },
  {
    label: "Instagram — Royal Trip Visa",
    href: "https://www.instagram.com/royaltrip.visa",
  },
  {
    label: "Instagram — Royal Trip Groups",
    href: "https://www.instagram.com/royal.groups.center",
  },
];

const MAPS_LINK = "https://maps.app.goo.gl/gHdvYcDcarV4Wm9N7?g_st=ipc";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.6032411965457!2d45.41349339999999!3d35.5634998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40002d004d25a2e1%3A0x765130a23ff7d1a1!2sRoyal%20Trip!5e0!3m2!1sen!2siq!4v1788338735191!5m2!1sen!2siq";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h1 className="font-serif text-4xl text-body sm:text-5xl lg:text-6xl">
        Get in <span className="text-maroon italic">touch</span>
      </h1>
      <p className="mt-6 max-w-md text-base text-muted">
        Call, message, or stop by — a real person on our team will pick up.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="text-sm font-medium text-muted">Phone</h2>
            <ul className="mt-3 space-y-2">
              {PHONES.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="link-underline text-lg text-body hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                  >
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium text-muted">WhatsApp</h2>
            <a
              href="https://wa.me/9647735199595"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              Message on WhatsApp
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-muted">Address</h2>
            <p className="mt-3 text-lg text-body">
              Andazaran street, As Sulaymaniyah, Iraq
            </p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-2 inline-block text-sm text-maroon hover:text-maroon-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
            >
              Open in Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-sm font-medium text-muted">Follow along</h2>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover:text-maroon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-80 overflow-hidden rounded-lg border border-border md:h-full md:min-h-[420px]">
          <iframe
            src={MAPS_EMBED_SRC}
            title="Royal Trip location on Google Maps"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
