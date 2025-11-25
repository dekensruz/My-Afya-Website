import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, PhoneCall, FileText, Lock, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

const Features: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      title: t.features.items[0].title,
      description: t.features.items[0].desc,
      icon: MessageSquare
    },
    {
      title: t.features.items[1].title,
      description: t.features.items[1].desc,
      icon: BookOpen
    },
    {
      title: t.features.items[2].title,
      description: t.features.items[2].desc,
      icon: Bot
    },
    {
      title: t.features.items[3].title,
      description: t.features.items[3].desc,
      icon: PhoneCall
    },
    {
      title: t.features.items[4].title,
      description: t.features.items[4].desc,
      icon: FileText
    },
    {
      title: t.features.items[5].title,
      description: t.features.items[5].desc,
      icon: Lock
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            {t.features.desc}
          </p>
        </div>

        <motion.div 
          key={language}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-teal rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl h-full flex flex-col border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-brand-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;