'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, ExternalLink, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OrganizationsListPage() {
  
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
              Our Partner Organizations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Meet the incredible organizations we're proud to support. Each partnership represents 
              a shared commitment to creating lasting change in communities around the world."
            </p>
          </motion.div>
        </div>
      </section>
        <div>
            <br/>
            <br/>   
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>   
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
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
              Support These Amazing Organizations
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your donation helps fund the incredible work these organizations do every day. 
              Together, we can amplify their impact and reach even more children in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                  Donate Now
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/organizations/selection">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-50">
                  Partnership Process
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}