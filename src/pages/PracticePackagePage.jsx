import { useState } from 'react'
import { X, Check, Clock, Sparkles, ArrowRight } from 'lucide-react'
import GradientButton from '../components/ui/GradientButton'
import ExamBookingForm from '../components/ExamBookingForm'
import { trackFormSubmission, trackFormStart } from '../utils/formTracker'

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

  const handleDurationSelect = async (pkg, durationData) => {
    // Track form start event
    trackFormStart(`${pkg.name} - ${durationData.days} days`);

    const label = `${pkg.name} — ${durationData.days} Days`;
    const price = durationData.price.toLocaleString();
    
    // Prepare form data for tracking
    const formData = {
      platform: pkg.name,
      duration: durationData.days,
      price: durationData.price,
      label: label
    };

    // Set booking form (this will open the modal)
    setBookingForm({ 
      label, 
      price, 
      color: pkg.color, 
      logoSrc: pkg.logoSrc 
    });
    setSelected(null);
    
    // Note: Actual submission tracking happens in ExamBookingForm when user submits
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-16 sm:pt-32 sm:pb-24 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-4 py-2 backdrop-blur-md mb-6">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              Unlimited Mock Tests
              <Sparkles className="w-4 h-4 text-accent" />
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Buy
            </span>{' '}
            MockTest
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
            Select a platform that suits your preparation style. Unlock unlimited mock tests and track your progress.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelected(pkg)}
              className={`group text-left bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 relative flex flex-col ${
                pkg.popular
                  ? 'border-accent/50 ring-2 ring-accent/20'
                  : 'border-zinc-200/50 dark:border-white/10 hover:border-accent/30'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-zinc-950 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </span>
                </div>
              )}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden mb-5 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg ring-1 ring-zinc-200/50 dark:ring-white/10 bg-white dark:bg-zinc-800">
                <img src={pkg.logoSrc} alt={pkg.name} className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300">{pkg.name}</h3>
              <p className="text-xs sm:text-sm font-medium text-accent mb-3">{pkg.tagline}</p>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300 mb-6 flex-1">{pkg.description}</p>
              <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-white/10">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-accent transition-colors flex items-center gap-2">
                  View Plans & Pricing
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-zinc-200/50 dark:border-white/10">
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <Check className="w-5 h-5 text-accent" />
              What's Included in All Packages
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                'Unlimited scored mock tests',
                'AI-powered scoring & feedback',
                'Real PTE exam simulation',
                'Section-wise performance analysis',
                '24/7 platform access',
                'Detailed answer explanations',
                'Performance tracking dashboard',
                'Score improvement tips',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
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
            <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-zinc-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ring-1 ring-zinc-200/50 dark:ring-white/10 bg-white dark:bg-zinc-800">
                  <img src={selected.logoSrc} alt={selected.name} className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">{selected.name}</h2>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">{selected.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Select Duration
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {planPricing[selected.id].durations.map(({ days, price }) => (
                  <button
                    key={days}
                    onClick={() => handleDurationSelect(selected, { days, price })}
                    className="group relative bg-white dark:bg-white/[0.06] rounded-2xl px-4 py-4 border border-zinc-200/60 dark:border-white/10 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 hover:bg-accent/[0.04] dark:hover:bg-accent/[0.08] transition-all duration-300 text-center"
                  >
                    <div className="mb-2">
                      <span className="text-2xl font-black text-zinc-900 dark:text-white">{days}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-medium ml-1">days</span>
                    </div>
                    <div className="text-base font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                      Rs. {price.toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-5 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-200/50 dark:border-white/10">
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  What's Included
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
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