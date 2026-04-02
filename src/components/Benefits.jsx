import { CheckCircle, Calendar, Users, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Practice Like Real Exam',
    description: 'Full scored mock tests with real PTE format. Get detailed feedback on every section and build confidence before your actual test.',
    color: 'bg-white/10 dark:bg-white/10 text-accent ring-1 ring-zinc-200/50 dark:ring-white/20',
  },
  {
    icon: Calendar,
    title: 'Easy Date Booking',
    description: 'No more confusion about PTE registration. We help you book through official partners and save time while avoiding booking mistakes.',
    color: 'bg-white/10 dark:bg-white/10 text-accent ring-1 ring-zinc-200/50 dark:ring-white/20',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Friendly guidance from PTE experts. Clear instructions in simple English with support available when you need help.',
    color: 'bg-white/10 dark:bg-white/10 text-accent ring-1 ring-zinc-200/50 dark:ring-white/20',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Thousands of students passed with our help. Higher scores on first attempt with less stress and more confidence.',
    color: 'bg-white/10 dark:bg-white/10 text-accent ring-1 ring-zinc-200/50 dark:ring-white/20',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            Why Choose Us for Your<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              PTE Success?
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
            We make PTE preparation simple, effective, and stress-free for students in Nepal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform backdrop-blur-sm`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
