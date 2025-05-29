import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Grand Habesha Business - Connecting the Global Habesha Business Community",
}

export default function HomePage() {
  return (
    <>
      <section className="relative hero-pattern">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" />
        <div className="container relative flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 lg:py-40">
          <div className="space-y-2 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl gradient-text animate-pulse-slow">
              Grand Habesha Business
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-slide-up">
              Connecting the global Habesha community through entrepreneurship, innovation, and investment
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 hover-lift" asChild>
              <Link href="/register">Register Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover-lift" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground shadow-sm hover-lift">
              <Calendar className="h-5 w-5 text-amber-600" />
              <div className="text-sm">April 15-17, 2025</div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground shadow-sm hover-lift">
              <MapPin className="h-5 w-5 text-amber-600" />
              <div className="text-sm">Frankfurt, Germany</div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground shadow-sm hover-lift">
              <Users className="h-5 w-5 text-amber-600" />
              <div className="text-sm">500+ Attendees</div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border bg-card p-3 text-card-foreground shadow-sm hover-lift">
              <Clock className="h-5 w-5 text-amber-600" />
              <div className="text-sm">3 Days of Networking</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Welcome to Grand Habesha Business
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              The premier networking event for Ethiopian and Eritrean entrepreneurs, professionals, investors, and
              startups from around the world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in">
              <div className="mb-4">
                <Users className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Network with Industry Leaders</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with successful entrepreneurs, investors, and professionals from the Habesha community
                worldwide.
              </p>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto gap-2 text-amber-600 group" asChild>
                  <Link href="/features">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.4 11.5 7.6 11.7.2.1.4.3.8.3s.6-.2.8-.3c.2-.2 7.6-6.3 7.6-11.7a8 8 0 0 0-8-8z" />
                  <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Cultural Connection</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Celebrate and leverage our shared cultural heritage while building modern business relationships.
              </p>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto gap-2 text-amber-600 group" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Knowledge Sharing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Learn from expert-led workshops and panel discussions on relevant business topics and trends.
              </p>
              <div className="mt-4">
                <Button variant="link" className="p-0 h-auto gap-2 text-amber-600 group" asChild>
                  <Link href="/schedule">
                    View Schedule
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-amber-600 hover:bg-amber-700 hover-lift" asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 animate-slide-in-left">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Featured Speakers
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Learn from Industry Experts</h2>
              <p className="text-gray-500 md:text-lg dark:text-gray-400">
                Our carefully selected speakers bring diverse expertise and insights from across the global Habesha
                business community.
              </p>
              <div className="pt-4">
                <Button className="gap-2 hover-lift group" asChild>
                  <Link href="/speakers">
                    View All Speakers
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((speaker, index) => (
                <div
                  key={speaker}
                  className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=300&text=Speaker+${speaker}`}
                      alt={`Speaker ${speaker}`}
                      width={300}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">Speaker Name</h3>
                    <p className="text-sm text-amber-600">CEO & Founder</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-green">
        <div className="container py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-lg border bg-background shadow-sm hover-lift animate-fade-in">
                <div className="border-b bg-amber-50 px-6 py-4">
                  <h3 className="text-xl font-bold text-amber-800">Event Highlights</h3>
                </div>
                <div className="divide-y">
                  {[
                    {
                      day: "Day 1",
                      title: "Opening Keynote",
                      time: "9:00 AM - 10:30 AM",
                      location: "Main Hall",
                    },
                    {
                      day: "Day 2",
                      title: "Panel Discussion",
                      time: "11:00 AM - 12:30 PM",
                      location: "Conference Room A",
                    },
                    {
                      day: "Day 3",
                      title: "Networking Event",
                      time: "6:00 PM - 9:00 PM",
                      location: "Grand Ballroom",
                    },
                  ].map((event, index) => (
                    <div
                      key={index}
                      className="grid gap-4 px-6 py-4 sm:grid-cols-[1fr_2fr] hover:bg-amber-50/50 transition-colors duration-300"
                    >
                      <div>
                        <p className="font-medium">{event.time}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                      </div>
                      <div>
                        <h4 className="font-bold">{event.title}</h4>
                        <p className="text-sm text-gray-500">{event.day}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4 animate-slide-in-right order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                Event Schedule
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Three Days of Inspiration & Connection
              </h2>
              <p className="text-gray-500 md:text-lg dark:text-gray-400">
                Explore our carefully curated program designed to maximize learning and networking opportunities.
              </p>
              <div className="pt-4">
                <Button className="gap-2 hover-lift group" asChild>
                  <Link href="/schedule">
                    View Full Schedule
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800 animate-fade-in">
              Sponsors & Partners
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl animate-slide-up">
              Supported By Industry Leaders
            </h2>
            <p
              className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Grand Habesha Business is proudly supported by these organizations committed to the growth of the Habesha
              business community.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[1, 2, 3, 4].map((sponsor, index) => (
                <div
                  key={sponsor}
                  className="flex items-center justify-center rounded-lg border bg-background p-6 hover-lift animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=160&text=Sponsor+${sponsor}`}
                    alt={`Sponsor ${sponsor}`}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="gap-2 hover-lift group" asChild>
              <Link href="/sponsors">
                View All Sponsors
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t bg-gradient-to-br from-amber-100 via-white to-green-100">
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fade-in">
              Ready to Join Us?
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Secure your spot at Grand Habesha Business 2025. Early bird registration ends April 30, 2025.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 hover-lift" asChild>
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
