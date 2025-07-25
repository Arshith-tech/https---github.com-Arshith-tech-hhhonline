'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with brightness filter */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/herobg.jpg')`,
          filter: 'brightness(50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="serif text-5xl md:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Changing Lives,
            <br className="mb-3 hidden md:block" />
            <span className="text-orange-300">One Child at a Time</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us in improving the lives of differently abled children. We strive to make a difference in our children's lives.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="donate-gradient text-white px-8 py-6 text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                Donate Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/90 text-gray-900 border-white/50 px-8 py-6 text-lg hover:bg-white transition-all"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
