import { Navigation } from './navigation';
import { Footer } from './footer';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

