'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Download, Calendar, Eye, ArrowRight, CheckCircle } from 'lucide-react';
import PdfIframeModal from '@/components/PdfIframeModal'; // Adjust path if needed

export default function NewslettersPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [pdfToView, setPdfToView] = useState<null | { url: string; title: string }>(null);

  const newsletters = [
    {
      title: "Hope in Action - December 2024",
      date: "December 15, 2024",
      description: "Year-end impact report featuring our Guatemala school completion, Kenya water project updates, and 2025 goals.",
      image: "https://images.pexels.com/photos/8363186/pexels-photo-8363186.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "Building Hope Academy officially opens",
        "Annual gala raises record $125,000",
        "2024 impact: 1,250+ children helped",
        "Preview of 2025 initiatives"
      ],
      size: "2.1 MB",
      url: "/reports/2020-2021.pdf"
    },
    {
      title: "Hope in Action - September 2024",
      date: "September 20, 2024",
      description: "Spotlight on our Kenya water project, volunteer stories, and upcoming fall events including our virtual project tour.",
      image: "https://images.pexels.com/photos/8363170/pexels-photo-8363170.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "3 new water wells completed in Kenya",
        "Volunteer spotlight: Maria's story",
        "Fall fundraising events announced",
        "Corporate partnership updates"
      ],
      size: "1.8 MB",
      url: "/newsletters/hope-in-action-sep-2024.pdf"
    },
    {
      title: "Hope in Action - June 2024",
      date: "June 10, 2024",
      description: "Summer edition featuring our Philippines digital learning centers, 5K run success, and student achievement stories.",
      image: "https://images.pexels.com/photos/8363183/pexels-photo-8363183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "Digital learning centers launch",
        "Community 5K raises $32,000",
        "Student success stories",
        "Summer volunteer opportunities"
      ],
      size: "1.9 MB",
      url: "/newsletters/hope-in-action-jun-2024.pdf"
    },
    {
      title: "Hope in Action - March 2024",
      date: "March 15, 2024",
      description: "Spring newsletter highlighting our India healthcare mobile units, corporate summit results, and member spotlights.",
      image: "https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "Mobile health units reach 800+ patients",
        "Corporate summit secures new partnerships",
        "Member spotlight series begins",
        "Spring project updates"
      ],
      size: "2.0 MB",
      url: "/newsletters/hope-in-action-mar-2024.pdf"
    },
    {
      title: "Hope in Action - December 2023",
      date: "December 20, 2023",
      description: "Year-end special edition with complete 2023 impact report, financial transparency update, and 2024 preview.",
      image: "https://images.pexels.com/photos/8363172/pexels-photo-8363172.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "2023 impact: 1,100+ children served",
        "Financial transparency report",
        "Award recognitions received",
        "2024 strategic goals unveiled"
      ],
      size: "2.3 MB",
      url: "/newsletters/hope-in-action-dec-2023.pdf"
    },
    {
      title: "Hope in Action - September 2023",
      date: "September 25, 2023",
      description: "Back-to-school edition featuring education program expansions, volunteer training updates, and fall event calendar.",
      image: "https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      highlights: [
        "Education programs expand to 2 new countries",
        "Volunteer training program launches",
        "Fall event calendar released",
        "Partnership milestone celebrations"
      ],
      size: "1.7 MB",
      url: "/newsletters/hope-in-action-sep-2023.pdf"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
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
              Newsletters
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Stay connected with our mission through our quarterly newsletter 'Hope in Action.' 
              Get exclusive updates on projects, impact stories, and ways to get involved."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Archive */}
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
              Newsletter Archive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our past newsletters to see the incredible journey of impact we've shared together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletters.map((newsletter, index) => (
              <motion.div
                key={newsletter.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                    {newsletter.size}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{newsletter.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{newsletter.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{newsletter.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">In This Issue:</h4>
                    <ul className="space-y-1">
                      {newsletter.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setPdfToView({ url: newsletter.url, title: newsletter.title })}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Read Online
                    </Button>
                    <a href={newsletter.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" variant="outline" className="border-gray-300 w-full">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PDF Modal */}
        {pdfToView && (
          <PdfIframeModal
            url={pdfToView.url}
            title={pdfToView.title}
            open={!!pdfToView}
            onClose={() => setPdfToView(null)}
          />
        )}
      </section>

      {/* Newsletter Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl font-bold text-gray-900 mb-12 text-center">
              What You'll Get in Every Issue
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "📊",
                  title: "Impact Updates",
                  description: "Detailed reports on project progress and outcomes"
                },
                {
                  icon: "👥",
                  title: "Success Stories",
                  description: "Inspiring stories from children and communities we support"
                },
                {
                  icon: "📅",
                  title: "Upcoming Events",
                  description: "First access to event announcements and registration"
                },
                {
                  icon: "🤝",
                  title: "Get Involved",
                  description: "Volunteer opportunities and ways to increase your impact"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
              Stay Connected to Our Mission
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Don't miss out on the latest updates from our projects around the world. 
              Subscribe today and be part of our community of changemakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                Subscribe Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                View Latest Issue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
