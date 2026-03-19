import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Heart, Clock, Users, Building } from 'lucide-react';

const Impact = () => {
  const { language } = useLanguage();
  const t = translations[language].impact;

  const metrics = [
    { icon: Heart, label: t.metric1, value: 2500, suffix: '+', color: 'from-red-500 to-pink-500' },
    { icon: Clock, label: t.metric2, value: 12, suffix: ' min', color: 'from-orange-500 to-red-500' },
    { icon: Users, label: t.metric3, value: 15000, suffix: '+', color: 'from-red-500 to-rose-500' },
    { icon: Building, label: t.metric4, value: 45, suffix: '+', color: 'from-pink-500 to-red-500' }
  ];

  const AnimatedCounter = ({ end, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [end]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section id="impact" className="py-32 bg-gradient-to-br from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full filter blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full filter blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 text-center overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Icon */}
                <div className="relative mx-auto mb-6">
                  <motion.div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <metric.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Value */}
                <div className={`text-5xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent mb-3`}>
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <div className="text-gray-600 font-medium">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <blockquote className="text-2xl text-gray-700 text-center italic leading-relaxed">
              {language === 'en' 
                ? '"SenDon has transformed how we respond to blood emergencies. Lives are being saved faster than ever before."'
                : '"SenDon a transformé notre façon de répondre aux urgences sanguines. Des vies sont sauvées plus rapidement que jamais."'
              }
            </blockquote>
            <div className="mt-6 text-center">
              <div className="font-bold text-gray-900">Dr. Amadou Diop</div>
              <div className="text-gray-600">
                {language === 'en' ? 'Chief Medical Officer, Dakar Hospital' : 'Directeur Médical, Hôpital de Dakar'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
