import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import { Server, ShieldCheck, Network, Database, Cpu } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Infrastructure & Security - Matmon Tech',
  description: 'Matmon Technology: Sovereign data centers, Proxmox virtualization, and integrated digital security in Kisumu, Kenya.',
};

export default function Infrastructure() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-center">
        <GlowSphere color="blue" size="xl" className="-top-40 -left-40 opacity-10" />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-1">Matmon Tech</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase">
            SOVEREIGN DATA.
            <br />
            LOCAL POWER.
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Building the foundation for Africa's smart ecosystem. We provide enterprise-grade data centers and sovereign cloud solutions from the Kisumu SEZ.
          </p>
        </div>
      </SectionContainer>

      {/* The Kisumu Edge & Visual */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1 glass-card p-0 aspect-video overflow-hidden flex items-center justify-center">
             <GlowSphere color="blue" size="lg" className="opacity-20" />
             <div className="text-center relative z-10">
                <Server className="h-16 w-16 mx-auto text-secondary mb-4 drop-shadow-[0_0_20px_rgba(0,112,255,0.5)]" />
                <p className="text-xs font-black uppercase tracking-widest text-white/50">HP Cluster 01</p>
                <p className="text-3xl font-black text-white mt-2">UPTIME: 99.99%</p>
             </div>
          </div>
          <div className="relative z-10 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">The Kisumu Edge</h2>
            <div className="space-y-6 text-muted-foreground font-medium">
              <p>
                Strategically located in the Kisumu Special Economic Zone (SEZ), our Tier-certified facility provides low-latency hosting specifically optimized for the Western Kenya market and the broader East African region.
              </p>
              <p>
                By processing data locally, we empower SMEs, government agencies, and the agriculture sector with unmatched speed and absolute data sovereignty.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* The Stack */}
      <SectionContainer className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">THE STACK</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Enterprise-grade open-source infrastructure engineered for scale.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass-card p-10 group hover:border-secondary/30 transition-colors">
            <Cpu className="h-10 w-10 text-secondary mb-6 drop-shadow-[0_0_10px_rgba(0,112,255,0.5)]" />
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">Proxmox Virtualization</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Robust, open-source server virtualization management. Allowing us to deploy and manage highly available VMs and containers at scale with minimal overhead.
            </p>
          </div>
          <div className="glass-card p-10 group hover:border-white/30 transition-colors">
            <Server className="h-10 w-10 text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">Ceph Storage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Massively scalable, software-defined distributed storage. Ensuring data redundancy, high availability, and self-healing capabilities across our cluster.
            </p>
          </div>
          <div className="glass-card p-10 group hover:border-primary/30 transition-colors">
            <Database className="h-10 w-10 text-primary mb-6 drop-shadow-[0_0_10px_rgba(255,30,30,0.5)]" />
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">MinIO Object Storage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              High-performance, S3-compatible object storage. Ideal for storing vast amounts of unstructured data, IoT logs, and machine learning datasets.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Services */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">CORE SERVICES</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Comprehensive technical support for the built environment.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="glass-card p-10 border-primary/20">
            <h3 className="text-2xl font-black tracking-tighter mb-6 text-primary uppercase">Colocation & Cloud</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Sovereign cloud hosting for SMEs.</span>
              </li>
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Managed hosting and dedicated servers.</span>
              </li>
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Secure rack space in our Kisumu facility.</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-10 border-white/20">
            <h3 className="text-2xl font-black tracking-tighter mb-6 text-white uppercase">Digital Security</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Integrated access control systems.</span>
              </li>
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Smart intercom configuration.</span>
              </li>
              <li className="flex gap-4 items-start">
                <ShieldCheck className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">IoT-based facility monitoring.</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-10 border-secondary/20">
            <h3 className="text-2xl font-black tracking-tighter mb-6 text-secondary uppercase">Network Design</h3>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <Network className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Enterprise WiFi network troubleshooting.</span>
              </li>
              <li className="flex gap-4 items-start">
                <Network className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Structured cabling and infrastructure.</span>
              </li>
              <li className="flex gap-4 items-start">
                <Network className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-white/90">Low-latency routing optimization.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="py-32 pb-48 text-center">
        <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-8">Deploy Your Infrastructure</h2>
        <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
          Partner with Matmon Technology to build scalable, compliant, and sovereign data systems.
        </p>
        <CTAButtonPair 
          primaryText="Request Audit"
          primaryHref="/contact"
          secondaryText="View Compliance"
          secondaryHref="/compliance"
        />
      </SectionContainer>
    </LayoutWrapper>
  );
}
