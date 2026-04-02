import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqCategories = [
  {
    category: 'About PTE Mock Tests',
    questions: [
      {
        q: 'Are your mock tests exactly like the real PTE exam?',
        a: 'Yes! Our mock tests follow the exact PTE Academic format, timing, and question types. You will experience the real test environment including all sections: Speaking, Writing, Reading, and Listening.',
      },
      {
        q: 'How quickly do I get my mock test results?',
        a: 'You will receive your detailed score report and feedback within 1 hours after completing each test. This includes section-wise scores and personalized improvement suggestions.',
      },
      {
        q: 'Can I retake the mock tests if I am not satisfied?',
        a: 'Yes! You can retake any mock test during your access period. This helps you track your improvement and build confidence before the actual exam.',
      },
      {
        q: 'Do you provide preparation materials with the mock tests?',
        a: 'Each mock test comes with detailed feedback and suggestions for improvement. Tips based on your performance to help you focus on weak areas.',
      },
    ],
  },
  {
    category: 'About PTE Date Booking',
    questions: [
      {
        q: 'Why should I use your booking service instead of booking myself?',
        a: 'We save you time, prevent booking mistakes, help you get the best available dates, and provide expert guidance throughout the process. Our experience ensures a smooth booking experience.',
      },
      {
        q: 'How much does the actual PTE exam cost?',
        a: 'The PTE Academic exam fee is approximately Rs. 27,000 (subject to change). Our service free for date booking.',
      },
      {
        q: 'Can you guarantee my preferred test date?',
        a: 'We will check all available dates and help you get the closest possible option to your preference. Early booking increases availability, so contact us as soon as you know your preferred timeframe.',
      },
      {
        q: 'What if I need to reschedule my PTE date?',
        a: 'We can help you reschedule through our booking partners. Please note that rescheduling can be done only if 14 days remaining to come the exam date, and availability depends on test center capacity.',
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-zinc-200 dark:border-white/10 last:border-0 transition-colors duration-300">
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={onClick}
      >
        <span className="font-semibold text-zinc-900 dark:text-white pr-4 transition-colors duration-300">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <p className="pb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl mb-4 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
            <HelpCircle className="w-6 h-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            Frequently Asked<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              Questions
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-zinc-200/50 dark:border-white/10 transition-colors duration-300">
              <h3 className="text-lg font-bold text-accent mb-4 uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="divide-y divide-white/10">
                {category.questions.map((item, questionIndex) => (
                  <FAQItem
                    key={questionIndex}
                    question={item.q}
                    answer={item.a}
                    isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                    onClick={() => toggleItem(categoryIndex, questionIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
