import { useState } from 'react'
import { X, Check, Clock, Sparkles } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'
import ExamBookingForm from '../components/ExamBookingForm'
const packages = [
  {
    id: 'apeuni',
    name: 'Apeuni',
    tagline: 'Premium PTE Mock Tests',
    description: 'Real PTE exam simulation with AI-powered scoring and detailed analytics.',
    color: 'from-emerald-500 to-teal-600',
    logoSrc: '/apeuni.png',
    popular: true,
  },
  {
    id: 'alfapte',
    name: 'AlfaPTE',
    tagline: 'Comprehensive PTE Practice',
    description: 'Extensive question bank with section-wise practice and progress tracking.',
    color: 'from-blue-500 to-indigo-600',
    logoSrc: '/alfapte.png',
    popular: false,
  },
  {
    id: 'gurully',
    name: 'Gurully',
    tagline: 'All-in-One Test Platform',
    description: 'Mock tests, practice sets, and performance reports in one place.',
    color: 'from-purple-500 to-pink-600',
    logoSrc: '/gurully.png',
    popular: false,
  },
]

const planPricing = {
  apeuni: {
    label: 'Apeuni',
    durations: [
      { days: 3, price: 399 },
      { days: 5, price: 549 },
      { days: 7, price: 699 },
      { days: 10, price: 949 },
      { days: 15, price: 1349 },
      { days: 30, price: 2199 },
      { days: 60, price: 3500 },
      { days: 90, price: 4249 },
    ],
  },
  alfapte: {
    label: 'AlfaPTE',
    durations: [
      { days: 3, price: 299 },
      { days: 5, price: 499 },
      { days: 7, price: 599 },
      { days: 10, price: 799 },
      { days: 15, price: 999 },
      { days: 30, price: 1799 },
      { days: 60, price: 2600 },
      { days: 90, price: 3499 },
    ],
  },
  gurully: {
    label: 'Gurully',
    durations: [
      { days: 7, price: 849 },
      { days: 10, price: 1049 },
      { days: 15, price: 1249 },
      { days: 30, price: 1799 },
      { days: 60, price: 2349 },
    ],
  },
}

export default function PracticePackagePage() {
  const [selected, setSelected] = useState(null)
  const [bookingForm, setBookingForm] = useState(null)

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-20 sm:pt-24 pb-16 sm:pb-20 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300">
            <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Buy
            </span>{' '}
            MockTest
          </h1>
          <p className="text-sm sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
            Select a platform that suits your preparation style. Unlock unlimited mock tests and track your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelected(pkg)}
              className="group text-left bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-zinc-950 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Popular
                  </span>
                </div>
              )}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden mb-3 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg ring-1 ring-zinc-200/50 dark:ring-white/10">
                <img src={pkg.logoSrc} alt={pkg.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-1 transition-colors duration-300">{pkg.name}</h3>
              <p className="text-xs sm:text-sm font-medium text-accent mb-2 sm:mb-3">{pkg.tagline}</p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">{pkg.description}</p>
              <div className="mt-4 sm:mt-6">
                <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">
                  View Plans & Pricing →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {bookingForm && (
        <ExamBookingForm
          examLabel={bookingForm.label}
          price={bookingForm.price}
          color={bookingForm.color}
          logoSrc={bookingForm.logoSrc}
          onClose={() => setBookingForm(null)}
          showPassport={false}
          showExamDate={false}
        />
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ring-1 ring-zinc-200/50 dark:ring-white/10">
                  <img src={selected.logoSrc} alt={selected.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{selected.name}</h2>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{selected.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Select Duration
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {planPricing[selected.id].durations.map(({ days, price }) => (
                  <button
                    key={days}
                    onClick={() => {
                      setBookingForm({ label: `${selected.name} — ${days} Days`, price: price.toLocaleString(), color: selected.color, logoSrc: selected.logoSrc })
                      setSelected(null)
                    }}
                    className="group relative flex-1 min-w-[90px] sm:min-w-[110px] bg-white dark:bg-white/[0.06] rounded-2xl px-3 sm:px-4 py-3 border border-zinc-200/60 dark:border-white/10 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 hover:bg-accent/[0.04] dark:hover:bg-accent/[0.08] transition-all duration-300 text-center"
                  >
                    <div className="relative z-10">
                      <span className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white">{days}</span>
                      <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-medium ml-0.5">days</span>
                    </div>
                    <div className="relative z-10 mt-1 text-sm sm:text-base font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      Rs. {price.toLocaleString()}
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.03] to-cyan-500/[0.03] dark:from-blue-400/[0.05] dark:to-cyan-400/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-200/50 dark:border-white/10">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  What's Included
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />Unlimited scored mock tests</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />AI-powered scoring & feedback</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />Real PTE exam simulation</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent flex-shrink-0" />Section-wise performance analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
