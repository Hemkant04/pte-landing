import { useState } from 'react'
import { CalendarDays, X, FileText, Monitor, ArrowRight, Clock, Star, CheckCircle, MessageCircle, Search, CreditCard, Check, Phone } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'
import PTEBookingFlow from '../components/PTEBookingFlow'
import ExamBookingForm from '../components/ExamBookingForm'
import { PTEIcon, IELTSIcon, DuolingoIcon } from '../components/BrandIcons'

const exams = [
  {
    id: 'pte',
    name: 'PTE',
    fullName: 'Pearson Test of English',
    description: 'Get your PTE exam date booked quickly. Choose from PTE Academic, PTE Core, or PTE UKVI.',
    score: '10-90',
    duration: '2h',
    sections: 'Speaking & Writing, Reading, Listening',
    logo: PTEIcon,
    color: 'from-blue-500 to-cyan-600',
    popular: true,
    highlights: ['Accepted worldwide', 'Fast results in 2 days', 'Computer-based'],
  },
  {
    id: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    description: 'Book your IELTS Academic or General Training exam. Choose IDP or British Council, paper or computer.',
    score: 'Band 0-9',
    duration: '2h 45min',
    sections: 'Listening, Reading, Writing, Speaking',
    logo: IELTSIcon,
    color: 'from-red-500 to-rose-600',
    popular: false,
    highlights: ['IDP & British Council', 'Paper or Computer', 'Face-to-face speaking'],
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    fullName: 'Duolingo English Test',
    description: 'Take the Duolingo English Test online from home. Results accepted by thousands of institutions worldwide.',
    score: '10-160',
    duration: '1h',
    price: '8,000',
    sections: 'Literacy, Comprehension, Conversation, Production',
    logo: DuolingoIcon,
    color: 'from-green-500 to-emerald-600',
    popular: false,
    highlights: ['Take from home', 'Results in 48 hours', 'Affordable fee'],
  },
]

const ieltsProviders = [
  {
    id: 'idp',
    name: 'IDP IELTS',
    description: 'IDP offers test dates across Nepal with flexible scheduling and fast results delivery.',
    color: 'from-red-500 to-rose-600',
    formats: [
      { mode: 'Paper Based', price: '34,000', icon: FileText, desc: 'Traditional pen-and-paper test with face-to-face speaking.' },
      { mode: 'Computer Based', price: '33,500', icon: Monitor, desc: 'Take the test on a computer with faster results (3-5 days).' },
    ],
  },
  {
    id: 'british',
    name: 'British Council IELTS',
    description: 'British Council offers globally recognized IELTS testing with extensive test center network.',
    color: 'from-sky-500 to-blue-600',
    formats: [
      { mode: 'Paper Based', price: '33,000', icon: FileText, desc: 'Traditional pen-and-paper test with face-to-face speaking.' },
      { mode: 'Computer Based', price: '32,500', icon: Monitor, desc: 'Take the test on a computer with faster results (3-5 days).' },
    ],
  },
]

const steps = [
  { icon: MessageCircle, title: 'Choose Your Exam', description: 'Select the exam you want to book from the options below.' },
  { icon: Search, title: 'We Check Availability', description: 'Our team finds the best available dates and test centers for you.' },
  { icon: CreditCard, title: 'Confirm & Pay', description: 'Get your booking confirmed. Pay only when everything is ready.' },
  { icon: CheckCircle, title: 'Ready for Test Day', description: 'Receive all details and preparation tips for your exam.' },
]

export default function DateBookingPage() {
  const [showPTEModal, setShowPTEModal] = useState(false)
  const [showIELTSModal, setShowIELTSModal] = useState(false)
  const [bookingForm, setBookingForm] = useState(null)

  const handleBook = (exam) => {
    if (exam.id === 'pte') setShowPTEModal(true)
    else if (exam.id === 'ielts') setShowIELTSModal(true)
    else setBookingForm({ label: 'Duolingo English Test', price: '8,000', color: 'from-green-500 to-emerald-600' })
  }

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20 sm:pt-24 pb-16 sm:pb-20 transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md mb-6">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              Hassle-Free Exam Registration
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Book Your
            </span>{' '}
            Exam Date
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Let us handle the entire booking process. Select your exam and we'll find the best available dates for you.
          </p>
        </div>

        {/* Exam cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 sm:mb-24">
          {exams.map((exam) => {
            const Logo = exam.logo
            return (
              <div
                key={exam.id}
                className={`group bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative flex flex-col ${
                  exam.popular
                    ? 'border-accent/50 ring-2 ring-accent/20'
                    : 'border-zinc-200/50 dark:border-white/10 hover:border-accent/30'
                }`}
              >
                {exam.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-accent text-zinc-950 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-zinc-950" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <div className="mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                    <Logo className="w-12 h-12 sm:w-14 sm:h-14" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1">{exam.name}</h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-3">{exam.fullName}</p>
                  
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                    {exam.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {exam.highlights.map((h) => (
                      <span key={h} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-300 font-medium border border-zinc-200/50 dark:border-white/10">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-zinc-200 dark:border-white/10 pt-4 space-y-2 mb-6">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-zinc-500 dark:text-zinc-400">Score Range</span>
                      <span className="font-semibold text-zinc-900 dark:text-white">{exam.score}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Duration</span>
                      </div>
                      <span className="font-semibold text-zinc-900 dark:text-white">{exam.duration}</span>
                    </div>
                    {exam.price && (
                      <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-zinc-200 dark:border-white/10">
                        <span className="text-zinc-500 dark:text-zinc-400">Test Fee</span>
                        <span className="font-bold text-accent text-base">Rs. {exam.price}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto">
                    <button onClick={() => handleBook(exam)} className="w-full">
                      <GradientButton width="100%" height="48px">
                        <span className="flex items-center justify-center gap-2">
                          <CalendarDays className="w-4 h-4" />
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </GradientButton>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-24">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 dark:text-white mb-3 transition-colors duration-300">
              <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                How Exam Booking
              </span>{' '}
              Works
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
              We make the booking process simple and stress-free
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300 text-center sm:text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent text-white dark:text-zinc-950 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm mb-4 mx-auto sm:mx-0">
                  {i + 1}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-3 mx-auto sm:mx-0 ring-1 ring-zinc-200 dark:ring-white/20 group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-1">{step.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-zinc-200/50 dark:border-white/10 max-w-2xl w-full shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3">Need Help Choosing?</h3>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-6 max-w-md mx-auto">
                Not sure which exam is right for you? Contact us and we'll guide you through the options based on your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://wa.me/message/S54RZTK2GC5OH1" target="_blank" className="w-full sm:w-auto">
                  <GradientButton width="100%" height="48px">
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Chat with Us on WhatsApp
                    </span>
                  </GradientButton>
                </a>
                <a href="tel:+9779762419564" className="w-full sm:w-auto">
                  <GradientButton width="100%" height="48px">
                    <span className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </span>
                  </GradientButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IELTS Provider Modal */}
      {showIELTSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowIELTSModal(false)}>
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white truncate">IELTS Exam Providers</h2>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate">Select your preferred test provider and format</p>
                </div>
              </div>
              <button
                onClick={() => setShowIELTSModal(false)}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {ieltsProviders.map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-zinc-50 dark:bg-white/5 rounded-2xl p-5 sm:p-6 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center mb-3 sm:mb-4 shadow-md`}>
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2">{provider.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                      {provider.description}
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      {provider.formats.map((format) => {
                        const Icon = format.icon
                        return (
                          <div key={format.mode} className="bg-white dark:bg-zinc-800/50 rounded-xl p-3 sm:p-4 border border-zinc-200/50 dark:border-white/10">
                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                              <span className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white">{format.mode}</span>
                            </div>
                            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mb-3">{format.desc}</p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                              <span className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-white">Rs. {format.price}</span>
                              <button onClick={() => {
                                setShowIELTSModal(false)
                                setBookingForm({ label: `${provider.name} — ${format.mode}`, price: format.price, color: provider.color })
                              }} className="w-full sm:w-auto">
                                <GradientButton width="100%" height="36px">
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
