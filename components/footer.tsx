import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-primary"></div>
              <span className="font-bold">Matmon</span>
            </div>
            <p className="text-sm text-foreground/70">
              Kenya&apos;s sovereign data center in Kisumu, enabling African businesses to own their data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-foreground/70 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/infrastructure" className="text-foreground/70 hover:text-primary transition-colors">Infrastructure</Link></li>
              <li><Link href="/services" className="text-foreground/70 hover:text-primary transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compliance" className="text-foreground/70 hover:text-primary transition-colors">Compliance</Link></li>
              <li><Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Data Center Bible</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Kisumu, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@matmon.tech" className="hover:text-primary transition-colors">info@matmon.tech</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+254" className="hover:text-primary transition-colors">+254 (0) 700 000 000</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/60">
          <p>© 2024 Matmon Technology. All rights reserved.</p>
          <p>Powered by Matmon Technology • Kisumu, Kenya • DPA 2019 Compliant</p>
        </div>
      </div>
    </footer>
  );
}
