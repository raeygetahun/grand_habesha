import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Sponsors",
}

export default function SponsorsPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Our Sponsors & Partners"
          description="Grand Habesha Business is proudly supported by these organizations committed to the growth of the Habesha business community."
        />

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((sponsor, index) => (
              <div
                key={sponsor}
                className="flex flex-col items-center rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Sponsor+${sponsor}`}
                    alt={`Sponsor ${sponsor}`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold text-center">Sponsor Name</h4>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Brief description of the sponsor and their commitment to the Habesha business community.
                </p>
                <Button variant="link" className="mt-4 text-amber-600">
                  Visit Website
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Gold Sponsors</h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border bg-background p-4 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-3 h-16 w-full flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Sponsor+${index + 1}`}
                    alt={`Sponsor ${index + 1}`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="text-sm font-bold text-center">Sponsor Name</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Silver Sponsors</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg border bg-background p-3 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <Image
                  src={`/placeholder.svg?height=50&width=100&text=Sponsor+${index + 1}`}
                  alt={`Sponsor ${index + 1}`}
                  width={100}
                  height={50}
                  className="max-h-10 w-auto transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Become a Sponsor</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Showcase your brand to the global Habesha business community and demonstrate your commitment to supporting
              entrepreneurship and innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Platinum Sponsor",
                price: "$10,000",
                benefits: [
                  "Prime logo placement on all event materials",
                  "10-minute speaking opportunity",
                  "Dedicated exhibition booth",
                  "10 complimentary event tickets",
                  "Full-page ad in event program",
                  "Featured in all press releases",
                  "Social media promotion",
                ],
              },
              {
                title: "Gold Sponsor",
                price: "$5,000",
                benefits: [
                  "Logo on all event materials",
                  "Shared exhibition space",
                  "5 complimentary event tickets",
                  "Half-page ad in event program",
                  "Mentioned in press releases",
                  "Social media promotion",
                ],
              },
              {
                title: "Silver Sponsor",
                price: "$2,500",
                benefits: [
                  "Logo on event website and program",
                  "2 complimentary event tickets",
                  "Quarter-page ad in event program",
                  "Social media mention",
                ],
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-bold">{tier.title}</h3>
                <div className="mt-2 text-3xl font-bold">{tier.price}</div>
                <ul className="mt-4 space-y-2 text-sm">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full bg-amber-600 hover:bg-amber-700 hover-lift">Contact Us</Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">Custom sponsorship packages are also available.</p>
            <Button variant="outline" className="mt-4 gap-2 hover-lift group">
              Download Sponsorship Package
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Our Partners</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              We're proud to collaborate with these organizations to support the Habesha business community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Ethiopian Chamber of Commerce",
              "Eritrean Business Association",
              "Habesha Entrepreneurs Network",
              "African Development Bank",
              "Diaspora Investment Fund",
              "East African Business Council",
            ].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 h-16 w-full flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Partner`}
                    alt={partner}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-bold text-center">{partner}</h4>
                <p className="text-sm text-center text-gray-500 mt-2">
                  Partner organization supporting the growth and development of Habesha businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
