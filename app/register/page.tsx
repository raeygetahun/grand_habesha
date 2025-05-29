import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Register",
}

export default function RegisterPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Register for Grand Habesha Business"
          description="Secure your spot at the premier networking event for the global Habesha business community."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">Register Now</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Secure Your Spot at Grand Habesha Business 2025
            </h2>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Don't miss this opportunity to be part of the largest Habesha business networking event. Early bird
              registration ends April 30, 2025.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-background p-4 shadow-sm hover-lift hover-glow">
                <h3 className="text-lg font-bold">Early Bird</h3>
                <div className="mt-2 text-3xl font-bold">$299</div>
                <p className="text-sm text-gray-500">Until April 30, 2025</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
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
                    Full access to all sessions
                  </li>
                  <li className="flex items-center gap-2">
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
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-2">
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
                    Lunch and refreshments
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-background p-4 shadow-sm hover-lift hover-glow">
                <h3 className="text-lg font-bold">Standard</h3>
                <div className="mt-2 text-3xl font-bold">$499</div>
                <p className="text-sm text-gray-500">After April 30, 2025</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
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
                    Full access to all sessions
                  </li>
                  <li className="flex items-center gap-2">
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
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-2">
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
                    Lunch and refreshments
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-bold">VIP Package</h3>
              <div className="mt-2 rounded-lg border bg-gradient-to-r from-amber-50 to-amber-100 p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold">$799</div>
                    <p className="text-sm text-gray-500">Limited availability</p>
                  </div>
                  <div className="bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    Premium
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
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
                    All Standard ticket benefits
                  </li>
                  <li className="flex items-center gap-2">
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
                    Exclusive VIP networking reception
                  </li>
                  <li className="flex items-center gap-2">
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
                    One-on-one meetings with speakers
                  </li>
                  <li className="flex items-center gap-2">
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
                    Priority seating at all sessions
                  </li>
                  <li className="flex items-center gap-2">
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
                    Complimentary access to pre-conference workshops
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-background p-6 shadow-sm hover-lift animate-slide-in-right">
            <h3 className="text-xl font-bold">Registration Form</h3>
            <p className="text-sm text-gray-500">Fill out the form below to secure your spot</p>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company/Organization
                </label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="position" className="text-sm font-medium">
                  Position/Title
                </label>
                <Input
                  id="position"
                  placeholder="Enter your position"
                  className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="ticket-type" className="text-sm font-medium">
                  Ticket Type
                </label>
                <select
                  id="ticket-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                >
                  <option value="early">Early Bird ($299)</option>
                  <option value="standard">Standard ($499)</option>
                  <option value="vip">VIP ($799)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="dietary" className="text-sm font-medium">
                  Dietary Requirements
                </label>
                <Input
                  id="dietary"
                  placeholder="Any dietary requirements or allergies"
                  className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Pre-Conference Workshops (Optional)</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="workshop-1"
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor="workshop-1" className="text-sm text-gray-700">
                      Business Plan Development ($99)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="workshop-2"
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor="workshop-2" className="text-sm text-gray-700">
                      Digital Marketing Strategies ($99)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="workshop-3"
                      className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <label htmlFor="workshop-3" className="text-sm text-gray-700">
                      Financial Management (Full Day - $179)
                    </label>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 hover-lift transition-all duration-300 transform hover:scale-[1.02]">
                Register Now
              </Button>
              <p className="text-center text-xs text-gray-500">
                By registering, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Group Registration</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Bringing a team? Take advantage of our special group rates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Small Team",
                price: "$269",
                perPerson: "per person",
                description: "For groups of 3-5 people",
                features: ["10% discount on regular pricing", "Reserved group seating", "Team recognition"],
              },
              {
                title: "Medium Team",
                price: "$249",
                perPerson: "per person",
                description: "For groups of 6-10 people",
                features: [
                  "15% discount on regular pricing",
                  "Reserved group seating",
                  "Team recognition",
                  "Dedicated networking facilitator",
                ],
                highlighted: true,
              },
              {
                title: "Large Team",
                price: "$229",
                perPerson: "per person",
                description: "For groups of 11+ people",
                features: [
                  "20% discount on regular pricing",
                  "Reserved group seating",
                  "Team recognition",
                  "Dedicated networking facilitator",
                  "Private meeting room (2 hours)",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg border ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-amber-50 to-white border-amber-200 shadow-md"
                    : "bg-background"
                } p-6 shadow-sm hover-lift animate-fade-in relative`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>{" "}
                  <span className="text-sm text-gray-500">{plan.perPerson}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-6 w-full ${
                    plan.highlighted ? "bg-amber-600 hover:bg-amber-700" : "bg-amber-600/90 hover:bg-amber-600"
                  } hover-lift transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  Contact for Group Rate
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Have questions about registration? Find answers to common questions below.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                question: "What's included in the registration fee?",
                answer:
                  "Your registration includes full access to all conference sessions, networking events, lunches and refreshments during the event, and access to presentation materials after the event.",
              },
              {
                question: "Can I cancel my registration?",
                answer:
                  "Yes, cancellations received before May 15, 2025 will receive a full refund minus a $50 processing fee. No refunds will be issued after this date, but you may transfer your registration to another person.",
              },
              {
                question: "Is there a dress code?",
                answer:
                  "Business casual attire is recommended for all conference sessions. For the cultural dinner and networking events, business formal or traditional Habesha attire is encouraged.",
              },
              {
                question: "Are there accommodations available?",
                answer:
                  "Yes, we have negotiated special rates with several hotels near the venue. After registration, you'll receive information about booking accommodations at these discounted rates.",
              },
              {
                question: "Will there be translation services?",
                answer:
                  "Yes, we will provide translation services for Amharic and Tigrinya during the main sessions. Please indicate your language preference during registration.",
              },
              {
                question: "Can I attend virtually?",
                answer:
                  "While the event is primarily in-person, we will offer a limited virtual attendance option. Virtual tickets are available at a reduced rate and include livestream access to main sessions and digital networking opportunities.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
