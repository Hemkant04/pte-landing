import { Check, Sparkles } from 'lucide-react';
import GradientButton from './ui/GradientButton.jsx';

const plans = [
  {
    name: 'Mock Test Package',
    price: '2,350',
    period: 'one-month',
    description: 'Perfect for self-paced practice',
    features: [
      'Unlimited full scored mock tests',
      'Detailed feedback reports',
      '1 months access',
      '24/7 practice availability',
      'Score analysis & tips',
    ],
    cta: 'Buy Mock Tests Now',
    ctaLink: '#contact',
    popular: false,
    color: 'border-white/10',
    buttonColor: 'bg-accent text-zinc-950 hover:bg-accent-light',
  },
  {
    name: 'Date Booking Service',
    price: '27,000',
    period: 'service fee',
    description: 'Let us handle your PTE registration',
    features: [
      'Expert booking assistance',
      'Best available dates',
      'No booking mistakes',
      'Confirmation guarantee',
      'Exam day tips included',
    ],
    cta: 'Contact for Booking',
    ctaLink: 'tel:9762419564',
    popular: false,
    color: 'border-white/10',
    buttonColor: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
  },
  {
    name: 'Combo Package',
    price: '27799',
    period: 'save Rs. 300',
    description: '10 days Apeuni + Date booking',
    features: [
      'Everything in Mock Test Package',
      'Free date booking service',
      'Priority support',
      'Practice without disturbance',
      'Best value deal',
    ],
    cta: 'Get Combo Package',
    ctaLink: '#contact',
    popular: true,
    color: 'border-accent ring-2 ring-accent',
    buttonColor: 'bg-accent text-zinc-950 hover:bg-accent-light',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            Simple, Transparent<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Choose the plan that works best for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-8 border ${plan.color} ${plan.popular ? 'relative' : ''} hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-zinc-950 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 transition-colors duration-300">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900 dark:text-white transition-colors duration-300">Rs. {plan.price}</span>
                <span className="text-zinc-500 ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.ctaLink} className="block w-full">
                <GradientButton width="100%" height="52px">
                  {plan.cta}
                </GradientButton>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
