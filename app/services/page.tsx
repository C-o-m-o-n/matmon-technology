import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { ServiceCard } from '@/components/service-card';
import { CTAButtonPair } from '@/components/cta-button-pair';
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
      <SectionContainer className="py-20 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            What We Offer
          </h1>
          <p className="text-xl text-foreground/70 mb-8 text-balance">
            From sovereign colocation to managed cloud and AI inference. Choose what you need, scale as you grow. All with Kenya-first data policies and guaranteed compliance.
          </p>
        </div>
      </SectionContainer>

      {/* Service Cards Grid */}
      <SectionContainer>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Server}
            title="Sovereign Colocation"
            description="Full rack, half rack, and cabinet colocation. Bring your own hardware, use our power, cooling, and expertise. Kenya-first policies guarantee your data stays here."
            href="#colocation"
          />
          <ServiceCard
            icon={BarChart}
            title="Managed Analytics"
            description="End-to-end analytics infrastructure. Data pipelines, data warehousing, and BI tools. Process your data locally, stay compliant globally."
            href="#analytics"
          />
          <ServiceCard
            icon={Cloud}
            title="Private Cloud"
            description="Dedicated cloud infrastructure on Matmon hardware. Kubernetes-native, fully managed, zero compliance surprises. Your data, your rules."
            href="#private-cloud"
          />
          <ServiceCard
            icon={Cpu}
            title="IoT & Edge"
            description="Edge computing and IoT support. Process sensor data locally, reduce latency, maintain sovereignty. Perfect for real-time analytics."
            href="#iot-edge"
          />
          <ServiceCard
            icon={Network}
            title="Hybrid Cloud"
            description="Seamlessly integrate your on-premises systems with Matmon cloud. Burst to cloud when needed, keep control of sensitive workloads locally."
            href="#hybrid"
          />
          <ServiceCard
            icon={Zap}
            title="AI Inference"
            description="Deploy and run your AI models locally. Custom inference engines on sovereign infrastructure. Faster, cheaper, and fully compliant."
            href="#ai"
          />
        </div>
      </SectionContainer>

      {/* Detailed Service Sections */}

      {/* Colocation */}
      <SectionContainer id="colocation" className="bg-card/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Sovereign Colocation</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Bring your own hardware to Matmon and let us handle power, cooling, and connectivity. Full cabinet colocation with Kenya-first data residency policies.
              </p>
              <p>
                <strong>What&apos;s Included:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Dedicated cabinet space (customizable)</li>
                <li>✓ 99.95% uptime SLA with local support</li>
                <li>✓ Dual-feed power with battery backup</li>
                <li>✓ Advanced cooling systems</li>
                <li>✓ Managed fiber connectivity options</li>
                <li>✓ 24/7 on-site security</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Get Colocation Quote"
              primaryHref="/contact"
              secondaryText="View Specs"
              secondaryHref="/infrastructure"
            />
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <Server className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Analytics */}
      <SectionContainer id="analytics">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden order-last lg:order-first">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <BarChart className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Managed Analytics</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Transform raw data into actionable insights on infrastructure you control. Fully managed analytics platform optimized for African use cases.
              </p>
              <p>
                <strong>Platform Includes:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Data ingestion pipelines (ETL)</li>
                <li>✓ Data warehouse on optimized hardware</li>
                <li>✓ Business intelligence dashboards</li>
                <li>✓ Real-time analytics capability</li>
                <li>✓ ML-ready data preparation</li>
                <li>✓ DPA-compliant data governance</li>
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

      {/* Private Cloud */}
      <SectionContainer id="private-cloud" className="bg-card/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Private Cloud</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Dedicated cloud infrastructure running on Matmon hardware. Kubernetes-native, fully isolated, and completely under your control. Scale securely.
              </p>
              <p>
                <strong>Private Cloud Advantages:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Dedicated hardware (no multi-tenancy)</li>
                <li>✓ Kubernetes cluster management</li>
                <li>✓ Custom networking and storage</li>
                <li>✓ Full administrative control</li>
                <li>✓ Guaranteed data residency in Kenya</li>
                <li>✓ Compliance audit trails included</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Design Your Cloud"
              primaryHref="/contact"
              secondaryText="View Roadmap"
              secondaryHref="/infrastructure"
            />
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <Cloud className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* IoT & Edge */}
      <SectionContainer id="iot-edge">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden order-last lg:order-first">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <Cpu className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">IoT & Edge Computing</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Process your IoT and sensor data at the edge. Reduce latency, lower bandwidth costs, and keep real-time data local. Perfect for time-sensitive applications.
              </p>
              <p>
                <strong>Edge Computing Services:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Local data processing at edge nodes</li>
                <li>✓ Real-time analytics for sensors and devices</li>
                <li>✓ Intelligent caching and data filtering</li>
                <li>✓ Local storage with cloud sync options</li>
                <li>✓ Anomaly detection and alerting</li>
                <li>✓ Support for major IoT protocols</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Discuss Your IoT Needs"
              primaryHref="/contact"
              secondaryText="See Case Studies"
              secondaryHref="/about"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Hybrid Cloud */}
      <SectionContainer id="hybrid" className="bg-card/30">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hybrid Cloud</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Integrate your on-premises systems seamlessly with Matmon cloud. Burst to cloud for extra capacity, keep sensitive workloads on-premises. Best of both worlds.
              </p>
              <p>
                <strong>Hybrid Cloud Features:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Secure VPN and interconnect options</li>
                <li>✓ Unified management across locations</li>
                <li>✓ Automatic failover and disaster recovery</li>
                <li>✓ Workload portability between on-prem and cloud</li>
                <li>✓ Consistent compliance policies</li>
                <li>✓ Cost optimization tools</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Plan Hybrid Architecture"
              primaryHref="/contact"
              secondaryText="See Hybrid Patterns"
              secondaryHref="/infrastructure"
            />
          </div>
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <Network className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* AI Inference */}
      <SectionContainer id="ai">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="rounded-xl border border-border/50 bg-card/50 aspect-video overflow-hidden order-last lg:order-first">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/10 flex items-center justify-center">
              <Zap className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">AI Inference</h2>
            <div className="space-y-4 text-foreground/70 mb-8">
              <p>
                Deploy and run your AI models on sovereign infrastructure. Custom inference engines optimized for your models. Faster, cheaper, and fully compliant with African data regulations.
              </p>
              <p>
                <strong>AI Services Include:</strong>
              </p>
              <ul className="space-y-2 ml-4">
                <li>✓ Model deployment and versioning</li>
                <li>✓ GPU and specialized hardware support</li>
                <li>✓ Auto-scaling for inference workloads</li>
                <li>✓ Model monitoring and performance tracking</li>
                <li>✓ A/B testing frameworks for models</li>
                <li>✓ Africa-optimized model libraries</li>
              </ul>
            </div>
            <CTAButtonPair 
              primaryText="Discuss AI Strategy"
              primaryHref="/contact"
              secondaryText="View Examples"
              secondaryHref="/about"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Support & SLA */}
      <SectionContainer className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Support & SLA</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            All Matmon services include world-class support and guaranteed uptime
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="font-semibold text-lg mb-3">24/7 Support</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Dedicated support team available around the clock. Phone, email, and ticket system. Local experts who understand your business.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="font-semibold text-lg mb-3">99.95% Uptime SLA</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Enterprise-grade availability guaranteed. Service credits for any downtime. Redundancy built in at every level.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h3 className="font-semibold text-lg mb-3">Compliance Assurance</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Regular compliance audits included. DPA 2019 expertise built into every service. Compliance team on your side.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Choose the services that fit your needs. Our team will help design the perfect infrastructure for your business.
          </p>
          <CTAButtonPair 
            primaryText="Contact Our Team"
            primaryHref="/contact"
            secondaryText="Request Custom Quote"
            secondaryHref="/contact"
          />
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
