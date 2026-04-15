import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';

export const metadata: Metadata = {
  title: 'About Matmon Technology - Sovereign Data Center',
  description: 'Learn about Matmon Technology, Kenya\'s sovereign data center operator and our mission to empower African businesses.',
};

export default function About() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="py-20 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Who We Are
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            Matmon Technology is Kenya&apos;s first sovereign data center operator, committed to bringing world-class infrastructure to East Africa while keeping data under African control.
          </p>
        </div>
      </SectionContainer>

      {/* Story */}
      <SectionContainer className="bg-card/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-foreground/70">
              <p>
                For decades, African businesses have relied on data infrastructure thousands of kilometers away. Latency, compliance complexity, and lack of local control became accepted constraints.
              </p>
              <p>
                We asked: What if that didn&apos;t have to be the case?
              </p>
              <p>
                Matmon Technology was founded on the belief that Africa has the talent, resources, and market to build world-class digital infrastructure locally. We&apos;re not importing solutions—we&apos;re building them.
              </p>
              <p>
                Our team brings together expertise in data center operations, compliance, cloud infrastructure, and African markets. We understand the unique challenges facing businesses on the continent, and we&apos;re building specifically for them.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <p className="text-foreground/50">Office in Kisumu</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Mission & Values */}
      <SectionContainer>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-foreground/70">
              To empower African businesses with sovereign, compliant, high-performance data infrastructure that enables them to innovate without constraints and own their digital future.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Sovereignty:</strong> African data stays in Africa, under African control.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Compliance:</strong> Built for African regulations, not retrofitted.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Excellence:</strong> World-class infrastructure, African standards.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span><strong>Partnership:</strong> We succeed when our customers succeed.</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* Team */}
      <SectionContainer className="bg-card/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Diverse experience across cloud infrastructure, compliance, and African markets
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { name: 'Jane Kipchoge', role: 'Founder & CEO' },
            { name: 'Dr. Kamau Omondi', role: 'Chief Technology Officer' },
            { name: 'Amara Okafor', role: 'Chief Operations Officer' },
          ].map((member) => (
            <div key={member.name} className="rounded-lg border border-border bg-card/50 p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-foreground/70">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join us in building the future of African digital infrastructure.
          </p>
          <CTAButtonPair 
            primaryText="Get in Touch"
            primaryHref="/contact"
            secondaryText="View Services"
            secondaryHref="/services"
          />
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
