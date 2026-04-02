import { Check, PlayCircle, Calendar, Target, Users, Clock } from 'lucide-react';
import GradientButton from './ui/GradientButton.jsx';

export default function ProductDetails() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            Our PTE Preparation<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              Services
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Complete solutions for your PTE success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mock Test Package */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                <PlayCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">PTE Mock Test Practice Package</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">What You Get:</h4>
              <ul className="space-y-3">
                {[
                  'Unlimited scored mock tests',
                  'Real PTE exam environment simulation',
                  'Detailed performance report for each test',
                  'Speaking, Writing, Reading, Listening sections',
                  '24-hour score delivery',
                  'Practice available 24/7',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 mb-6 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">Perfect For:</h4>
              <div className="flex flex-wrap gap-2">
                {['First-time PTE test takers', 'Students checking readiness', 'Anyone needing practice'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-white/10 text-accent rounded-full text-sm font-medium border border-zinc-200 dark:border-white/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a href="#pricing" className="block w-full">
              <GradientButton width="100%" height="52px">
                Get Mock Tests
              </GradientButton>
            </a>
          </div>

          {/* Booking Service */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">PTE Exam Date Booking Service</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">What We Do:</h4>
              <ul className="space-y-3">
                {[
                  'Check available test dates in Nepal',
                  'Help you choose the best date for preparation',
                  'Complete booking through official partners',
                  'Send confirmation and test center details',
                  'Provide exam day preparation tips',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 mb-6 border border-zinc-200 dark:border-white/10 transition-colors duration-300">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-3">Perfect For:</h4>
              <div className="flex flex-wrap gap-2">
                {['Students confused about registration', 'Those avoiding booking mistakes', 'Busy professionals'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-white/10 text-accent rounded-full text-sm font-medium border border-zinc-200 dark:border-white/10 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a href="tel:+9779762419564" className="block w-full">
              <GradientButton width="100%" height="52px">
                Contact for Booking
              </GradientButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
