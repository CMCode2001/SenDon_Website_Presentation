import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { MapPin, Globe2, Rocket } from 'lucide-react';

const Vision = () => {
  const { language } = useLanguage();
  const t = translations[language].vision;

  const phases = [
    { icon: MapPin, title: t.phase1, desc: t.phase1Desc, color: 'from-red-500 to-orange-500', position: 'left' },
    { icon: Globe2, title: t.phase2, desc: t.phase2Desc, color: 'from-orange-500 to-amber-500', position: 'center' },
    { icon: Rocket, title: t.phase3, desc: t.phase3Desc, color: 'from-amber-500 to-red-500', position: 'right' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200" />

          <div className="grid md:grid-cols-3 gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <phase.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>

                  {/* Phase Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Arrow (Desktop) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-1/3 -right-6 transform -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="w-8 h-8 border-t-4 border-r-4 border-red-400 transform rotate-45" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-red-500/50 transition-all"
          >
            {language === 'en' ? 'Join Our Mission' : 'Rejoignez Notre Mission'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
