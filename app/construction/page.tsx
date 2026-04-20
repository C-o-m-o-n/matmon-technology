import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import { HardHat, Cpu, Activity, Clock, Box } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Build - Matmon Construction',
  description: 'Construction at the speed of thought. 3D printing, robotics, and 5D BIM integration.',
};

export default function Construction() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-center">
        <GlowSphere color="blue" size="xl" className="-top-40 -right-40 opacity-10" />
        <GlowSphere color="red" size="md" className="top-20 left-20 opacity-20" />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-secondary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-secondary pb-1">Smart Build</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase">
            CONSTRUCTION AT THE
            <br />
            SPEED OF THOUGHT.
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Reducing housing delivery costs and compressing timelines by 40% through advanced additive manufacturing and robotics.
          </p>
        </div>
      </SectionContainer>

      {/* Tech Stack Grid */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">THE FUTURE OF CONSTRUCTION</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            We treat buildings as hardware. Here is the technology making it possible.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="glass-card p-10 border-primary/20 hover:border-primary/50 transition-colors">
            <Box className="h-12 w-12 text-primary mb-6 drop-shadow-[0_0_15px_rgba(255,30,30,0.5)]" />
            <h3 className="text-2xl font-black tracking-tighter mb-4 text-white uppercase">Additive Manufacturing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              We leverage industrial-scale 3D printing to create sustainable, affordable housing at unprecedented speeds, significantly reducing material waste and carbon footprints.
            </p>
          </div>

          <div className="glass-card p-10 border-secondary/20 hover:border-secondary/50 transition-colors">
            <Cpu className="h-12 w-12 text-secondary mb-6 drop-shadow-[0_0_15px_rgba(0,112,255,0.5)]" />
            <h3 className="text-2xl font-black tracking-tighter mb-4 text-white uppercase">Robotics & Automation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Precision engineering in the built environment. Automated systems handle repetitive, high-risk tasks, ensuring consistent quality and safer work sites.
            </p>
          </div>

          <div className="glass-card p-10 border-white/20 hover:border-white/50 transition-colors">
            <Activity className="h-12 w-12 text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            <h3 className="text-2xl font-black tracking-tighter mb-4 text-white uppercase">5D BIM Integration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Connecting architectural designs directly to our data center for real-time cost tracking and material logistics. Know the exact budget impact of every design change instantly.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Timeline Comparison */}
      <SectionContainer className="py-32 relative overflow-hidden">
        <GlowSphere color="blue" size="lg" className="bottom-0 left-0 opacity-10" />
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10 order-2 lg:order-1">
             <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">Compressing Time By 40%</h2>
             <div className="space-y-6 text-muted-foreground font-medium">
               <p>
                 Traditional construction is plagued by delays, supply chain opacity, and manual errors. Our "Smart Build" methodology turns construction into a predictable manufacturing process.
               </p>
               <p>
                 By integrating data streams from the site back to our Kisumu data center, we optimize every phase of the project lifecycle.
               </p>
             </div>
             <div className="mt-10">
               <CTAButtonPair 
                 primaryText="Partner With Us"
                 primaryHref="/contact"
                 secondaryText="Urban Intelligence"
                 secondaryHref="/intelligence"
               />
             </div>
          </div>
          <div className="order-1 lg:order-2 glass-card p-10 flex flex-col gap-8">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-4">Traditional Construction</h3>
              <div className="relative w-full h-8 bg-white/5 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-white/20 w-full flex items-center px-4">
                  <span className="text-xs font-bold text-white/50">100% Time Allocation</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-end mb-4">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary">Matmon Smart Build</h3>
                 <span className="text-xs font-black text-secondary uppercase animate-pulse">40% Faster</span>
              </div>
              <div className="relative w-full h-8 bg-white/5 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-secondary w-[60%] flex items-center px-4 shadow-[0_0_15px_rgba(0,112,255,0.8)]">
                  <span className="text-xs font-bold text-white">60% Time Allocation</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                 <p className="text-3xl font-black text-white">40%</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Cost Reduction Target</p>
              </div>
              <div>
                 <p className="text-3xl font-black text-white">0</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Unplanned Delays</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
