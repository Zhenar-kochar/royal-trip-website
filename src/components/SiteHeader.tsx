"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { withBasePath } from "@/lib/basePath";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/info", label: "About & Services" },
  { href: "/contact", label: "Contact" },
];

const PHONE = "+964 773 519 9595";
const PHONE_HREF = "+9647735199595";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={withBasePath("/wordmark.png")}
            alt="Royal Trip"
            width={1393}
            height={509}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
                  isActive ? "text-maroon" : "text-body hover:text-maroon"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full bg-maroon transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${PHONE_HREF}`}
            className="rounded-full bg-maroon px-5 py-2 text-sm font-medium text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-maroon-deep hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
          >
            Call {PHONE}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-cream px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-base font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon ${
                      isActive ? "text-maroon" : "text-body"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={`tel:${PHONE_HREF}`}
                className="inline-block rounded-full bg-maroon px-5 py-2 text-sm font-medium text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maroon"
              >
                Call {PHONE}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
