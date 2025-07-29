'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WhoWeArePage() {
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
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We are not just an organization – we are a family united by love, 
              driven by compassion, and committed to creating lasting change in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="serif text-4xl font-bold text-gray-900 mb-6">
                Our Beginning
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                 Heart and Hand for the Handicapped (HHH) is a not-for-profit tax-exempt 501(c) (3) organization that raises funds to support differently able children with physical and mental challenges such as polio, cerebral palsy, autism, Down's syndrome and blindness and other vision problems in India and the US. HHH was founded in 1971 by five South Asian ladies who wanted to make a difference in the lives of differently able children in India.
                </p>
                <p>
                  The organization is run by volunteers who lend their expertise in different areas. We are an organization that serves the ideal of philanthropy and adhere to the highest standard of professional practice, treating everyone with respect and dignity.
                </p>
                <p>
                  Over the years, funds have been donated to numerous organizations in India and the United States. Organizations that receive our grants must meet or exceed our rigorous standard for qualification and align with our mission. We raise funds through annual dinners, walk-a-thons, direct mail solicitations, United Way, and corporate matching programs. We also accept donations of stocks and bonds.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="p"
                alt="Children and volunteers together"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Vertically Stacked, Aligned, Wider, Longer Lines */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col max-w-5xl mx-auto"
          >
            {/* Mission -- more left, longer line */}
            <div className="text-left mb-16" style={{ maxWidth: '80%' }}>
              <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic border-l-4 border-orange-500 pl-6">
                "We will continue to conduct ourselves with the highest ethical and moral standards and prove worthy of your trust."
              </blockquote>
            </div>
            {/* Vision -- more right, longer line */}
            <div className="text-right ml-auto" style={{ maxWidth: '80%' }}>
              <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Our Vision
              </h2>
              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic border-r-4 border-orange-500 pr-6 text-right">
                "We want to become a premier organization in the US supporting at least one organization in every state in the US and India."
              </blockquote>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/our-story/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                See Our Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="donate-gradient text-white">
                Support Our Mission
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
