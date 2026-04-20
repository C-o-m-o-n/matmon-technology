import { Metadata } from 'next';
import { LayoutWrapper } from '@/components/layout-wrapper';
import { SectionContainer } from '@/components/section-container';
import { CTAButtonPair } from '@/components/cta-button-pair';
import { GlowSphere } from '@/components/glow-sphere';
import { LineChart, BarChart3, Users, Building2, Zap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Urban Intelligence - Matmon Technology',
  description: 'Turning urban chaos into actionable insights with the Urban Data Platform (UDP).',
};

export default function Intelligence() {
  return (
    <LayoutWrapper>
      {/* Hero */}
      <SectionContainer className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden text-center">
        <GlowSphere color="red" size="xl" className="-top-40 -left-40 opacity-10" />
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-black text-primary uppercase tracking-[0.3em] mb-6 inline-block border-b-2 border-primary pb-1">Urban Intelligence</p>
          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent uppercase">
            TURNING URBAN CHAOS
            <br />
            INTO ACTIONABLE INSIGHTS.
          </h1>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Data-as-a-Service (DaaS) for the built environment. We provide city-scale analytics to support evidence-based urban planning.
          </p>
        </div>
      </SectionContainer>

      {/* UDP Platform & Capabilities */}
      <SectionContainer className="py-32 border-y border-white/5 bg-white/[0.01]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-8 leading-[1.1]">The Urban Data Platform (UDP)</h2>
            <div className="space-y-6 text-muted-foreground font-medium mb-10">
              <p>
                As cities grow rapidly, intuition is no longer enough. The Urban Data Platform (UDP) aggregates multiple data streams—from IoT sensors in smart buildings to regional demographic trends—into a single, sovereign dashboard hosted right here in Kisumu.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 flex gap-4 items-start border-white/10 hover:border-white/30 transition-colors">
                <Users className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-black text-white uppercase mb-1">Tenant Behavior Analytics</h3>
                  <p className="text-sm text-muted-foreground font-medium">Understand occupancy patterns, space utilization, and resource consumption at a granular level.</p>
                </div>
              </div>
              <div className="glass-card p-6 flex gap-4 items-start border-white/10 hover:border-white/30 transition-colors">
                <Building2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <h3 className="font-black text-white uppercase mb-1">Asset Tracking</h3>
                  <p className="text-sm text-muted-foreground font-medium">Real-time geolocation and status monitoring for high-value construction equipment and building assets.</p>
                </div>
              </div>
              <div className="glass-card p-6 flex gap-4 items-start border-white/10 hover:border-white/30 transition-colors">
                <LineChart className="h-6 w-6 text-white shrink-0" />
                <div>
                  <h3 className="font-black text-white uppercase mb-1">City-Scale Growth Projections</h3>
                  <p className="text-sm text-muted-foreground font-medium">Predictive modeling for traffic flows, energy demand, and zoning impact over 5, 10, and 20-year horizons.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Simulated Grafana Dashboard Visual */}
          <div className="glass-card p-6 bg-background/50 border border-white/10 shadow-2xl relative overflow-hidden group">
            <GlowSphere color="blue" size="md" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity" />
            
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
               <div className="flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-red-500"></div>
                 <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                 <div className="h-3 w-3 rounded-full bg-green-500"></div>
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Matmon UDP | Live Data</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
               <div className="glass p-4 rounded-lg border-white/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2"><Zap className="h-3 w-3 text-secondary" /> Energy Load</p>
                 <p className="text-2xl font-black text-white">4.2 MW</p>
                 <p className="text-[10px] text-primary font-black mt-1">+12% vs last week</p>
               </div>
               <div className="glass p-4 rounded-lg border-white/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2"><Users className="h-3 w-3 text-primary" /> Foot Traffic</p>
                 <p className="text-2xl font-black text-white">12,450</p>
                 <p className="text-[10px] text-green-500 font-black mt-1">+3% vs last week</p>
               </div>
            </div>

            <div className="glass p-4 rounded-lg border-white/5 h-48 flex items-end justify-between gap-2">
               {[40, 65, 30, 80, 50, 90, 70, 60, 45, 85, 55, 75].map((height, i) => (
                 <div key={i} className="w-full bg-secondary/20 hover:bg-secondary/50 transition-colors rounded-t-sm relative group/bar" style={{ height: `${height}%` }}>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[10px] font-black text-white bg-black px-2 py-1 rounded">
                      {height}%
                    </div>
                 </div>
               ))}
            </div>
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-4">Hourly Occupancy Variance (Last 12H)</p>
          </div>
        </div>
      </SectionContainer>

      {/* Target Audience */}
      <SectionContainer className="py-32">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-6xl font-black tracking-tighter uppercase mb-6 leading-[1.1]">WHO IT'S FOR</h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Strategic data access tailored for key stakeholders in the built environment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="glass-card p-10 text-center hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">Real Estate Investors</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              De-risk investments with empirical data. Analyze historical performance and forecast future demand before committing capital to new developments.
            </p>
          </div>
          <div className="glass-card p-10 text-center hover:border-white/50 transition-colors">
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">County Governments</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Enhance civic planning. Use precise, localized data to optimize utility distribution, manage traffic flows, and plan public infrastructure expansion.
            </p>
          </div>
          <div className="glass-card p-10 text-center hover:border-secondary/50 transition-colors">
            <h3 className="text-xl font-black tracking-tighter uppercase mb-4 text-white">Infrastructure Planners</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Design smarter grids. Access structural and environmental data to ensure new infrastructure integrates seamlessly with existing urban fabrics.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
           <CTAButtonPair 
             primaryText="Request Platform Demo"
             primaryHref="/contact"
             secondaryText="Back to Tech Stack"
             secondaryHref="/infrastructure"
           />
        </div>
      </SectionContainer>
    </LayoutWrapper>
  );
}
