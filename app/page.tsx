import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { Button } from '@/components/ui/button';
import { GlowSphere } from '@/components/glow-sphere';
import Link from 'next/link';
import { 
  Lock, 
  Zap, 
  Network,
  Server,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function Home() {
  return (
    <LayoutWrapper>
      {/* Hero Section - Aethir Style centered */}
      <SectionContainer className="relative pt-32 pb-40 lg:pt-48 lg:pb-64 overflow-hidden text-center">
        <GlowSphere color="red" size="xl" className="-top-20 -left-20 opacity-20" />
        <GlowSphere color="blue" size="lg" className="bottom-0 -right-20 opacity-10" />
        
        {/* Abstract Background Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl opacity-40 pointer-events-none">
          <img 
            src="/hero-sphere.png" 
            alt="Hero Sphere" 
            className="w-full h-auto animate-float"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-none tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            POWERFUL DATA CENTER
            <br />
            SOLUTIONS ON-DEMAND
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            A sovereign growth path built for African teams. Matmon provides mission-critical data center services and cloud infrastructure built for the continent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest shadow-glow-red/20 transition-all hover:scale-105">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/10 hover:bg-white/5 text-white font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest transition-all">
              <Link href="/infrastructure">Explore Roadmap</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Trust Bar - Monochrome Minimalist */}
      <SectionContainer className="pb-24 border-b border-white/5">
        <div className="text-center mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Trusted by leading organizations</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-16 gap-y-8 opacity-30 grayscale contrast-125">
          <div className="text-xl sm:text-2xl font-black tracking-tighter">PARTNER 01</div>
          <div className="text-xl sm:text-2xl font-black tracking-tighter">PARTNER 02</div>
          <div className="text-xl sm:text-2xl font-black tracking-tighter">PARTNER 03</div>
          <div className="text-xl sm:text-2xl font-black tracking-tighter">PARTNER 04</div>
          <div className="text-xl sm:text-2xl font-black tracking-tighter">PARTNER 05</div>
        </div>
      </SectionContainer>

      {/* Infrastructure Section - Earth/Blue Style */}
      <SectionContainer className="py-32 lg:py-48 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Visual - The Blue Sphere */}
          <div className="relative order-2 lg:order-1">
            <GlowSphere color="blue" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
            <img 
              src="/infra-sphere.png" 
              alt="Data center infrastructure"
              className="w-full h-auto max-w-lg mx-auto drop-shadow-[0_0_50px_rgba(0,112,255,0.3)]"
            />
          </div>

          {/* Right Content */}
          <div className="relative z-10 order-1 lg:order-2">
            <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-1">Matmon Infrastructure</p>
            <h2 className="text-3xl sm:text-6xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8">
              UNLOCKING THE POTENTIAL OF SOVEREIGN INFRASTRUCTURE
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              We&apos;re building three phases of infrastructure designed for African businesses. Phase 0 is live with sovereign colocation. Managed cloud and AI pipelines coming in 2026.
            </p>
            
            <Button asChild className="glass border-white/10 hover:bg-white/5 text-white font-bold h-12 px-8 rounded-full text-xs uppercase tracking-widest">
              <Link href="/infrastructure">Learn More</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Roadmap/Timeline Section - 3D Cards */}
      <SectionContainer className="py-32 bg-white/[0.01] border-y border-white/5 relative">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6">Our Roadmap</p>
          <h2 className="text-3xl sm:text-6xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8">
            STREAMLINED MATMON COMPUTE CAPACITY FOR AFRICAN ENTERPRISES
          </h2>
          <p className="text-muted-foreground leading-relaxed font-medium">
            From day one, we focused on making sovereign infrastructure accessible and reliable for African businesses. Every phase is built with local compliance and sustainability in mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass-card p-10 border-primary/30 bg-primary/5">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">Phase 0</p>
            <h3 className="text-3xl font-black tracking-tighter mb-6">SOVEREIGN COLOCATION</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Full cabinet colocation services with Kenya-first policies. Your equipment, our expertise.
            </p>
            <div className="inline-flex items-center gap-3 rounded-full glass px-6 py-2 text-[10px] font-black uppercase tracking-widest text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Live Now
            </div>
          </div>

          <div className="glass-card p-10 opacity-60">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Phase 1</p>
            <h3 className="text-3xl font-black tracking-tighter mb-6">MANAGED CLOUD</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Kubernetes-native, Africa-optimized cloud services with private and hybrid options.
            </p>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Q2 2026</p>
          </div>

          <div className="glass-card p-10 opacity-60">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Phase 2</p>
            <h3 className="text-3xl font-black tracking-tighter mb-6">AI PIPELINES</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              Sovereign analytics and AI inference powered by local hardware and data residency.
            </p>
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Q4 2026</p>
          </div>
        </div>
      </SectionContainer>

      {/* Features Grid - Why Matmon / Partners */}
      <SectionContainer className="py-32 relative">
        <GlowSphere color="red" size="lg" className="top-1/2 left-0 opacity-10" />
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-7xl font-black leading-[1.1] sm:leading-none tracking-tighter mb-8">
            BECOME A MATMON PARTNER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Build on sovereign infrastructure engineered for reliability and compliance. Get 24/7 local support and transparent pricing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass-card p-12 text-center group">
            <div className="h-20 w-20 mx-auto rounded-full glass flex items-center justify-center mb-8 border-primary/20 shadow-glow-red/10 group-hover:scale-110 transition-transform">
              <Network className="h-10 w-10 text-primary drop-shadow-[0_0_10px_rgba(255,30,30,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Highly Scalable</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              From single cabinets to multi-rack deployments. Scale your infrastructure as your business grows.
            </p>
          </div>

          <div className="glass-card p-12 text-center group">
            <div className="h-20 w-20 mx-auto rounded-full glass flex items-center justify-center mb-8 border-secondary/20 shadow-glow-blue/10 group-hover:scale-110 transition-transform">
              <Zap className="h-10 w-10 text-secondary drop-shadow-[0_0_10px_rgba(0,112,255,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Decentralized Network</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Local-first architecture ensures data stays in Kenya while providing global connectivity standards.
            </p>
          </div>

          <div className="glass-card p-12 text-center group">
            <div className="h-20 w-20 mx-auto rounded-full glass flex items-center justify-center mb-8 border-white/20 shadow-glow-blue/10 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Strong Returns</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Competitive pricing with ROI-focused terms. Transparent billing with no hidden infrastructure costs.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section - Bold Call to Action */}
      <SectionContainer className="py-24 px-6">
        <div className="glass-card bg-primary p-20 lg:p-32 text-center overflow-hidden relative border-none">
          <GlowSphere color="blue" size="xl" className="-bottom-1/2 -left-1/4 opacity-30" />
          <h2 className="text-3xl sm:text-7xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-12 text-black max-w-4xl mx-auto">
            THE NEXT EVOLUTION OF SOVEREIGN CLOUD COMPUTE
          </h2>
          <Button asChild className="bg-black hover:bg-black/90 text-primary font-bold h-16 px-12 rounded-full text-base uppercase tracking-widest shadow-2xl transition-all hover:scale-105">
            <Link href="/contact">Get Started Now</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Pricing Section - Neon Highlight */}
      <SectionContainer className="py-32 lg:py-48 relative">
        <GlowSphere color="blue" size="lg" className="top-1/4 right-0 opacity-10" />
        <div className="text-center mb-24">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6">Pricing</p>
          <h2 className="text-4xl sm:text-7xl font-black leading-none tracking-tighter mb-8">
            FLEXIBLE PRICING FOR
            <br />
            EVERY PROJECT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
            Simple, transparent pricing. No hidden fees. Scale as you grow with pay-per-use models and volume discounts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-center">
          {/* Basic Card */}
          <div className="glass-card p-12 border-white/5 opacity-80">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-8">Basic Edition</p>
            <div className="mb-10">
              <span className="text-5xl font-black tracking-tighter">$600</span>
              <span className="text-muted-foreground ml-3 text-sm">/ month</span>
            </div>
            <p className="text-muted-foreground mb-10 leading-relaxed text-sm font-medium">
              Perfect for startups and small teams getting started with sovereign infrastructure.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="text-xs font-bold flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-secondary" /> 2 Cabinets</li>
              <li className="text-xs font-bold flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-secondary" /> 24/7 Support</li>
              <li className="text-xs font-bold flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-secondary" /> Basic Monitoring</li>
            </ul>
            <Button asChild variant="outline" className="glass w-full border-white/10 rounded-full h-12 uppercase tracking-widest text-[10px] font-black">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Enterprise Card - Red Highlight */}
          <div className="glass-card p-14 border-primary bg-primary/10 relative z-10 lg:scale-110 shadow-glow-red/20 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-primary text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">Most Popular</span>
            </div>
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-8 mt-4">Enterprise Edition</p>
            <div className="mb-10">
              <span className="text-6xl font-black tracking-tighter">$1000</span>
              <span className="text-primary/70 ml-3 text-sm font-black">/ month</span>
            </div>
            <p className="text-white/80 mb-10 leading-relaxed text-sm font-medium">
              Complete sovereign infrastructure solution for enterprises and mission-critical workloads.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="text-xs font-black flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> 8 Cabinets</li>
              <li className="text-xs font-black flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> 24/7 Premium Support</li>
              <li className="text-xs font-black flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> Advanced Monitoring</li>
              <li className="text-xs font-black flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> DPA Compliance</li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-14 uppercase tracking-widest text-[10px] font-black shadow-glow-red/20">
              <Link href="/contact">Start Enterprise</Link>
            </Button>
          </div>

          {/* Custom Card */}
          <div className="glass-card p-12 border-white/5 opacity-80">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-8">Custom Plan</p>
            <div className="mb-10">
              <span className="text-4xl font-black tracking-tighter uppercase">Custom</span>
            </div>
            <p className="text-muted-foreground mb-10 leading-relaxed text-sm font-medium">
              Need something specific? Let us build a custom plan tailored to your requirements.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="text-xs font-bold flex items-center gap-3"><Globe className="h-4 w-4 text-white" /> Unlimited Cabinets</li>
              <li className="text-xs font-bold flex items-center gap-3"><Globe className="h-4 w-4 text-white" /> Custom SLA</li>
              <li className="text-xs font-bold flex items-center gap-3"><Globe className="h-4 w-4 text-white" /> Dedicated Support</li>
            </ul>
            <Button asChild variant="outline" className="glass w-full border-white/10 rounded-full h-12 uppercase tracking-widest text-[10px] font-black">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}

