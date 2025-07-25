'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Users } from 'lucide-react';
import Link from 'next/link';

const AboutHHH = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 serif"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About HHH 
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Heart and Hand for the Handicapped – A global community united by compassion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Heart and Hand for the Handicapped (HHH) is a not-for-profit tax-exempt 501(c) (3) organization that raises funds to support differently abled children with physical and mental challenges such as polio, cerebral palsy, autism, Down's syndrome, and blindness and other vision problems in India and the US. HHH was founded in 1971 by five South Asian ladies who wanted to make a difference in the lives of differently abled children in India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The organization is run by volunteers who lend their expertise in different areas. We are an organization that serves the ideal of philanthropy and adheres to the highest standard of professional practice, treating everyone with respect and dignity.
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Globe className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    5+
                  </div>
                  <div className="text-base text-gray-700 mt-1">
                    Partner Organizations in <span className="font-semibold text-blue-700">USA</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                    <Globe className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    100+
                  </div>
                  <div className="text-base text-gray-700 mt-1">
                    Partner Organizations in <span className="font-semibold text-orange-600">India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="hhh.jpg"
                  alt="Children learning together"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              {/* Floating quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm"
              >
                <p className="text-gray-800 italic mb-2">
                  "We don't just change lives – we change entire communities, one act of kindness at a time."
                </p>
                <p className="text-sm text-gray-600">— Sarah Johnson, Founder</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHHH;
