import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import placeholder from "../../public/placeholder.svg";

export const metadata = {
  title: "Speakers",
}

export default function SpeakersPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="Our Featured Speakers"
          description="Learn from industry experts and thought leaders from across the global Habesha business community."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={placeholder}
                  alt={`Speaker ${index + 1}`}
                  width={300}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Speaker Name</h3>
                <p className="text-sm text-amber-600">CEO & Founder</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Brief description about the speaker's expertise and background in the Habesha business community.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Speaker Topics</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Our speakers will cover a wide range of topics relevant to the Habesha business community.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Scaling Businesses Across Borders",
              "Investment Opportunities in Ethiopia and Eritrea",
              "Diaspora Entrepreneurship",
              "Tech Innovation in East Africa",
              "Cultural Intelligence in Global Business",
              "Sustainable Business Practices",
              "Marketing to the Habesha Community",
              "Financial Strategies for Growth",
              "Building Resilient Supply Chains",
            ].map((topic, index) => (
              <div
                key={index}
                className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-xl font-bold">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-fade-in">Become a Speaker</h2>
            <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 animate-slide-up">
              Are you an expert in your field with insights to share with the Habesha business community? Apply to
              become a speaker at our next event.
            </p>
            <div className="mt-8">
              <div className="rounded-xl border bg-background p-6 shadow-sm hover-lift animate-slide-up max-w-xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Speaker Application</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-sm font-medium">
                      Proposed Topic
                    </label>
                    <input
                      id="topic"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Enter your proposed topic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">
                      Brief Bio
                    </label>
                    <textarea
                      id="bio"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Tell us about yourself and your expertise"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover-lift"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
