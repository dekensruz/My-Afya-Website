import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      mission: 'Mission',
      features: 'Fonctionnalités',
      impact: 'Impact',
      roadmap: 'Roadmap',
      contact: 'Contact',
      webapp: 'App Web',
      accessWeb: "Accéder à l'App Web"
    },
    hero: {
      badge: "L'Hôpital Virtuel dans votre poche",
      titleStart: "Rapprocher les",
      titleColor1: "Soins",
      titleMiddle: ",",
      titleEnd: "Simplifier la",
      titleColor2: "Vie",
      description: "La réponse numérique et humaine aux défis sanitaires de la RDC. Des consultations sécurisées 24/7, partout, pour tous.",
      buttons: {
        android: "Android",
        ios: "iOS",
        web: "Accès WEB"
      },
      poweredBy: "Propulsé par LeoKongo",
      cards: {
        digital: {
          title: "100% Numérique",
          sub: "Sans file d'attente"
        },
        avail: {
          title: "Disponible 24/7",
          sub: "Consultation immédiate"
        },
        phone: {
            hello: "Bonjour, Dekens !",
            assist: "Votre assistant IA est prêt à vous aider."
        }
      }
    },
    mission: {
      kicker: "La Nécessité Nationale",
      title: "L'Urgence Sanitaire et l'Opportunité de la Télémédecine en RDC",
      desc: "De Kinshasa à Lubumbashi, de Goma à Bukavu et Matadi, nous brisons les barrières pour offrir un accès simplifié aux services de santé modernes.",
      problems: [
        {
          title: "Temps Perdu & Coûts Cachés",
          desc: "Files d'attente interminables, distances importantes et frais de transport onéreux rendent l'accès aux soins difficile."
        },
        {
          title: "Danger de l'Automédication",
          desc: "L'absence de professionnels qualifiés conduit souvent à l'automédication, avec des conséquences graves."
        },
        {
          title: "Confiance et Anonymat",
          desc: "La stigmatisation limite la recherche d'aide pour des sujets sensibles (santé mentale, sexuelle)."
        }
      ],
      map: {
        title: "Pour 95 millions de Congolais",
        desc: "Notre mission couvre l'ensemble du territoire congolais. Une innovation vitale pour chaque province."
      }
    },
    features: {
      title: "Votre Plateforme Médicale Optimisée",
      desc: "MyAfya intègre des fonctionnalités innovantes conçues spécifiquement pour répondre aux besoins uniques de tous les Congolais.",
      items: [
        {
          title: "Consultation Sécurisée 24/7",
          desc: "Communication par chat ou vocal avec anonymat garanti. Mise en relation intelligente avec le médecin approprié."
        },
        {
          title: "Prévention & Éducation",
          desc: "Des articles et actualités rédigés rigoureusement par des experts de santé pour une information fiable et locale."
        },
        {
          title: "Assistant IA Intelligent",
          desc: "Notre agent IA organise vos rendez-vous, vous assiste 24/7 et facilite votre parcours de soins."
        },
        {
          title: "Urgence Adaptée au Terrain",
          desc: "Bouton d'urgence intelligent analysant votre localisation pour coordonner la réponse la plus efficace."
        },
        {
          title: "Suivi Personnalisé",
          desc: "Historique médical complet accessible uniquement aux médecins agréés pour un diagnostic précis."
        },
        {
          title: "Données Protégées",
          desc: "Technologie de pointe assurant la confidentialité totale de vos échanges et dossiers médicaux."
        }
      ]
    },
    stats: {
      title: "Résultats des Tests",
      desc: "La preuve de notre viabilité et de l'impact réel dans nos communautés.",
      items: [
        { label: 'Satisfaction Utilisateurs', value: '95%', sub: 'Taux exceptionnel' },
        { label: 'Confidentialité Validée', value: '87%', sub: 'Confiance totale' },
        { label: 'Recommandation', value: '92%', sub: 'Utilisateurs prêts à recommander' },
      ]
    },
    roadmap: {
      title: "Perspectives d'Avenir",
      desc: "Une vision claire pour un impact continental.",
      steps: [
        { id: '01', title: 'Phase 1 : Goma & Bukavu', desc: 'Consolidation locale et partenariats clés.' },
        { id: '02', title: 'Phase 2 : Expansion Régionale', desc: 'Provinces voisines et assurance maladie.' },
        { id: '03', title: 'Phase 3 : Échelle Nationale', desc: 'Déploiement RDC et infrastructures.' },
        { id: '04', title: 'Vision : Impact Continental', desc: 'Extension vers d\'autres pays africains.' },
      ]
    },
    download: {
      title: "Prêt à simplifier votre santé ?",
      desc: "Rejoignez MyAfya aujourd'hui. Téléchargez l'application ou accédez directement à la version web optimisée.",
      note: "Compatible avec tous les appareils Android récents. Version Web optimisée pour iOS (iPhone/iPad).",
      buttons: {
        download: "Télécharger",
        online: "En ligne"
      }
    },
    footer: {
      desc: "Rapprocher les soins, simplifier la santé, améliorer la vie. Une initiative pour le Congo, par le Congo.",
      contact: "Contact",
      partners: "Partenaires",
      partnersDesc: "Vous êtes médecin, infirmier ou une organisation ? Rejoignez l'innovation.",
      becomePartner: "Devenir Partenaire",
      rights: "Tous droits réservés.",
      madeIn: "Fait avec fierté en RDC 🇨🇩"
    }
  },
  en: {
    nav: {
      home: 'Home',
      mission: 'Mission',
      features: 'Features',
      impact: 'Impact',
      roadmap: 'Roadmap',
      contact: 'Contact',
      webapp: 'Web App',
      accessWeb: "Access Web App"
    },
    hero: {
      badge: "The Virtual Hospital in your pocket",
      titleStart: "Bridging",
      titleColor1: "Healthcare",
      titleMiddle: ",",
      titleEnd: "Simplifying",
      titleColor2: "Life",
      description: "The digital and human response to health challenges in the DRC. Secure consultations 24/7, everywhere, for everyone.",
      buttons: {
        android: "Android",
        ios: "iOS",
        web: "Web Access"
      },
      poweredBy: "Powered by LeoKongo",
      cards: {
        digital: {
          title: "100% Digital",
          sub: "No waiting lines"
        },
        avail: {
          title: "Available 24/7",
          sub: "Immediate consultation"
        },
        phone: {
            hello: "Hello, Dekens!",
            assist: "Your AI assistant is ready to help."
        }
      }
    },
    mission: {
      kicker: "National Necessity",
      title: "Health Emergency and the Opportunity for Telemedicine in DRC",
      desc: "From Kinshasa to Lubumbashi, from Goma to Bukavu and Matadi, we are breaking barriers to offer simplified access to modern health services.",
      problems: [
        {
          title: "Lost Time & Hidden Costs",
          desc: "Endless queues, significant distances, and expensive transport costs make access to care difficult."
        },
        {
          title: "Danger of Self-Medication",
          desc: "The lack of qualified professionals often leads to self-medication, with serious consequences."
        },
        {
          title: "Trust and Anonymity",
          desc: "Stigma limits help-seeking for sensitive subjects (mental health, sexual health)."
        }
      ],
      map: {
        title: "For 95 million Congolese",
        desc: "Our mission covers the entire Congolese territory. A vital innovation for every province."
      }
    },
    features: {
      title: "Your Optimized Medical Platform",
      desc: "MyAfya integrates innovative features designed specifically to meet the unique needs of all Congolese people.",
      items: [
        {
          title: "Secure Consultation 24/7",
          desc: "Chat or voice communication with guaranteed anonymity. Intelligent matching with the appropriate doctor."
        },
        {
          title: "Prevention & Education",
          desc: "Articles and news rigorously written by health experts for reliable and local information."
        },
        {
          title: "Intelligent AI Assistant",
          desc: "Our AI agent organizes your appointments, assists you 24/7, and facilitates your care journey."
        },
        {
          title: "Emergency Adapted to Terrain",
          desc: "Intelligent emergency button analyzing your location to coordinate the most effective response."
        },
        {
          title: "Personalized Follow-up",
          desc: "Complete medical history accessible only to approved doctors for precise diagnosis."
        },
        {
          title: "Protected Data",
          desc: "Cutting-edge technology ensuring total confidentiality of your exchanges and medical records."
        }
      ]
    },
    stats: {
      title: "Test Results",
      desc: "Proof of our viability and real impact in our communities.",
      items: [
        { label: 'User Satisfaction', value: '95%', sub: 'Exceptional rate' },
        { label: 'Validated Privacy', value: '87%', sub: 'Total trust' },
        { label: 'Recommendation', value: '92%', sub: 'Users ready to recommend' },
      ]
    },
    roadmap: {
      title: "Future Perspectives",
      desc: "A clear vision for continental impact.",
      steps: [
        { id: '01', title: 'Phase 1: Goma & Bukavu', desc: 'Local consolidation and key partnerships.' },
        { id: '02', title: 'Phase 2: Regional Expansion', desc: 'Neighboring provinces and health insurance.' },
        { id: '03', title: 'Phase 3: National Scale', desc: 'DRC deployment and infrastructure.' },
        { id: '04', title: 'Vision: Continental Impact', desc: 'Extension to other African countries.' },
      ]
    },
    download: {
      title: "Ready to simplify your health?",
      desc: "Join MyAfya today. Download the app or access the optimized web version directly.",
      note: "Compatible with all recent Android devices. Web version optimized for iOS (iPhone/iPad).",
      buttons: {
        download: "Download",
        online: "Online"
      }
    },
    footer: {
      desc: "Bridging healthcare, simplifying health, improving lives. An initiative for the Congo, by the Congo.",
      contact: "Contact",
      partners: "Partners",
      partnersDesc: "Are you a doctor, nurse, or organization? Join the innovation.",
      becomePartner: "Become a Partner",
      rights: "All rights reserved.",
      madeIn: "Made with pride in DRC 🇨🇩"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
