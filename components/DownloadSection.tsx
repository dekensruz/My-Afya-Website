import React from 'react';
import { Download, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Prêt à simplifier votre santé ?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Rejoignez MyAfya aujourd'hui. L'application est disponible en téléchargement direct (APK) et via notre application web accessible partout.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            {/* Download Button with Pulse */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => alert("Le téléchargement de l'APK démarrera bientôt !")}
              className="relative flex items-center justify-center px-8 py-4 bg-white text-brand-blue rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors"
            >
              <span className="absolute -inset-1 rounded-xl bg-white opacity-30 animate-pulse"></span>
              <Download className="w-6 h-6 mr-3 relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-xs uppercase tracking-wide text-gray-500">Télécharger pour</div>
                <div className="text-lg">Android (APK)</div>
              </div>
            </motion.button>

            <motion.a 
              href="http://myafya.leokongo.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 bg-brand-teal text-white rounded-xl font-bold shadow-lg hover:bg-teal-500 transition-colors"
            >
              <Globe className="w-6 h-6 mr-3" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide text-teal-100">Accéder en ligne</div>
                <div className="text-lg">Application Web</div>
              </div>
            </motion.a>
          </div>

          <p className="mt-8 text-sm text-blue-200 opacity-80 relative z-10">
            Compatible avec tous les appareils Android récents. Version Web compatible iOS et Desktop.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;