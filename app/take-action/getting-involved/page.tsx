'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function GettingInvolvedPage() {
  const volunteerOpportunities = [
    {
      icon: Heart,
      title: "Fundraising Events",
      description: "Help organize and run charity events, galas, and community fundraisers.",
      time: "5-10 hours/month",
      skills: "Event planning, communication, creativity"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Provide guidance and support to children in our educational programs via video calls.",
      time: "2-4 hours/week",
      skills: "Teaching, patience, cross-cultural communication"
    },
    {
      icon: Globe,
      title: "Project Coordination",
      description: "Work directly with our partner organizations to manage project implementation.",
      time: "10-15 hours/week",
      skills: "Project management, international experience"
    },
    {
      icon: Clock,
      title: "Administrative Support",
      description: "Help with data entry, research, grant writing, and general office tasks.",
      time: "Flexible",
      skills: "Organization, computer skills, attention to detail"
    }
  ];

  const membershipBenefits = [
    "Monthly updates on all active projects",
    "Exclusive access to member-only events",
    "Annual impact report with detailed outcomes",
    "Opportunity to vote on new project selections",
    "Direct communication with project beneficiaries",
    "Tax-deductible membership fee",
    "Networking with like-minded individuals",
    "Priority volunteer opportunities"
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
              Getting Involved
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "The greatest gift you can give is your time, your skills, and your heart. 
              Join us in creating lasting change that extends far beyond what any one person could achieve alone."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Help */}
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
              Ways You Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you have an hour a week or a few hours a month, there's a meaningful way for you to contribute.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <opportunity.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{opportunity.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="font-medium text-gray-900 w-20">Time:</span>
                        <span className="text-gray-600">{opportunity.time}</span>
                      </div>
                      <div className="flex items-start text-sm">
                        <span className="font-medium text-gray-900 w-20">Skills:</span>
                        <span className="text-gray-600">{opportunity.skills}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/take-action/forms">
              <Button size="lg" className="bg-orange-500 hover:bg-red-500 text-white">
                Apply to Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a Member
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Membership is more than just a title - it's a commitment to being part of our extended family. 
                Members receive exclusive updates, voting rights on project selections, and the satisfaction 
                of knowing they're part of something truly meaningful.
              </p>
              
              <div className="bg-white rounded-xl p-6 mb-8 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Membership Options:</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Individual Membership</span>
                    <span className="font-bold text-orange-600">$50/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Family Membership</span>
                    <span className="font-bold text-orange-600">$75/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Student Membership</span>
                    <span className="font-bold text-orange-600">$25/year</span>
                  </div>
                </div>
              </div>

              <Link href="/take-action/membership">
                <Button size="lg" className="bg-orange-500 hover:bg-red-500 text-white">
                  Join Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="serif text-2xl font-bold text-gray-900 mb-6">Member Benefits</h3>
                <ul className="space-y-4">
                  {membershipBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Whether you choose to volunteer, become a member, or simply spread the word about our mission, 
              every action you take helps us reach more children in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-50">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-50">
                  Make a Donation
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}