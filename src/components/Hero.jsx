import { 
  ArrowRight, 
  Play, 
  Target, 
  Crown, 
  Star,
  Hexagon,
  Triangle,
  Command,
  Ghost,
  Gem,
  Cpu
} from 'lucide-react';
import { AnimatedNumber } from '../hooks/useCountUp.jsx';
import GradientButton from './ui/GradientButton.jsx';

const CLIENTS = [
  { name: "Kathmandu", icon: Hexagon },
  { name: "Pokhara", icon: Triangle },
  { name: "Lalitpur", icon: Command },
  { name: "Bhaktapur", icon: Ghost },
  { name: "Biratnagar", icon: Gem },
  { name: "Nepalgunj", icon: Cpu },
];

const StatItem = ({ value, label, suffix = '' }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl transition-colors duration-300">
      <AnimatedNumber value={value} suffix={suffix} duration={2000} />
    </span>
    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{label}</span>
  </div>
);

export default function Hero() {
  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans transition-colors duration-300">
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Background with abstract gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/80 dark:hover:bg-white/10">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                  Trusted by 5,000+ Students
                  <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                </span>
              </div>
            </div>

            <h1 className="animate-fade-in delay-200 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]">
              Score High in<br />
              <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
                PTE Academic
              </span><br />
              First Time
            </h1>

            <p className="animate-fade-in delay-300 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
              Stop worrying about your PTE exam. Practice with realistic mock tests and let us handle your test date booking — so you can focus on what matters most: your success.
            </p>

            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 items-center">
              <a href="#pricing">
                <GradientButton width="180px" height="50px">
                  <span className="flex items-center gap-2">
                    Start Mock Test
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </GradientButton>
              </a>
              
              <a href="https://wa.me/message/S54RZTK2GC5OH1" target="_blank">
                <GradientButton width="180px" height="50px">
                  <span className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Book PTE Date
                  </span>
                </GradientButton>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 p-8 backdrop-blur-xl shadow-2xl transition-colors duration-300">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-zinc-100/50 dark:bg-white/5 blur-3xl pointer-events-none transition-colors duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/10 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                    <Target className="h-6 w-6 text-zinc-900 dark:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
                      <AnimatedNumber value={5000} suffix="+" duration={2000} />
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Students Helped</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Success Rate</span>
                    <span className="text-zinc-900 dark:text-white font-medium transition-colors duration-300"><AnimatedNumber value={95} suffix="%" duration={2000} /></span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800/50 transition-colors duration-300">
                    <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-400 dark:to-white transition-all duration-300" />
                  </div>
                </div>

                <div className="h-px w-full bg-zinc-200 dark:bg-white/10 mb-6 transition-colors duration-300" />

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
                    <span className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl transition-colors duration-300">
                      Unlimited
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">Mock Tests</span>
                  </div>
                  <StatItem value={24} suffix="h" label="Results" />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide text-zinc-600 dark:text-zinc-300 transition-colors duration-300">
                    <Crown className="w-3 h-3 text-accent" />
                    TOP RATED
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 py-8 backdrop-blur-xl transition-colors duration-300">
              <h3 className="mb-6 px-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Trusted by Students From</h3>
              
              <div 
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default"
                    >
                      <client.icon className="h-6 w-6 text-zinc-500 dark:text-zinc-400 transition-colors duration-300" />
                      <span className="text-lg font-bold text-zinc-600 dark:text-zinc-300 tracking-tight transition-colors duration-300">
                        {client.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
