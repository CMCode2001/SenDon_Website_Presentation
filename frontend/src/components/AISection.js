import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Brain, TrendingUp, Zap, AlertCircle } from 'lucide-react';

const AISection = () => {
  const { language } = useLanguage();
  const t = translations[language].ai;

  const features = [
    { icon: TrendingUp, title: t.feature1, desc: t.feature1Desc, color: 'from-purple-500 to-indigo-500' },
    { icon: AlertCircle, title: t.feature2, desc: t.feature2Desc, color: 'from-indigo-500 to-blue-500' },
    { icon: Zap, title: t.feature3, desc: t.feature3Desc, color: 'from-blue-500 to-cyan-500' },
    { icon: Brain, title: t.feature4, desc: t.feature4Desc, color: 'from-cyan-500 to-teal-500' }
  ];

  return (
    <section id="ai" className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6"
            animate={{ boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(139, 92, 246, 0.3)', '0 0 20px rgba(59, 130, 246, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold">
              {language === 'en' ? 'Powered by AI' : 'Propulsé par l\'IA'}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity`} />

                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 shadow-lg`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Element - Data Visualization Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: language === 'en' ? 'Prediction Accuracy' : 'Précision de Prédiction', value: '94%' },
              { label: language === 'en' ? 'Early Detection' : 'Détection Précoce', value: '21 days' },
              { label: language === 'en' ? 'Resource Optimization' : 'Optimisation', value: '40%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
