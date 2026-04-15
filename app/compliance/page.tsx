import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance & Security - Matmon Technology',
  description: 'DPA 2019 compliant data center in Kenya with ODPC approval and enterprise-grade security.',
};

export default function Compliance() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="py-20 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Built for Kenya&apos;s Strictest Standards
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Matmon is designed from the ground up to comply with the Data Protection Act 2019, ODPC requirements, and enterprise security standards. Compliance isn&apos;t an afterthought—it&apos;s foundational.
          </p>
        </div>
      </SectionContainer>

      {/* DPA 2019 Compliance */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Data Protection Act 2019</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Full compliance with Kenya&apos;s data protection regulations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-primary bg-primary/10 p-8">
            <h3 className="text-xl font-semibold mb-6 text-accent flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              What We Do
            </h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Keep all data within Kenya by default</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Implement strict data minimization principles</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Provide explicit consent mechanisms for data processing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Enable data subject rights (access, erasure, portability)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Maintain detailed processing records and audit trails</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Report breaches within 72 hours to ODPC</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-8">
            <h3 className="text-xl font-semibold mb-6 text-accent">Key Requirements</h3>
            <ul className="space-y-4 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">1.</span>
                <span><strong>Legal Basis:</strong> Every data processing must have clear legal justification</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">2.</span>
                <span><strong>Transparency:</strong> Clear privacy notices and policies in plain language</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">3.</span>
                <span><strong>Purpose Limitation:</strong> Data used only for stated purposes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">4.</span>
                <span><strong>Data Minimization:</strong> Only collect what&apos;s necessary</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">5.</span>
                <span><strong>Security:</strong> Appropriate technical and organizational measures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-foreground/60 font-bold">6.</span>
                <span><strong>Accountability:</strong> Demonstrate compliance through documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* ODPC Registration */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">ODPC Registration & Approval</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Registered with and approved by Kenya&apos;s Office of the Data Protection Commissioner
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card/50 p-8">
            <h3 className="text-xl font-semibold mb-4">Registration Status</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-foreground/70">Registered</dt>
                <dd className="mt-1 text-foreground">Yes - Matmon Technology Limited</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">ODPC Registration ID</dt>
                <dd className="mt-1 text-foreground font-mono text-sm">ODPC-DC-2024-001</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Data Controller Status</dt>
                <dd className="mt-1 text-foreground">Registered & Approved</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground/70">Next Audit</dt>
                <dd className="mt-1 text-foreground">Scheduled for Q2 2025</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-8">
            <h3 className="text-xl font-semibold mb-4">What This Means for You</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Compliance audit by professional third parties</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Regular security assessments and penetration testing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Data handling policies vetted by ODPC</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Confidence that your data handling partner meets highest standards</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Data Localization */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Data Localization & Sovereignty</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Your data stays in Kenya unless you explicitly request otherwise
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-4 text-accent">Default Policy</h3>
            <p className="text-sm text-foreground/70 mb-4">
              All customer data stored in Kisumu data center by default. No automatic replication to external systems.
            </p>
            <p className="text-xs text-foreground/60">Kenya First</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-4 text-accent">Backups</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Regular backups maintained on-premises. Off-site backups only with explicit customer consent.
            </p>
            <p className="text-xs text-foreground/60">Compliant by Design</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-4 text-accent">Cross-Border Transfers</h3>
            <p className="text-sm text-foreground/70 mb-4">
              If data must move across borders (for analytics, etc.), requires explicit consent and DPA documentation.
            </p>
            <p className="text-xs text-foreground/60">Optional, Documented</p>
          </div>
        </div>
      </SectionContainer>

      {/* Security & Encryption */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Security & Encryption</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Enterprise-grade security measures at every layer
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Data in Transit</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>TLS 1.3 encryption for all network traffic</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Secure VPN tunnels for remote access</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Certificate pinning for API communication</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Hardware security modules for key management</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Data at Rest</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>AES-256 encryption for all stored data</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Per-volume encryption with isolated key management</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Secure key escrow with customer control</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Cryptographic erasure on decommissioning</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Certifications & Standards */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Standards</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Meeting international and local compliance benchmarks
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">ISO 27001</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Information Security Management System certification. Regular audits ensure we maintain international standards.
            </p>
            <span className="text-xs text-foreground/60">Current</span>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">SOC 2 Type II</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Service Organization Control audit in progress. Demonstrates effective security controls over time.
            </p>
            <span className="text-xs text-foreground/60">In Progress (Q3 2025)</span>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">ODPC DPA Compliance</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Verified compliance with Data Protection Act 2019 by official regulator. Kenya&apos;s highest data protection standard.
            </p>
            <span className="text-xs text-foreground/60">Current</span>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">HITRUST CSF</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Healthcare industry security framework. For healthcare and sensitive data customers.
            </p>
            <span className="text-xs text-foreground/60">Planned (Q1 2025)</span>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">Regular Penetration Testing</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Quarterly third-party penetration tests. Annual comprehensive red team exercises.
            </p>
            <span className="text-xs text-foreground/60">Ongoing</span>
          </div>

          <div className="rounded-lg border border-border p-6">
            <h3 className="font-semibold text-lg mb-3 text-accent">Vulnerability Management</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Continuous scanning and assessment. 24-hour patch response for critical issues.
            </p>
            <span className="text-xs text-foreground/60">Continuous</span>
          </div>
        </div>
      </SectionContainer>

      {/* Incident Response */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Incident Response & Breach Notification</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Prepared for any scenario, transparent communication always
          </p>
        </div>

        <div className="rounded-lg border border-primary bg-primary/10 p-8">
          <h3 className="text-xl font-semibold mb-6">Our Incident Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Immediate Detection & Containment</h4>
                <p className="text-sm text-foreground/70 mt-1">24/7 monitoring detects incidents. Incident response team mobilizes within 15 minutes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Customer Notification (Within 24 Hours)</h4>
                <p className="text-sm text-foreground/70 mt-1">You are informed immediately. Detailed incident report provided within 24 hours of discovery.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Regulatory Reporting</h4>
                <p className="text-sm text-foreground/70 mt-1">ODPC notified within 72 hours as required. Affected data subjects notified as legally required.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">4</span>
              </div>
              <div>
                <h4 className="font-semibold">Investigation & Remediation</h4>
                <p className="text-sm text-foreground/70 mt-1">Full forensic analysis. Remediation completed with timeline. Preventive measures implemented.</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Customer Responsibilities */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Shared Responsibility Model</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Security is a partnership. We secure infrastructure; you secure your applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-primary bg-primary/5 p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Matmon Responsibilities</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>✓ Data center security and physical access control</li>
              <li>✓ Network infrastructure and DDoS protection</li>
              <li>✓ Hardware maintenance and patching</li>
              <li>✓ Backup and disaster recovery</li>
              <li>✓ Compliance certifications and audits</li>
              <li>✓ Incident response for infrastructure</li>
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="text-xl font-semibold mb-4">Your Responsibilities</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>✓ Application security and code reviews</li>
              <li>✓ User access management and authentication</li>
              <li>✓ Data classification and encryption keys (if you manage them)</li>
              <li>✓ Regular backups and testing restore procedures</li>
              <li>✓ Vulnerability management in your applications</li>
              <li>✓ Incident response for application-level breaches</li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Have Compliance Questions?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our compliance team is ready to discuss your specific requirements and how Matmon can help you meet them.
          </p>
          <CTAButtonPair 
            primaryText="Talk to Compliance Team"
            primaryHref="/contact"
            secondaryText="Download Compliance Guide"
            secondaryHref="/"
          />
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
