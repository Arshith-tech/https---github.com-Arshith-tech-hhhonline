'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Quote, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function MemberStoriesPage() {
  const memberStories = [
    {
      name: "Jennifer Martinez",
      role: "HHH Member since 2018",
      location: "California, USA",
      image: "null",
      quote: "Being part of HHH has changed my perspective on giving. It's not just about donating money - it's about being part of a family that cares deeply about making real, lasting change in the world.",
      story: "Jennifer joined HHH after losing her job during the pandemic. Despite her own challenges, she wanted to help others and started with a small monthly donation. Today, she's one of our most active volunteers and has helped organize three major fundraising events.",
      impact: "Helped raise $25,000 through events"
    },
    {
      name: "David Kim",
      role: "Volunteer Coordinator & Member",
      location: "New York, USA",
      image: "null",
      quote: "Every time I visit the communities we support, I see the direct impact of our collective efforts. Children who were once struggling now have bright smiles and bigger dreams. It's incredibly humbling.",
      story: "David started as a member in 2019 and quickly became involved in our volunteer program. He's traveled to three countries to visit our projects and has become our go-to person for project coordination and volunteer training.",
      impact: "Coordinated 15+ volunteer trips"
    },
    {
      name: "Sarah Thompson",
      role: "Corporate Partnership Coordinator",
      location: "Texas, USA",
      image: "null",
      quote: "I convinced my company to start a corporate matching program with HHH. Seeing my colleagues get excited about our mission and knowing we're doubling our impact makes every day meaningful.",
      story: "Sarah joined HHH as an individual member but saw an opportunity to involve her workplace. She successfully pitched a corporate partnership that has resulted in over $50,000 in matched donations and 200+ employee volunteer hours.",
      impact: "Secured $50,000+ in corporate matching"
    },
    {
      name: "Michael Chen",
      role: "Monthly Donor & Mentor",
      location: "Washington, USA",
      image: "null",
      quote: "The mentorship program allows me to directly connect with the children we're helping. Seeing their progress and dreams unfold through our video calls is the highlight of my month.",
      story: "Michael, a retired teacher, joined HHH to continue making a difference in children's education. He mentors three students across different countries and has helped them improve their English and computer skills significantly.",
      impact: "Mentoring 3 students for 2+ years"
    },
    {
      name: "Lisa Rodriguez",
      role: "Event Organizer & Family Member",
      location: "Florida, USA",
      image: "null",
      quote: "HHH has become a family tradition. My children help me organize bake sales and car washes for fundraising. They're learning the joy of giving while making a real difference.",
      story: "Lisa joined with a family membership and has turned HHH involvement into a family activity. Her children, ages 8 and 12, have organized neighborhood fundraisers and learned about global citizenship through HHH projects.",
      impact: "Family raised $8,000 through community events"
    },
    {
      name: "Robert Johnson",
      role: "Legacy Member since 2010",
      location: "Oregon, USA",
      image: "null",
      quote: "I've watched HHH grow from a small group of passionate individuals to a global force for good. The consistency of impact and transparency has kept me committed for over a decade.",
      story: "Robert is one of our founding members and has witnessed HHH's evolution firsthand. He's contributed to every major project and serves on our advisory committee, helping guide strategic decisions and mentor new members.",
      impact: "13+ years of continuous support"
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
              Our HHH Member Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Our members are the heart of everything we do. Their stories of compassion, 
              dedication, and impact inspire us daily and show what's possible when caring people come together."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Member Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {memberStories.map((member, index) => (
              <motion.div
                key={member.name}
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
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    
                    {/* Impact Badge */}
                    <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg">
                      <div className="text-sm text-gray-600 mb-1">Impact</div>
                      <div className="font-bold text-gray-900">{member.impact}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-12 w-12 text-orange-500 mb-4" />
                    <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-6">
                      "{member.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      {member.location}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">{member.story}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Story Starts Here
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Every member story begins with a single decision to make a difference. 
              Join our community of compassionate individuals and start writing your own chapter of impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Start Small</h3>
                <p className="text-gray-600">Every journey begins with a single step. Join with any contribution level.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find Community</h3>
                <p className="text-gray-600">Connect with like-minded individuals who share your passion for helping others.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <Quote className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Create Impact</h3>
                <p className="text-gray-600">Watch your contributions transform lives and communities around the world.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/take-action/membership">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Start Your Impact
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}