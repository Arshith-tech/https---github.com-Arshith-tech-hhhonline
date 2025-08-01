'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, MapPin, CheckCircle, Activity } from 'lucide-react';
import Link from 'next/link';

export default function PolioCerebralPalsyPage() {
  // Organizations supported for polio & cerebral palsy
  const organizations = [
    {
      name: "Hope Mobility Foundation",
      description: "Providing corrective surgeries and mobility aids including custom braces and wheelchairs for children affected by polio and cerebral palsy.",
      impact: "400+ children assisted",
      location: "India & Kenya",
      image: "https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Stride Forward Center",
      description: "Rehabilitation and inclusive education programs empowering children with mobility challenges to live independent lives.",
      impact: "300+ children supported",
      location: "Philippines & Guatemala",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Balance & Movement Institute",
      description: "Specialized care and therapy for children with cerebral palsy to improve posture, coordination and muscle control.",
      impact: "250+ children served",
      location: "Brazil & Tanzania",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

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
              Polio & Cerebral Palsy Support
            </h1>
            {/* You can add a quote or subtitle here if desired */}
          </motion.div>
        </div>
      </section>

      {/* Info + Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Stats Cards */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-4">
              <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
                <p className="text-2xl font-bold text-green-700 mb-1">Millions</p>
                <p className="text-gray-700 text-base">
                  of children worldwide live with polio or cerebral palsy complications requiring ongoing support.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
                <p className="text-2xl font-bold text-blue-700 mb-1">Eradicated in India</p>
                <p className="text-gray-700 text-base">
                  Polio is eradicated in India but thousands still suffer from past infections needing therapies and aids.
                </p>
              </div>
            </div>

            {/* Informational paragraphs */}
            <p className="text-xl text-gray-800 mb-4">
              Polio has been eradicated in India, but millions of children missed vaccination programs and need corrective surgeries, braces, and mobility devices to walk again. Children who survive paralytic polio require continuous care.
            </p>
            <p className="text-xl text-gray-800 mb-6">
              Cerebral Palsy is caused by abnormal brain development affecting movement, muscle coordination, balance, and posture. There is currently no cure, but therapy and rehabilitation can dramatically improve quality of life.
            </p>

            {/* Donation Callout */}
            <div className="bg-orange-100 rounded-2xl p-6 mt-8 flex items-center justify-center gap-3 shadow">
              <CheckCircle className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-semibold text-orange-700">
                A donation of <span className="font-bold">$300</span> provides corrective surgery and rehabilitation to a child for a year.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organizations We Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-6">
              Organizations We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We proudly partner with dedicated organizations transforming the lives of children affected by polio and cerebral palsy worldwide.
            </p>
          </motion.div>

          <div className="space-y-16">
            {organizations.map((org, index) => (
              <motion.div
                key={org.name}
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
                      src={org.image}
                      alt={org.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="serif text-3xl font-bold text-gray-900">{org.name}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{org.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{org.impact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{org.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <blockquote className="text-xl italic text-gray-800 mb-6">
                "When Ahmed contracted polio at age 3, doctors said he might never walk. Through HHH's physical therapy 
                program and the custom leg braces they provided, Ahmed not only learned to walk but is now the fastest 
                runner in his class. He dreams of becoming a doctor to help other children like himself."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Fatima Hassan"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Fatima Hassan</div>
                  <div className="text-gray-600">Mother of Ahmed, age 12</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
              Help Children Move Forward
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Every child deserves the chance to move freely and pursue their dreams. Your support provides life-changing therapy and mobility aids to children with polio and cerebral palsy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Support Mobility Programs
                  <Activity className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/our-story/who-we-are">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Learn About Our Impact
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
