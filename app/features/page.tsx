import { PageHeader } from "@/components/page-header"
import { Users } from "lucide-react"

export const metadata = {
  title: "Why Attend",
}

export default function FeaturesPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Why Attend Grand Habesha Business"
          description="Discover why Grand Habesha Business is the must-attend event for anyone looking to connect, grow, and succeed in the global Habesha business community."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Network with Industry Leaders",
              description:
                "Connect with successful entrepreneurs, investors, and professionals from the Habesha community worldwide. Build relationships that can transform your business and career trajectory.",
              icon: <Users className="h-10 w-10 text-amber-600" />,
            },
            {
              title: "Access to Investment",
              description:
                "Meet potential investors and learn about funding opportunities specifically for Habesha businesses. Pitch your ideas to venture capitalists and angel investors looking to support promising ventures.",
              icon: (
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              ),
            },
            {
              title: "Cultural Connection",
              description:
                "Celebrate and leverage our shared cultural heritage while building modern business relationships. Connect with others who understand your background and the unique opportunities and challenges you face.",
              icon: (
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
              ),
            },
            {
              title: "Business Development",
              description:
                "Gain insights and strategies to scale your business in both African and international markets. Learn from those who have successfully navigated cross-border business expansion and market entry.",
              icon: (
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              ),
            },
            {
              title: "Knowledge Sharing",
              description:
                "Learn from expert-led workshops and panel discussions on relevant business topics and trends. Gain practical knowledge that you can immediately apply to your business or professional development.",
              icon: (
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
              ),
            },
            {
              title: "Partnership Opportunities",
              description:
                "Find potential business partners and collaborators to help grow your ventures. Discover synergies with other businesses and professionals that can lead to mutually beneficial relationships.",
              icon: (
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
                  <path d="M17 5H7V2h10v3z" />
                  <path d="M17 22H7v-3h10v3z" />
                  <path d="M20 2h2v20h-2" />
                  <path d="M2 2h2v20H2" />
                  <path d="M7 22v-8.3a6 6 0 0 1 10 0V22" />
                </svg>
              ),
            },
            {
              title: "Global Perspective",
              description:
                "Gain insights into global business trends and opportunities specifically relevant to the Habesha community. Understand how to position your business in the global marketplace.",
              icon: (
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              ),
            },
            {
              title: "Mentorship",
              description:
                "Connect with experienced business leaders who can provide guidance and mentorship. Learn from their successes and failures to accelerate your own growth and avoid common pitfalls.",
              icon: (
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              ),
            },
            {
              title: "Innovation Showcase",
              description:
                "Discover cutting-edge innovations and technologies from Habesha entrepreneurs. Get inspired by creative solutions to business challenges and emerging market opportunities.",
              icon: (
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
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-amber-500 to-red-800 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">What Attendees Say</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Hear from past attendees about their experience at Grand Habesha Business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Attending Grand Habesha Business was a game-changer for my startup. The connections I made led to our first major investment round.",
                name: "Selam T.",
                role: "Founder & CEO, TechEthio",
              },
              {
                quote:
                  "The quality of networking at this event is unmatched. I've been to many business conferences, but the cultural connection here creates deeper, more meaningful relationships.",
                name: "Yonas M.",
                role: "Investment Director, Diaspora Fund",
              },
              {
                quote:
                  "The workshops provided practical knowledge I could immediately apply to my business. Within months, we saw significant growth in our operations.",
                name: "Feven A.",
                role: "Owner, Habesha Imports",
              },
              {
                quote:
                  "As an investor, this event gives me unique access to promising Habesha entrepreneurs who understand both Western markets and opportunities in Ethiopia and Eritrea.",
                name: "Michael B.",
                role: "Angel Investor",
              },
              {
                quote:
                  "The cultural aspect of Grand Habesha Business makes it special. It's not just about business—it's about building a stronger community while growing our enterprises.",
                name: "Tigist K.",
                role: "Marketing Director, Global Brands",
              },
              {
                quote:
                  "I found my business partner at last year's event. Our companies complemented each other perfectly, and now we're expanding across three countries.",
                name: "Dawit H.",
                role: "Co-founder, Addis Tech Solutions",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 text-amber-600">
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
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-500 dark:text-gray-400 italic mb-4">"{testimonial.quote}"</p>
                <div className="mt-4 border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-amber-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
