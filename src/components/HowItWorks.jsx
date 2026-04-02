import { ClipboardList, Play, FileText, BookOpen, MessageCircle, Search, CreditCard, CheckCircle } from 'lucide-react';

const mockTestSteps = [
  {
    icon: ClipboardList,
    title: 'Choose Your Package',
    description: 'Select the mock test package that fits your needs and budget',
  },
  {
    icon: Play,
    title: 'Start Practicing',
    description: 'Take realistic PTE tests anytime, anywhere with internet',
  },
  {
    icon: FileText,
    title: 'Get Your Score',
    description: 'Receive detailed feedback and scores within 24 hours',
  },
  {
    icon: BookOpen,
    title: 'Improve & Repeat',
    description: 'Practice weak areas and track your progress',
  },
];

const bookingSteps = [
  {
    icon: MessageCircle,
    title: 'Contact Us',
    description: 'Call or WhatsApp us with your preferred test dates',
  },
  {
    icon: Search,
    title: 'We Handle Everything',
    description: 'Our team checks availability and books your slot',
  },
  {
    icon: CreditCard,
    title: 'Confirm & Pay',
    description: 'Get confirmation and pay only when booking is confirmed',
  },
  {
    icon: CheckCircle,
    title: 'Ready for Test',
    description: 'Receive all details and preparation tips for your exam day',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            Getting Started is<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              Simple
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Follow these easy steps to start your PTE journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mock Tests Steps */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                <Play className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white transition-colors duration-300">For Mock Test Practice</h3>
            </div>
            
            <div className="space-y-6">
              {mockTestSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white dark:text-zinc-950 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{step.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Steps */}
          <div id="booking" className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white transition-colors duration-300">For PTE Date Booking</h3>
            </div>
            
            <div className="space-y-6">
              {bookingSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent text-white dark:text-zinc-950 rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{step.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
