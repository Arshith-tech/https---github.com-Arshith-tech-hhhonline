'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-20 blue-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                HHH Online (Helping Hands for Humanity) is a compassionate community of individuals 
                united by a simple yet powerful belief: every child deserves a chance to thrive. 
                For over 15 years, we've been working tirelessly to bridge the gap between need and hope.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission extends beyond just providing financial support. We create lasting 
                connections, foster educational opportunities, and empower communities to build 
                sustainable futures. Every project we undertake is carefully chosen to maximize 
                impact and create ripple effects of positive change.
              </p>
              
              <blockquote className="border-l-4 border-orange-500 pl-6 py-4 bg-white/50 rounded-r-lg">
                <p className="text-gray-800 italic text-lg">
                  "We don't just change lives - we change entire communities, one act of kindness at a time."
                </p>
                <footer className="text-gray-600 mt-2">— Sarah Johnson, Founder & President</footer>
              </blockquote>
              
              <Link href="/our-story/who-we-are">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Our Full Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
                src="https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Children learning in a classroom"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border-4 border-orange-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;