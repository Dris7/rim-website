import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Check, ArrowRight, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Star, Users, Heart, Target, Clock, MessageCircle, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';

// Header Component
const Header = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#3D5919] playfair-display">Dt. Rim Ajibe</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#accueil" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors montserrat-medium">Accueil</a>
          <a href="#services" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors montserrat-medium">Services</a>
          <a href="#qui-suis-je" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors montserrat-medium">Qui suis-je ?</a>
          <a href="#ressources" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors montserrat-medium">Ressources</a>
          <a href="#blog" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors montserrat-medium">Blog</a>
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-6 py-2 rounded-full hover:bg-[#2A3F0F] transition-colors montserrat-medium">Rendez-vous</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#3D5919]">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#accueil" className="block py-2 text-[#3D5919] montserrat-medium">Accueil</a>
            <a href="#services" className="block py-2 text-[#3D5919] montserrat-medium">Services</a>
            <a href="#qui-suis-je" className="block py-2 text-[#3D5919] montserrat-medium">Qui suis-je ?</a>
            <a href="#ressources" className="block py-2 text-[#3D5919] montserrat-medium">Ressources</a>
            <a href="#blog" className="block py-2 text-[#3D5919] montserrat-medium">Blog</a>
            <a href="#rendez-vous" className="block py-2 bg-[#3D5919] text-white text-center rounded-full montserrat-medium">Rendez-vous</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFCE9] to-[#D6E2B4] pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#3D5919] mb-6 animate-fade-in playfair-display">
            Prise en charge 360°
          </h1>
          <p className="text-xl md:text-2xl text-[#3D5919] mb-8 max-w-3xl mx-auto montserrat-medium">
            Réapprendre à manger, rétablir l'équilibre, et reconstruire son mode de vie
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
              Consultation Gratuite
            </a>
            <a href="#services" className="border-2 border-[#3D5919] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-[#3D5919] hover:text-white transition-all montserrat-medium">
              Découvrir mes services
            </a>
          </div>
        </div>
        <div className="mt-16 text-center">
          <ChevronDown className="w-8 h-8 text-[#3D5919] animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

// Quote Section Component
const QuoteSection = ({ quote, author, bgColor = "bg-[#D6E2B4]" }) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-4xl font-bold italic text-[#3D5919] mb-4 playfair-display">
            "{quote}"
          </blockquote>
          {author && <p className="text-xl text-[#3D5919] montserrat-medium">– {author}</p>}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="qui-suis-je" className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] playfair-display">Qui suis-je ?</h2>
            <p className="text-lg text-gray-700 montserrat-medium">
              Je suis <span className="font-bold text-[#3D5919]">Rim Ajibe</span>, Diététicienne Clinicienne & Nutritionniste.
            </p>
            <p className="text-lg text-gray-700 montserrat-medium">
              Mon approche repose sur une <span className="font-bold">conviction</span> simple :
            </p>
            <p className="text-lg italic text-[#3D5919] bg-white p-4 rounded-lg shadow-lg playfair-display">
              L'alimentation doit nourrir, soutenir la santé et apporter du réconfort, jamais devenir une source de stress ou de confusion.
            </p>
            <p className="text-lg text-gray-700 montserrat-medium">
              Il est essentiel de <span className="font-bold">traiter les causes profondes des déséquilibres</span>, plutôt que de simplement <span className="font-bold">masquer les symptômes</span>. 
              <span className="italic underline"> C'est en agissant à la racine que l'on obtient des résultats durables et véritables.</span>
            </p>
          </div>
          <div className="relative">
            <div className="bg-[#D6E2B4] rounded-full w-80 h-80 mx-auto flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌿</div>
                <p className="text-[#3D5919] font-bold text-xl montserrat-medium">Nutrition & Santé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Section Component
const PhilosophySection = () => {
  return (
    <section className="py-20 bg-[#3D5919] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center playfair-display">Ma philosophie</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl font-bold text-center mb-8 montserrat-medium">
            Je ne défends aucune tendance alimentaire. Je défends ce qui fonctionne pour vous.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 playfair-display">Approche scientifique</h3>
              <p className="montserrat-medium">Ma pratique repose sur des recommandations scientifiques fiables et actualisées. Je ne catégorise ni les glucides, ni les lipides, ni aucun type d'alimentation.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 playfair-display">Personnalisation</h3>
              <p className="montserrat-medium">Chaque personne est unique, et mon rôle est de m'adapter à votre état de santé, vos besoins réels, et vos objectifs.</p>
            </div>
          </div>
          <blockquote className="text-xl italic text-center mt-8 p-6 bg-white/10 rounded-lg playfair-display">
            "Il n'existe pas un régime parfait valable pour tous. Ce qui fonctionne, c'est ce qui est aligné avec votre corps."
          </blockquote>
          <div className="text-center mt-8">
            <a href="#rendez-vous" className="bg-[#D6E2B4] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-white transition-all font-bold montserrat-medium">
              Je prends mon rendez-vous !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    { 
      title: "Prise et Perte de Poids", 
      icon: <Target className="w-6 h-6" />,
      buttonText: "Lire plus",
      details: "En cas de troubles émotionnels ou psychologiques liés au poids, le suivi est possible uniquement si un accompagnement psychologique est déjà en place."
    },
    { 
      title: "Nutrition Thérapeutique", 
      icon: <Heart className="w-6 h-6" />,
      buttonText: "Découvrir la suite",
      details: "Suivi possible pour la majorité des maladies chroniques; si les recommandations et traitements médicaux sont respectés. Le suivi ne s'adresse pas aux femmes enceintes."
    },
    { 
      title: "Nutrition Sportive", 
      icon: <Users className="w-6 h-6" />,
      buttonText: "Voir les détails",
      details: "Pour débutants et sportifs de haut niveau, sauf en cas de dopage ou d'objectifs contraires au bien-être physique."
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">
          J'accompagne les femmes, les hommes et les enfants pour :
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#D6E2B4] p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#3D5919] playfair-display">{service.title}</h3>
                </div>
                <button
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
                >
                  {expandedService === index ? 'Masquer' : service.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                {expandedService === index && (
                  <p className="mt-4 text-gray-600 animate-fade-in montserrat-medium">{service.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  const benefits = [
    {
      title: "Analyse & Compréhension",
      buttonText: "Savoir plus",
      details: [
        "Analyse complète de votre dossier : antécédents, maladies, traitements et mode de vie",
        "Prise en compte de votre état de santé global, symptômes, traitements et contexte médical",
        "Identification des erreurs alimentaires et des causes profondes",
        "Définition précise de vos objectifs et de vos besoins réels"
      ]
    },
    {
      title: "Programme sur-mesure évolutif",
      buttonText: "Détails sur LE programme",
      details: [
        "Programme personnalisé renouvelé tous les 15 jours",
        "Plans détaillés : repas, quantités, alternatives, idées recettes...",
        "Programme axé sur le traitement des causes profondes",
        "Ajustements réguliers selon vos retours et votre évolution"
      ]
    },
    {
      title: "Outils concrets & guidance",
      buttonText: "Savoir plus",
      details: [
        "E-book recettes et snacks healthy tous les 15 jours",
        "E-book sport (si votre santé le permet)",
        "Accès à une approche nutritionnelle claire et scientifique",
        "Accès à des vidéos explicatives et outils pratiques",
        "Disponibilité 5 jours /7 pour répondre à vos questions et ajuster votre plan"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#D6E2B4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">Vous bénéficiez de :</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3D5919] mb-4 playfair-display">{benefit.title}</h3>
                <button
                  onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                  className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
                >
                  {expandedBenefit === index ? 'Masquer' : benefit.buttonText}
                  {expandedBenefit === index ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
                </button>
                {expandedBenefit === index && (
                  <ul className="mt-4 space-y-2 animate-fade-in">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            Réservez votre consultation gratuite !
          </a>
        </div>
      </div>
    </section>
  );
};

// Process Section Component
const ProcessSection = () => {
  const processSteps = [
    { 
      number: "1", 
      title: "Consultation de Découverte GRATUITE", 
      description: "Au cabinet ou à distance — c'est la première étape pour vérifier si je peux réellement vous aider. Cette étape est obligatoire !" 
    },
    { 
      number: "2", 
      title: "Mini Questionnaire", 
      description: "Vous remplissez un formulaire pour m'aider à bien comprendre votre situation en détail." 
    },
    { 
      number: "3", 
      title: "Confirmation du rendez-vous", 
      description: "Un message de rappel vous est envoyé la veille. Il suffit d'y répondre avant 20h pour confirmer votre présence. AUTREMENT LE RENDEZ-VOUS SERA ANNULÉ." 
    },
    { 
      number: "4", 
      title: "Paiement et Lancement du Suivi", 
      description: "Après la consultation de découverte, si mon accompagnement est adapté à vos besoins, vous validez le paiement et on commence !" 
    },
    { 
      number: "5", 
      title: "Suivi tous les 15 jours", 
      description: "Toutes les deux semaines, on se retrouve pour faire le point ensemble. Et entre-temps, je reste disponible 5j/7 pour vous accompagner au moindre doute ou besoin d'ajustement." 
    }
  ];

  return (
    <section className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">Processus</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Curved line */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-[#D6E2B4] hidden md:block"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="flex mb-8 animate-fade-in relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex-shrink-0 w-12 h-12 bg-[#3D5919] text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 relative z-10">
                  {step.number}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#3D5919] mb-2 playfair-display">{step.title}</h3>
                  <p className="text-gray-700 montserrat-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-[#D6E2B4] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-[#3D5919] hover:text-white transition-all font-bold montserrat-medium">
            Faites le premier pas !
          </a>
        </div>
      </div>
    </section>
  );
};

// Pricing Section Component
const PricingSection = () => {
  const plans = [
    { duration: "1 mois", type: "Basique", price: "600 MAD", color: "bg-[#D6E2B4]" },
    { duration: "2 mois", type: "Optimal", price: "1000 MAD", color: "bg-[#3D5919]", popular: true },
    { duration: "3 mois", type: "Ultime", price: "1500 MAD", color: "bg-[#D6E2B4]" }
  ];

  return (
    <section className="py-20 bg-[#3D5919]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 playfair-display">Formules et Tarifs</h2>
        <p className="text-white text-center mb-12 italic montserrat-medium">**NOTE IMPORTANTE : Le paiement se fait en une seule fois.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-lg p-8 text-center transform hover:scale-105 transition-transform ${plan.popular ? 'bg-white text-[#3D5919] scale-105' : 'bg-[#D6E2B4] text-[#3D5919]'}`}>
              {plan.popular && (
                <div className="bg-[#3D5919] text-white text-sm px-4 py-1 rounded-full inline-block mb-4 montserrat-medium">
                  Plus populaire
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2 playfair-display">{plan.duration}</h3>
              <p className="text-xl mb-4 montserrat-medium">{plan.type}</p>
              <p className="text-4xl font-bold mb-6 playfair-display">{plan.price}</p>
              <a href="#rendez-vous" className={`block py-3 px-6 rounded-full font-semibold transition-colors montserrat-medium ${plan.popular ? 'bg-[#3D5919] text-white hover:bg-[#2A3F0F]' : 'bg-white text-[#3D5919] hover:bg-gray-100'}`}>
                Choisir
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-white text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all font-bold montserrat-medium">
            Je réserve ma consultation de découverte gratuite !
          </a>
        </div>
      </div>
    </section>
  );
};

// Important Notice Section Component
const ImportantNoticeSection = () => {
  return (
    <section className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3D5919] mb-8 playfair-display">IMPORTANT... AVANT DE COMMENCER !</h2>
          <div className="space-y-6 text-gray-700 montserrat-medium">
            <p className="text-lg">
              Si vous choisissez de travailler ensemble...c'est parce que vous savez que vous méritez un accompagnement sur-mesure, 
              fondé sur des solutions concrètes et adaptées à VOTRE vie — et que vous souhaitez enfin comprendre ce dont votre corps a vraiment besoin.
            </p>
            <p className="text-lg">
              Mais surtout, vous acceptez que <span className="font-bold">vous êtes l'acteur·rice</span> clé de votre transformation. 
              <span className="font-bold"> Personne ne peut faire ce chemin à votre place,</span> et c'est ce pouvoir entre vos mains qui fait toute la différence.
            </p>
            <p className="text-lg">
              Pour avancer, il faudra de <span className="font-bold">la patience, un engagement sincère, une communication transparente et de la durabilité.</span> 
              Je ne suis pas là pour juger, ni pour simplement célébrer vos succès. <span className="italic">Je suis là pour vous soutenir, surtout quand c'est difficile, et vous aider à garder le cap.</span>
            </p>
            <p className="text-lg">
              Travailler ensemble, c'est choisir une démarche scientifique, loin des idées reçues et des conseils douteux qui vous ont freiné jusque-là. 
              <span className="italic font-bold text-[#3D5919]"> Cette confiance mutuelle est la force qui vous mènera vers des résultats durables et personnalisés.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    { 
      question: "Le suivi est-il adapté à tout le monde ?",
      answer: "Ce suivi ne convient pas à ceux qui ne sont pas prêts à changer leurs habitudes et à faire de leur santé une priorité. Il n'est pas adapté à ceux qui veulent simplement essayer sans réelle intention, ni à ceux qui pensent que le rôle d'un diététicien est de convaincre, de sanctionner ou d'approuver systématiquement les choix personnels. Ce sont les patients qui sont acteurs de leur progression : je guide, j'accompagne, mais c'est à eux de prendre l'initiative."
    },
    { 
      question: "Combien de temps faut-il pour voir des résultats ?",
      answer: "Chaque corps réagit différemment. Il est impossible de donner un délai précis, mais plus vous êtes régulier(ère) et impliqué(e), plus les résultats apparaissent rapidement. Un changement physique visible et une bonne adaptation au plan nécessitent au moins 3 mois d'application."
    },
    { 
      question: "Et si je ne veux pas consommer de féculents ?",
      answer: "Les féculents, bien choisis, ne font ni grossir ni nuisent à la santé. S'ils figurent dans votre plan, c'est qu'ils sont nécessaires. Leur retrait ne se fait que pour des raisons médicales et toujours de manière encadrée. Je reste ouverte à toutes les approches validées par la science, y compris le keto, si je considère que c'est pertinent pour votre santé. Chaque plan est adapté à vos besoins, vos objectifs et votre physiologie."
    },
    { 
      question: "Combien je vais perdre de kilogrammes par semaine ?",
      answer: "Personne ne peut prédire un résultat exact. La perte de poids dépend de nombreux facteurs : adhésion au plan, métabolisme, âge, antécédents, hormones, maladies...etc. Selon les recommandations officielles (ex :HAS, ANSES), une perte progressive et saine est de l'ordre de 500 g à 1kg par semaine. Les résultats prennent du temps et demandent de la patience."
    },
    { 
      question: "Je n'ai pas le temps pour cuisiner, que conseillez-vous ?",
      answer: "Pas de solution miracle : apprendre à cuisiner simplement fait partie du processus. Je vous guide aussi pour savoir choisir les bons plats à l'extérieur quand c'est nécessaire."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[#D6E2B4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">Questions Fréquentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#3D5919] montserrat-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#3D5919] transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === index && (
                <div className="px-6 py-4 bg-gray-50 text-gray-700 animate-fade-in montserrat-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            <span className="hidden sm:inline">Je réserve ma consultation gratuite</span>
            <span className="sm:hidden">Consultation gratuite</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { text: "J'ai fait plusieurs suivis avant et à chaque fois les plans me stressaient. Là, c'est la première fois que je me sens à l'aise, comme si je l'avais fait moi-même. Merci beaucoup.", author: "O.L" },
    { text: "Au début si tu te rappelles j'avais peur de ne pas perdre et là je perds 1kg chaque 10 jours. Incroyable pour moi.", author: "N.M" },
    { text: "En même pas un mois j'ai réussi à diminuer ma peur des féculents que j'avais depuis super longtemps.", author: "R.F" },
    { text: "Au début c'était dur, mais comme tu m'as dit pas de miracle, que de la patience et discipline. Et franchement ça marche.", author: "S.B" },
    { text: "Expérience positive, j'ai perdu 3kg en 28 jours et le plus beau c'est que toute la famille est revenue à l'équilibre.", author: "Z.I" },
    { text: "En un mois j'ai perdu 4 cm de tour de taille, hyper contente et ça continue.", author: "G.E" },
    { text: "Tbarkallah 3lik, le programme est clair, les conseils à côté super utiles, et surtout j'ai adoré comment tu m'as aidée à corriger mes assiettes.", author: "J.K" },
    { text: "Le plan me va trop bien, diversifié, rapide, facile à préparer, et surtout ça donne un vrai résultat hamdoulilah.", author: "A.B" }
  ];

  return (
    <section className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">
          Vos <span className="italic">témoignages</span> !
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 bg-[#3D5919] text-white rounded-full hover:bg-[#2A3F0F] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2 bg-[#3D5919] text-white rounded-full hover:bg-[#2A3F0F] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 montserrat-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <p className="text-lg font-bold text-[#3D5919] playfair-display">{testimonials[currentTestimonial].author}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index ? 'bg-[#3D5919]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            Je commence mon accompagnement !
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Form Section Component
const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section id="rendez-vous" className="py-20 bg-[#D6E2B4]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-4 playfair-display">Le Rendez-vous Bien-être</h2>
          <p className="text-center text-[#3D5919] mb-12 montserrat-medium">
            Je m'inscris pour prendre soin de moi, comprendre mon corps et mieux manger !
          </p>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre prénom..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D5919] montserrat-medium"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre nom..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D5919] montserrat-medium"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#3D5919] montserrat-medium"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#3D5919] montserrat-medium"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#3D5919] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2A3F0F] transition-colors montserrat-medium"
            >
              Envoyez !
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Resources Section Component
const ResourcesSection = () => {
  return (
    <section id="ressources" className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">Ressources</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-[#D6E2B4] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-[#3D5919]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D5919] mb-4 playfair-display">E-books Nutrition</h3>
            <p className="text-gray-600 mb-4 montserrat-medium">Recettes saines et guides nutritionnels adaptés à votre mode de vie</p>
            <a href="#" className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold montserrat-medium">En savoir plus →</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-[#D6E2B4] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-[#3D5919]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D5919] mb-4 playfair-display">Programmes Sport</h3>
            <p className="text-gray-600 mb-4 montserrat-medium">Exercices adaptés à votre condition physique et vos objectifs</p>
            <a href="#" className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold montserrat-medium">En savoir plus →</a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="bg-[#D6E2B4] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#3D5919]" />
            </div>
            <h3 className="text-xl font-bold text-[#3D5919] mb-4 playfair-display">Outils Pratiques</h3>
            <p className="text-gray-600 mb-4 montserrat-medium">Vidéos explicatives et conseils pour votre quotidien</p>
            <a href="#" className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold montserrat-medium">En savoir plus →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Blog Section Component
const BlogSection = () => {
  const blogPosts = [
    {
      title: "Les bases d'une alimentation équilibrée",
      excerpt: "Découvrez les principes fondamentaux pour une nutrition saine et durable.",
      date: "15 Janvier 2025",
      image: "🥗"
    },
    {
      title: "Mythe ou réalité : les féculents font-ils grossir ?",
      excerpt: "Démystifions ensemble les idées reçues sur les glucides complexes.",
      date: "10 Janvier 2025",
      image: "🍞"
    },
    {
      title: "Comment maintenir sa motivation sur le long terme",
      excerpt: "Les clés psychologiques pour réussir votre transformation nutritionnelle.",
      date: "5 Janvier 2025",
      image: "💪"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#D6E2B4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">Blog</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{post.image}</div>
                <h3 className="text-xl font-bold text-[#3D5919] mb-3 playfair-display">{post.title}</h3>
                <p className="text-gray-600 mb-4 montserrat-medium">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 montserrat-medium">{post.date}</span>
                  <a href="#" className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold montserrat-medium">Lire plus →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            Voir tous les articles
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    alert('Merci pour votre inscription à la newsletter !');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#3D5919] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 playfair-display">Dt. Rim Ajibe</h3>
            <p className="text-gray-300 mb-4 montserrat-medium">
              Diététicienne Clinicienne & Nutritionniste
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#D6E2B4] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#D6E2B4] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Navigation</h4>
            <ul className="space-y-2 montserrat-medium">
              <li><a href="#accueil" className="hover:text-[#D6E2B4] transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-[#D6E2B4] transition-colors">Services</a></li>
              <li><a href="#qui-suis-je" className="hover:text-[#D6E2B4] transition-colors">Qui suis-je ?</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Ressources</h4>
            <ul className="space-y-2 montserrat-medium">
              <li><a href="#ressources" className="hover:text-[#D6E2B4] transition-colors">Ressources</a></li>
              <li><a href="#blog" className="hover:text-[#D6E2B4] transition-colors">Blog</a></li>
              <li><a href="#rendez-vous" className="hover:text-[#D6E2B4] transition-colors">Rendez-vous</a></li>
              <li><a href="#faq" className="hover:text-[#D6E2B4] transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Contact</h4>
            <ul className="space-y-2 montserrat-medium">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@rimajibe.ma</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+212 6XX XXX XXX</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Casablanca, Maroc</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold mb-4 playfair-display">Le Rendez-vous Bien-être</h4>
            <p className="text-gray-300 mb-4 montserrat-medium">
              Je m'inscris pour prendre soin de moi, comprendre mon corps et mieux manger !
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-2 rounded-full text-black focus:outline-none montserrat-medium"
                required
              />
              <button
                type="submit"
                className="bg-[#D6E2B4] text-[#3D5919] px-6 py-2 rounded-full hover:bg-white transition-colors font-bold montserrat-medium"
              >
                Envoyez !
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="montserrat-medium">© 2025 Dt Rim Ajibe. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', () => setIsMenuOpen(false));
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => setIsMenuOpen(false));
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCE9]">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <Header scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <HeroSection />
      
      <QuoteSection 
        quote="Je vous montre le chemin...et c'est vous qui avancez." 
        author="Car, le changement demande de l'implication!"
      />
      
      <AboutSection />
      
      <QuoteSection 
        quote="Je vous accompagne avec bienveillance pour retrouver un équilibre durable entre votre corps et votre alimentation." 
        author="Dt. Rim Ajibe"
        bgColor="bg-[#FDFCE9]"
      />
      
      <PhilosophySection />
      
      <QuoteSection 
        quote="Les changements temporaires donnent des résultats temporaires... C'est l'équilibre sur le long terme qui transforme !"
        bgColor="bg-[#D6E2B4]"
      />
      
      <ServicesSection />
      
      <BenefitsSection />
      
      <ProcessSection />
      
      <PricingSection />
      
      <ImportantNoticeSection />
      
      <QuoteSection 
        quote="Créez des habitudes saines et durables, sentez-vous plus fort et ayez plus d'énergie !"
        bgColor="bg-[#3D5919] text-white"
      />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <ResourcesSection />
      
      <BlogSection />
      
      <ContactFormSection />
      
      <Footer />

      <style jsx>{`
        .playfair-display {
          font-family: 'Playfair Display', serif;
        }
        .montserrat-medium {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;