"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MainNav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Why Attend" },
    { href: "/speakers", label: "Speakers" },
    { href: "/schedule", label: "Schedule" },
    { href: "/register", label: "Register" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              {/* <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Grand Habesha Business Logo"
                width={32}
                height={32}
                className="rounded-md"
              /> */}
              <span className="text-xl font-bold tracking-tight">Grand Habesha Business</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium transition-colors duration-200 px-2 py-1 rounded hover:bg-amber-50",
                pathname === item.href ? "text-amber-600 font-semibold bg-amber-100" : "hover:text-amber-600"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex hover-lift bg-amber-600 text-white font-semibold px-5 py-2 rounded shadow">
            <Link href="/register">Register Now</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-amber-200"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle menu</span>
            {mobileOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>
      {/* Mobile nav with overlay and animation */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Mobile menu */}
          <nav
            id="mobile-nav"
            className="fixed top-16 left-0 right-0 z-50 mx-2 rounded-xl shadow-lg bg-background border px-6 py-6 flex flex-col gap-3 animate-slide-down"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors duration-200 px-3 py-2 rounded hover:bg-amber-50",
                  pathname === item.href ? "text-amber-600 font-semibold bg-amber-100" : "hover:text-amber-600"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 hover-lift bg-amber-600 text-white font-semibold px-5 py-2 rounded shadow">
              <Link href="/register" onClick={() => setMobileOpen(false)}>
                Register Now
              </Link>
            </Button>
          </nav>
          {/* Animations */}
          <style jsx global>{`
            @keyframes slide-down {
              from { opacity: 0; transform: translateY(-20px);}
              to { opacity: 1; transform: translateY(0);}
            }
            .animate-slide-down {
              animation: slide-down 0.25s cubic-bezier(.4,0,.2,1);
            }
            @keyframes fade-in {
              from { opacity: 0;}
              to { opacity: 1;}
            }
            .animate-fade-in {
              animation: fade-in 0.2s cubic-bezier(.4,0,.2,1);
            }
          `}</style>
        </>
      )}
    </header>
  )
}