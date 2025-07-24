'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Building Hope Academy - Guatemala",
      location: "San Pedro, Guatemala",
      status: "Active",
      progress: 75,
      raised: 33750,
      goal: 45000,
      beneficiaries: 200,
      description: "Constructing a new elementary school in a remote village where children currently walk 15 miles to the nearest educational facility.",
      image: "https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      impact: ["6 new classrooms", "Library and computer lab", "Clean water access", "Teacher training program"]
    },
    {
      title: "Clean Water Initiative - Kenya",
      location: "Maasai Mara, Kenya",
      status: "Completed",
      progress: 100,
      raised: 28000,
      goal: 28000,
      beneficiaries: 450,
      description: "Installation of clean water wells and sanitation facilities in three rural villages, providing access to safe drinking water.",
      image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      impact: ["3 water wells installed", "450 people with clean water access", "Reduced waterborne illness by 80%", "Women save 4 hours daily"]
    },
    {
      title: "Digital Learning Centers - Philippines",
      location: "Mindanao, Philippines",
      status: "Planning",
      progress: 15,
      raised: 7500,
      goal: 50000,
      beneficiaries: 300,
      description: "Establishing computer labs and internet connectivity in underserved schools to bridge the digital divide.",
      image: "https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      impact: ["Digital literacy training", "Computer labs for 5 schools", "Internet connectivity", "Teacher technology training"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Planning': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              Projects We Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Every project we undertake is a promise to a community, a commitment to change, 
              and a step toward a brighter future for children who depend on our support."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-96 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white rounded-xl p-4 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-bold text-gray-900">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full transition-all duration-1000"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <h2 className="serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <span className="text-sm text-gray-600">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-gray-600">{project.beneficiaries} beneficiaries</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="h-5 w-5 text-orange-600" />
                          <span className="text-sm text-gray-600">Goal: ${project.goal.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-purple-600" />
                          <span className="text-sm text-gray-600">Raised: ${project.raised.toLocaleString()}</span>
                        </div>
                      </div>

                      {/* Impact List */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Project Impact:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {project.status === 'Active' && (
                          <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="donate-gradient text-white">
                              Support This Project
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </a>
                        )}
                        <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Want to Propose a Project?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We're always looking for meaningful ways to help communities in need. 
              If you know of a project that could benefit from our support, we'd love to hear about it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
                  Submit a Project Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/take-action/getting-involved">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}