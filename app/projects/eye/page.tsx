'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, MapPin, CheckCircle, Eye } from 'lucide-react';
import Link from 'next/link';

export default function EyePage() {
  // Eye care programs (alternating layout)
  const organizations = [
    {
      name: "Pediatric Cataract Surgery",
      description: "Sight-saving cataract surgeries for children born with congenital cataracts or those who develop them early in life.",
      impact: "95+ children",
      location: "India & Bangladesh",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Vision Screening Programs",
      description: "Mobile eye clinics conduct screenings in remote schools and communities to identify children with vision problems early.",
      impact: "2,500+ children screened",
      location: "Kenya & Tanzania",
      image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      name: "Glasses & Vision Aids",
      description: "Prescription glasses, low-vision aids, and assistive devices help children see clearly and succeed in school.",
      impact: "450+ children",
      location: "Philippines & Guatemala",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  // Stats
  const impactStats = [
    { number: "3,045+", label: "Children Helped", description: "Vision restored or improved" },
    { number: "98%", label: "Surgery Success Rate", description: "For cataract operations" },
    { number: "22", label: "Eye Care Centers", description: "Across 8 countries" },
    { number: "$290K", label: "Annual Investment", description: "In eye care programs" }
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
              Eye Support
            </h1>
            {/*<p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Every child deserves the opportunity to reach their full potential. Our developmental disabilities programs 
              provide specialized care, education, and family support to help children thrive despite their challenges."
            </p>*/}
          </motion.div>
        </div>
      </section>
      {/* Hero/Intro: Eye Care & Vision Support */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto text-center"
    >
      {/* Stats Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-4">
        <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
          <p className="text-2xl font-bold text-amber-700 mb-1">200 million+</p>
          <p className="text-gray-700 text-base">people globally have visual impairment; many are children in low-resource settings.</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow flex-1">
          <p className="text-2xl font-bold text-blue-700 mb-1">500,000</p>
          <p className="text-gray-700 text-base">children go blind every year worldwide; India accounts for nearly a quarter of all pediatric blindness.</p>
        </div>
      </div>

      {/* Informational Paragraphs */}
      <p className="text-xl text-gray-800 mb-4">
        Visual impairment in children requires special care and treatment to learn and do everyday activities, corrective surgeries and therapy. Many of the causes of childhood blindness are avoidable and treatable.
      </p>
      <p className="text-xl text-gray-800 mb-6">
        HHH is committed to improving the lives of children with visual impairment. Give the gift of vision by donating <span className="font-semibold">$200</span> for a child to receive corrective eye surgery and therapy/training.
      </p>

      

      <div className="bg-orange-100 rounded-2xl p-6 mt-8 flex items-center justify-center gap-3 shadow">
        <CheckCircle className="h-6 w-6 text-orange-500" />
        <span className="text-lg font-semibold text-orange-700">
          <span className="font-bold">$200</span> provides a child with corrective surgery and vital therapy/training.
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
        We proudly partner with dedicated organizations transforming the lives of children with eye conditions around the world.
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
              className="bg-white rounded-2xl p-8"
            >
              <blockquote className="text-xl italic text-gray-800 mb-6">
                "Priya was born with cataracts in both eyes and couldn't see anything beyond shadows. The HHH eye program 
                funded her surgery when she was 6 months old. Today, at age 8, she's at the top of her class and wants 
                to become a teacher. The gift of sight gave her the gift of a future."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Sunita Sharma"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sunita Sharma</div>
                  <div className="text-gray-600">Mother of Priya, age 8</div>
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
              Give the Gift of Sight
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Your donation restores vision and transforms lives. For just $200, you can fund a sight-saving surgery, therapy, and training for a child in need. Give hope—give the gift of sight.
            </p>
            
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Fund Eye Surgery
                  <Eye className="ml-2 h-5 w-5" />
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
