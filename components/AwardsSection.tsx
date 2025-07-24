'use client';

import { motion } from 'framer-motion';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: "Outstanding Humanitarian Service Award",
      organization: "International Charity Foundation",
      year: "2023",
      description: "Recognized for exceptional impact in global child welfare and education initiatives."
    },
    {
      icon: Medal,
      title: "Excellence in Community Development",
      organization: "Global Development Council",
      year: "2022",
      description: "Honored for sustainable community development programs across multiple countries."
    },
    {
      icon: Star,
      title: "Top Rated Charity",
      organization: "Charity Navigator",
      year: "2021-2024",
      description: "Consistently rated 4-star charity for financial transparency and accountability."
    },
    {
      icon: Award,
      title: "Innovation in Education Award",
      organization: "UNESCO Partnership",
      year: "2021",
      description: "Recognized for innovative approaches to education in underserved communities."
    }
  ];

  const stats = [
    { number: "98%", label: "Funds to Programs", description: "Direct impact ratio" },
    { number: "4.8/5", label: "Donor Rating", description: "Average satisfaction" },
    { number: "15+", label: "Years Trusted", description: "Proven track record" },
    { number: "100%", label: "Transparency", description: "Open book policy" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to transparency, impact, and excellence has been recognized by leading organizations worldwide.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/15 transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <award.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{award.title}</h3>
                    <span className="text-orange-300 font-semibold">{award.year}</span>
                  </div>
                  <p className="text-blue-200 font-medium mb-3">{award.organization}</p>
                  <p className="text-blue-100 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="serif text-3xl font-bold mb-4">Why Donors Trust Us</h3>
            <p className="text-blue-100 text-lg">
              Our commitment to transparency and impact drives everything we do.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 md:p-12">
            <h3 className="serif text-3xl font-bold mb-4">
              Join Our Award-Winning Mission
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Be part of an organization that's recognized for making real, lasting change in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all"
                >
                  Donate with Confidence
                </motion.button>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all"
              >
                View Financial Reports
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;