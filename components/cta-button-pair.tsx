import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CTAButtonPairProps {
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTAButtonPair({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  className = '',
}: CTAButtonPairProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-6 ${className}`}>
      <Button asChild className="bg-primary hover:bg-white text-white hover:text-black font-black uppercase tracking-widest px-10 py-8 rounded-none transition-all duration-300 group">
        <Link href={primaryHref} className="flex items-center gap-2">
          {primaryText}
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      {secondaryText && secondaryHref && (
        <Button asChild variant="outline" className="border-white/10 text-white hover:bg-white/5 font-black uppercase tracking-widest px-10 py-8 rounded-none transition-all duration-300">
          <Link href={secondaryHref}>
            {secondaryText}
          </Link>
        </Button>
      )}
    </div>
  );
}

