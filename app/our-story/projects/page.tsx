'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Users, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Development Disabilities",
      beneficiaries: 150,
      description:
        "Supporting children with developmental disabilities by providing specialized therapies and educational programs.",
      image:
        "null",
      impact: [
        "Specialized therapy sessions",
        "Educational support",
        "Family training workshops",
        "Community awareness campaigns",
      ],
      href: "/projects/developmental-disabilities",
    },
    {
      title: "Autism",
      beneficiaries: 120,
      description:
        "Empowering autistic children with tailored interventions, social skills training, and inclusive education.",
      image:
        "null",
      impact: [
        "Social skills training",
        "Inclusive classrooms",
        "Parental support groups",
        "Early intervention programs",
      ],
      href: "/projects/autism",
    },
    {
      title: "Polio/Cerebral Palsy",
      beneficiaries: 80,
      description:
        "Providing rehabilitation services and assistive devices to children affected by polio and cerebral palsy.",
      image:
        "null",
      impact: [
        "Rehabilitation therapy",
        "Assistive devices",
        "Community inclusion programs",
        "Healthcare access campaigns",
      ],
      href: "/projects/polio-cerebral-palsy",
    },
    {
      title: "Eye",
      beneficiaries: 200,
      description:
        "Eye screening and treatment camps to prevent blindness and improve vision health in children.",
      image:
        "null",
      impact: [
        "Eye screening camps",
        "Free corrective lenses",
        "Surgery support",
        "Awareness programs",
      ],
      href: "/projects/eye",
    },
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
              We support projects for children with special needs. Your recurring donation helps them thrive.
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
                          <Users className="h-5 w-5 text-green-600" />
                          <span className="text-sm text-gray-600">{project.beneficiaries} beneficiaries</span>
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
                        <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="donate-gradient text-white">
                            Support This Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </a>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-blue-500 text-blue-600 hover:bg-blue-50"
                        >
                          <Link href={project.href}>
                            Learn More
                          </Link>
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
    </div>
  );
}
