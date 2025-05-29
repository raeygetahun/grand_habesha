import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t pattern-bg">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* Optional logo */}
              {/* <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Grand Habesha Business Logo"
                width={40}
                height={40}
                className="rounded-md"
              /> */}
              <span className="text-xl font-bold tracking-tight">
                Grand Habesha Business
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Connecting the global Habesha community through entrepreneurship,
              innovation, and investment.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/features", label: "Why Attend" },
                { href: "/speakers", label: "Speakers" },
                { href: "/schedule", label: "Schedule" },
                { href: "/register", label: "Register" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-amber-600 dark:text-gray-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/faq", label: "FAQs" },
                { href: "/sponsors", label: "Sponsorship" },
                { href: "/press", label: "Press Kit" },
                { href: "/past-events", label: "Past Events" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-500 hover:text-amber-600 dark:text-gray-400 transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider">
              Subscribe
            </h3>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              Stay updated with the latest news and announcements.
            </p>
            <form className="space-y-2">
              <Input
                placeholder="Your email address"
                className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700 transition-all duration-300 transform hover:scale-[1.02]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Grand Habesha Business. All rights
            reserved.
          </p>

          <div className="text-center sm:text-right text-sm text-gray-500 dark:text-gray-400">
            Built by{" "}
            <a
              href="https://algonixtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-semibold hover:text-yellow-500 transition-colors"
            >
              Algonix Technologies
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <Link
              href="/privacy"
              className="hover:underline hover:text-amber-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:underline hover:text-amber-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:underline hover:text-amber-600 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>

          {/* <div className="text-center sm:text-right text-sm text-gray-500 dark:text-gray-400">
            Built by{" "}
            <a
              href="https://algonixtechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 font-semibold hover:text-white transition-colors"
            >
              Algonix Technologies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
