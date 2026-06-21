import { Phone, Mail, MapPin, Target, Eye, Award, Zap, ShieldCheck, Facebook, Instagram } from 'lucide-react';

export default function AboutPage() {
  const goals = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Accessibility',
      desc: 'Making PTE preparation resources available to students across Nepal, 24/7.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Efficiency',
      desc: 'A one-stop solution combining study resources with exam date booking.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Performance Enhancement',
      desc: 'AI-driven analytics providing actionable feedback on all skills.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Reliability',
      desc: 'A trusted platform ensuring genuine, safe access to practice.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">About Us</h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Empowering Nepali students to achieve their dreams through quality PTE preparation
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200/50 dark:border-white/10 overflow-hidden mb-8">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <img
                src="logo.png"
                alt="A. P. E. Digital Nepal"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-accent/20 shadow-lg"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">A. P. E. Digital Nepal</h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">Your trusted PTE preparation partner in Nepal</p>
              </div>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl p-6 sm:p-7 border border-zinc-200/50 dark:border-white/5 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                To bridge the gap between complex PTE exam requirements and accessible, high-quality preparation
                by providing a streamlined, technology-driven ecosystem. We empower Nepali students to achieve
                their target English proficiency scores through realistic AI-powered practice, expert guidance,
                and hassle-free administrative support.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Core Goals</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {goals.map((goal) => (
                  <div
                    key={goal.title}
                    className="flex gap-4 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-white/5"
                  >
                    <div className="text-accent flex-shrink-0 mt-1">{goal.icon}</div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">{goal.title}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{goal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-200 dark:border-white/10 pt-8">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Get in Touch</h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-white/5">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:+9779762419564" className="hover:text-accent transition-colors font-medium">9762419564</a>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-white/5">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:apeuninepal01@gmail.com" className="hover:text-accent transition-colors font-medium">apeuninepal01@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/50 dark:border-white/5">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Lalitpur, Nepal</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/apeuninepal/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors overflow-hidden p-2">
                    <img src="/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                  </a>
<a href="https://www.instagram.com/apeuninepal__" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors overflow-hidden p-2">
                <img src="/instagram.jpg" alt="Instagram" className="w-full h-full object-contain" />
                  </a>
                  <a href="https://www.tiktok.com/@apeuninepal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors overflow-hidden p-2">
                    <img src="/tiktok.png" alt="TikTok" className="w-full h-full object-contain" />
                  </a>
                  <a href="tel:+9779762419564" className="w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-white/20 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors overflow-hidden p-2">
                    <img src="/phone.jpg" alt="Phone" className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}