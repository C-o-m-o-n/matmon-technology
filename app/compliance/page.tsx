import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import { CheckCircle, ShieldCheck, Lock, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance & Security - Matmon Technology',
  description: 'DPA 2019 compliant data center in Kenya with ODPC approval and enterprise-grade security.',
};

export default function Compliance() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <GlowSphere color="red" size="xl" className="-top-40 -right-40 opacity-10" />
        <div className="max-w-4xl">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-primary pb-1">Compliance & Security</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase text-balance">
            BUILT FOR STRICT
            <br />
            STANDARDS
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium">
            Matmon is designed from the ground up to comply with the Data Protection Act 2019, ODPC requirements, and enterprise security standards. Compliance isn&apos;t an afterthought—it&apos;s foundational.
          </p>
        </div>
      </SectionContainer>

      {/* DPA 2019 Compliance */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">DPA 2019 COMPLIANCE</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Full compliance with Kenya&apos;s data protection regulations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-12 border-primary/30 bg-primary/5">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-primary uppercase flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-primary shadow-glow-red/20" />
              What We Do
            </h3>
            <ul className="space-y-6">
              {[
                'Keep all data within Kenya by default',
                'Implement strict data minimization principles',
                'Provide explicit consent mechanisms',
                'Enable data subject rights (access, erasure)',
                'Keep detailed processing audit trails',
                'Report breaches within 72 hours to ODPC',
              ].map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-12 border-white/10">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-white uppercase">Key Requirements</h3>
            <ul className="space-y-6">
              {[
                { label: 'Legal Basis', desc: 'Every data processing phase must have clear legal justification.' },
                { label: 'Transparency', desc: 'Clear privacy notices and policies in plain language.' },
                { label: 'Purpose Limitation', desc: 'Data used only for stated purposes.' },
                { label: 'Data Minimization', desc: 'Only collect what is absolutely necessary.' },
                { label: 'Accountability', desc: 'Demonstrate compliance through documentation.' },
              ].map((req) => (
                <li key={req.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">{req.label}</span>
                  <p className="text-sm font-medium text-muted-foreground">{req.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* ODPC Registration */}
      <SectionContainer className="py-32 relative overflow-hidden">
        <GlowSphere color="blue" size="lg" className="bottom-0 left-0 opacity-10" />
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">ODPC APPROVED</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Registered with and approved by Kenya&apos;s Office of the Data Protection Commissioner
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-12 bg-white/[0.02]">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-secondary uppercase">Registration</h3>
            <dl className="space-y-6">
              {[
                { label: 'Registered Entity', value: 'Matmon Technology Limited' },
                { label: 'ODPC Registration ID', value: 'ODPC-DC-2024-001' },
                { label: 'Data Controller Status', value: 'Approved & Active' },
                { label: 'Next Audit', value: 'Scheduled for Q2 2025' },
              ].map((spec) => (
                <div key={spec.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <dt className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{spec.label}</dt>
                  <dd className="text-sm font-bold text-white uppercase">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="glass-card p-12 bg-white/[0.02] flex flex-col justify-center">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-white uppercase">Sovereignty First</h3>
            <p className="text-muted-foreground font-medium leading-relaxed mb-10">
              Our ODPC registration isn&apos;t just a piece of paper. It&apos;s a commitment to our &apos;Sovereign-First&apos; architecture, ensuring all data handling policies are vetted local regulators.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-bold text-white"><CheckCircle className="h-5 w-5 text-secondary" /> Regular security assessments</div>
              <div className="flex items-center gap-4 text-sm font-bold text-white"><CheckCircle className="h-5 w-5 text-secondary" /> Penetration testing as standard</div>
              <div className="flex items-center gap-4 text-sm font-bold text-white"><CheckCircle className="h-5 w-5 text-secondary" /> Vetted handling policies</div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Shared Responsibility Model */}
      <SectionContainer className="py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">SHARED MODEL</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Security is a partnership. We secure infrastructure; you secure your applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="glass-card p-12 border-primary/20">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-primary uppercase">Matmon Secured</h3>
            <ul className="space-y-6">
              {[
                'Data center physical access control',
                'Network infrastructure & DDoS protection',
                'Hardware maintenance & patching',
                'Infrastructure-level backup/DR',
                'Global compliance certifications',
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <Lock className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-12 border-secondary/20">
            <h3 className="text-2xl font-black tracking-tighter mb-10 text-secondary uppercase">You Secured</h3>
            <ul className="space-y-6">
              {[
                'Application security & code reviews',
                'User access management (IAM)',
                'Data classification & key management',
                'App-level backups & recovery testing',
                'Vulnerability management in your app',
              ].map((item) => (
                <li key={item} className="flex gap-4 items-center">
                  <Globe className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Certifications Grid */}
      <SectionContainer className="py-32 pb-48">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: 'ISO 27001', status: 'ACTIVE', desc: 'Information Security Management System. Verified international standard.' },
            { title: 'SOC 2 Type II', status: 'IN PROGRESS', desc: 'Detailed security control audit over time. Scheduled for Q3 2025.' },
            { title: 'DPA Compliant', status: 'VERIFIED', desc: 'Technically and legally verified against Kenya DPA 2019.' },
          ].map((cert) => (
            <div key={cert.title} className="glass-card p-10 text-center group">
              <h3 className="text-3xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors">{cert.title}</h3>
              <div className="inline-block px-4 py-1 rounded-full glass border-white/10 text-[10px] font-black uppercase tracking-widest mb-6 text-primary">{cert.status}</div>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}

