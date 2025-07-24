'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Heart, Users, Globe, Clock } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('impact-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: Heart,
      value: 1250,
      label: 'Children Helped',
      suffix: '+',
      color: 'text-red-500'
    },
    {
      icon: Globe,
      value: 45,
      label: 'Projects Funded',
      suffix: '',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      value: 8500,
      label: 'Volunteer Hours',
      suffix: '+',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      value: 15,
      label: 'Years of Impact',
      suffix: '',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="impact-metrics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every number represents a life touched, a hope restored, and a future brightened. 
            Together, we're making a difference that extends far beyond what statistics can capture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-6 ${metric.color}`}>
                <metric.icon className="h-8 w-8" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {isVisible ? (
                  <CountUp
                    end={metric.value}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                  />
                ) : (
                  '0'
                )}
              </div>
              
              <div className="text-lg font-medium text-gray-700">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;