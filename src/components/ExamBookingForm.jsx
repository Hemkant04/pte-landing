import { useState, useRef } from 'react'
import { X, CreditCard, Check, ChevronRight, ArrowLeft, Upload, Info, CalendarDays } from 'lucide-react'
import GradientButton from './ui/GradientButton'
import { trackFormSubmission } from '../utils/formTracker'

export default function ExamBookingForm({ examLabel, price, color, onClose, showPassport = true, showExamDate = true, logoSrc }) {
  const [step, setStep] = useState('form')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [passportFile, setPassportFile] = useState(null)
  const [examDate, setExamDate] = useState('')
  const fileRef = useRef(null)

  const updateForm = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const buildWhatsAppMessage = () => {
    let msg = `*New Booking Request*%0A`
    msg += `%0A*Exam:* ${examLabel}`
    msg += `%0A*Fee:* Rs. ${price}`
    if (showExamDate) {
      msg += `%0A*Preferred Date:* ${examDate || 'Not selected'}`
    }
    msg += `%0A*Name:* ${form.name}`
    msg += `%0A*Email:* ${form.email}`
    msg += `%0A*Phone:* ${form.phone}`
    if (showPassport) {
      msg += `%0A%0A*📎 Please send passport photo in this chat*`
    }
    msg += `%0A%0A*Payment:* Done ✅`
    return msg
  }

  const handleProceedToPayment = async () => {
    // Track the form submission and send email
    await trackFormSubmission({
      name: form.name,
      email: form.email,
      phone: form.phone,
      platform: examLabel.split('—')[0].trim(),
      duration: examLabel.includes('Days') ? parseInt(examLabel.match(/\d+/)?.[0] || 0) : 0,
      price: price.replace(/,/g, ''),
      exam_date: examDate,
      has_passport: passportFile ? true : false
    });

    // Move to payment step
    setStep('payment')
  }

  const handleProceedToWhatsApp = () => {
    // Continue with WhatsApp flow
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/9779762419564?text=${msg}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 sm:px-8 pt-5 sm:pt-8 pb-4 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            {logoSrc ? (
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 ring-1 ring-zinc-200/50 dark:ring-white/10 bg-white dark:bg-zinc-800">
                <img src={logoSrc} alt={examLabel} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            )}
            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-bold truncate bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Complete Booking</h2>
              <p className="text-xs sm:text-sm truncate bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{examLabel}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-5 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Complete Your Booking</span>
          </div>

          {/* Step: Form */}
          {step === 'form' && (
            <div className="space-y-5">
              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-4 border border-zinc-200/50 dark:border-white/10 flex items-center gap-3">
                {logoSrc ? (
                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white dark:bg-zinc-800 ring-1 ring-zinc-200/50 dark:ring-white/10">
                    <img src={logoSrc} alt={examLabel} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Info className="w-5 h-5 text-white" />
                  </div>
                )}
                <div>
                  <p className="font-semibold text-sm bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">{examLabel}</p>
                  <p className="text-xs bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent font-bold">Rs. {price}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Full Name</label>
                <input type="text" value={form.name} onChange={(e) => updateForm('name', e.target.value)} placeholder="Enter your full name" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Email Address</label>
                <input type="email" value={form.email} onChange={(e) => updateForm('email', e.target.value)} placeholder="Your email address" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => updateForm('phone', e.target.value)} placeholder="Your phone number" required className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" />
              </div>

              {showExamDate && (
                <div>
                  <label className="block text-sm font-medium mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Preferred Exam Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" />
                    <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} required className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all [color-scheme:light] dark:[color-scheme:dark]" />
                  </div>
                </div>
              )}

              {showPassport && (
                <div>
                  <label className="block text-sm font-medium mb-1 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Passport (Photo or PDF)</label>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-white/5 border border-dashed border-zinc-300 dark:border-white/20">
                    <Upload className="w-5 h-5 text-zinc-400" />
                    <span className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">{passportFile ? passportFile.name : 'Upload passport photo or PDF'}</span>
                    <input ref={fileRef} type="file" accept="image/*,application/pdf" onChange={(e) => setPassportFile(e.target.files[0])} className="hidden" />
                    <button type="button" onClick={() => fileRef.current?.click()} className="text-sm font-medium text-accent hover:underline">Choose</button>
                  </div>
                </div>
              )}

              <button
                onClick={handleProceedToPayment}
                disabled={!form.name || !form.email || !form.phone || (showExamDate && !examDate) || (showPassport && !passportFile)}
                className="w-full disabled:opacity-40"
              >
                <GradientButton width="100%" height="48px">
                  <span className="flex items-center justify-center gap-2">
                    Proceed to Payment
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </GradientButton>
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
                  Scan the QR code below to pay <strong className="text-accent">Rs. {price}</strong> for {examLabel}.
                </p>
                <div className="flex justify-center mb-4">
                  <div className="w-56 h-56 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-white/10 flex items-center justify-center">
                    <img src="/qr.jpeg" alt="Payment QR Code" className="w-48 h-48 object-contain" onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }} />
                    <div className="hidden w-48 h-48 items-center justify-center text-sm text-zinc-400">
                      <p className="text-center">Place QR code as <code className="text-accent">public/qr.jpeg</code></p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">After payment, click below to proceed</p>
              </div>

              <div className="bg-zinc-50 dark:bg-white/5 rounded-xl p-5 border border-zinc-200/50 dark:border-white/10">
                <h4 className="font-semibold mb-3 flex items-center gap-2 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  <Check className="w-4 h-4 text-accent" />
                  Booking Summary
                </h4>
                <div className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                  <p><span className="text-zinc-500">Exam:</span> {examLabel}</p>
                  {showExamDate && <p><span className="text-zinc-500">Preferred Date:</span> {examDate || 'Not selected'}</p>}
                  <p><span className="text-zinc-500">Name:</span> {form.name}</p>
                  <p><span className="text-zinc-500">Email:</span> {form.email}</p>
                  <p><span className="text-zinc-500">Phone:</span> {form.phone}</p>
                  {showPassport && <p><span className="text-zinc-500">Passport:</span> {passportFile ? passportFile.name : 'Attached'}</p>}
                  <p className="pt-2 font-bold text-base bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent">Total: Rs. {price}</p>
                </div>
              </div>

              {showPassport && (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-sm text-amber-800 dark:text-amber-300">
                  <p className="font-medium mb-1">📎 After WhatsApp opens:</p>
                  <p>Please attach your passport photo or PDF file in the chat and send it along with the message.</p>
                </div>
              )}

              <button onClick={handleProceedToWhatsApp} className="w-full">
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