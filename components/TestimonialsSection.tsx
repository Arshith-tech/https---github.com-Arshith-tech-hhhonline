'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Aditya Mehra",
      role: "Age 14, Delhi",
      image: "/autism.jpg",
      quote: "Thanks to HHH Online and Muskan Trust, I can now express myself and make new friends. My family is grateful for your support.",
      impact: "Autism Support Donation"
    },
    {
      name: "John Doe",
      role: "Age 7, Denver",
      image: "/dd.webp",
      quote: "With help from HHH Online and AMC, I enjoy learning and playing every day. Thank you for making this possible for me.",
      impact: "Developmental Disability Aid"
    },
    {
      name: "Kiran Sharma",
      role: "Age 11, Mumbai",
      image: "/vi.jpg",
      quote: "Anchal Trust and HHH Online helped me get glasses. Now I can read my books clearly at school!",
      impact: "Vision Support Donation"
    },
    {
      name: "Rahul Singh",
      role: "Age 12, Bengaluru",
      image: "/cp.avif",
      quote: "Thanks to HHH Online and Spastics Society, my therapy is helping me grow stronger every week.",
      impact: "Cerebral Palsy Assistance"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative py-20 text-white" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background image and overlays */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: "url('/orphan.jpg')", filter: 'grayscale(100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 serif"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real Stories, Real Impact
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto opacity-90">
              Behind every statistic is a human story that reminds us why our work matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                      index === currentTestimonial
                        ? 'ring-4 ring-orange-500 scale-105'
                        : 'grayscale opacity-60'
                    }`}
                    animate={{
                      scale: index === currentTestimonial ? 1.05 : 1,
                      opacity: index === currentTestimonial ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-48 object-contain bg-black"
                    />
                    {index === currentTestimonial && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm opacity-90">{testimonial.role}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial Content */}
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="relative">
                <Quote className="h-12 w-12 text-orange-500 mb-6" />
                <blockquote className="text-2xl md:text-3xl leading-relaxed italic text-white drop-shadow-lg">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>

              <div className="space-y-2">
                <div className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-white opacity-80">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {testimonials[currentTestimonial].impact}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-orange-500 w-8' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
