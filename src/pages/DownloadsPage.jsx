import { FileText, Download, Star, ArrowRight, BookOpen, Headphones, FileSpreadsheet, FileImage, CheckCircle, Clock } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'

const downloads = [
  {
    title: 'PTE Prediction June 22 - June 28',
    description: 'Weekly prediction for PTE Academic exam topics and questions based on recent trends.',
    fileName: 'downloads/PTE prediction june 22 - june 28.pdf',
    icon: FileText,
    color: 'from-green-500 to-emerald-600',
    size: '2.1 MB',
    pages: '15 pages',
  },
  {
    title: 'PTE Beginner Guide',
    description: 'A complete beginner-friendly guide covering PTE Academic format, scoring system, section-wise strategies, and essential tips.',
    fileName: 'guide.pdf',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-600',
    size: '76 KB',
    pages: '7 pages',
  },
  {
    title: 'PTE Vocabulary List',
    description: 'Essential academic vocabulary list with meanings and example sentences to boost your score.',
    fileName: 'pte-vocabulary-list.pdf',
    icon: FileText,
    color: 'from-emerald-500 to-teal-600',
    size: '1.8 MB',
    pages: '42 pages',
    comingSoon: true,
  },
  {
    title: 'Speaking Templates',
    description: 'Ready-to-use templates for Describe Image, Re-tell Lecture, and Repeat Sentence sections.',
    fileName: 'pte-speaking-templates.pdf',
    icon: Headphones,
    color: 'from-purple-500 to-pink-600',
    size: '1.2 MB',
    pages: '18 pages',
    comingSoon: true,
  },
  {
    title: 'Essay Templates',
    description: 'Structured templates for Summarize Written Text and Write Essay tasks with sample answers.',
    fileName: 'pte-essay-templates.pdf',
    icon: FileSpreadsheet,
    color: 'from-amber-500 to-orange-600',
    size: '1.5 MB',
    pages: '20 pages',
    comingSoon: true,
  },
  {
    title: 'PTE Score Calculator',
    description: 'Calculate your estimated PTE score based on sectional performance and track your target.',
    fileName: 'pte-score-calculator.pdf',
    icon: FileImage,
    color: 'from-rose-500 to-red-600',
    size: '0.8 MB',
    pages: '8 pages',
    comingSoon: true,
  },
  {
    title: 'Exam Day Checklist',
    description: 'Essential checklist of what to bring, what to expect, and last-minute tips for your test day.',
    fileName: 'pte-exam-day-checklist.pdf',
    icon: Star,
    color: 'from-indigo-500 to-violet-600',
    size: '0.5 MB',
    pages: '6 pages',
    comingSoon: true,
  },
]

export default function DownloadsPage() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-16 sm:pt-32 sm:pb-24 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-2 backdrop-blur-md mb-6">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              Free Study Resources
              <Star className="w-4 h-4 text-accent" />
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all duration-300">
              Downloads
            </span>{' '}
            & Resources
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Download free PTE preparation materials to help you study offline and ace your exam.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 shadow-sm flex flex-col ${item.comingSoon ? 'opacity-60' : ''}`}
              >
                <div className="p-6 sm:p-7 lg:p-8 flex flex-col flex-1">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 mb-6 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-4 h-4" />
                      {item.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      {item.pages}
                    </span>
                  </div>

                  {item.comingSoon ? (
                    <div className="w-full py-3 px-4 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  ) : (
                    <a href={`/${item.fileName}`} download className="w-full">
                      <GradientButton size="full">
                        <span className="flex items-center justify-center gap-2">
                          <Download className="w-4 h-4" />
                          Download PDF
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </GradientButton>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-accent/10 dark:from-blue-400/10 dark:via-cyan-400/10 dark:to-accent/10 rounded-2xl p-6 sm:p-8 border border-zinc-200/50 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">More Resources Coming Soon</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We're constantly adding new study materials to help you prepare better. Check back regularly for updated templates, practice tests, and guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}