import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { ServiceCard } from '@/components/service-card';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Lock, 
  Zap, 
  Leaf, 
  Network,
  Server,
  BarChart,
  Cloud,
  Cpu
} from 'lucide-react';

export default function Home() {
  return (
    <LayoutWrapper>
      {/* Hero Section - Aethir Style */}
      <SectionContainer className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
              Powerful data center solutions
              <br />
              on-demand
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance leading-relaxed">
              A sovereign growth path built for African teams. Matmon provides mission-critical data center services and cloud infrastructure built for the continent.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full text-base">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold py-6 px-8 rounded-full text-base">
                <Link href="/infrastructure">Explore Roadmap</Link>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10">
            <img 
              src="/hero-bg.jpg" 
              alt="Data center visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Trust Bar - Company Logos */}
      <SectionContainer className="py-12 border-y border-foreground/10">
        <div className="text-center mb-8">
          <p className="text-sm text-foreground/60 uppercase tracking-widest">Trusted by Leading Organizations</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 1</div>
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 2</div>
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 3</div>
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 4</div>
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 5</div>
          <div className="h-12 bg-foreground/10 rounded-lg flex items-center justify-center text-foreground/60 font-semibold">Partner 6</div>
        </div>
      </SectionContainer>

      {/* Infrastructure Section - Aethir Earth Style */}
      <SectionContainer className="py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-foreground/10 bg-gradient-to-bl from-secondary/20 via-transparent to-primary/10">
            <img 
              src="/infrastructure.jpg" 
              alt="Data center infrastructure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-4">Matmon Infrastructure</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Unlocking the potential of sovereign infrastructure
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance leading-relaxed">
              We&apos;re building three phases of infrastructure designed for African businesses. Phase 0 is live with sovereign colocation. Managed cloud and AI pipelines coming in 2026.
            </p>
            
            <Button asChild className="w-fit bg-secondary hover:bg-secondary/90 text-white font-semibold py-6 px-8 rounded-full text-base">
              <Link href="/infrastructure">Learn More</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Roadmap/Timeline Section */}
      <SectionContainer className="py-24 bg-foreground/5 rounded-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Roadmap</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Streamlined Matmon compute capacity
            <br />
            for African enterprises.
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            From day one, we focused on making sovereign infrastructure accessible and reliable for African businesses. Every phase is built with local compliance and sustainability in mind.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Phase 0</p>
            <h3 className="text-2xl font-bold mb-4">Sovereign Colocation</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Full cabinet colocation services with Kenya-first policies. Your equipment, our expertise.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Live Now
            </div>
          </div>

          <div className="rounded-xl border border-foreground/20 bg-card p-8 opacity-75">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Phase 1</p>
            <h3 className="text-2xl font-bold mb-4">Managed Cloud</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Kubernetes-native, Africa-optimized cloud services with private and hybrid options.
            </p>
            <p className="text-xs text-foreground/50 font-semibold">Q2 2026</p>
          </div>

          <div className="rounded-xl border border-foreground/20 bg-card p-8 opacity-75">
            <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Phase 2</p>
            <h3 className="text-2xl font-bold mb-4">AI Pipelines</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Sovereign analytics and AI inference powered by local hardware and data residency.
            </p>
            <p className="text-xs text-foreground/50 font-semibold">Q4 2026</p>
          </div>
        </div>
      </SectionContainer>

      {/* Features Grid - Why Matmon */}
      <SectionContainer className="py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Become a Matmon Partner
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Build on sovereign infrastructure engineered for reliability and compliance. Get 24/7 local support and transparent pricing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-foreground/10 bg-card/50 p-8 hover:border-primary/50 transition-colors">
            <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <Network className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Highly Scalable</h3>
            <p className="text-foreground/70 leading-relaxed">
              From single cabinets to multi-rack deployments. Scale your infrastructure as your business grows.
            </p>
          </div>

          <div className="rounded-xl border border-foreground/10 bg-card/50 p-8 hover:border-secondary/50 transition-colors">
            <div className="h-16 w-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Decentralized Network</h3>
            <p className="text-foreground/70 leading-relaxed">
              Local-first architecture ensures data stays in Kenya while providing global connectivity standards.
            </p>
          </div>

          <div className="rounded-xl border border-foreground/10 bg-card/50 p-8 hover:border-accent/50 transition-colors">
            <div className="h-16 w-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
              <Lock className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strong Returns</h3>
            <p className="text-foreground/70 leading-relaxed">
              Competitive pricing with ROI-focused terms. Transparent billing with no hidden infrastructure costs.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section - Bold Call to Action */}
      <SectionContainer className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 rounded-3xl py-24 text-black">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            The next evolution of
            <br />
            sovereign cloud compute
          </h2>
          <Button asChild className="bg-black hover:bg-black/90 text-accent font-semibold py-6 px-8 rounded-full text-base mt-8">
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Pricing Section */}
      <SectionContainer className="py-24">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Flexible Pricing for
            <br />
            Every Project
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent pricing. No hidden fees. Scale as you grow with pay-per-use models and volume discounts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {/* Basic Card */}
          <div className="rounded-xl border border-foreground/20 bg-card p-8">
            <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Basic Edition</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$600</span>
              <span className="text-foreground/70 ml-2">/ month</span>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Perfect for startups and small teams getting started with sovereign infrastructure.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-sm text-foreground/70">✓ 2 Cabinets</li>
              <li className="text-sm text-foreground/70">✓ 24/7 Support</li>
              <li className="text-sm text-foreground/70">✓ Basic Monitoring</li>
            </ul>
            <Button asChild variant="outline" className="w-full border-foreground/20 rounded-full">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Enterprise Card - Featured */}
          <div className="rounded-xl border-2 border-primary bg-gradient-to-br from-primary/10 to-transparent p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">Most Popular</span>
            </div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 mt-2">Enterprise Edition</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$1000</span>
              <span className="text-foreground/70 ml-2">/ month</span>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Complete sovereign infrastructure solution for enterprises and mission-critical workloads.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-sm text-foreground/70">✓ 8 Cabinets</li>
              <li className="text-sm text-foreground/70">✓ 24/7 Premium Support</li>
              <li className="text-sm text-foreground/70">✓ Advanced Monitoring</li>
              <li className="text-sm text-foreground/70">✓ DPA Compliance</li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-semibold">
              <Link href="/contact">Start Enterprise</Link>
            </Button>
          </div>

          {/* Custom Card */}
          <div className="rounded-xl border border-foreground/20 bg-card p-8">
            <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Custom Plan</p>
            <div className="mb-6">
              <span className="text-3xl font-bold">Custom</span>
            </div>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Need something specific? Let us build a custom plan tailored to your requirements.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="text-sm text-foreground/70">✓ Unlimited Cabinets</li>
              <li className="text-sm text-foreground/70">✓ Custom SLA</li>
              <li className="text-sm text-foreground/70">✓ Dedicated Support</li>
            </ul>
            <Button asChild variant="outline" className="w-full border-foreground/20 rounded-full">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
