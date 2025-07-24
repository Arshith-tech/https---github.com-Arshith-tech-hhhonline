'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Target } from 'lucide-react';
import Link from 'next/link';

const FeaturedProject = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how your support is making a difference right now in communities around the world.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Children in a new classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Progress indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="text-sm text-gray-600 mb-1">Project Progress</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold text-green-600">75%</span>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Active Project
                  </div>
                  
                  <h3 className="serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Building Hope Academy in Rural Guatemala
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We're constructing a new elementary school that will serve over 200 children 
                    in a remote village where the nearest school is 15 miles away. This project 
                    includes classrooms, a library, clean water access, and teacher training programs.
                  </p>

                  {/* Project details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">San Pedro, Guatemala</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Completion: June 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Goal: $45,000</span>
                    </div>
                  </div>

                  {/* Impact numbers */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">200+</div>
                        <div className="text-sm text-gray-600">Children Served</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">$33,750</div>
                        <div className="text-sm text-gray-600">Raised So Far</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-600">6</div>
                        <div className="text-sm text-gray-600">Months to Go</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/our-story/projects">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    
                    <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                        Support This Project
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;