'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, Star, Trophy, Medal, Shield, Globe, ArrowRight } from 'lucide-react';

export default function AwardsPage() {
  const router = useRouter();

  const awards = [
    {
      year: "2024",
      title: "Outstanding Humanitarian Service Award",
      organization: "International Charity Foundation",
      description: "Recognized for exceptional impact in global child welfare and education initiatives, demonstrating sustained commitment to improving lives across multiple countries.",
      icon: Trophy,
      color: "bg-yellow-500",
      image: "null"
    },
    {
      year: "2023",
      title: "Excellence in Community Development",
      organization: "Global Development Council",
      description: "Honored for sustainable community development programs that have created lasting positive change in rural and underserved communities worldwide.",
      icon: Medal,
      color: "bg-blue-500",
      image: "null"
    },
    {
      year: "2022",
      title: "Top Rated Charity - 4 Stars",
      organization: "Charity Navigator",
      description: "Consistently rated as a 4-star charity for financial transparency, accountability, and impact measurement. Maintained this rating for 4 consecutive years.",
      icon: Star,
      color: "bg-green-500",
      image: "null"
    },
    {
      year: "2021",
      title: "Innovation in Education Award",
      organization: "UNESCO Partnership Program",
      description: "Recognized for innovative approaches to education in underserved communities, particularly for digital learning initiatives during the COVID-19 pandemic.",
      icon: Award,
      color: "bg-purple-500",
      image: "null"
    },
    {
      year: "2020",
      title: "Transparency Excellence Award",
      organization: "GuideStar Platinum Seal",
      description: "Achieved the highest level of transparency recognition for comprehensive disclosure of organizational information and impact data.",
      icon: Shield,
      color: "bg-indigo-500",
      image: "null"
    },
    {
      year: "2019",
      title: "Global Impact Recognition",
      organization: "World Humanitarian Summit",
      description: "Acknowledged for significant contributions to international humanitarian efforts and cross-cultural collaboration in development work.",
      icon: Globe,
      color: "bg-red-500",
      image: "null"
    }
  ];


  const recognitions = [
    {
      title: "Better Business Bureau Accredited",
      description: "Meets all 20 standards for charity accountability",
      year: "Since 2015"
    },
    {
      title: "IRS 501(c)(3) Status",
      description: "Recognized tax-exempt charitable organization",
      year: "Since 2008"
    },
    {
      title: "State Registration",
      description: "Registered in all 50 states for fundraising",
      year: "Current"
    },
    {
      title: "Annual Independent Audit",
      description: "Clean audit opinions for 10+ consecutive years",
      year: "Ongoing"
    }
  ];


  const trustMetrics = [
    { metric: "98%", label: "Program Expense Ratio", description: "Funds going directly to programs" },
    { metric: "4.8/5", label: "Donor Satisfaction", description: "Average rating from supporters" },
    { metric: "15+", label: "Years of Service", description: "Consistent track record" },
    { metric: "100%", label: "Financial Transparency", description: "Open book policy" }
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
              Awards & Recognition
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Recognition is not our goal—impact is. But we're honored when our commitment to transparency, 
              accountability, and meaningful change is acknowledged by respected organizations worldwide."
            </p>
          </motion.div>
        </div>
      </section>


      {/* Awards Timeline */}
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
              Our Award History
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each award represents not just recognition, but validation of our commitment to excellence and transparency in humanitarian work.
            </p>
          </motion.div>


          <div className="space-y-16">
            {awards.map((award, index) => (
              <motion.div
                key={award.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Year Badge */}
                    <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-lg">
                      <div className="text-2xl font-bold text-gray-900">{award.year}</div>
                    </div>
                  </div>
                </div>


                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                    {award.organization}
                  </div>
                  
                  <h3 className="serif text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {award.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {award.description}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${award.color} rounded-full flex items-center justify-center`}>
                      <award.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Awarded {award.year}</div>
                      <div className="text-gray-600">{award.organization}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust Metrics */}
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
              Why Donors Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our awards reflect measurable achievements in transparency, efficiency, and impact.
            </p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </motion.div>
            ))}
          </div>


          {/* Additional Recognitions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="serif text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Certifications & Recognitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recognitions.map((recognition, index) => (
                <motion.div
                  key={recognition.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{recognition.title}</h4>
                    <p className="text-gray-600 text-sm mb-1">{recognition.description}</p>
                    <p className="text-green-600 text-sm font-medium">{recognition.year}</p>
                  </div>
                </motion.div>
              ))}
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
              Join Our Award-Winning Mission
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              When you support HHH Online, you're partnering with an organization recognized for excellence, 
              transparency, and meaningful impact. Your donation will be handled with the highest standards of accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  Donate with Confidence
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => router.push('/about/financial-reports')}
              >
                View Financial Reports
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
