import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const Stats: React.FC = () => {
  const { t, language } = useLanguage();
  
  const stats = t.stats.items;

  return (
    <section id="stats" className="bg-gray-900 py-16 sm:py-24 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <motion.div 
              animate={{ 
                x: [0, 50, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-0 bg-brand-blue w-96 h-96 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2"
            />
            <motion.div 
              animate={{ 
                x: [0, -50, 0], 
                y: [0, 50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 bottom-0 bg-brand-teal w-96 h-96 rounded-full filter blur-[100px] transform -translate-x-1/2 translate-y-1/2"
            />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          key={`title-${language}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t.stats.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            {t.stats.desc}
          </p>
        </motion.div>
        
        <motion.div 
          key={`grid-${language}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center"
        >
          {stats.map((stat: any, index: number) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;