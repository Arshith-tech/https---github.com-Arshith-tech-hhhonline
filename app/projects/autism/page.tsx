'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, MapPin, Calendar, ArrowRight, CheckCircle, Brain } from 'lucide-react';

export default function AutismPage() {
  const programs = [
    {
      title: "Applied Behavior Analysis (ABA) Therapy",
      description: "Intensive behavioral therapy programs designed to improve communication, social skills, and reduce challenging behaviors.",
      beneficiaries: "120+ children",
      location: "India & Philippines",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Sensory Integration Centers",
      description: "Specialized facilities with sensory equipment to help children with autism process sensory information more effectively.",
      beneficiaries: "85+ children",
      location: "Kenya & Brazil",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Communication Support Programs",
      description: "Speech therapy and alternative communication methods including picture exchange and assistive technology.",
      beneficiaries: "200+ children",
      location: "Guatemala & Tanzania",
      image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const therapyApproaches = [
    {
      name: "Early Intervention",
      description: "Critical support during ages 2-6 when brain plasticity is highest",
      icon: "🧠"
    },
    {
      name: "Social Skills Training",
      description: "Group activities to develop peer interaction and communication",
      icon: "👥"
    },
    {
      name: "Family Training",
      description: "Teaching parents and siblings effective interaction strategies",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      name: "Sensory Support",
      description: "Addressing sensory processing challenges through specialized therapy",
      icon: "🎯"
    }
  ];

  const impactStats = [
    { number: "405+", label: "Children in Programs", description: "Receiving autism support" },
    { number: "78%", label: "Communication Improvement", description: "Within 12 months" },
    { number: "15", label: "Therapy Centers", description: "Across 6 countries" },
    { number: "$380K", label: "Annual Investment", description: "In autism programs" }
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
              Autism Support Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Children with autism have unique gifts and perspectives that enrich our world. Our programs provide 
              specialized therapy, education, and family support to help each child communicate, learn, and thrive."
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
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Approaches */}
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
              Our Therapy Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based interventions tailored to each child's unique needs and strengths.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapyApproaches.map((approach, index) => (
              <motion.div
                key={approach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.name}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
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
              Specialized Programs
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
                    src="https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Success story"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-800 mb-6">
                    "Before joining the HHH autism program, my son David rarely spoke and struggled with daily activities. 
                    After 18 months of ABA therapy and sensory support, he's now communicating in full sentences and 
                    has made his first friend at school. The transformation has been miraculous."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Sarah Kim"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Kim</div>
                      <div className="text-gray-600">Mother of David, age 7</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Support Autism Programs
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Early intervention makes all the difference for children with autism. Your support helps us provide 
              specialized therapy and family support when it matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
                  Donate for Autism Support
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Learn About Volunteering
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}