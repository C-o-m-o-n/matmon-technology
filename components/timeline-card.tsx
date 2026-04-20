interface TimelineCardProps {
  phase: string;
  status: string;
  description: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  isActive?: boolean;
}

export function TimelineCard({ phase, status, description, stats, isActive = false }: TimelineCardProps) {
  return (
    <div className={`glass-card p-10 transition-all duration-500 relative group overflow-hidden ${
      isActive 
        ? 'border-primary/50 bg-primary/3 shadow-glow-red/10' 
        : 'border-white/5 bg-white/1 hover:bg-white/3 hover:border-white/20'
    }`}>
      {isActive && (
        <div className="absolute top-0 right-0 p-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-glow-red"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Phase</span>
          </div>
        </div>
      )}
      
      <div className="mb-10">
        <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4">{phase}</p>
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">{status}</h3>
      </div>
      
      <p className="text-sm text-balance text-muted-foreground font-medium leading-relaxed mb-10">{description}</p>
      
      {stats && stats.length > 0 && (
        <div className="grid gap-6 grid-cols-2 pt-6 border-t border-white/5">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-lg font-black text-white uppercase tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

