'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { CheckCircle, Heart, Users, Globe, Star, ArrowRight } from 'lucide-react';

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState('individual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    membershipType: 'individual'
  });

  const membershipPlans = [
    {
      id: 'student',
      name: 'Student Membership',
      price: '$25',
      period: 'per year',
      description: 'Perfect for students who want to make a difference',
      features: [
        'Monthly project updates',
        'Access to member events',
        'Student volunteer opportunities',
        'Annual impact report',
        'Member newsletter'
      ],
      icon: Star,
      color: 'bg-green-500'
    },
    {
      id: 'individual',
      name: 'Individual Membership',
      price: '$50',
      period: 'per year',
      description: 'For individuals committed to our mission',
      features: [
        'All student benefits',
        'Voting rights on projects',
        'Exclusive member webinars',
        'Direct project communication',
        'Priority volunteer placement',
        'Tax-deductible membership'
      ],
      icon: Heart,
      color: 'bg-orange-500',
      popular: true
    },
    {
      id: 'family',
      name: 'Family Membership',
      price: '$75',
      period: 'per year',
      description: 'Bring your whole family into our community',
      features: [
        'All individual benefits',
        'Family volunteer opportunities',
        'Children\'s activity materials',
        'Family event invitations',
        'Multiple voting rights',
        'Family impact stories'
      ],
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'corporate',
      name: 'Corporate Membership',
      price: '$500',
      period: 'per year',
      description: 'For businesses wanting to make an impact',
      features: [
        'All family benefits',
        'Corporate recognition',
        'Employee volunteer programs',
        'CSR reporting support',
        'Custom partnership opportunities',
        'Executive board access'
      ],
      icon: Globe,
      color: 'bg-purple-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle membership signup
    console.log('Membership signup:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
              Become a Member
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Membership is more than support—it's belonging to a family united by compassion, 
              committed to changing lives, and dedicated to creating a better world for children everywhere."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Plans */}
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
              Choose Your Membership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every membership level makes a difference. Choose the option that works best for you and your family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 ${
                  plan.popular ? 'ring-4 ring-orange-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${plan.color} rounded-full mb-6`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      selectedPlan === plan.id
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="serif text-3xl font-bold text-gray-900 mb-6 text-center">
                Complete Your Membership
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your mailing address"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Selected Membership:</h3>
                  <p className="text-gray-700">
                    {membershipPlans.find(plan => plan.id === selectedPlan)?.name} - 
                    {membershipPlans.find(plan => plan.id === selectedPlan)?.price} per year
                  </p>
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Complete Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}