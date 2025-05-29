import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Contact Us"
          description="Our team is here to help you with any questions you may have about Grand Habesha Business."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get in Touch</h2>
              <p className="text-gray-500 md:text-lg dark:text-gray-400">
                Whether you have questions about registration, sponsorship opportunities, or anything else related to
                Grand Habesha Business, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <a
                  href="mailto:info@grandhabeshabusiness.com"
                  className="hover:underline hover:text-amber-600 transition-colors duration-300"
                >
                  info@grandhabeshabusiness.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600" />
                <a
                  href="tel:+12345678901"
                  className="hover:underline hover:text-amber-600 transition-colors duration-300"
                >
                  +1 (234) 567-8901
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                <div>
                  <p>Grand Habesha Business</p>
                  <p>Unit 14 30b Wilds Rents</p>
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-background p-2 shadow-sm transition-all duration-300 hover:bg-amber-100 hover:scale-110"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-background p-2 shadow-sm transition-all duration-300 hover:bg-amber-100 hover:scale-110"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-background p-2 shadow-sm transition-all duration-300 hover:bg-amber-100 hover:scale-110"
                >
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-background p-2 shadow-sm transition-all duration-300 hover:bg-amber-100 hover:scale-110"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Office Hours</h3>
              <p className="text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM (EAT)</p>
              <p className="text-gray-500">Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div className="rounded-xl border bg-background p-6 shadow-sm hover-lift animate-slide-in-right">
            <h3 className="text-xl font-bold">Send Us a Message</h3>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="Your email"
                    className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="contact-subject"
                  placeholder="Message subject"
                  className="transition-all duration-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder="Your message"
                />
              </div>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 hover-lift transition-all duration-300 transform hover:scale-[1.02]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Find answers to common questions about Grand Habesha Business.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                question: "How can I become a speaker?",
                answer:
                  "To apply as a speaker, please visit our Speakers page and fill out the application form. Our team reviews all applications and will contact you if your expertise aligns with our program.",
              },
              {
                question: "Are there sponsorship opportunities available?",
                answer:
                  "Yes, we offer various sponsorship packages. Please visit our Sponsors page for details or contact our sponsorship team directly at sponsors@grandhabeshabusiness.com.",
              },
              {
                question: "Where is the event located?",
                answer:
                  "Grand Habesha Business 2025 will take place at the Sheraton Addis, located in Addis Ababa, Ethiopia. The venue is approximately 15 minutes from Bole International Airport.",
              },
              {
                question: "Do you offer visa assistance?",
                answer:
                  "Yes, registered attendees can request a formal invitation letter to support their visa application. Please contact us after completing your registration for assistance.",
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
