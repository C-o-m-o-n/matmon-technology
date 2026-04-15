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
    <div className="group rounded-xl border border-foreground/10 bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/10">
      <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-foreground/70 leading-relaxed">{description}</p>
      <Link href={href} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
        Learn More →
      </Link>
    </div>
  );
}
