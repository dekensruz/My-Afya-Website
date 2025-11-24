import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Activity, Apple, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden dark:bg-gray-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-sky-200 dark:bg-brand-blue/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-indigo-200 dark:bg-brand-teal/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-blue-300 text-sm font-semibold mb-6 border border-blue-100 dark:border-blue-800">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue mr-2 animate-pulse"></span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              {t.hero.titleStart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">{t.hero.titleColor1}</span>{t.hero.titleMiddle}<br />
              {t.hero.titleEnd} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-green-500">{t.hero.titleColor2}</span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="#download"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-2xl text-white bg-brand-blue hover:bg-sky-600 transition-all shadow-lg hover:shadow-brand-blue/30 transform hover:-translate-y-1 min-w-[140px]"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                {t.hero.buttons.android}
              </a>
              <a 
                href="http://myafya.leokongo.com/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-2xl text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-all shadow-lg transform hover:-translate-y-1 min-w-[140px]"
              >
                <Apple className="w-5 h-5 mr-2" />
                {t.hero.buttons.ios}
              </a>
              <a 
                href="http://myafya.leokongo.com/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border-2 border-gray-200 dark:border-gray-700 text-base font-medium rounded-2xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-brand-teal transition-all min-w-[140px]"
              >
                <Globe className="w-5 h-5 mr-2 text-brand-teal" />
                {t.hero.buttons.web}
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400">
              <img src="https://i.ibb.co/p6XDL2BW/LeoKongo.png" alt="LeoKongo" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all" />
              <span>{t.hero.poweredBy}</span>
            </div>
          </motion.div>

          {/* Visual Content / Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
             {/* Abstract Phone Representation */}
             <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden"
             >
                {/* Screen */}
                <div className="absolute inset-0 bg-white flex flex-col">
                  {/* Fake Header */}
                  <div className="h-14 bg-brand-blue w-full flex items-center justify-between px-4 text-white">
                     <span className="font-bold">MyAfya</span>
                     <div className="w-8 h-8 rounded-full bg-white/20"></div>
                  </div>
                  {/* Fake Content Area */}
                  <div className="flex-1 p-4 bg-gray-50 overflow-hidden relative">
                     <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-teal-50 rounded-xl mb-4 flex items-center justify-center">
                        <Activity className="text-brand-blue w-12 h-12" />
                     </div>
                     <div className="space-y-3">
                       <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                       <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                       <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-100 mt-4 p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 text-xs">Dr.</span>
                          </div>
                          <div className="flex-1">
                             <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                             <div className="h-2 bg-gray-100 rounded w-32"></div>
                          </div>
                       </div>
                       <div className="h-20 bg-white rounded-xl shadow-sm border border-gray-100 mt-2 p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 text-xs">Hôp.</span>
                          </div>
                          <div className="flex-1">
                             <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                             <div className="h-2 bg-gray-100 rounded w-28"></div>
                          </div>
                       </div>
                     </div>
                     
                     {/* Floating "Consultation" Notification */}
                     <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-10 left-4 right-4 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-teal z-20"
                     >
                       <p className="text-xs font-bold text-gray-800">{t.hero.cards.phone.hello}</p>
                       <p className="text-xs text-gray-500">{t.hero.cards.phone.assist}</p>
                     </motion.div>
                  </div>
                </div>
             </motion.div>
             
             {/* Decorative Elements around phone */}
             
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="absolute top-[60%] -left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hidden lg:block z-30"
             >
               <div className="flex items-center gap-3">
                 <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                   <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">{t.hero.cards.digital.title}</p>
                   <p className="text-xs text-gray-500 dark:text-gray-400">{t.hero.cards.digital.sub}</p>
                 </div>
               </div>
             </motion.div>

             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="absolute top-1/4 -right-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl hidden lg:block z-30"
             >
               <div className="flex items-center gap-3">
                 <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                   <Activity className="w-6 h-6 text-green-600 dark:text-green-400" />
                 </div>
                 <div>
                   <p className="font-bold text-gray-900 dark:text-white">{t.hero.cards.avail.title}</p>
                   <p className="text-xs text-gray-500 dark:text-gray-400">{t.hero.cards.avail.sub}</p>
                 </div>
               </div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;