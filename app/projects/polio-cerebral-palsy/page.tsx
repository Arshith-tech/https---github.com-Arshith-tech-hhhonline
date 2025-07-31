'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, MapPin, Calendar, ArrowRight, CheckCircle, Activity } from 'lucide-react';

export default function PolioCerebralPalsyPage() {
  const programs = [
    {
      title: "Physical Therapy & Rehabilitation",
      description: "Comprehensive physical therapy programs to improve mobility, strength, and motor function for children with polio and cerebral palsy.",
      beneficiaries: "180+ children",
      location: "India & Kenya",
      image: "https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Assistive Device Program",
      description: "Providing wheelchairs, braces, crutches, and other mobility aids to help children move independently and participate in daily activities.",
      beneficiaries: "250+ children",
      location: "Philippines & Guatemala",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Inclusive Education Support",
      description: "Adapting schools and training teachers to ensure children with mobility challenges can access quality education alongside their peers.",
      beneficiaries: "320+ students",
      location: "Brazil & Tanzania",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const services = [
    {
      name: "Physiotherapy",
      description: "Regular sessions to improve muscle strength and coordination",
      icon: "🏃‍♂️"
    },
    {
      name: "Occupational Therapy",
      description: "Training for daily living skills and adaptive techniques",
      icon: "🎯"
    },
    {
      name: "Mobility Aids",
      description: "Custom-fitted wheelchairs, braces, and walking aids",
      icon: "♿"
    },
    {
      name: "Surgery Support",
      description: "Funding for corrective surgeries and post-operative care",
      icon: "🏥"
    }
  ];

  const impactStats = [
    { number: "750+", label: "Children Served", description: "With mobility challenges" },
    { number: "92%", label: "Mobility Improvement", description: "Within 6 months" },
    { number: "18", label: "Rehabilitation Centers", description: "Across 7 countries" },
    { number: "$520K", label: "Annual Investment", description: "In mobility programs" }
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
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Mobility challenges should never limit a child's dreams. Our comprehensive programs provide therapy, 
              assistive devices, and educational support to help children with polio and cerebral palsy live full, independent lives."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 blue-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-disciplinary approach addressing physical, educational, and social needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
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
              Our Programs in Action
            </h2>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="serif text-3xl font-bold text-gray-900">{program.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{program.beneficiaries}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{program.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Success story"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-800 mb-6">
                    "When Ahmed contracted polio at age 3, doctors said he might never walk. Through HHH's physical therapy 
                    program and the custom leg braces they provided, Ahmed not only learned to walk but is now the fastest 
                    runner in his class. He dreams of becoming a doctor to help other children like himself."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Fatima Hassan"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Fatima Hassan</div>
                      <div className="text-gray-600">Mother of Ahmed, age 12</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Help Children Move Forward
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Every child deserves the chance to move freely and pursue their dreams. Your support provides 
              life-changing therapy and mobility aids to children with polio and cerebral palsy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Support Mobility Programs
                  <Activity className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Learn About Our Impact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}