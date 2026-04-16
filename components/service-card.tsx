import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export function ServiceCard({ icon: Icon, title, description, href = '#' }: ServiceCardProps) {
  return (
    <div className="glass-card p-10 bg-white/[0.02] flex flex-col justify-between items-start h-full group hover:border-primary/50 transition-all duration-500">
      <div>
        <div className="mb-10 inline-flex rounded-full glass border-white/5 p-4 text-primary shadow-glow-red/20 group-hover:shadow-glow-red transition-all duration-500">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="mb-6 text-2xl font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="mb-10 text-muted-foreground font-medium leading-relaxed">{description}</p>
      </div>
      <Link href={href} className="text-[10px] font-black uppercase tracking-widest text-secondary hover:text-white transition-colors flex items-center gap-2">
        Learn More <span className="text-secondary font-bold group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </div>
  );
}

