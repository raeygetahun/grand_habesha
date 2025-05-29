import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: {
    default: "Grand Habesha Business - Connecting the Global Habesha Business Community",
    template: "%s | Grand Habesha Business",
  },
  description:
    "The premier networking event for Ethiopian and Eritrean entrepreneurs, professionals, investors, and startups from around the world.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="pattern-bg">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
