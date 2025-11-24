import React from 'react';
import { Mail, Heart, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <img src="https://i.ibb.co/0V6F3x5Q/MyAfya.png" alt="MyAfya" className="h-8" />
               <span className="text-2xl font-bold text-gray-900 dark:text-white">MyAfya</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              Rapprocher les soins, simplifier la santé, améliorer la vie. Une initiative pour le Congo, par le Congo.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://leokongo.com" target="_blank" rel="noreferrer">
                <img src="https://i.ibb.co/p6XDL2BW/LeoKongo.png" alt="LeoKongo" className="h-8 grayscale hover:grayscale-0 transition-all opacity-80" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-2 text-brand-blue" />
                <a href="mailto:info@leokongo.com" className="hover:text-brand-blue">info@leokongo.com</a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Globe className="h-5 w-5 mr-2 text-brand-blue" />
                <a href="https://leokongo.com" target="_blank" rel="noreferrer" className="hover:text-brand-blue">leokongo.com</a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Partenaires</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Vous êtes médecin, infirmier ou une organisation ? Rejoignez l'innovation.
            </p>
            <a href="mailto:info@leokongo.com" className="text-sm font-medium text-brand-blue hover:text-brand-teal flex items-center">
              Devenir Partenaire <Heart className="w-4 h-4 ml-1 fill-current" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} MyAfya. Powered by <a href="https://leokongo.com" className="text-brand-blue hover:underline">LeoKongo</a>. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-gray-400 text-sm">Fait avec fierté en RDC 🇨🇩</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;