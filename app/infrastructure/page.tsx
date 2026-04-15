import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { TimelineCard } from '@/components/timeline-card';
import { CTAButtonPair } from '@/components/cta-button-pair';

export const metadata: Metadata = {
  title: 'Infrastructure - Matmon Technology',
  description: 'From POC to Production: Matmon\'s phased rollout of sovereign data center infrastructure in Kisumu, Kenya.',
};

export default function Infrastructure() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="py-20 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            From POC to Production
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Matmon is rolling out in phases. Phase 0 is live. We&apos;re scaling steadily with each phase adding new capabilities while maintaining the highest standards of availability and compliance.
          </p>
        </div>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Roadmap</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Strategic phases of expansion to serve growing African market demands
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
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
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Specifications</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Built for performance, reliability, and compliance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card/50 p-8">
            <h3 className="text-xl font-semibold mb-6 text-accent">Data Center Specs</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-foreground/70">Location</dt>
                <dd className="mt-1 text-foreground">Kisumu, Kenya</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Uptime SLA</dt>
                <dd className="mt-1 text-foreground">99.95% guaranteed</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Power Supply</dt>
                <dd className="mt-1 text-foreground">100% renewable energy, dual feed redundancy</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Cooling</dt>
                <dd className="mt-1 text-foreground">Advanced liquid cooling, efficiency optimized</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Security</dt>
                <dd className="mt-1 text-foreground">24/7 on-site security, biometric access</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-8">
            <h3 className="text-xl font-semibold mb-6 text-accent">Compliance & Certifications</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-foreground/70">Data Protection</dt>
                <dd className="mt-1 text-foreground">DPA 2019 Compliant</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Regulatory</dt>
                <dd className="mt-1 text-foreground">ODPC Registered & Approved</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Standards</dt>
                <dd className="mt-1 text-foreground">ISO 27001, SOC 2 Type II (in progress)</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Data Residency</dt>
                <dd className="mt-1 text-foreground">Kenya-first, Africa-aware policies</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Support</dt>
                <dd className="mt-1 text-foreground">24/7 local on-site support team</dd>
              </div>
            </dl>
          </div>
        </div>
      </SectionContainer>

      {/* Technical Details */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Network & Connectivity</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            High-speed, low-latency connections across East Africa and the world
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">Fiber Connectivity</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Multiple fiber paths with redundancy. Direct connections to major East African internet exchanges.
            </p>
            <p className="text-sm font-medium">100+ Gbps capacity</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">International Links</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Peering agreements with major global networks. Direct access to Tier 1 providers.
            </p>
            <p className="text-sm font-medium">&lt;100ms to Europe</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">Regional Access</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Ultra-low latency to East African markets. Direct access to regional data exchanges.
            </p>
            <p className="text-sm font-medium">&lt;5ms to Nairobi</p>
          </div>
        </div>
      </SectionContainer>

      {/* Scalability */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built to Scale</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our infrastructure grows with your needs while maintaining sovereign control and compliance
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Capacity Roadmap</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent font-bold">2024</span>
                <span>Phase 0 launch with 50+ colocation cabinets</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2025</span>
                <span>Expansion to 200+ cabinets, Phase 1 prep</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2026</span>
                <span>Phase 1 launch, Phase 2 roadmap defined</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">2027+</span>
                <span>Regional expansion across East Africa</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What This Means</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Your infrastructure grows without migrations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Consistent experience across phases and expansions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>No surprise compliance changes or data relocations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Future-proof infrastructure for African growth</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build on Sovereign Infrastructure?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Start with colocation today, scale to managed cloud tomorrow.
          </p>
          <CTAButtonPair 
            primaryText="Get Started"
            primaryHref="/contact"
            secondaryText="Download Data Center Bible"
            secondaryHref="/"
          />
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
