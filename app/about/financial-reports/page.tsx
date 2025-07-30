'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FileText, Download, TrendingUp, PieChart, BarChart3, DollarSign } from 'lucide-react';

export default function FinancialReportsPage() {
  const reports = [
    {
      year: "2023",
      title: "Annual Financial Report",
      description: "Complete audited financial statements including income, expenses, and impact metrics",
      type: "PDF",
      size: "3.2 MB",
      highlights: ["$2.1M total revenue", "98% program efficiency", "45 projects funded"]
    },
    {
      year: "2022", 
      title: "Annual Financial Report",
      description: "Comprehensive financial overview with detailed program expenditures and outcomes",
      type: "PDF",
      size: "2.8 MB",
      highlights: ["$1.8M total revenue", "97% program efficiency", "38 projects funded"]
    },
    {
      year: "2021",
      title: "Annual Financial Report", 
      description: "Financial statements covering pandemic response and adapted program delivery",
      type: "PDF",
      size: "2.5 MB",
      highlights: ["$1.5M total revenue", "96% program efficiency", "32 projects funded"]
    },
    {
      year: "2020",
      title: "Annual Financial Report",
      description: "Financial data including emergency response initiatives and program pivots",
      type: "PDF", 
      size: "2.3 MB",
      highlights: ["$1.2M total revenue", "95% program efficiency", "28 projects funded"]
    }
  ];

  const financialHighlights = [
    {
      icon: DollarSign,
      title: "Total Revenue 2023",
      amount: "$2.1M",
      change: "+17%",
      description: "Increased donor support"
    },
    {
      icon: PieChart,
      title: "Program Expenses",
      amount: "98%",
      change: "+1%",
      description: "Direct program funding"
    },
    {
      icon: TrendingUp,
      title: "Administrative Costs",
      amount: "2%",
      change: "-1%",
      description: "Operational efficiency"
    },
    {
      icon: BarChart3,
      title: "Projects Funded",
      amount: "45",
      change: "+7",
      description: "New initiatives launched"
    }
  ];

  const expenseBreakdown = [
    { category: "Education Programs", percentage: 45, amount: "$945,000", color: "bg-blue-500" },
    { category: "Healthcare Initiatives", percentage: 25, amount: "$525,000", color: "bg-green-500" },
    { category: "Water & Sanitation", percentage: 15, amount: "$315,000", color: "bg-orange-500" },
    { category: "Emergency Response", percentage: 8, amount: "$168,000", color: "bg-red-500" },
    { category: "Capacity Building", percentage: 5, amount: "$105,000", color: "bg-purple-500" },
    { category: "Administrative", percentage: 2, amount: "$42,000", color: "bg-gray-500" }
  ];

  const auditInfo = [
    {
      title: "Independent Auditor",
      value: "Johnson & Associates CPA",
      description: "Certified Public Accounting Firm"
    },
    {
      title: "Audit Opinion",
      value: "Unqualified (Clean)",
      description: "No material weaknesses found"
    },
    {
      title: "Compliance Rating",
      value: "100%",
      description: "All regulatory requirements met"
    },
    {
      title: "Transparency Score",
      value: "A+",
      description: "GuideStar Platinum Seal"
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
              Financial Reports
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              "Transparency builds trust. Our detailed financial reports show exactly how your donations 
              are used to create meaningful change in communities around the world."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
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
              2023 Financial Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest financial results demonstrate continued growth and exceptional efficiency in program delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {financialHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{highlight.amount}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{highlight.title}</div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-green-600 font-medium">{highlight.change}</span>
                  <span className="text-gray-600 text-sm">{highlight.description}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expense Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="serif text-2xl font-bold text-gray-900 mb-6 text-center">
              2023 Expense Breakdown
            </h3>
            <div className="space-y-4">
              {expenseBreakdown.map((expense, index) => (
                <motion.div
                  key={expense.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-32 text-sm font-medium text-gray-900">{expense.category}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full ${expense.color} transition-all duration-1000`}
                      style={{ width: `${expense.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-16 text-sm font-bold text-gray-900">{expense.percentage}%</div>
                  <div className="w-24 text-sm text-gray-600">{expense.amount}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Annual Reports */}
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
              Annual Financial Reports
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our complete audited financial statements for detailed insights into our financial health and program impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reports.map((report, index) => (
              <motion.div
                key={report.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{report.year}</h3>
                      <span className="text-sm text-gray-500">{report.type} • {report.size}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{report.title}</h4>
                    <p className="text-gray-600 mb-4">{report.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-gray-900 mb-2">Key Highlights:</h5>
                      <ul className="space-y-1">
                        {report.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Information */}
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
              Independent Audit Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our finances are independently audited annually to ensure accuracy, compliance, and transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {auditInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">{info.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{info.title}</div>
                <div className="text-sm text-gray-600">{info.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="serif text-4xl md:text-5xl font-bold mb-6">
              Donate with Complete Confidence
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              Our transparent financial reporting ensures you know exactly how your donation creates impact. 
              Join thousands of supporters who trust us with their charitable giving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://paypal.me/HHHOnline" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
                  Make a Donation
                  <DollarSign className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Our Finance Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}