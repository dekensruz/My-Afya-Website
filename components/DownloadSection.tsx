import React from 'react';
import { Download, Globe, Smartphone, Apple } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const DownloadSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 text-center relative"
        >
          
          {/* Decorative Circles - Animated */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"
          />

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 relative z-10">
            {t.download.title}
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            {t.download.desc}
          </p>

          <div className="flex flex-wrap gap-6 justify-center relative z-10">
            {/* Android Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Le téléchargement de l'APK démarrera bientôt !")}
              className="flex items-center justify-center px-8 py-4 bg-white text-brand-blue rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors min-w-[200px]"
            >
              <Smartphone className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide text-gray-500">{t.download.buttons.download}</div>
                <div className="text-lg">Android</div>
              </div>
            </motion.button>

             {/* iOS Button */}
            <motion.a 
              href="http://myafya.leokongo.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:bg-gray-800 transition-colors min-w-[200px]"
            >
              <Apple className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide text-gray-400">PWA / Web</div>
                <div className="text-lg">iOS</div>
              </div>
            </motion.a>

            {/* Web Button */}
            <motion.a 
              href="http://myafya.leokongo.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 bg-brand-teal text-white rounded-xl font-bold shadow-lg hover:bg-teal-500 transition-colors min-w-[200px]"
            >
              <Globe className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide text-teal-100">{t.download.buttons.online}</div>
                <div className="text-lg">{t.hero.buttons.web}</div>
              </div>
            </motion.a>
          </div>

          <p className="mt-8 text-sm text-blue-200 opacity-80 relative z-10">
            {t.download.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;