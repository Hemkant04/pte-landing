import { PlayCircle, Phone, ArrowRight } from 'lucide-react';
import GradientButton from './ui/GradientButton.jsx';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-6 transition-colors duration-300">
          Ready to Ace Your<br />
          <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
            PTE Academic?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto transition-colors duration-300">
          Join thousands of successful students who trusted us for their PTE preparation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#pricing">
            <GradientButton width="240px" height="56px">
              <span className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Start Mock Test Now
              </span>
            </GradientButton>
          </a>
          <a href="https://wa.me/message/S54RZTK2GC5OH1" target="_blank">
            <GradientButton width="280px" height="56px">
              <span className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call/WhatsApp for Booking
              </span>
            </GradientButton>
          </a>
        </div>

        <p className="text-zinc-500 dark:text-zinc-500 text-sm transition-colors duration-300">
          Need help deciding? Contact us at{' '}
          <a href="tel:+9779762419564" className="underline hover:text-accent transition-colors">
            9762419564
          </a>{' '}
          for free guidance
        </p>
      </div>
    </section>
  );
}
