"use client"

import { Menu, X } from "lucide-react"
import { useRef } from "react"

import { brand, type NavLink } from "@/lib/site-config"

type NavigationProps = {
  navLinks: NavLink[]
  activeSection: string | null
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

const mobileNavGroups: NavLink[][] = [
  [
    { href: "#chi-siamo", label: "Chi Siamo" },
    { href: "#corsi", label: "Corsi" },
    { href: "#mamma-e-figlia", label: "Mamma & Figlia" },
    { href: "#formazione", label: "Formazione" },
  ],
  [
    { href: "#orari", label: "Orari" },
    { href: "#prezzi", label: "Prezzi" },
    { href: "#gallery", label: "Gallery" },
  ],
  [{ href: "#contatti", label: "Contatti" }],
]

export function Navigation({
  navLinks,
  activeSection,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const touchStartXRef = useRef<number | null>(null)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[var(--template-nav-bg)] border-b border-[var(--template-accent-subtle)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-4 sm:h-20 lg:h-24">
          <a href="#" className="z-[60] flex flex-col space-y-0">
            <img
              src={brand.logo}
              alt={`${brand.shortName} logo`}
              className="h-12 w-auto object-contain sm:h-16 lg:h-20"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contatti"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
            >
              Iscriviti Ora
            </a>
          </div>

          <button
            className="z-[60] p-2 text-foreground lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[50] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 z-[55] w-[300px] border-l border-primary/20 bg-[var(--template-nav-bg)] transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onTouchStart={(event) => {
          touchStartXRef.current = event.touches[0].clientX
        }}
        onTouchEnd={(event) => {
          if (touchStartXRef.current !== null) {
            const delta = event.changedTouches[0].clientX - touchStartXRef.current
            if (delta > 60) setMobileMenuOpen(false)
            touchStartXRef.current = null
          }
        }}
      >
        <div className="flex h-full flex-col px-8 pt-20 pb-10">
          <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-border" />
          <div className="flex flex-col">
            {mobileNavGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {groupIndex > 0 && <div className="my-2 border-t border-border" />}
                {group.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-4 text-xl font-medium text-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
            <a
              href="#contatti"
              className="mt-6 rounded-sm bg-primary px-6 py-4 text-center text-lg font-bold text-primary-foreground transition-transform active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Iscriviti Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
