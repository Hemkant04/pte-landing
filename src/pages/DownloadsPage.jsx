import { FileText, Download, Star, ArrowRight, BookOpen, Headphones, FileSpreadsheet, FileImage } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'

const downloads = [
  {
    title: 'PTE Beginner Guide',
    description: 'A complete beginner-friendly guide covering PTE Academic format, scoring system, section-wise strategies, and essential tips to help you start your preparation with confidence.',
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
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20 sm:pt-24 pb-16 sm:pb-20 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              Free Study Resources
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
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

        {/* Downloads Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-white/5 rounded-2xl border border-zinc-200 dark:border-white/10 hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col ${item.comingSoon ? 'opacity-60' : ''}`}
              >
                <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 sm:mb-5 transition-colors duration-300 flex-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4 sm:mb-5 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {item.size}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {item.pages}
                    </span>
                  </div>

                  {item.comingSoon ? (
                    <div className="w-full py-3 px-4 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-center text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Coming Soon
                    </div>
                  ) : (
                    <a href={`/${item.fileName}`} download className="w-full">
                      <GradientButton width="100%" height="48px">
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
      </div>
    </div>
  )
}
