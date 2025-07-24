'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const OrganizationsWeSupport = () => {
  const organizations = [
    { name: "Children's Hope Foundation", logo: "🏫", location: "Philippines" },
    { name: "Global Education Initiative", logo: "📚", location: "Kenya" },
    { name: "Rural Development Trust", logo: "🌱", location: "India" },
    { name: "Community Health Partners", logo: "🏥", location: "Guatemala" },
    { name: "Youth Empowerment Network", logo: "👥", location: "Brazil" },
    { name: "Clean Water Alliance", logo: "💧", location: "Tanzania" },
    { name: "Sustainable Agriculture Co-op", logo: "🌾", location: "Peru" },
    { name: "Digital Literacy Foundation", logo: "💻", location: "Bangladesh" },
    { name: "Women's Empowerment Center", logo: "👩‍🎓", location: "Nepal" },
    { name: "Child Nutrition Program", logo: "🍎", location: "Haiti" },
    { name: "Vocational Training Institute", logo: "🔧", location: "Cambodia" },
    { name: "Environmental Education Trust", logo: "🌍", location: "Madagascar" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-cream-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organizations We Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with trusted local organizations worldwide to ensure maximum impact and sustainable change.
          </p>
        </motion.div>

        {/* Scrolling Banner */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 min-w-full"
              animate={{
                x: [0, -100 * organizations.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* First set of organizations */}
              {organizations.map((org, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 min-w-[300px]"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{org.logo}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{org.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{org.location}</p>
                    <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      Active Partner
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {organizations.map((org, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 min-w-[300px]"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{org.logo}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{org.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{org.location}</p>
                    <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                      Active Partner
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-orange-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-orange-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsWeSupport;