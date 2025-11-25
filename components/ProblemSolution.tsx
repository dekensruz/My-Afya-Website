import React from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ProblemSolution: React.FC = () => {
  const { t, language } = useLanguage();

  const problems = [
    {
      icon: Clock,
      title: t.mission.problems[0].title,
      desc: t.mission.problems[0].desc
    },
    {
      icon: AlertTriangle,
      title: t.mission.problems[1].title,
      desc: t.mission.problems[1].desc
    },
    {
      icon: ShieldCheck,
      title: t.mission.problems[2].title,
      desc: t.mission.problems[2].desc
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-2">{t.mission.kicker}</h2>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t.mission.title}
          </h3>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {t.mission.desc}
          </p>
        </div>

        {/* Cards */}
        <motion.div 
          key={language}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {problems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-brand-blue" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Map Representation (Simplified CSS) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 relative bg-brand-blue rounded-3xl overflow-hidden p-8 sm:p-12 text-center text-white"
        >
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{t.mission.map.title}</h3>
                <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                    {t.mission.map.desc}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur text-sm border border-white/20">Kinshasa</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur text-sm border border-white/20">Lubumbashi</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur text-sm border border-white/20">Goma</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur text-sm border border-white/20">Bukavu</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur text-sm border border-white/20">Matadi</span>
                </div>
            </div>
            {/* Abstract geometric shapes to represent map texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse animation-delay-1000"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSolution;