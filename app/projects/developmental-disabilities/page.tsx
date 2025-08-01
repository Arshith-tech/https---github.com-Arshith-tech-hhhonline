'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function DevelopmentalDisabilitiesPage() {
    // NEW:
  const organizations = [
    {
      name: "Hope for Children Foundation",
      description: "Delivers inclusive education and care for children with developmental disabilities in underserved communities.",
      impact: "1,200+ children empowered",
      location: "Manila, Philippines",
      image: "https://images.pexels.com/photos/xxx.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Rising Stars Special Needs Center",
      description: "Provides integrated therapy, education, and vocational training for children and teens.",
      impact: "300+ lives transformed",
      location: "Nairobi, Kenya",
      image: "https://images.pexels.com/photos/yyy.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Fundación Sonrisas",
      description: "Supports families and children living with Down syndrome through early intervention and advocacy.",
      impact: "150+ families supported",
      location: "Guatemala City, Guatemala",
      image: "https://images.pexels.com/photos/zzz.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];


  const impactStats = [
    { number: "650+", label: "Children Supported", description: "Across all programs" },
    { number: "85%", label: "Improvement Rate", description: "In developmental milestones" },
    { number: "12", label: "Partner Centers", description: "Worldwide" },
    { number: "$450K", label: "Annual Investment", description: "In specialized programs" }
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
              Developmental Disabilities Support
            </h1>
          </motion.div>
        </div>
      </section>
      {/* Hero: Understanding Developmental Disabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-10">
              <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
                <p className="text-2xl font-bold text-blue-700 mb-2">1 in 44</p>
                <p className="text-gray-700">children in the US is diagnosed with Autism Spectrum Disorder</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
                <p className="text-2xl font-bold text-green-700 mb-2">18 million+</p>
                <p className="text-gray-700">people in India are estimated to have Autism</p>
              </div>
            </div>
            <p className="text-xl text-gray-800 mb-4">
              Developmental Disabilities are a diverse group of severe, chronic conditions including intellectual and learning disabilities, blindness, and deafness.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              HHH has supported organizations in the US and India empowering children and families with special education, therapy, vocational training, and lifelong care. Funding helps provide vital therapies, equipment, and safe transportation.
            </p>
            <div className="bg-orange-100 rounded-2xl p-6 mt-8 flex items-center justify-center gap-3 shadow">
              <CheckCircle className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-semibold text-orange-700">
                A donation of <span className="font-bold">$500</span> provides special education and medical treatment for a child with developmental disabilities for a year.
              </span>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Impact Statistics */}
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
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Programs Section */}
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
        Organizations We Support
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We proudly partner with dedicated organizations transforming the lives of children with developmental disabilities around the world.
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
          {/* IMAGE */}
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

          {/* CONTENT */}
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



      {/* Success Stories */}
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
              Success Stories
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8"
            >
              <blockquote className="text-xl italic text-gray-800 mb-6">
                "When Maria was diagnosed with Down syndrome, we didn't know where to turn. The HHH early intervention program 
                not only provided therapy for Maria but taught us how to support her development at home. Today, at age 8, 
                Maria is thriving in school and has exceeded every milestone we hoped for."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Carmen Rodriguez"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Carmen Rodriguez</div>
                  <div className="text-gray-600">Mother of Maria, Philippines</div>
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
              Help Us Expand Our Reach
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your support helps us provide specialized care and education to more children with developmental disabilities. 
              Together, we can ensure every child has the opportunity to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Support This Program
                  <Heart className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Link href="/our-story/who-we-are">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Learn More About Our Work
              </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}