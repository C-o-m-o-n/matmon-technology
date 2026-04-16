import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { ServiceCard } from '@/components/service-card';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import {
  Server,
  BarChart,
  Cloud,
  Cpu,
  Network,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services - Matmon Technology',
  description: 'Sovereign colocation, managed cloud, analytics, and AI inference services from Matmon Technology.',
};

export default function Services() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-center">
        <GlowSphere color="red" size="lg" className="-top-20 -left-20 opacity-10" />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6 inline-block">Service Catalog</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            SCALABLE INFRASTRUCTURE
            <br />
            ON-DEMAND
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            From sovereign colocation to managed cloud and AI inference. Choose what you need, scale as you grow. All with Kenya-first data policies and guaranteed compliance.
          </p>
        </div>
      </SectionContainer>

      {/* Service Cards Grid - Glass Style */}
      <SectionContainer className="pb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Server}
            title="Sovereign Colocation"
            description="Full rack, half rack, and cabinet colocation. Bring your own hardware, use our power, cooling, and expertise. Kenya-first policies."
            href="#colocation"
            className="glass-card"
          />
          <ServiceCard
            icon={BarChart}
            title="Managed Analytics"
            description="End-to-end analytics infrastructure. Data pipelines, data warehousing, and BI tools. Process your data locally."
            href="#analytics"
            className="glass-card"
          />
          <ServiceCard
            icon={Cloud}
            title="Private Cloud"
            description="Dedicated cloud infrastructure on Matmon hardware. Kubernetes-native, fully managed, zero compliance surprises."
            href="#private-cloud"
            className="glass-card"
          />
          <ServiceCard
            icon={Cpu}
            title="IoT & Edge"
            description="Edge computing and IoT support. Process sensor data locally, reduce latency, maintain sovereignty. Real-time analytics."
            href="#iot-edge"
            className="glass-card"
          />
          <ServiceCard
            icon={Network}
            title="Hybrid Cloud"
            description="Seamlessly integrate your on-premises systems with Matmon cloud. Burst to cloud when needed, stay in control."
            href="#hybrid"
            className="glass-card"
          />
          <ServiceCard
            icon={Zap}
            title="AI Inference"
            description="Deploy and run your AI models locally. Custom inference engines on sovereign infrastructure. Fully compliant."
            href="#ai"
            className="glass-card"
          />
        </div>
      </SectionContainer>

      {/* Detailed Service Sections - Updated to Aethir Style */}

      {/* Colocation */}
      <SectionContainer id="colocation" className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">Sovereign Colocation</h2>
            <div className="space-y-6 text-muted-foreground mb-10 font-medium">
              <p>
                Bring your own hardware to Matmon and let us handle power, cooling, and connectivity. Full cabinet colocation with Kenya-first data residency policies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Dedicated cabinet space</li>
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> 99.95% uptime SLA</li>
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Dual-feed power with battery backup</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Get Quote"
              primaryHref="/contact"
              secondaryText="View Specs"
              secondaryHref="/infrastructure"
            />
          </div>
          <div className="glass-card aspect-video overflow-hidden flex items-center justify-center p-8 sm:p-20">
            <Server className="h-full w-full text-primary/20 drop-shadow-[0_0_50px_rgba(255,30,30,0.2)]" />
          </div>
        </div>
      </SectionContainer>

      {/* Analytics */}
      <SectionContainer id="analytics" className="py-32">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="glass-card aspect-video overflow-hidden flex items-center justify-center p-8 sm:p-20 order-last lg:order-first">
            <BarChart className="h-full w-full text-secondary/20 drop-shadow-[0_0_50px_rgba(0,112,255,0.2)]" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8">Managed Analytics</h2>
            <div className="space-y-6 text-muted-foreground mb-10 font-medium">
              <p>
                Transform raw data into actionable insights on infrastructure you control. Fully managed analytics platform optimized for African use cases.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Data ingestion pipelines</li>
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> BI dashboards</li>
                <li className="flex items-center gap-3 text-white text-sm font-bold"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> DPA-compliant governance</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Request Demo"
              primaryHref="/contact"
              secondaryText="Learn More"
              secondaryHref="/about"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Support & SLA */}
      <SectionContainer className="py-32 relative overflow-hidden bg-primary/5 border-y border-primary/10">
        <GlowSphere color="red" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">Support & SLA</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            All Matmon services include world-class support and guaranteed uptime
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          <div className="glass-card p-10 bg-white/[0.02]">
            <h3 className="font-black tracking-tighter text-xl uppercase mb-4 text-white">24/7 Support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Dedicated support team available around the clock. Phone, email, and ticket system. Local experts who understand your business.
            </p>
          </div>
          <div className="glass-card p-10 bg-white/[0.02]">
            <h3 className="font-black tracking-tighter text-xl uppercase mb-4 text-white">99.95% Uptime</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Enterprise-grade availability guaranteed. Service credits for any downtime. Redundancy built in at every level.
            </p>
          </div>
          <div className="glass-card p-10 bg-white/[0.02]">
            <h3 className="font-black tracking-tighter text-xl uppercase mb-4 text-white">Compliance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Regular compliance audits included. DPA 2019 expertise built into every service. Compliance team on your side.
            </p>
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}

