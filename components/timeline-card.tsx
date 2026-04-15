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
    <div className={`rounded-lg border p-6 transition-all duration-300 ${
      isActive 
        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
        : 'border-border bg-card/50 hover:border-border/80'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-medium text-accent uppercase tracking-wider">{phase}</p>
          <h3 className="text-lg font-semibold mt-1">{status}</h3>
        </div>
        {isActive && (
          <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Live Now
          </span>
        )}
      </div>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      {stats && stats.length > 0 && (
        <div className="grid gap-4 grid-cols-2">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <p className="text-xs text-foreground/60 uppercase tracking-wider">{stat.label}</p>
              <p className="text-lg font-semibold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
