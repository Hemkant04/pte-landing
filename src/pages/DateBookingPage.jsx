import { useState } from 'react'
import { CalendarDays, ArrowRight, BookOpen, Globe, GraduationCap, X, FileText, Monitor } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'
import PTEBookingFlow from '../components/PTEBookingFlow'
import ExamBookingForm from '../components/ExamBookingForm'

const exams = [
  {
    id: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    description: 'Book your IELTS Academic or General Training exam date with our expert assistance. Choose from IDP or British Council, and pick paper-based or computer-based delivery.',
    score: 'Band 0-9',
    duration: '2h 45min',
    sections: 'Listening, Reading, Writing, Speaking',
    icon: BookOpen,
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 'pte',
    name: 'PTE',
    fullName: 'Pearson Test of English',
    description: 'Get your PTE exam date booked quickly. Choose from PTE Academic, PTE Core, or PTE UKVI. We handle the entire registration process.',
    score: '10-90',
    duration: '2h',
    sections: 'Speaking & Writing, Reading, Listening',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-600',
    popular: true,
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    fullName: 'Duolingo English Test',
    description: 'Book your Duolingo English Test online. Take the test from home with results accepted by thousands of institutions worldwide.',
    price: '8,000',
    score: '10-160',
    duration: '1h',
    sections: 'Literacy, Comprehension, Conversation, Production',
    icon: Globe,
    color: 'from-green-500 to-emerald-600',
  },
]

const ieltsProviders = [
  {
    id: 'idp',
    name: 'IDP IELTS',
    description: 'IDP is a co-owner of IELTS and offers test dates across Nepal with flexible scheduling and fast results delivery.',
    color: 'from-red-500 to-rose-600',
    formats: [
      { mode: 'Paper Based', price: '34,000', icon: FileText, desc: 'Traditional pen-and-paper test with face-to-face speaking.' },
      { mode: 'Computer Based', price: '33,500', icon: Monitor, desc: 'Take the test on a computer with faster results (3-5 days).' },
    ],
  },
  {
    id: 'british',
    name: 'British Council IELTS',
    description: 'British Council offers globally recognized IELTS testing with extensive test center network and preparation resources.',
    color: 'from-sky-500 to-blue-600',
    formats: [
      { mode: 'Paper Based', price: '33,000', icon: FileText, desc: 'Traditional pen-and-paper test with face-to-face speaking.' },
      { mode: 'Computer Based', price: '32,500', icon: Monitor, desc: 'Take the test on a computer with faster results (3-5 days).' },
    ],
  },
]

export default function DateBookingPage() {
  const [showPTEModal, setShowPTEModal] = useState(false)
  const [showIELTSModal, setShowIELTSModal] = useState(false)
  const [bookingForm, setBookingForm] = useState(null)

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-20 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            Book Your{' '}
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent">
              Exam Date
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
            Let us handle the booking process. Select your exam and we'll find the best available dates for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {exams.map((exam) => {
            const Icon = exam.icon
            return (
              <div
                key={exam.id}
                className={`group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative ${exam.popular ? 'ring-2 ring-accent' : ''}`}
              >
                {exam.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-zinc-950 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}

                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${exam.color} flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{exam.name}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 sm:mb-4">{exam.fullName}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                  {exam.description}
                </p>

                <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">Score Range</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{exam.score}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">Duration</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{exam.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400">Sections</span>
                    <span className="font-semibold text-zinc-900 dark:text-white text-right max-w-[180px]">{exam.sections}</span>
                  </div>
                  {exam.price && (
                    <div className="flex justify-between text-sm pt-2 border-t border-zinc-200 dark:border-white/10">
                      <span className="text-zinc-500 dark:text-zinc-400">Test Fee</span>
                      <span className="font-bold text-accent text-base">Rs. {exam.price}</span>
                    </div>
                  )}
                </div>

                {exam.id === 'pte' ? (
                  <button onClick={() => setShowPTEModal(true)} className="w-full">
                    <GradientButton width="100%" height="48px">
                      <span className="flex items-center justify-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </GradientButton>
                  </button>
                ) : exam.id === 'ielts' ? (
                  <button onClick={() => setShowIELTSModal(true)} className="w-full">
                    <GradientButton width="100%" height="48px">
                      <span className="flex items-center justify-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </GradientButton>
                  </button>
                ) : (
                  <button onClick={() => setBookingForm({ label: 'Duolingo English Test', price: '8,000', color: 'from-green-500 to-emerald-600' })} className="w-full">
                    <GradientButton width="100%" height="48px">
                      <span className="flex items-center justify-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        Book Now
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </GradientButton>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-zinc-200/50 dark:border-white/10 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-3">Need Help Choosing?</h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6">
              Not sure which exam is right for you? Contact us and we'll guide you through the options based on your goals.
            </p>
            <a href="https://wa.me/message/S54RZTK2GC5OH1" target="_blank">
              <GradientButton width="200px" height="48px">
                <span className="flex items-center gap-2">Chat with Us</span>
              </GradientButton>
            </a>
          </div>
        </div>
      </div>

      {showIELTSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowIELTSModal(false)}>
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-8 pt-8 pb-4 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">IELTS Exam Providers</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Select your preferred test provider and format</p>
                </div>
              </div>
              <button
                onClick={() => setShowIELTSModal(false)}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {ieltsProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-zinc-50 dark:bg-white/5 rounded-2xl p-6 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center mb-4 shadow-md`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{provider.name}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {provider.description}
                    </p>
                    <div className="space-y-4">
                      {provider.formats.map((format) => {
                        const Icon = format.icon
                        return (
                          <div key={format.mode} className="bg-white dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-200/50 dark:border-white/10">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="w-5 h-5 text-accent" />
                              <span className="font-semibold text-zinc-900 dark:text-white">{format.mode}</span>
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">{format.desc}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-zinc-900 dark:text-white">Rs. {format.price}</span>
                              <button onClick={() => {
                                setShowIELTSModal(false)
                                setBookingForm({ label: `${provider.name} — ${format.mode}`, price: format.price, color: provider.color })
                              }}>
                                <GradientButton width="120px" height="36px">
                                  <span className="text-xs">Book Now</span>
                                </GradientButton>
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showPTEModal && <PTEBookingFlow onClose={() => setShowPTEModal(false)} />}

      {bookingForm && (
        <ExamBookingForm
          examLabel={bookingForm.label}
          price={bookingForm.price}
          color={bookingForm.color}
          onClose={() => setBookingForm(null)}
        />
      )}
    </div>
  )
}
