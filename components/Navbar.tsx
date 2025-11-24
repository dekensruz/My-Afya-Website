import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun, Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Logic: Default to Dark if no preference, or if preference is dark
    if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.mission, href: '#mission' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.impact, href: '#stats' },
    { label: t.nav.roadmap, href: '#roadmap' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2">
              <img src="https://i.ibb.co/0V6F3x5Q/MyAfya.png" alt="MyAfya Logo" className="h-10 w-auto" />
              <span className={`font-bold text-2xl tracking-tight hidden sm:block ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'}`}>MyAfya</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-gray-700 dark:text-gray-200'}`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-700 pl-4">
                <button 
                  onClick={toggleLanguage}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex items-center gap-1 text-xs font-bold"
                  aria-label="Switch Language"
                >
                  <Languages className="w-4 h-4" />
                  {language.toUpperCase()}
                </button>

                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>

            <a 
              href="http://myafya.leokongo.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-brand-blue to-brand-teal hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Globe className="w-4 h-4 mr-2" />
              {t.nav.webapp}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
             <button 
                  onClick={toggleLanguage}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 flex items-center gap-1 text-xs font-bold"
                >
                  {language.toUpperCase()}
            </button>
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-blue hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {item.label}
              </a>
            ))}
            <a
               href="http://myafya.leokongo.com/"
               target="_blank"
               rel="noreferrer"
               className="block w-full text-center mt-4 px-5 py-3 rounded-md font-medium text-white bg-brand-blue"
            >
              {t.nav.accessWeb}
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;