import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { TimelineCard } from '@/components/timeline-card';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';

export const metadata: Metadata = {
  title: 'Infrastructure - Matmon Technology',
  description: 'From POC to Production: Matmon\'s phased rollout of sovereign data center infrastructure in Kisumu, Kenya.',
};

export default function Infrastructure() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <GlowSphere color="blue" size="xl" className="-top-40 -left-40 opacity-10" />
        <div className="max-w-4xl">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-1">Matmon Infrastructure</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase">
            FROM POC TO
            <br />
            PRODUCTION
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
            Matmon is rolling out in phases. Phase 0 is live. We&apos;re scaling steadily with each phase adding new capabilities while maintaining the highest standards of availability and compliance.
          </p>
        </div>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <GlowSphere color="red" size="lg" className="-bottom-20 -right-20 opacity-10" />
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">OUR ROADMAP</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Strategic phases of expansion to serve growing African market demands
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <TimelineCard
            phase="Phase 0"
            status="Sovereign Colocation - Live"
            description="Full cabinet colocation services with Kenya-first data residency policies. Your equipment, our expertise and infrastructure."
            isActive={true}
            stats={[
              { label: 'Cabinets', value: '50+' },
              { label: 'Availability', value: '99.95%' },
            ]}
          />
          <TimelineCard
            phase="Phase 1"
            status="Managed Cloud Platform"
            description="Kubernetes-native cloud infrastructure. Private and hybrid cloud deployments running on Matmon hardware with full African sovereignty."
            stats={[
              { label: 'Timeline', value: 'Q2 2026' },
              { label: 'Capacity', value: '100TB RAM' },
            ]}
          />
          <TimelineCard
            phase="Phase 2"
            status="Data Pipelines & AI"
            description="Managed analytics and custom AI inference. Build, train, and deploy models locally with guaranteed data residency and compliance."
            stats={[
              { label: 'Timeline', value: 'Q4 2026' },
              { label: 'Focus', value: 'Analytics' },
            ]}
          />
        </div>
      </SectionContainer>

      {/* Specifications */}
      <SectionContainer className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">SPECIFICATIONS</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Built for performance, reliability, and compliance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-12 relative overflow-hidden group">
            <GlowSphere color="blue" size="md" className="-top-20 -right-20 opacity-10 group-hover:opacity-20 transition-opacity" />
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-secondary uppercase">Data Center Specs</h3>
            <dl className="space-y-6">
              {[
                { label: 'Location', value: 'Kisumu, Kenya' },
                { label: 'Uptime SLA', value: '99.95% guaranteed' },
                { label: 'Power Supply', value: '100% renewable energy, dual feed redundancy' },
                { label: 'Cooling', value: 'Advanced liquid cooling, efficiency optimized' },
                { label: 'Security', value: '24/7 on-site security, biometric access' },
              ].map((spec) => (
                <div key={spec.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</dt>
                  <dd className="text-sm font-bold text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass-card p-12 relative overflow-hidden group">
            <GlowSphere color="red" size="md" className="-bottom-20 -left-20 opacity-10 group-hover:opacity-20 transition-opacity" />
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-primary uppercase">Compliance & Certs</h3>
            <dl className="space-y-6">
              {[
                { label: 'Data Protection', value: 'DPA 2019 Compliant' },
                { label: 'Regulatory', value: 'ODPC Registered & Approved' },
                { label: 'Standards', value: 'ISO 27001, SOC 2 Type II (in progress)' },
                { label: 'Data Residency', value: 'Kenya-first, Africa-aware policies' },
                { label: 'Support', value: '24/7 local on-site support team' },
              ].map((spec) => (
                <div key={spec.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</dt>
                  <dd className="text-sm font-bold text-white">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </SectionContainer>

      {/* Connectivity */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <GlowSphere color="blue" size="xl" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="text-center mb-24 relative z-10">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">CONNECTIVITY</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            High-speed, low-latency connections across East Africa and the world
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative z-10">
          {[
            { title: 'Fiber Connectivity', desc: 'Multiple fiber paths with redundancy. Direct connections to major East African internet exchanges.', stat: '100+ Gbps capacity' },
            { title: 'International Links', desc: 'Peering agreements with major global networks. Direct access to Tier 1 providers.', stat: '<100ms to Europe' },
            { title: 'Regional Access', desc: 'Ultra-low latency to East African markets. Direct access to regional data exchanges.', stat: '<5ms to Nairobi' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-10 bg-white/[0.02] items-start flex flex-col justify-between h-full">
              <div>
                <h3 className="font-black tracking-tighter text-xl uppercase mb-6 text-white">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-8">
                  {item.desc}
                </p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-secondary">{item.stat}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Scalability */}
      <SectionContainer className="py-32 pb-48">
        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-7xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-12 uppercase">BUILT TO<br />SCALE</h2>
            <p className="text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-medium mb-12">
              Our infrastructure grows with your needs while maintaining sovereign control and compliance. Join us in building the largest sovereign cloud in East Africa.
            </p>
            <CTAButtonPair 
              primaryText="Get Started"
              primaryHref="/contact"
              secondaryText="Infrastructure Specs"
              secondaryHref="/infrastructure"
            />
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 sm:p-8 flex gap-4 sm:gap-6 items-start">
              <div className="text-2xl sm:text-3xl font-black text-primary/40 shrink-0">01</div>
              <div>
                <h3 className="font-black text-white uppercase mb-2">Infinite Scaling</h3>
                <p className="text-sm text-muted-foreground font-medium">Your infrastructure grows without migrations or hardware bottlenecks.</p>
              </div>
            </div>
            <div className="glass-card p-6 sm:p-8 flex gap-4 sm:gap-6 items-start sm:ml-4">
              <div className="text-2xl sm:text-3xl font-black text-secondary/40 shrink-0">02</div>
              <div>
                <h3 className="font-black text-white uppercase mb-2">Zero Compliance Surge</h3>
                <p className="text-sm text-muted-foreground font-medium">No surprise compliance changes or data relocations as you scale regionality.</p>
              </div>
            </div>
            <div className="glass-card p-6 sm:p-8 flex gap-4 sm:gap-6 items-start sm:ml-8">
              <div className="text-2xl sm:text-3xl font-black text-white/20 shrink-0">03</div>
              <div>
                <h3 className="font-black text-white uppercase mb-2">Future-Proofed</h3>
                <p className="text-sm text-muted-foreground font-medium">Native support for AI inference and high-throughput analytics as standard.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}

