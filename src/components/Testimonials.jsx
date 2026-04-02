import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ramesh Sharma',
    location: 'Kathmandu',
    quote: 'I was very nervous about PTE, but the mock tests helped me understand exactly what to expect. Scored 79 on my first attempt!',
    rating: 5,
  },
  {
    name: 'Priya Thapa',
    location: 'Pokhara',
    quote: 'Booking my PTE date was so confusing. Their team made it super easy and I got my preferred date without any stress.',
    rating: 5,
  },
  {
    name: 'Sujan Gurung',
    location: 'Biratnagar',
    quote: 'The detailed feedback from mock tests showed me my weak areas. I improved my speaking score from 65 to 82 in just 2 weeks.',
    rating: 5,
  },
  {
    name: 'Anita Karki',
    location: 'Lalitpur',
    quote: 'As a working professional, I did not have time to figure out the booking process. They handled everything perfectly.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900 transition-colors duration-300" />
      {/* Subtle glow effects matching Hero */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4 transition-colors duration-300">
            What Our Students<br />
            <span className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-white dark:to-zinc-400 bg-clip-text text-transparent transition-all duration-300">
              Say
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
            Join thousands of successful students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-zinc-200/50 dark:border-white/10 hover:border-accent/30 hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-accent/50 mb-3" />
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed transition-colors duration-300">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-zinc-200 dark:border-white/10 pt-4 transition-colors duration-300">
                <p className="font-semibold text-zinc-900 dark:text-white transition-colors duration-300">{testimonial.name}</p>
                <p className="text-sm text-zinc-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
