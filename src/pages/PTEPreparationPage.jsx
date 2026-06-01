import {
  ArrowRight, Star, Target, BookOpen,
  Microscope, Headphones, Edit3, Volume2,
  Check, GraduationCap, Clock, BarChart3,
  HelpCircle, Quote, PlayCircle, Phone,
  CalendarDays
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import GradientButton from '../components/ui/GradientButton.jsx';

const STATS = [
  { value: 5000, suffix: "+", label: "Students Helped" },
  { value: 95, suffix: "%", label: "Success Rate" },
  { value: 500, suffix: "+", label: "Mock Tests Taken" },
  { value: 24, suffix: "h", label: "Score Delivery" },
];

const BENEFITS = [
  {
    icon: Microscope,
    title: 'Real Test Simulation',
    description: 'Practice with mock tests that mirror the actual PTE Academic format, timing, and question types.',
  },
  {
    icon: BarChart3,
    title: 'Detailed Score Analysis',
    description: 'Get comprehensive feedback on all sections with personalized suggestions to improve your weak areas.',
  },
  {
    icon: Headphones,
    title: 'Speaking & Listening Focus',
    description: 'Specialized practice modules for Speaking and Listening sections with real-time pronunciation feedback.',
  },
  {
    icon: Clock,
    title: 'Flexible Practice Schedule',
    description: 'Practice anytime, anywhere with 24/7 access to all mock tests and preparation materials.',
  },
];

const TEST_FORMAT = [
  {
    section: 'Speaking & Writing',
    duration: '54–67 min',
    tasks: [
      'Read Aloud', 'Repeat Sentence', 'Describe Image',
      'Re-tell Lecture', 'Answer Short Question',
      'Summarize Written Text', 'Write Essay'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    section: 'Reading',
    duration: '29–30 min',
    tasks: [
      'Reading & Writing: Fill in the Blanks',
      'Multiple Choice (Multiple/Single Answer)',
      'Re-order Paragraphs',
      'Fill in the Blanks'
    ],
    color: 'from-accent to-amber-600'
  },
  {
    section: 'Listening',
    duration: '30–43 min',
    tasks: [
      'Summarize Spoken Text',
      'Multiple Choice (Multiple/Single Answer)',
      'Fill in the Blanks',
      'Highlight Correct Summary',
      'Select Missing Word',
      'Highlight Incorrect Words',
      'Write from Dictation'
    ],
    color: 'from-green-500 to-green-600'
  },
];

const TESTIMONIALS = [
  {
    name: 'Sagar Adhikari',
    location: 'Kathmandu',
    quote: 'The mock tests were incredibly realistic. I scored 82 on my first attempt thanks to the detailed performance feedback.',
    rating: 5,
  },
  {
    name: 'Deepa Rai',
    location: 'Pokhara',
    quote: 'I was struggling with the Speaking section. The practice modules helped me improve my pronunciation and confidence.',
    rating: 5,
  },
  {
    name: 'Binod Thapa',
    location: 'Biratnagar',
    quote: 'The flexible practice schedule was perfect for my job. I could practice late at night and still get scores within hours.',
    rating: 5,
  },
  {
    name: 'Shristi Poudel',
    location: 'Lalitpur',
    quote: 'From mock tests to booking assistance, everything was seamless. Highly recommended for anyone serious about PTE.',
    rating: 5,
  },
];

const FAQS = [
  {
    category: 'About PTE Exam',
    questions: [
      {
        q: 'What is PTE Academic?',
        a: 'PTE Academic is a computer-based English language test accepted by universities and governments worldwide. It assesses your reading, writing, listening, and speaking skills in a single 2-hour test session.',
      },
      {
        q: 'How is PTE scored?',
        a: 'PTE Academic uses a global scoring scale of 10–90 points. Each section (Speaking, Writing, Reading, Listening) is scored individually, and you also receive an Overall score. Most universities require scores between 50–79.',
      },
      {
        q: 'How long is the PTE test?',
        a: 'The entire test takes approximately 2 hours to complete. It has three main parts: Speaking & Writing (54–67 min), Reading (29–30 min), and Listening (30–43 min).',
      },
      {
        q: 'When will I get my PTE results?',
        a: 'PTE Academic results are typically available within 2 business days, but often within 24 hours. You will receive an email notification when your scores are ready.',
      },
    ],
  },
  {
    category: 'About Our Preparation Service',
    questions: [
      {
        q: 'How are your mock tests different from others?',
        a: 'Our mock tests follow the exact PTE Academic format, scoring algorithm, and interface. You get detailed section-wise analysis with personalized improvement tips after each test.',
      },
      {
        q: 'Can I access mock tests on mobile?',
        a: 'Yes! Our platform is fully responsive and works on all devices including mobile phones, tablets, and desktops. You can practice anytime, anywhere.',
      },
      {
        q: 'How long do I get access to the mock tests?',
        a: 'Access duration depends on the package you choose. All packages include unlimited test attempts during your access period with scores delivered within 24 hours.',
      },
      {
        q: 'Do you provide study materials with mock tests?',
        a: 'Yes, each mock test comes with detailed answer explanations, performance analytics, and targeted tips to help you improve specific skills.',
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
        <svg className={`w-5 h-5 text-zinc-500 dark:text-zinc-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="pb-5 text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}

function SectionHeader({ title, highlighted, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
        <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all duration-300">
          {highlighted}
        </span>{' '}
        {title}
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto transition-colors duration-300">
        {subtitle}
      </p>
    </div>
  );
}

function SectionBg({ children }) {
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-300" />
      {children}
    </section>
  );
}

function GlowBlobs({ positions }) {
  return (
    <>
      {positions?.map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-[600px] h-[600px] ${i % 2 === 0 ? 'bg-accent/10' : 'bg-blue-500/10'} rounded-full blur-[150px] pointer-events-none`} />
      ))}
    </>
  );
}

export default function PTEPreparationPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans transition-colors duration-300">
        <style>{`
          @keyframes fadeSlideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeSlideIn 0.8s ease-out forwards;
            opacity: 0;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}</style>

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-20 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
            
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
              
              <div className="animate-fade-in delay-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 px-3 py-1.5 backdrop-blur-md transition-colors hover:bg-white/80 dark:hover:bg-white/10">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                    Complete PTE Preparation
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                  </span>
                </div>
              </div>

              <h1 className="animate-fade-in delay-200 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-[0.9]">
                <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all duration-300">
                  Master
                </span>{' '}
                the PTE Exam<br />
                with Confidence
              </h1>

              <p className="animate-fade-in delay-300 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                Comprehensive PTE Academic preparation with realistic mock tests, detailed performance analytics, and expert guidance to help you achieve your target score.
              </p>

              <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto">
                <Link to="/practice-package" className="w-full sm:w-auto">
                  <GradientButton width="100%" height="50px">
                    <span className="flex items-center justify-center gap-2">
                      Start Practicing
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </GradientButton>
                </Link>
                
                <a href="https://mypte.pearsonpte.com/test/search?examCode=PTE-A" target="_blank" className="w-full sm:w-auto">
                  <GradientButton width="100%" height="50px">
                    <span className="flex items-center justify-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      Check PTE Date
                    </span>
                  </GradientButton>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 lg:mt-12">
              
              <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-colors duration-300">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-zinc-100/50 dark:bg-white/5 blur-3xl pointer-events-none transition-colors duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-white/10 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
                      <Target className="h-6 w-6 text-zinc-900 dark:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
                        PTE Preparation at a Glance
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400 transition-colors duration-300">Overall Success Rate</span>
                      <span className="text-zinc-900 dark:text-white font-medium transition-colors duration-300">95%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800/50 transition-colors duration-300">
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-400 dark:to-white transition-all duration-300" />
                    </div>
                  </div>

                  <div className="h-px w-full bg-zinc-200 dark:bg-white/10 mb-6 transition-colors duration-300" />

                  <div className="grid grid-cols-2 gap-4 text-center">
                    {STATS.map((stat, i) => (
                      <div key={i} className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
                        <span className="text-xl font-bold text-zinc-900 dark:text-white sm:text-2xl transition-colors duration-300">
                          {stat.value}{stat.suffix}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium sm:text-xs">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <SectionBg>
        <GlowBlobs positions={['top-1/2 right-0 -translate-y-1/2', 'bottom-0 left-0']} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            highlighted="Why Choose Our"
            title="PTE Preparation?"
            subtitle="Everything you need to ace the PTE Academic on your first attempt"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 dark:bg-white/10 text-accent ring-1 ring-zinc-200/50 dark:ring-white/20 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* Test Format Section */}
      <SectionBg>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
        <GlowBlobs positions={['top-1/2 right-0 -translate-y-1/2', 'bottom-0 left-0']} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            highlighted="PTE Academic"
            title="Test Format"
            subtitle="Understand the exam structure and prepare effectively"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {TEST_FORMAT.map((section, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 lg:p-8 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}>
                  {index === 0 ? <Edit3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" /> :
                   index === 1 ? <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" /> :
                   <Volume2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 transition-colors duration-300">{section.section}</h3>
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{section.duration}</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 flex-1">
                  {section.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm transition-colors duration-300">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* How It Works */}
      <SectionBg>
        <GlowBlobs positions={['top-0 left-0', 'bottom-0 right-0']} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            highlighted="Your PTE Preparation"
            title="Journey"
            subtitle="Follow our proven path to PTE success"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: BookOpen, title: 'Assess Your Level', description: 'Take a diagnostic test to understand your current proficiency and identify areas for improvement.' },
              { icon: Target, title: 'Practice & Improve', description: 'Access unlimited mock tests focused on your weak areas with detailed performance feedback.' },
              { icon: BarChart3, title: 'Track Progress', description: 'Monitor your improvement with comprehensive analytics and score trends over time.' },
              { icon: GraduationCap, title: 'Ace the Exam', description: 'Walk into your PTE exam with confidence and achieve your target score on the first attempt.' },
            ].map((step, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-accent text-white dark:text-zinc-950 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm mb-4 sm:mb-5">
                  {index + 1}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ring-1 ring-zinc-200 dark:ring-white/20 group-hover:scale-110 transition-transform">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-white mb-1 sm:mb-2 transition-colors duration-300">{step.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed transition-colors duration-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* Testimonials */}
      <SectionBg>
        <GlowBlobs positions={['top-1/2 left-0 -translate-y-1/2', 'top-1/3 right-0']} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            highlighted="Success Stories from"
            title="Our Students"
            subtitle="Hear from students who achieved their target PTE scores"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/50 mb-2 sm:mb-3" />
                
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t border-zinc-200 dark:border-white/10 pt-3 sm:pt-4 transition-colors duration-300">
                  <p className="font-semibold text-zinc-900 dark:text-white text-sm sm:text-base transition-colors duration-300">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-zinc-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionBg>

      {/* FAQs */}
      <SectionBg>
        <GlowBlobs positions={['top-0 right-1/3', 'bottom-0 left-1/3']} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-zinc-100 dark:bg-white/10 rounded-xl mb-4 ring-1 ring-zinc-200 dark:ring-white/20 transition-colors duration-300">
              <HelpCircle className="w-6 h-6 text-accent" />
            </div>
            <SectionHeader
              highlighted="Frequently Asked"
              title="Questions"
              subtitle="Find answers to common questions about PTE preparation"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            {FAQS.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-5 sm:p-6 md:p-8 border border-zinc-200/50 dark:border-white/10 transition-colors duration-300">
                <h3 className="text-sm sm:text-lg font-bold text-accent mb-3 sm:mb-4 uppercase tracking-wide">
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
      </SectionBg>

      {/* Final CTA */}
      <SectionBg>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-white to-zinc-200 dark:from-zinc-900 dark:via-zinc-950 dark:to-black transition-colors duration-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300">
            <span className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-400 dark:to-cyan-400 bg-clip-text text-transparent transition-all duration-300">
              Ready to Start
            </span>{' '}
            Your PTE Preparation?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-10 max-w-2xl mx-auto transition-colors duration-300">
            Join thousands of students who achieved their target PTE scores with our comprehensive preparation platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
            <Link to="/practice-package" className="w-full sm:w-auto">
              <GradientButton width="100%" height="52px">
                <span className="flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Start Mock Tests
                </span>
              </GradientButton>
            </Link>
            <a href="https://wa.me/message/S54RZTK2GC5OH1" target="_blank" className="w-full sm:w-auto">
              <GradientButton width="100%" height="52px">
                <span className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call/WhatsApp for Help
                </span>
              </GradientButton>
            </a>
          </div>

          <p className="text-zinc-500 dark:text-zinc-500 text-sm transition-colors duration-300">
            Need guidance? Contact us at{' '}
            <a href="tel:+9779762419564" className="underline hover:text-accent transition-colors">
              9762419564
            </a>{' '}
            for free PTE preparation advice
          </p>
        </div>
      </SectionBg>
    </>
  );
}
