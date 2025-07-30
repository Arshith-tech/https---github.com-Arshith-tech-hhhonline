'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Heart, Users, Globe } from 'lucide-react';

export default function TeamPage() {
  const leadership = [
    {
      name: "Sarah vinay",
      role: "Founder & President",
      bio: "Sarah founded HHH Online in 2008 after a life-changing volunteer experience in Guatemala. With over 15 years in nonprofit management, she leads our organization with passion and vision.",
      image: "null",
      email: "sarah@hhhonline.org",
      linkedin: "#",
      achievements: ["15+ years nonprofit leadership", "Founded 3 successful programs", "Fluent in Spanish and English"]
    },
    {
      name: "Michael Chen",
      role: "Vice President & Operations Director",
      bio: "Michael brings 12 years of international development experience to HHH Online. He oversees our project implementation and partner relationships worldwide.",
      image: "null",
      email: "michael@hhhonline.org",
      linkedin: "#",
      achievements: ["MBA in International Business", "Managed $2M+ in projects", "Speaks 4 languages"]
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Program Director",
      bio: "Dr. Rodriguez leads our educational initiatives with expertise in child development and international education. She ensures our programs meet the highest standards.",
      image: "null",
      email: "maria@hhhonline.org",
      linkedin: "#",
      achievements: ["PhD in Education", "20+ years teaching experience", "Published researcher"]
    }
  ];

  const boardMembers = [
    {
      name: "David Kim",
      role: "Board Chair",
      profession: "Technology Executive",
      image: "null",
      tenure: "5 years"
    },
    {
      name: "Jennifer Martinez",
      role: "Treasurer",
      profession: "Financial Advisor",
      image: "null",
      tenure: "4 years"
    },
    {
      name: "Robert Johnson",
      role: "Secretary",
      profession: "Legal Counsel",
      image: "null",
      tenure: "6 years"
    },
    {
      name: "Lisa Thompson",
      role: "Board Member",
      profession: "Healthcare Administrator",
      image: "null",
      tenure: "3 years"
    },
    {
      name: "James Wilson",
      role: "Board Member",
      profession: "Education Consultant",
      image: "null",
      tenure: "2 years"
    },
    {
      name: "Amanda Davis",
      role: "Board Member",
      profession: "Marketing Director",
      image: "null",
      tenure: "1 year"
    }
  ];

  const stats = [
    { icon: Users, number: "15", label: "Team Members", description: "Dedicated staff and volunteers" },
    { icon: Globe, number: "12", label: "Countries", description: "Where our team has worked" },
    { icon: Heart, number: "50+", label: "Years Combined", description: "Experience in nonprofit work" }
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Behind every successful mission is a team of passionate individuals who believe in the power of 
              collective action. Meet the people who make our work possible."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of nonprofit, international development, and business expertise.
            </p>
          </motion.div>

          <div className="space-y-16">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-xl text-orange-600 font-semibold mb-4">{leader.role}</p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">{leader.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
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
              Board of Directors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our volunteer board provides strategic guidance and governance oversight to ensure we fulfill our mission effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {member.tenure}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.profession}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}