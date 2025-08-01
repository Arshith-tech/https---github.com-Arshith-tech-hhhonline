'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

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

  const impactStats = [
    {
      number: "1 in 44",
      label: "Children Identified with ASD",
      description: "In the U.S. (CDC estimate)"
    },
    {
      number: "240K+",
      label: "Children with ASD",
      description: "Estimated in India"
    },
    {
      number: "$200",
      label: "Annual Support",
      description: "Provides speech therapy & special education for a child"
    },
    {
      number: "15+",
      label: "Partner Centers",
      description: "Across multiple countries"
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
        Autism Support Programs
      </h1>
    </motion.div>
  </div>
</section>

{/* Hero: Understanding Autism Spectrum Disorder */}
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
          <p className="text-2xl font-bold text-purple-700 mb-2">1 in 44</p>
          <p className="text-gray-700">children in the US are diagnosed with Autism Spectrum Disorder</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
          <p className="text-2xl font-bold text-indigo-700 mb-2">240,000+</p>
          <p className="text-gray-700">children are estimated to have autism in India</p>
        </div>
      </div>
      <p className="text-xl text-gray-800 mb-4">
        Autism Spectrum Disorder is a neurological and developmental disorder that affects how a person interacts with others, communicates, learns, and behaves. It begins early in childhood and lasts throughout a person’s lifetime.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Autistic children need intensive behavior modification, speech therapy, and special education. A donation of <span className="font-bold">$200</span> will provide an autistic child with speech therapy and special education in school for a year.
      </p>
      <div className="bg-orange-100 rounded-2xl p-6 mt-8 flex items-center justify-center gap-3 shadow">
        <CheckCircle className="h-6 w-6 text-orange-500" />
        <span className="text-lg font-semibold text-orange-700">
          A donation of <span className="font-bold">$200</span> provides speech therapy and special education for a child with autism for a year.
        </span>
      </div>
    </motion.div>
  </div>
</section>


      {/* Programs Section */}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We proudly partner with dedicated organizations transforming the lives of children with autism around the world.
            </p>
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
                {/* Image */}
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

                {/* Content */}
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

      {/* Success Stories */}
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
                "Before joining the HHH autism program, my son David rarely spoke and struggled with daily activities. After 18 months of ABA therapy and sensory support, he's now communicating in full sentences and has made his first friend at school. The transformation has been miraculous."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Sarah Kim"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Kim</div>
                  <div className="text-gray-600">Mother of David, age 7</div>
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
              Help Us Support Children with Autism
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your support helps us provide specialized speech therapy and education to autistic children. Together, we can help every child reach their fullest potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Donate for Autism Support
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
