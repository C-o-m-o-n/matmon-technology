import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-full">
        <Link href={primaryHref}>
          {primaryText}
        </Link>
      </Button>
      {secondaryText && secondaryHref && (
        <Button asChild variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 font-semibold px-8 py-6 rounded-full">
          <Link href={secondaryHref}>
            {secondaryText}
          </Link>
        </Button>
      )}
    </div>
  );
}
