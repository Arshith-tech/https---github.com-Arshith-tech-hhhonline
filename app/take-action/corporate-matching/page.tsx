'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Building, DollarSign, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export default function CorporateMatchingPage() {
  const [searchCompany, setSearchCompany] = useState('');
  
  const benefits = [
    {
      icon: DollarSign,
      title: "Double Your Impact",
      description: "Many companies match employee donations 1:1, effectively doubling your contribution to our cause."
    },
    {
      icon: TrendingUp,
      title: "Increase Giving Capacity",
      description: "Corporate matching allows you to give more without increasing your personal financial commitment."
    },
    {
      icon: Users,
      title: "Engage Your Workplace",
      description: "Introduce your colleagues to our mission and build a culture of giving at your company."
    },
    {
      icon: Building,
      title: "Corporate Recognition",
      description: "Your company receives recognition for their charitable contributions and community involvement."
    }
  ];

  const steps = [
    {
      step: "1",
      title: "Make Your Donation",
      description: "Donate to HHH Online through our secure PayPal link or other donation methods."
    },
    {
      step: "2",
      title: "Check Company Policy",
      description: "Verify your employer's matching gift policy and eligibility requirements."
    },
    {
      step: "3",
      title: "Submit Match Request",
      description: "Complete your company's matching gift form with our organization details."
    },
    {
      step: "4",
      title: "We Handle the Rest",
      description: "We'll work with your company to process the matching contribution."
    }
  ];

  const majorEmployers = [
    "Microsoft", "Google", "Apple", "Amazon", "Facebook", "IBM", "Intel", "Cisco",
    "Oracle", "Salesforce", "Adobe", "Netflix", "Tesla", "Uber", "Airbnb", "Twitter",
    "LinkedIn", "PayPal", "eBay", "Zoom", "Slack", "Dropbox", "Spotify", "Pinterest"
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
              Corporate Matching Gifts
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Double your impact without doubling your cost. Many employers will match your charitable 
              donations, allowing you to make an even greater difference in the lives of children worldwide."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Corporate Matching Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Corporate matching programs are a powerful way to amplify your charitable giving and engage your workplace in our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              How Corporate Matching Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your donation matched is easier than you might think. Follow these simple steps.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-orange-200 mt-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-8 text-center">
              Organization Information for Matching Forms
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Organization Name</h3>
                  <p className="text-gray-700 mb-6">Helping Hands for Humanity Online (HHH Online)</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tax ID Number</h3>
                  <p className="text-gray-700 mb-6">XX-XXXXXXX</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Organization Type</h3>
                  <p className="text-gray-700">501(c)(3) Non-Profit Organization</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Mailing Address</h3>
                  <p className="text-gray-700 mb-6">
                    123 Helping Hands Avenue<br />
                    Community Center Building<br />
                    Los Angeles, CA 90210<br />
                    United States
                  </p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  <p className="text-gray-700">
                    Email: info@hhhonline.org<br />
                    Phone: (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Double Your Impact?
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Start by making your donation today, then follow up with your company's matching gift program. 
              Together, we can make your generosity go twice as far.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-50">
                Contact Us for Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}