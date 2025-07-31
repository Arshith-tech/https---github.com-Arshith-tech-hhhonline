'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Shield, DollarSign, Users, Scale } from 'lucide-react';
import PdfIframeModal from '@/components/PdfIframeModal'; // Adjust the path if needed

export default function BylawsPage() {
  // Add URL keys for PDFs (pointing to your /public/bylaws folder files)
  const documents = [
    {
      title: "Organizational Bylaws",
      description: "Complete governance structure, board responsibilities",
      type: "PDF",
      size: "2.1 MB",
      lastUpdated: "January 2024",
      icon: FileText,
      url: "/bylaws/organizational-bylaws.pdf"
    },
    {
      title: "Disbursement Guidelines",
      description: "Detailed criteria and procedures for fund allocation and project approval",
      type: "PDF",
      size: "1.8 MB",
      lastUpdated: "March 2024",
      icon: DollarSign,
      url: "/bylaws/disbursement-guidelines.pdf"
    },
    {
      title: "Code of Ethics",
      description: "Ethical standards and conduct expectations for all members",
      type: "PDF",
      size: "950 KB",
      lastUpdated: "February 2024",
      icon: Shield,
      url: "/bylaws/code-of-ethics.pdf"
    },
    {
      title: "Conflict of Interest Policy",
      description: "Guidelines for identifying and managing potential conflicts of interest",
      type: "PDF",
      size: "720 KB",
      lastUpdated: "January 2024",
      icon: Scale,
      url: "/bylaws/conflict-of-interest-policy.pdf"
    }
  ];

  const keyPrinciples = [
    {
      icon: Shield,
      title: "Transparency",
      description: "All financial records, decisions, and operations are open to member and public scrutiny."
    },
    {
      icon: DollarSign,
      title: "Fiscal Responsibility",
      description: "98% of donations go directly to programs, with minimal administrative overhead."
    },
    {
      icon: Users,
      title: "Democratic Governance",
      description: "Members have voting rights on major decisions and board elections."
    },
    {
      icon: Scale,
      title: "Ethical Standards",
      description: "All activities conducted with highest ethical standards and legal compliance."
    }
  ];

  const disbursementCriteria = [
    {
      category: "Project Evaluation",
      criteria: [
        "Clear, measurable objectives and outcomes",
        "Sustainable impact on target community",
        "Local community involvement and support",
        "Alignment with HHH mission and values",
        "Realistic timeline and budget"
      ]
    },
    {
      category: "Partner Organization",
      criteria: [
        "Proven track record of successful projects",
        "Financial transparency and accountability",
        "Local leadership and community connections",
        "Proper legal registration and compliance",
        "Regular reporting and communication"
      ]
    },
    {
      category: "Financial Requirements",
      criteria: [
        "Detailed budget breakdown and justification",
        "Multiple funding sources when possible",
        "Regular financial reporting requirements",
        "Audit trail for all expenditures",
        "Maximum 10% administrative costs"
      ]
    }
  ];

  // State to track which PDF is open in the modal
  const [pdfToView, setPdfToView] = useState<null | typeof documents[number]>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5}}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bylaws & Disbursement Guidelines
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Transparency and accountability are the foundation of trust. Our bylaws and guidelines ensure 
              every decision we make serves our mission and honors the faith our supporters place in us."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Principles */}
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
              Our Governing Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide every aspect of our operations and decision-making processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <principle.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Downloads (Updated to View PDF) */}
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
              Official Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our complete governance documents to understand our organizational structure and operational guidelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <doc.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4">{doc.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{doc.type} • {doc.size}</span>
                      <span>Updated: {doc.lastUpdated}</span>
                    </div>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setPdfToView(doc)}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View PDF
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accountability Statement */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              We pledge to operate with complete transparency, fiscal responsibility, and unwavering commitment to our mission. 
              Your trust is sacred to us, and we honor it through rigorous accountability in everything we do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { number: "98%", label: "Program Funding", description: "Of donations go directly to programs" },
                { number: "100%", label: "Transparency", description: "All records available for review" },
                { number: "15+", label: "Years Trusted", description: "Consistent ethical operations" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-200 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Modal */}
      {pdfToView && (
        <PdfIframeModal
          url={pdfToView.url}
          title={pdfToView.title}
          open={!!pdfToView}
          onClose={() => setPdfToView(null)}
        />
      )}
    </div>
  );
}
