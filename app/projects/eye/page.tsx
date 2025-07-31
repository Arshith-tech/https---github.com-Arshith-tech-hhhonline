'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, MapPin, Calendar, ArrowRight, CheckCircle, Eye } from 'lucide-react';

export default function EyePage() {
  const programs = [
    {
      title: "Pediatric Cataract Surgery",
      description: "Providing sight-saving cataract surgeries for children born with congenital cataracts or those who develop them early in life.",
      beneficiaries: "95+ children",
      location: "India & Bangladesh",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Vision Screening Programs",
      description: "Mobile eye clinics that visit remote schools and communities to identify children with vision problems early.",
      beneficiaries: "2,500+ children screened",
      location: "Kenya & Tanzania",
      image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Glasses & Vision Aids",
      description: "Providing prescription glasses, low-vision aids, and other assistive devices to help children see clearly and succeed in school.",
      beneficiaries: "450+ children",
      location: "Philippines & Guatemala",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  const conditions = [
    {
      name: "Congenital Cataracts",
      description: "Clouding of the lens present at birth, requiring urgent surgery",
      prevalence: "1 in 2,500 births"
    },
    {
      name: "Refractive Errors",
      description: "Nearsightedness, farsightedness, and astigmatism",
      prevalence: "25% of school children"
    },
    {
      name: "Amblyopia (Lazy Eye)",
      description: "Reduced vision in one eye due to abnormal visual development",
      prevalence: "2-3% of children"
    },
    {
      name: "Strabismus (Crossed Eyes)",
      description: "Misalignment of the eyes affecting depth perception",
      prevalence: "4% of children"
    }
  ];

  const impactStats = [
    { number: "3,045+", label: "Children Helped", description: "Vision restored or improved" },
    { number: "98%", label: "Surgery Success Rate", description: "For cataract operations" },
    { number: "22", label: "Eye Care Centers", description: "Across 8 countries" },
    { number: "$290K", label: "Annual Investment", description: "In eye care programs" }
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
              Eye Care & Vision Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Sight is the window to learning and opportunity. Our eye care programs provide surgeries, 
              screenings, and vision aids to ensure no child's future is limited by preventable blindness or vision problems."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50"
              >
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-20 blue-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-6">
              Conditions We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common eye conditions that affect children's vision and learning ability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{condition.name}</h3>
                    <p className="text-gray-700 mb-3 leading-relaxed">{condition.description}</p>
                    <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      Affects {condition.prevalence}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
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
              Our Eye Care Programs
            </h2>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h3 className="serif text-3xl font-bold text-gray-900">{program.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{program.beneficiaries}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{program.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Success story"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div>
                  <blockquote className="text-lg italic text-gray-800 mb-6">
                    "Priya was born with cataracts in both eyes and couldn't see anything beyond shadows. The HHH eye program 
                    funded her surgery when she was 6 months old. Today, at age 8, she's at the top of her class and wants 
                    to become a teacher. The gift of sight gave her the gift of a future."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                      alt="Sunita Sharma"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">Sunita Sharma</div>
                      <div className="text-gray-600">Mother of Priya, age 8</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Give the Gift of Sight
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              For just $150, you can fund a sight-saving cataract surgery for a child. Your donation opens up 
              a world of learning, opportunity, and hope for children who would otherwise live in darkness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-50">
                  Fund Eye Surgery
                  <Eye className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                Learn About Vision Screening
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}