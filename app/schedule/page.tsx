import { PageHeader } from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import placeholder from "../../public/placeholder.svg";

export const metadata = {
  title: "Schedule",
}

export default function SchedulePage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Event Schedule"
          description="Explore our carefully curated program designed to maximize learning and networking opportunities."
        />

        <div className="mt-16 space-y-8">
          {[
            {
              day: "Day 1",
              date: "June 15, 2025",
              title: "Opening & Keynotes",
              description: "The first day focuses on inspiration, vision, and setting the stage for the event.",
            },
            {
              day: "Day 2",
              date: "June 16, 2025",
              title: "Workshops & Panels",
              description: "Dive deep into practical knowledge and industry-specific discussions.",
            },
            {
              day: "Day 3",
              date: "June 17, 2025",
              title: "Networking & Closing",
              description: "Focus on building connections and concluding with actionable next steps.",
            },
          ].map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="rounded-lg border bg-background shadow-sm hover-lift animate-fade-in"
              style={{ animationDelay: `${0.2 * dayIndex}s` }}
            >
              <div className="border-b bg-amber-50 px-6 py-4">
                <h3 className="text-xl font-bold text-amber-800">{day.title}</h3>
                <p className="text-sm text-gray-500">
                  {day.day} - {day.date}
                </p>
                <p className="mt-2 text-gray-600">{day.description}</p>
              </div>
              <div className="divide-y">
                {[
                  {
                    time: "8:00 AM - 9:00 AM",
                    title: "Registration & Breakfast",
                    location: "Main Lobby",
                    description: "Check-in, collect your badge, and enjoy a networking breakfast.",
                    speakers: [],
                  },
                  {
                    time: "9:00 AM - 10:30 AM",
                    title:
                      dayIndex === 0
                        ? "Opening Ceremony & Keynote"
                        : dayIndex === 1
                          ? "Industry Panel Discussion"
                          : "Networking Roundtables",
                    location: "Main Hall",
                    description:
                      dayIndex === 0
                        ? "Welcome address and inspiring keynote from a prominent business leader."
                        : dayIndex === 1
                          ? "Expert panel discussing current trends and opportunities in key industries."
                          : "Structured networking sessions organized by industry and interest.",
                    speakers: [{ name: "Featured Speaker", role: "CEO & Founder" }],
                  },
                  {
                    time: "10:45 AM - 12:15 PM",
                    title:
                      dayIndex === 0
                        ? "Vision for Habesha Business"
                        : dayIndex === 1
                          ? "Parallel Workshop Sessions"
                          : "Closing Keynote",
                    location: dayIndex === 1 ? "Breakout Rooms" : "Main Hall",
                    description:
                      dayIndex === 0
                        ? "Strategic discussion on the future of Habesha businesses globally."
                        : dayIndex === 1
                          ? "Choose from specialized workshops on different business topics."
                          : "Inspirational closing address and call to action.",
                    speakers: [{ name: "Industry Expert", role: "Business Strategist" }],
                  },
                  {
                    time: "12:30 PM - 2:00 PM",
                    title: "Networking Lunch",
                    location: "Dining Hall",
                    description: "Enjoy a delicious meal while connecting with fellow attendees.",
                    speakers: [],
                  },
                  {
                    time: "2:15 PM - 3:45 PM",
                    title:
                      dayIndex === 0
                        ? "Investment Landscape"
                        : dayIndex === 1
                          ? "Masterclass Sessions"
                          : "Action Planning",
                    location: dayIndex === 1 ? "Breakout Rooms" : "Main Hall",
                    description:
                      dayIndex === 0
                        ? "Overview of investment opportunities in Ethiopia, Eritrea, and for diaspora businesses."
                        : dayIndex === 1
                          ? "In-depth learning sessions led by industry experts."
                          : "Structured session to develop concrete next steps after the event.",
                    speakers: [{ name: "Finance Expert", role: "Investment Advisor" }],
                  },
                  {
                    time: dayIndex === 2 ? "4:00 PM - 5:30 PM" : "4:00 PM - 5:00 PM",
                    title:
                      dayIndex === 0 ? "Networking Break" : dayIndex === 1 ? "Pitch Competition" : "Closing Ceremony",
                    location: "Main Hall",
                    description:
                      dayIndex === 0
                        ? "Refreshments and structured networking opportunities."
                        : dayIndex === 1
                          ? "Selected startups pitch to a panel of investors."
                          : "Final remarks, awards presentation, and farewell.",
                    speakers: dayIndex === 1 ? [{ name: "Pitch Judge", role: "Venture Capitalist" }] : [],
                  },
                  ...(dayIndex !== 2
                    ? [
                        {
                          time: "6:00 PM - 8:00 PM",
                          title: dayIndex === 0 ? "Welcome Reception" : "Cultural Dinner",
                          location: "Grand Ballroom",
                          description:
                            dayIndex === 0
                              ? "Evening reception with cultural performances and networking."
                              : "Formal dinner celebrating Habesha cuisine and culture.",
                          speakers: [],
                        },
                      ]
                    : []),
                ].map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className="grid gap-4 px-6 py-4 sm:grid-cols-[1fr_2fr] hover:bg-amber-50/50 transition-colors duration-300"
                  >
                    <div>
                      <p className="font-medium">{session.time}</p>
                      <p className="text-sm text-gray-500">{session.location}</p>
                    </div>
                    <div>
                      <h4 className="font-bold">{session.title}</h4>
                      <p className="text-sm text-gray-500">{session.description}</p>
                      {session.speakers.length > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                            <Image src={placeholder} alt="Speaker" width={32} height={32} />
                          </div>
                          <div>
                            <span className="text-sm font-medium">{session.speakers[0].name}</span>
                            <p className="text-xs text-gray-500">{session.speakers[0].role}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">
              Pre-Conference Workshops
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Join us on June 14th for specialized pre-conference workshops (additional registration required).
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Plan Development",
                time: "9:00 AM - 12:00 PM",
                description:
                  "Learn how to create a comprehensive business plan that will impress investors and guide your business growth.",
                instructor: "Business Planning Expert",
              },
              {
                title: "Digital Marketing Strategies",
                time: "9:00 AM - 12:00 PM",
                description:
                  "Master digital marketing techniques specifically tailored for reaching Habesha audiences globally.",
                instructor: "Marketing Specialist",
              },
              {
                title: "Raising Capital",
                time: "1:00 PM - 4:00 PM",
                description: "Understand different funding options and how to prepare your business for investment.",
                instructor: "Investment Advisor",
              },
              {
                title: "Cross-Border Business Operations",
                time: "1:00 PM - 4:00 PM",
                description:
                  "Navigate the complexities of running a business across multiple countries, with focus on Ethiopia/Eritrea and Western markets.",
                instructor: "International Business Consultant",
              },
              {
                title: "Financial Management",
                time: "9:00 AM - 4:00 PM (Full Day)",
                description:
                  "Comprehensive workshop on financial management, accounting practices, and tax considerations for small to medium businesses.",
                instructor: "Financial Expert",
              },
              {
                title: "Leadership & Team Building",
                time: "9:00 AM - 4:00 PM (Full Day)",
                description:
                  "Develop leadership skills and learn effective strategies for building and managing high-performing teams.",
                instructor: "Leadership Coach",
              },
            ].map((workshop, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-bold">{workshop.title}</h3>
                <p className="text-sm text-amber-600 mt-1">{workshop.time}</p>
                <p className="mt-2 text-gray-500">{workshop.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 overflow-hidden rounded-full bg-muted">
                    <Image src={placeholder} alt="Instructor" width={32} height={32} />
                  </div>
                  <span className="text-sm font-medium">{workshop.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Download Resources</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Access detailed information about our event schedule and planning resources.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Full Event Schedule",
                description: "Detailed schedule with all sessions, speakers, and locations.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                ),
              },
              {
                title: "Venue Map",
                description: "Navigate the event venue with our detailed floor plans.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                    <line x1="8" y1="2" x2="8" y2="18"></line>
                    <line x1="16" y1="6" x2="16" y2="22"></line>
                  </svg>
                ),
              },
              {
                title: "Speaker Profiles",
                description: "Learn more about our distinguished speakers and their expertise.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ),
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="group rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in flex flex-col"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4">{resource.icon}</div>
                <h3 className="text-xl font-bold">{resource.title}</h3>
                <p className="mt-2 text-gray-500 flex-grow">{resource.description}</p>
                <Button variant="outline" className="mt-4 gap-2 group w-full">
                  Download
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
