'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Globe, Users, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function OrganizationSelectionPage() {
  const selectionCriteria = [
    {
      icon: Target,
      title: "Clear Mission & Goals",
      description: "Organizations must have well-defined objectives and measurable outcomes for their programs.",
      details: [
        "Specific, achievable goals",
        "Clear target beneficiaries",
        "Defined success metrics",
        "Regular progress reporting"
      ]
    },
    {
      icon: Users,
      title: "Local Community Leadership",
      description: "We prioritize organizations led by and deeply connected to the communities they serve.",
      details: [
        "Local leadership team",
        "Community involvement in decision-making",
        "Cultural sensitivity and understanding",
        "Grassroots support and engagement"
      ]
    },
    {
      icon: Globe,
      title: "Sustainable Impact",
      description: "Partners must demonstrate long-term thinking and sustainable approaches to development.",
      details: [
        "Self-sustaining program models",
        "Capacity building focus",
        "Environmental responsibility",
        "Long-term community benefits"
      ]
    },
    {
      icon: CheckCircle,
      title: "Financial Transparency",
      description: "Complete openness about finances, operations, and impact measurement is essential.",
      details: [
        "Detailed financial reporting",
        "Impact measurement and evaluation",
        "Regular audits and assessments",
        "Open communication channels"
      ]
    }
  ];

  const selectionProcess = [
    {
      step: "01",
      title: "Initial Application",
      description: "Organizations submit detailed applications including mission, programs, financials, and community impact data."
    },
    {
      step: "02",
      title: "Due Diligence Review",
      description: "Our team conducts thorough background checks, reference verification, and financial analysis."
    },
    {
      step: "03",
      title: "Site Visit & Assessment",
      description: "On-ground evaluation by our volunteers or trusted local partners to verify operations and impact."
    },
    {
      step: "04",
      title: "Community Feedback",
      description: "We gather input from beneficiaries and community members about the organization's reputation and effectiveness."
    },
    {
      step: "05",
      title: "Committee Review",
      description: "Our selection committee evaluates all information and makes partnership decisions based on our criteria."
    },
    {
      step: "06",
      title: "Ongoing Monitoring",
      description: "Continuous evaluation and support to ensure sustained impact and partnership success."
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
              How We Select Organizations
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Every partnership we form is built on trust, transparency, and a shared commitment to creating lasting positive change. 
              Our rigorous selection process ensures your donations make the maximum possible impact."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selection Criteria */}
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
              Our Selection Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We evaluate potential partners against four key criteria to ensure alignment with our mission and values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {selectionCriteria.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <criteria.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{criteria.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{criteria.description}</p>
                    <ul className="space-y-2">
                      {criteria.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Selection Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive 6-step process ensures we partner with organizations that share our commitment to transparency and impact.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {selectionProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`flex items-center mb-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {process.step}
                  </div>
                </div>
                
                {index < selectionProcess.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-orange-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
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
              Selection by the Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Applications Reviewed", description: "Since 2008" },
              { number: "45", label: "Partner Organizations", description: "Currently active" },
              { number: "2", label: "Countries", description: "Across 2 continents" },
              { number: "98%", label: "Success Rate", description: "Of selected partnerships" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}