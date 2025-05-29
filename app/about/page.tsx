import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import habeshas from "../../public/habeshas.jpeg";

export const metadata = {
  title: "About",
}

export default function AboutPage() {
  return (
    <>
      <section className="container py-12 md:py-16 lg:py-20">
        <PageHeader
          title="About Grand Habesha Business"
          description="The premier networking event for Ethiopian and Eritrean entrepreneurs, professionals, investors, and startups from around the world."
        />

        <div className="grid gap-12 mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 animate-slide-in-left">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Our Mission</h2>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Grand Habesha Business is the premier networking event for Ethiopian and Eritrean entrepreneurs,
              professionals, investors, and startups from around the world. Our mission is to foster collaboration,
              innovation, and investment within the global Habesha community.
            </p>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Join us for three days of inspiring keynotes, panel discussions, workshops, and unparalleled networking
              opportunities that will help you grow your business and connect with like-minded professionals.
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl pt-4">Our Vision</h2>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              We envision a thriving global Habesha business ecosystem where entrepreneurs and professionals from
              Ethiopian and Eritrean backgrounds can access the resources, connections, and opportunities they need to
              succeed on the world stage.
            </p>
            <p className="text-gray-500 md:text-lg dark:text-gray-400">
              Through our annual event and year-round community building, we aim to be the catalyst for economic
              empowerment and business growth within the Habesha diaspora.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl animate-slide-in-right hover-scale">
            <Image
              src={habeshas}
              alt="Business networking event"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 border-8 border-white/10 rounded-xl"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,215,0,0.1) 10px, transparent 10px, transparent 20px)",
              }}
            />
          </div>
        </div>
      </section>

      <section className="border-t gradient-bg-amber">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center animate-fade-in">Our Story</h2>
          <div className="mt-12 space-y-12">
            <div className="grid gap-6 md:grid-cols-[1fr_3fr] items-center">
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-amber-600">2018</div>
                <div className="text-gray-500">The Beginning</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in">
                <h3 className="text-xl font-bold mb-2">First Gathering</h3>
                <p className="text-gray-500">
                  Grand Habesha Business started as a small gathering of 50 Ethiopian and Eritrean entrepreneurs in
                  Washington D.C., united by a shared vision of creating a platform for business networking and
                  collaboration.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_3fr] items-center">
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-amber-600">2020</div>
                <div className="text-gray-500">Going Virtual</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in">
                <h3 className="text-xl font-bold mb-2">Digital Transformation</h3>
                <p className="text-gray-500">
                  Adapting to global challenges, we transformed our event into a virtual experience, connecting over 300
                  participants from 15 countries and expanding our reach to the global Habesha community.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_3fr] items-center">
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-amber-600">2023</div>
                <div className="text-gray-500">Major Growth</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in">
                <h3 className="text-xl font-bold mb-2">International Expansion</h3>
                <p className="text-gray-500">
                  Our event grew to welcome over 400 attendees, featuring prominent speakers, investors,
                  and business leaders from across the globe, establishing itself as the premier Habesha business
                  networking event.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[1fr_3fr] items-center">
              <div className="text-center md:text-right">
                <div className="text-4xl font-bold text-amber-600">2025</div>
                <div className="text-gray-500">The Future</div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm hover-lift animate-fade-in">
                <h3 className="text-xl font-bold mb-2">Bigger and Better</h3>
                <p className="text-gray-500">
                  For 2025, we're expecting over 500 attendees, featuring more investment opportunities, expanded
                  workshop tracks, and enhanced networking experiences to further strengthen the global Habesha business
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t pattern-bg">
        <div className="container py-12 md:py-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center animate-fade-in">Meet the Team</h2>
          <p className="mt-4 text-gray-500 md:text-lg dark:text-gray-400 text-center max-w-3xl mx-auto animate-slide-up">
            Our dedicated team works tirelessly to create an exceptional experience for the global Habesha business
            community.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member, index) => (
              <div
                key={member}
                className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all hover:shadow-md hover-lift animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team+Member+${member}`}
                    alt={`Team Member ${member}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">Team Member Name</h3>
                  <p className="text-sm text-amber-600">Position & Role</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Brief description about the team member's background and contribution to Grand Habesha Business.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
