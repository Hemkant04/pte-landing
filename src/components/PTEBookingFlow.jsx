import { useState, useRef } from 'react'
import { X, GraduationCap, CalendarDays, ArrowLeft, Info, Upload, CreditCard, Check, ChevronRight } from 'lucide-react'

import GradientButton from './ui/GradientButton'

const pteTypes = [
  { id: 'academic', name: 'PTE Academic', price: '28,000', desc: 'For university admissions & visas worldwide', color: 'from-blue-500 to-cyan-600' },
  { id: 'core', name: 'PTE Core', price: '29,500', desc: 'For Canadian PR & citizenship', color: 'from-purple-500 to-indigo-600' },
  { id: 'ukvi', name: 'PTE UKVI', price: '28,500', desc: 'For UK Home Office visa applications', color: 'from-rose-500 to-pink-600' },
]

const cities = {
  kathmandu: { label: 'Kathmandu', centers: ['Alfabeta', 'Alfabeta 2', 'KCM', 'Universal', 'British'] },
  pokhara: { label: 'Pokhara', centers: ['CMC', 'La Grande'] },
  butwal: { label: 'Butwal', centers: ['KCM'] },
  itahari: { label: 'Itahari', centers: ['Namuna College'] },
}

export default function PTEBookingFlow({ onClose }) {
  const [step, setStep] = useState('select-type')
  const [selectedType, setSelectedType] = useState(null)
  const [examOption, setExamOption] = useState(null)
  const [accountStatus, setAccountStatus] = useState(null)
  const [form, setForm] = useState({ name: '', username: '', password: '', email: '', phone: '' })
  const [passportFile, setPassportFile] = useState(null)
  const [examDate, setExamDate] = useState('')
  const [examCity, setExamCity] = useState('')
  const [examCenter, setExamCenter] = useState('')
  const fileRef = useRef(null)

  const updateForm = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const buildWhatsAppMessage = () => {
    let msg = `*New PTE Booking Request*%0A`
    msg += `%0A*Exam Type:* ${selectedType.name} (Rs. ${selectedType.price})`
    msg += `%0A*Booking Type:* ${examOption === 'first' ? 'First Exam' : 'Rebook'}`
    msg += `%0A*Preferred Date:* ${examDate || 'Not selected'}`
    msg += `%0A*City:* ${examCity ? cities[examCity].label : 'Not selected'}`
    msg += `%0A*Center:* ${examCenter || 'Not selected'}`
    msg += `%0A*PTE Username:* ${form.username}`
    msg += `%0A*PTE Password:* ${form.password}`
    if (examOption === 'first') {
      msg += `%0A*Account:* ${accountStatus === 'has-account' ? 'Already have account' : 'Need to create account'}`
      if (accountStatus === 'has-account') {
        msg += `%0A*Name:* ${form.name}`
      } else {
        msg += `%0A*Email:* ${form.email}`
        msg += `%0A*Phone:* ${form.phone}`
      }
    }
    msg += `%0A%0A*📎 Please send passport photo in this chat*`
    msg += `%0A%0A*Payment:* Done ✅`
    return msg
  }

  const handleProceed = () => {
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/9779762419564?text=${msg}`, '_blank')
    onClose()
  }

  const resetFlow = () => {
    setStep('select-type')
    setSelectedType(null)
    setExamOption(null)
    setAccountStatus(null)
    setForm({ name: '', username: '', password: '', email: '', phone: '' })
    setPassportFile(null)
    setExamDate('')
    setExamCity('')
    setExamCenter('')
  }

  const closeWithReset = () => {
    resetFlow()
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={closeWithReset}>
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold truncate bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">PTE Booking</h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 truncate">
                {step === 'select-type' && 'Select your PTE exam type'}
                {step === 'exam-option' && 'First exam or rebook?'}
                {step === 'account-status' && 'Do you have a Pearson PTE account?'}
                {step === 'form' && 'Fill in your details'}
                {step === 'payment' && 'Complete your payment'}
              </p>
            </div>
          </div>
          <button onClick={closeWithReset} className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          {/* Step indicator */}
          <div className="flex items-center gap-1 sm:gap-2 mb-6 sm:mb-8 text-[10px] sm:text-xs font-medium text-zinc-400 overflow-x-auto">
            {['Type', 'Option', 'Details', 'Payment'].map((label, i) => {
              const stepIndex = step === 'select-type' ? 0 : step === 'exam-option' ? 0 : step === 'account-status' ? 1 : step === 'form' ? 2 : 3
              return (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i <= stepIndex ? 'bg-accent text-zinc-950' : 'bg-zinc-200 dark:bg-white/10 text-zinc-400'}`}>
                    {i + 1}
                  </div>
                  <span className={i <= stepIndex ? 'text-zinc-900 dark:text-white' : ''}>{label}</span>
                  {i < 3 && <ChevronRight className="w-3 h-3" />}
                </div>
              )
            })}
          </div>

          {/* Step: Select PTE Type */}
          {step === 'select-type' && (
            <div className="space-y-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Choose the PTE exam you want to book:</p>
              {pteTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => { setSelectedType(type); setStep('exam-option') }}
                  className="w-full text-left bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center shadow-md`}>
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{type.name}</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{type.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Rs. {type.price}</span>
                    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-accent transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step: First Exam or Rebook */}
          {step === 'exam-option' && (
            <div className="space-y-4">
              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 mb-4 border border-zinc-200/50 dark:border-white/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedType.color} flex items-center justify-center`}>
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{selectedType.name}</p>
                  <p className="text-xs bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">Rs. {selectedType.price}</p>
                </div>
              </div>
              <button
                onClick={() => { setExamOption('first'); setStep('account-status') }}
                className="w-full text-left bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              >
                <h3 className="font-bold mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">First Exam</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">I'm taking PTE for the first time</p>
              </button>
              <button
                onClick={() => { setExamOption('rebook'); setStep('form') }}
                className="w-full text-left bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              >
                <h3 className="font-bold mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Rebook</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">I have taken PTE before and want to rebook</p>
              </button>
              <button onClick={() => setStep('select-type')} className="text-sm text-zinc-500 hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}

          {/* Step: Account Status (only for First Exam) */}
          {step === 'account-status' && (
            <div className="space-y-4">
              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 mb-4 border border-zinc-200/50 dark:border-white/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedType.color} flex items-center justify-center`}>
                  <Info className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{selectedType.name} — First Exam</p>
                </div>
              </div>
              <button
                onClick={() => { setAccountStatus('has-account'); setStep('form') }}
                className="w-full text-left bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              >
                <h3 className="font-bold mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Already have a Pearson PTE Account</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">I already created my Pearson profile</p>
              </button>
              <button
                onClick={() => { setAccountStatus('need-account'); setStep('form') }}
                className="w-full text-left bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
              >
                <h3 className="font-bold mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Need to Create PTE Account</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">I don't have a Pearson PTE account yet</p>
              </button>
              <button onClick={() => setStep('exam-option')} className="text-sm text-zinc-500 hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}

          {/* Step: Form */}
          {step === 'form' && (
            <div className="space-y-5">
              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 border border-zinc-200/50 dark:border-white/10">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedType.color} flex items-center justify-center`}>
                    <Info className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{selectedType.name}</p>
                    <p className="text-xs text-zinc-500">
                      {examOption === 'first' ? 'First Exam' : 'Rebook'}
                      {examOption === 'first' && accountStatus === 'has-account' ? ' — Has Account' : ''}
                      {examOption === 'first' && accountStatus === 'need-account' ? ' — Need Account' : ''}
                    </p>
                  </div>
                </div>
              </div>

              {/* Date & Center fields (common to all) */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Preferred Exam Date</label>
                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                  <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} required className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all [color-scheme:light] dark:[color-scheme:dark]" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Test City</label>
                <select value={examCity} onChange={(e) => { setExamCity(e.target.value); setExamCenter('') }} required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option value="">Select city</option>
                  {Object.entries(cities).map(([key, city]) => (
                    <option key={key} value={key}>{city.label}</option>
                  ))}
                </select>
              </div>
              {examCity && (
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Test Center</label>
                  <select value={examCenter} onChange={(e) => setExamCenter(e.target.value)} required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                    <option value="">Select center</option>
                    {cities[examCity].centers.map((center) => (
                      <option key={center} value={center}>{center}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Fields for "Already have account" */}
              {accountStatus === 'has-account' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Full Name</label>
                    <input type="text" value={form.name} onChange={(e) => updateForm('name', e.target.value)} placeholder="Enter your full name" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">PTE Username</label>
                    <input type="text" value={form.username} onChange={(e) => updateForm('username', e.target.value)} placeholder="Your Pearson PTE username" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">PTE Password</label>
                    <input type="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)} placeholder="Your Pearson PTE password" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Passport (Photo or PDF)</label>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-dashed border-zinc-300 dark:border-white/20">
                      <Upload className="w-5 h-5 text-zinc-400" />
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">{passportFile ? passportFile.name : 'Upload passport photo or PDF'}</span>
                      <input ref={fileRef} type="file" accept="image/*,application/pdf" onChange={(e) => setPassportFile(e.target.files[0])} className="hidden" />
                      <button type="button" onClick={() => fileRef.current?.click()} className="text-sm font-medium text-accent hover:underline">Choose</button>
                    </div>
                  </div>
                </>
              )}

              {/* Fields for "Need to create account" */}
              {accountStatus === 'need-account' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email Address</label>
                    <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} placeholder="Your email address" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={(e) => updateForm('phone', e.target.value)} placeholder="Your phone number" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Passport (Photo or PDF)</label>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-dashed border-zinc-300 dark:border-white/20">
                      <Upload className="w-5 h-5 text-zinc-400" />
                      <span className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">{passportFile ? passportFile.name : 'Upload passport photo or PDF'}</span>
                      <input ref={fileRef} type="file" accept="image/*,application/pdf" onChange={(e) => setPassportFile(e.target.files[0])} className="hidden" />
                      <button type="button" onClick={() => fileRef.current?.click()} className="text-sm font-medium text-accent hover:underline">Choose</button>
                    </div>
                  </div>
                </>
              )}

              {/* Fields for Rebook */}
              {examOption === 'rebook' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">PTE Username</label>
                    <input type="text" value={form.username} onChange={(e) => updateForm('username', e.target.value)} placeholder="Your Pearson PTE username" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">PTE Password</label>
                    <input type="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)} placeholder="Your Pearson PTE password" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
                  </div>
                </>
              )}

              <button
                onClick={() => setStep('payment')}
                disabled={
                  !examDate || !examCity || !examCenter ||
                  (accountStatus === 'has-account' && (!form.name || !form.username || !form.password || !passportFile)) ||
                  (accountStatus === 'need-account' && (!form.email || !form.phone || !passportFile)) ||
                  (examOption === 'rebook' && (!form.username || !form.password))
                }
                className="w-full disabled:opacity-40"
              >
                <GradientButton width="100%" height="48px">
                  <span className="flex items-center justify-center gap-2">
                    Proceed to Payment
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </GradientButton>
              </button>

              <button onClick={() => setStep(examOption === 'first' ? 'account-status' : 'exam-option')} className="text-sm text-zinc-500 hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}

          {/* Step: Payment */}
          {step === 'payment' && (
            <div className="space-y-6">
              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10">
                <h3 className="font-semibold mb-1 flex items-center gap-2 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  <CreditCard className="w-5 h-5 text-accent" />
                  Payment Details
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                  Scan the QR code below to pay <strong className="text-accent">Rs. {selectedType.price}</strong> for {selectedType.name}.
                </p>
                <div className="flex justify-center mb-4">
                  <div className="w-48 h-48 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-white/10 flex items-center justify-center">
                    <img src="/qr.jpeg" alt="Payment QR Code" className="w-40 h-40 object-contain" onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }} />
                    <div className="hidden w-40 h-40 items-center justify-center text-sm text-zinc-400">
                      <p className="text-center">Place your QR code image as <code className="text-accent">public/qr.jpeg</code></p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">After payment, click the button below to proceed</p>
              </div>

              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10">
                <h4 className="font-semibold mb-3 flex items-center gap-2 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  <Check className="w-4 h-4 text-accent" />
                  Booking Summary
                </h4>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p><span className="text-zinc-500">Exam:</span> {selectedType.name}</p>
                  <p><span className="text-zinc-500">Type:</span> {examOption === 'first' ? 'First Exam' : 'Rebook'}</p>
                  <p><span className="text-zinc-500">Date:</span> {examDate}</p>
                  <p><span className="text-zinc-500">City:</span> {cities[examCity]?.label}</p>
                  <p><span className="text-zinc-500">Center:</span> {examCenter}</p>
                  {accountStatus === 'has-account' && <p><span className="text-zinc-500">Name:</span> {form.name}</p>}
                  {form.username && <p><span className="text-zinc-500">PTE Username:</span> {form.username}</p>}
                  {form.email && <p><span className="text-zinc-500">Email:</span> {form.email}</p>}
                  {form.phone && <p><span className="text-zinc-500">Phone:</span> {form.phone}</p>}
                  <p><span className="text-zinc-500">Passport:</span> {passportFile ? passportFile.name : 'Attached'}</p>
                  <p className="pt-2 font-bold text-base bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Total: Rs. {selectedType.price}</p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-300">
                <p className="font-medium mb-1">📎 After WhatsApp opens:</p>
                <p>Please attach your passport photo or PDF file in the chat and send it along with the message.</p>
              </div>

              <button onClick={handleProceed} className="w-full">
                <GradientButton width="100%" height="52px">
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Payment Done — Proceed to WhatsApp
                  </span>
                </GradientButton>
              </button>

              <button onClick={() => setStep('form')} className="text-sm text-zinc-500 hover:text-accent transition-colors flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
