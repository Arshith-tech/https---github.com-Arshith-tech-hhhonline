'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function WhoWeArePage() {
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "We are not just an organization - we are a family united by love, 
              driven by compassion, and committed to creating lasting change in the world."
            </p>
            <p className="text-lg text-gray-600 mt-4">— Sarah Johnson, Founder & President</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="serif text-4xl font-bold text-gray-900 mb-6">Our Beginning</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  HHH Online (Helping Hands for Humanity) was born from a simple moment of connection. 
                  In 2008, our founder Sarah Johnson was volunteering at a local shelter when she met 
                  Maria, a single mother struggling to provide for her three children. That conversation 
                  sparked an idea that would grow into a global movement of compassion.
                </p>
                <p>
                  What started as a small group of friends pooling resources to help one family has 
                  evolved into an international network of caring individuals who believe that every 
                  child deserves access to education, healthcare, and opportunities to thrive.
                </p>
                <p>
                  Today, we work with carefully vetted local organizations across 12 countries, 
                  ensuring that our support creates sustainable, long-term positive change in 
                  communities that need it most.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Children and volunteers together"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 blue-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We lead with our hearts, understanding that behind every need is a human story that deserves dignity and respect."
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "We think globally but act locally, working with communities to create solutions that fit their unique needs and culture."
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in the power of collective action and that together we can achieve what none of us could accomplish alone."
              },
              {
                icon: Award,
                title: "Accountability",
                description: "We are transparent in our operations and committed to ensuring every donation makes the maximum possible impact."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-8 border-l-4 border-orange-500 pl-8 text-left">
              "To create sustainable positive change in the lives of children and families 
              worldwide by providing educational opportunities, healthcare access, and 
              community development support through collaborative partnerships with local organizations."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/our-story/projects">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  See Our Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="donate-gradient text-white">
                  Support Our Mission
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}