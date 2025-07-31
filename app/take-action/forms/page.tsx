'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Users, Heart, Send, Download } from 'lucide-react';
import PdfIframeModal from '@/components/PdfIframeModal'; // Adjust the path accordingly

export default function FormsPage() {
  const [activeForm, setActiveForm] = useState('volunteer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    availability: '',
    experience: '',
    motivation: '',
    references: ''
  });

  // State for which PDF to show in modal
  const [pdfToView, setPdfToView] = useState<null | { url: string; name: string }>(null);

  const forms = [
    {
      id: 'volunteer',
      title: 'Volunteer Application',
      description: 'Join our team of dedicated volunteers making a difference worldwide',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      id: 'project',
      title: 'Project Proposal',
      description: 'Submit a project idea for our consideration and potential funding',
      icon: Heart,
      color: 'bg-orange-500'
    },
    {
      id: 'partnership',
      title: 'Partnership Application',
      description: 'Apply to become one of our trusted partner organizations',
      icon: FileText,
      color: 'bg-green-500'
    }
  ];

  // Added 'url' to each downloadable form (pointing to /public/forms/)
  const downloadableForms = [
    {
      name: 'Volunteer Background Check Form',
      description: 'Required for all volunteer positions involving direct contact',
      type: 'PDF',
      size: '245 KB',
      url: '/forms/volunteer-background-check-form.pdf'
    },
    {
      name: 'Corporate Matching Gift Form',
      description: "Help us process your employer's matching gift contribution",
      type: 'PDF',
      size: '180 KB',
      url: '/forms/corporate-matching-gift-form.pdf'
    },
    {
      name: 'Tax Deduction Receipt Template',
      description: 'Template for tracking your charitable contributions',
      type: 'PDF',
      size: '120 KB',
      url: '/forms/tax-deduction-receipt-template.pdf'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { type: activeForm, data: formData });
    // You can add real submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Forms & Applications
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Every great journey begins with a single step. Whether you want to volunteer, 
              propose a project, or partner with us, your application is the first step toward making a difference."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Selection */}
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
              Choose Your Application Type
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the form that best matches how you'd like to get involved with our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {forms.map((form, index) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer rounded-2xl p-6 text-center transition-all transform hover:-translate-y-1 ${
                  activeForm === form.id
                    ? 'bg-orange-500 text-white shadow-xl'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveForm(form.id)}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  activeForm === form.id ? 'bg-white/20' : form.color
                }`}>
                  <form.icon className={`h-6 w-6 ${activeForm === form.id ? 'text-white' : 'text-white'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${activeForm === form.id ? 'text-white' : 'text-gray-900'}`}>
                  {form.title}
                </h3>
                <p className={`${activeForm === form.id ? 'text-white/90' : 'text-gray-600'}`}>
                  {form.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Form */}
          <motion.div
            key={activeForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="serif text-2xl font-bold text-gray-900 mb-6">
              {forms.find(f => f.id === activeForm)?.title}
            </h3>

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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <Input
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    placeholder="e.g., Weekends, 10 hours/week"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                  Relevant Skills & Experience
                </label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your relevant skills, experience, and qualifications..."
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to get involved with HHH Online? *
                </label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Share your motivation and what you hope to contribute..."
                />
              </div>

              {activeForm === 'volunteer' && (
                <div>
                  <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                    References (Optional)
                  </label>
                  <Textarea
                    id="references"
                    name="references"
                    value={formData.references}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Please provide contact information for 2-3 references..."
                  />
                </div>
              )}

              <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Send className="mr-2 h-5 w-5" />
                Submit Application
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Forms */}
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
              Downloadable Forms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional forms and documents you may need for your involvement with HHH Online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {downloadableForms.map((form, index) => (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{form.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{form.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{form.type}</span>
                  <span className="text-sm text-gray-500">{form.size}</span>
                </div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setPdfToView({ url: form.url, name: form.name })}
                >
                  <Download className="mr-2 h-4 w-4" />
                  View / Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PDF Viewer Modal */}
        {pdfToView && (
          <PdfIframeModal
            url={pdfToView.url}
            title={pdfToView.name}
            open={!!pdfToView}
            onClose={() => setPdfToView(null)}
          />
        )}
      </section>
    </div>
  );
}
