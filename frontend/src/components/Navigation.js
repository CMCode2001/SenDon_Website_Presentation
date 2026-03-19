import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Droplet, Globe } from 'lucide-react';

const Navigation = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Droplet className="w-8 h-8 text-red-600 fill-red-600" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Droplet className="w-8 h-8 text-red-400 opacity-40" />
              </motion.div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              SenDon
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t.problem}
            </a>
            <a href="#solution" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t.solution}
            </a>
            <a href="#platform" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t.platform}
            </a>
            <a href="#ai" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t.ai}
            </a>
            <a href="#impact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              {t.impact}
            </a>
          </div>

          {/* Language Switcher */}
          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-red-100 border border-red-200 hover:border-red-300 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="w-4 h-4 text-red-600" />
            <span className="font-semibold text-red-800">
              {language === 'fr' ? 'EN' : 'FR'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
