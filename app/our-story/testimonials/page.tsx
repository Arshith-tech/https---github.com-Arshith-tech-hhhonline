'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type Story = {
  name: string;
  location: string;
  image: string;
  quote: string;
  impact: string;
  age?: string;
  role?: string;
};

type TestimonialCategory = {
  category: string;
  stories: Story[];
};

const testimonials: TestimonialCategory[] = [
  {
    category: "Children",
    stories: [
      {
        name: "Amara Johnson",
        age: "12 years old",
        location: "Kenya",
        image: "null",
        quote: "I want to be a doctor when I grow up so I can help people in my village. Thank you to all the kind people at HHH who help me go to school every day. I promise to study hard!",
        impact: "Scholarship Recipient - 3 years"
      },
      {
        name: "Carlos Martinez",
        age: "14 years old",
        location: "Guatemala",
        image: "null",
        quote: "Before HHH helped build our school, I had to walk 3 hours to get to class. Now I can focus on learning instead of walking. My favorite subject is mathematics!",
        impact: "Building Hope Academy Student"
      },
      {
        name: "Priya Sharma",
        age: "11 years old",
        location: "India",
        image: "null",
        quote: "I love using the computers at our new learning center. I'm learning to code and I want to create apps that help other children learn too!",
        impact: "Digital Learning Program"
      }
    ]
  },
  {
    category: "Organizations",
    stories: [
      {
        name: "Sister Maria Santos",
        role: "Director, Children's Hope Foundation",
        location: "Philippines",
        image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        quote: "HHH Online has been our most reliable partner for over 5 years. Their support goes beyond funding - they truly care about sustainable change and work with us to ensure every project succeeds.",
        impact: "Partner Organization - 5 years"
      },
      {
        name: "Dr. James Ochieng",
        role: "Medical Director, Rural Health Initiative",
        location: "Kenya",
        image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        quote: "The mobile health units funded by HHH have allowed us to reach over 2,000 people in remote villages. We've seen a 70% reduction in preventable diseases in our coverage areas.",
        impact: "Healthcare Partnership"
      },
      {
        name: "Ana Rodriguez",
        role: "Education Coordinator",
        location: "Brazil",
        image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
        quote: "The school nutrition program has transformed our students' ability to learn. Attendance is up 85% and test scores have improved dramatically since children aren't coming to school hungry.",
        impact: "Nutrition Program Partner"
      }
    ]
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hear from Our Children & Organizations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Every story shared here represents hope realized, dreams pursued, and lives transformed. 
              These voices remind us why our mission matters and inspire us to continue our work."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials by Category */}
      {testimonials.map((category, categoryIndex) => (
        <section key={category.category} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stories from {category.category}
              </h2>
            </motion.div>

            <div className="space-y-16">
              {category.stories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                      {story.impact}
                    </div>
                    <div className="relative">
                      <Quote className="h-12 w-12 text-orange-500 mb-4" />
                      <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic">
                        "{story.quote}"
                      </blockquote>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {story.name}
                        {story.age && <span className="text-lg font-normal text-gray-600">, {story.age}</span>}
                      </h3>
                      {story.role && (
                        <p className="text-lg text-gray-700">{story.role}</p>
                      )}
                      <p className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                        {story.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Your Story Could Be Next
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Every donation, every volunteer hour, every act of kindness creates new stories of hope and transformation. 
              Join us in writing the next chapter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Create Impact Today
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
