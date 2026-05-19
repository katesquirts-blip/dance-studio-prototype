import { Clock, Facebook, Instagram, Mail, Map as MapIcon, Phone } from "lucide-react"
import { type ReactNode } from "react"

import { brand, type NavLink } from "@/lib/site-config"

export function Footer({ navLinks }: { navLinks: NavLink[] }) {
  return (
    <footer className="border-t border-primary/20 bg-card pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="mb-6 flex items-center gap-3">
              <img
                src={brand.logo}
                alt={`${brand.shortName} logo`}
                className="h-20 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="mt-4 max-w-[280px] text-center text-sm leading-relaxed text-muted-foreground md:text-left">{brand.tagline}</p>
            <div className="mt-6 flex gap-5">
              <a href={brand.instagramHref} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-200 hover:text-primary">
                <Instagram size={24} />
                <span className="font-sans text-xs text-muted-foreground">Instagram</span>
              </a>
              <a href={brand.facebookHref} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex flex-col items-center gap-1 text-muted-foreground transition-colors duration-200 hover:text-primary">
                <Facebook size={24} />
                <span className="font-sans text-xs text-muted-foreground">Facebook</span>
              </a>
            </div>
          </div>

          <FooterColumn title="Link Rapidi">
            <ul className="space-y-3 text-center md:text-left">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-block text-sm text-muted-foreground transition-all duration-200 hover:translate-x-0.5 hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contatti">
            <ul>
              <FooterContact icon={<Phone size={14} />} href={brand.phoneHref} text={brand.phone} />
              <FooterContact icon={<Mail size={14} />} href={brand.emailHref} text={brand.email} />
              <li className="mb-3 flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{brand.hours}</span>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Dove Siamo">
            <p className="mb-3 text-center text-sm leading-relaxed text-muted-foreground md:text-left">
              Sede Storica: {brand.primaryLocation}
              <br />
              Nuova Sala: {brand.secondaryLocation}
              <br />
              {brand.cityLine}
            </p>
            <a
              href={brand.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <MapIcon size={14} />
              Vedi su Google Maps
            </a>
          </FooterColumn>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">{brand.copyright}</div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h4 className="mb-6 text-sm font-semibold tracking-wider text-foreground uppercase">{title}</h4>
      {children}
    </div>
  )
}

function FooterContact({ icon, href, text }: { icon: ReactNode; href: string; text: string }) {
  return (
    <li className="mb-3 flex items-center gap-2">
      <span className="shrink-0 text-primary">{icon}</span>
      <a href={href} className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">
        {text}
      </a>
    </li>
  )
}
