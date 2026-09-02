import Image from "next/image";
import Link from "next/link";

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

export default function SiteFooter() {
  return (
    <footer className="bg-maroon-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <span className="inline-flex rounded-md bg-cream px-3 py-2">
            <Image
              src="/wordmark.png"
              alt="Royal Trip"
              width={1393}
              height={509}
              className="h-6 w-auto"
            />
          </span>
          <p className="mt-4 max-w-xs text-sm text-cream/80">
            First class service, everytime. Flights, hotels, visas, study
            placements, and immigration support — planned by people who pick
            up the phone.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-cream/60">
            Reach us
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {PHONES.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream">
                  {phone.label}
                </a>
              </li>
            ))}
            <li className="pt-2">Andazaran street, As Sulaymaniyah, Iraq</li>
            <li>
              <Link
                href="/contact"
                className="link-underline hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                Full contact details
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-cream/60">
            Follow along
          </p>
          <ul className="mt-3 space-y-2 text-sm text-cream/80">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15 px-6 py-6 text-center text-xs text-cream/60">
        © {new Date().getFullYear()} Royal Trip. All rights reserved.
        <span className="mx-2 text-cream/30">·</span>
        Built by Zhenar Kochar
      </div>
    </footer>
  );
}
