'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
            Be a Part of Something Bigger
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Every donation, every volunteer hour, every act of kindness creates ripples of change 
            that extend far beyond what we can imagine. Your contribution today becomes someone's hope tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Donate Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Make a Donation</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Your financial support directly impacts children's lives. Every dollar goes toward 
              education, healthcare, and building sustainable futures.
            </p>
            <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full bg-white text-orange-600 hover:bg-gray-50 font-semibold">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>

          {/* Get Involved Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center hover:bg-white/15 transition-all transform hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Join our community of passionate volunteers and members. Share your skills, 
              time, and heart to multiply our impact across the globe.
            </p>
            <Link href="/take-action/getting-involved">
              <Button size="lg" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-orange-600 font-semibold">
                Join Our Mission
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-6 opacity-90">
            Have questions about how you can help? We'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;