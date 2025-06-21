import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Check, ArrowRight, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Star, Users, Heart, Target, Clock, MessageCircle, ChevronLeft, ChevronRight, Plus, Minus, Scale } from 'lucide-react';
import { ArrowLeft, Tag, Share2, BookOpen, User } from 'lucide-react';
// Header Component
const Header = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className={`text-xl font-bold playfair-display ${scrolled ? 'text-[#3D5919]' : 'text-white'}`}>Dt. Rim Ajibe</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#accueil" className={`${scrolled ? 'text-[#3D5919]' : 'text-white'} hover:text-[#D6E2B4] transition-colors montserrat-medium`}>Accueil</a>
          <a href="#services" className={`${scrolled ? 'text-[#3D5919]' : 'text-white'} hover:text-[#D6E2B4] transition-colors montserrat-medium`}>Services</a>
          <a href="#qui-suis-je" className={`${scrolled ? 'text-[#3D5919]' : 'text-white'} hover:text-[#D6E2B4] transition-colors montserrat-medium`}>Qui suis-je ?</a>
          <a href="#ressources" className={`${scrolled ? 'text-[#3D5919]' : 'text-white'} hover:text-[#D6E2B4] transition-colors montserrat-medium`}>Ressources</a>
          <a href="#blog" className={`${scrolled ? 'text-[#3D5919]' : 'text-white'} hover:text-[#D6E2B4] transition-colors montserrat-medium`}>Blog</a>
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-6 py-2 rounded-full hover:bg-[#2A3F0F] transition-colors montserrat-medium">Rendez-vous</a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden ${scrolled ? 'text-[#3D5919]' : 'text-white'}`}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#accueil" onClick={handleMenuItemClick} className="block py-2 text-[#3D5919] montserrat-medium">Accueil</a>
            <a href="#services" onClick={handleMenuItemClick} className="block py-2 text-[#3D5919] montserrat-medium">Services</a>
            <a href="#qui-suis-je" onClick={handleMenuItemClick} className="block py-2 text-[#3D5919] montserrat-medium">Qui suis-je ?</a>
            <a href="#ressources" onClick={handleMenuItemClick} className="block py-2 text-[#3D5919] montserrat-medium">Ressources</a>
            <a href="#blog" onClick={handleMenuItemClick} className="block py-2 text-[#3D5919] montserrat-medium">Blog</a>
            <a href="#rendez-vous" onClick={handleMenuItemClick} className="block py-2 bg-[#3D5919] text-white text-center rounded-full montserrat-medium">Rendez-vous</a>
          </div>
        </div>
      )}
    </nav>
  );
};


// Hero Section Component with background image
const HeroSection = () => {
  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center pt-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${require('./First_Picture.jpg')})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/70"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in playfair-display">
            Prise en charge 360°
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto montserrat-medium">
            Réapprendre à manger, rétablir l'équilibre, et reconstruire son mode de vie
          </p>
        </div>
        <div className="mt-16 text-center">
          <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
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
            {quote}
          </blockquote>
          {author && <p className="text-3xl md:text-4xl font-bold italic text-[#3D5919] playfair-display">{author}</p>}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="qui-suis-je" className="py-20 bg-[#FFFFD]">
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
            <p className="text-lg italic text-[#3D5919] p-4 rounded-lg shadow-lg playfair-display">
              L'alimentation doit nourrir, soutenir la santé et apporter du réconfort, jamais devenir une source de stress ou de confusion.
            </p>
            <p className="text-lg text-gray-700 montserrat-medium">
              Il est essentiel de <span className="font-bold">traiter les causes profondes des déséquilibres</span>, plutôt que de simplement <span className="font-bold">masquer les symptômes</span>. 
              <span className="italic underline"> C'est en agissant à la racine que l'on obtient des résultats durables et véritables.</span>
            </p>
          </div>
          <div className="relative">
            <img 
              src={require('./rim.jpg')}
              alt="Dt. Rim Ajibe" 
              className="rounded-full shadow-xl w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Philosophy Section Component
const PhilosophySection = () => {
  return (
    <section 
    className="py-20 bg-[#3D5919] text-white relative bg-cover bg-center"
    style={{ backgroundImage: `url(${require('./Ma_philosophie.jpg')})` }}
     >
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center playfair-display">Ma philosophie</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-2xl font-bold text-center mb-8 montserrat-medium">
            Je ne défends aucune tendance alimentaire. Je défends ce qui fonctionne pour vous.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 playfair-display">Approche scientifique</h3>
              <p className="montserrat-medium">Ma pratique repose sur des recommandations scientifiques fiables et actualisées. Je ne catégorise ni les glucides, ni les lipides, ni aucun type d'alimentation.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 playfair-display">Personnalisation</h3>
              <p className="montserrat-medium">Chaque personne est unique, et mon rôle est de m'adapter à votre état de santé, vos besoins réels, et vos objectifs.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 playfair-display">Mission</h3>
              <p className="montserrat-medium">Je vous accompagne pour restaurer la physiologie naturelle de votre corps et traiter les causes profondes de vos symptômes. Cela passe par un travail solide sur les bases de la nutrition, dans une logique de compréhension, pas de restriction.</p>
            </div>
          </div>
          <blockquote className="text-xl italic text-center mt-8 p-6 bg-white/10 rounded-lg playfair-display">
            "Il n'existe pas un régime parfait valable pour tous. Ce qui fonctionne, c'est ce qui est aligné avec votre corps.
            <br /><br />
            Que ce soit une alimentation méditerranéenne, un jeûne intermittent, une approche cétogène ou autre... Ce n'est ni une mode, ni un choix arbitraire.
            <br /><br />
            C'est votre santé qui nous guide."
            <br /><br />
            Dt. Rim Ajibe
          </blockquote>
          <div className="text-center mt-8">
            <a href="#rendez-vous" className="bg-[#D6E2B4] text-[#3D5919] px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-white transition-all font-bold montserrat-medium">
              <span className="hidden sm:inline">Je prends mon rendez-vous !</span>
              <span className="sm:hidden">Rendez-vous</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  const [expandedService1, setExpandedService1] = useState(false);
  const [expandedService2, setExpandedService2] = useState(false);
  const [expandedService3, setExpandedService3] = useState(false);

  const services = [
    {
      title: "Prise et perte de poids",
      icon: Scale,
      image: './Services_Prise_et_perte_de_poids.jpg',
      description: "Approche personnalisée pour atteindre vos objectifs de poids de manière saine et durable.",
      bulletPoints: [
        "Évaluation complète de votre profil",
        "Plan alimentaire sur mesure",
        "Suivi régulier et ajustements",
        "Éducation nutritionnelle"
      ]
    },
    {
      title: "Nutrition thérapeutique",
      icon: Heart,
      image: './Services_Nutrition_thérapeutique.jpg',
      description: "Prise en charge nutritionnelle des pathologies chroniques.",
      bulletPoints: [
        "Diabète et prédiabète",
        "Maladies cardiovasculaires",
        "Troubles digestifs",
        "Maladies auto-immunes"
      ]
    },
    {
      title: "Nutrition sportive",
      icon: Target,
      image: './Services_Nutrition_sportive.jpg',
      description: "Optimisation des performances et de la récupération par l'alimentation.",
      bulletPoints: [
        "Plan nutritionnel adapté à votre sport",
        "Stratégies pré et post-entraînement",
        "Supplémentation ciblée",
        "Gestion du poids optimal"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FDFCE9]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12 playfair-display">
          J'accompagne les femmes, les hommes et les enfants pour :
        </h2>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {services[0].image && (
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={require('./Services_Prise_et_perte_de_poids.jpg')} 
                  alt={services[0].title}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#D6E2B4] p-3 rounded-full mr-4">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D5919] playfair-display">{services[0].title}</h3>
              </div>
              <p className="text-gray-600 mb-4 montserrat-medium">{services[0].description}</p>
              <button
                onClick={() => setExpandedService1(!expandedService1)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedService1 ? 'Masquer' : 'Voir les détails'} 
                {expandedService1 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedService1 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {services[0].bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {services[1].image && (
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={require('./Services_Nutrition_thérapeutique.jpg')} 
                  alt={services[1].title}
                  className=" object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#D6E2B4] p-3 rounded-full mr-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D5919] playfair-display">{services[1].title}</h3>
              </div>
              <p className="text-gray-600 mb-4 montserrat-medium">{services[1].description}</p>
              <button
                onClick={() => setExpandedService2(!expandedService2)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedService2 ? 'Masquer' : 'Voir les détails'} 
                {expandedService2 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedService2 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {services[1].bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {services[2].image && (
              <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={require('./Services_Nutrition_sportive.jpg')} 
                  alt={services[2].title}
                  className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-[#D6E2B4] p-3 rounded-full mr-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#3D5919] playfair-display">{services[2].title}</h3>
              </div>
              <p className="text-gray-600 mb-4 montserrat-medium">{services[2].description}</p>
              <button
                onClick={() => setExpandedService3(!expandedService3)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedService3 ? 'Masquer' : 'Voir les détails'} 
                {expandedService3 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedService3 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {services[2].bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection = () => {
  const [expandedBenefit1, setExpandedBenefit1] = useState(false);
  const [expandedBenefit2, setExpandedBenefit2] = useState(false);
  const [expandedBenefit3, setExpandedBenefit3] = useState(false);

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
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Benefit 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#3D5919] mb-4 playfair-display">{benefits[0].title}</h3>
              <button
                onClick={() => setExpandedBenefit1(!expandedBenefit1)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedBenefit1 ? 'Masquer' : benefits[0].buttonText}
                {expandedBenefit1 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedBenefit1 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {benefits[0].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#3D5919] mb-4 playfair-display">{benefits[1].title}</h3>
              <button
                onClick={() => setExpandedBenefit2(!expandedBenefit2)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedBenefit2 ? 'Masquer' : benefits[1].buttonText}
                {expandedBenefit2 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedBenefit2 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {benefits[1].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#3D5919] mb-4 playfair-display">{benefits[2].title}</h3>
              <button
                onClick={() => setExpandedBenefit3(!expandedBenefit3)}
                className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center montserrat-medium"
              >
                {expandedBenefit3 ? 'Masquer' : benefits[2].buttonText}
                {expandedBenefit3 ? <Minus className="w-4 h-4 ml-2" /> : <Plus className="w-4 h-4 ml-2" />}
              </button>
              {expandedBenefit3 && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="space-y-2">
                    {benefits[2].details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 montserrat-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            <span className="hidden sm:inline">Réservez votre consultation gratuite !</span>
            <span className="sm:hidden">Consultation gratuite</span>
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
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#D6E2B4] via-[#3D5919] to-[#D6E2B4] hidden md:block rounded-full"></div>
            
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
    <section className="py-20 bg-[#FFFFD]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-4 playfair-display">Formules et Tarifs</h2>
        <p className="text-[#3D5919] text-center mb-12 italic montserrat-medium">**NOTE IMPORTANTE : Le paiement se fait en une seule fois.</p>
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
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all font-bold montserrat-medium">
            <span className="hidden sm:inline">Je réserve ma consultation de découverte gratuite !</span>
            <span className="sm:hidden">Consultation gratuite</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Important Notice Section Component
const ImportantNoticeSection = () => {
  return (
    <section className="py-20 bg-[#D6E2B4]">
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
                {/* Stars removed */}
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
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            <span className="hidden sm:inline">Je commence mon accompagnement !</span>
            <span className="sm:hidden">Commencer !</span>
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
// Article Page Component
const ArticlePage = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#FDFCE9]">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center text-[#3D5919] hover:text-[#2A3F0F] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="montserrat-medium">Retour au blog</span>
            </button>
            <div className="text-xl font-bold text-[#3D5919] playfair-display">Dt. Rim Ajibe</div>
            <button className="flex items-center text-[#3D5919] hover:text-[#2A3F0F] transition-colors">
              <Share2 className="w-5 h-5 mr-2" />
              <span className="montserrat-medium">Partager</span>
            </button>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-[#D6E2B4] to-[#FDFCE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#3D5919] text-white px-4 py-2 rounded-full text-sm montserrat-medium">
                {article.category}
              </span>
              <div className="flex items-center text-[#3D5919] text-sm montserrat-medium">
                <Calendar className="w-4 h-4 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center text-[#3D5919] text-sm montserrat-medium">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime} de lecture
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#3D5919] mb-6 playfair-display leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 montserrat-medium leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#3D5919] rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#3D5919] playfair-display">Dr. Rim Ajibe</p>
                  <p className="text-sm text-gray-600 montserrat-medium">Diététicienne Clinicienne & Nutritionniste</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="flex items-center bg-white text-[#3D5919] px-3 py-1 rounded-full text-sm montserrat-medium">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#D6E2B4] rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">{article.image}</div>
              <p className="text-[#3D5919] italic montserrat-medium">{article.imagePrompt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content.map((section, index) => (
                <div key={index} className="mb-12">
                  {section.type === 'heading' && (
                    <h2 className="text-3xl font-bold text-[#3D5919] mb-6 playfair-display">
                      {section.text}
                    </h2>
                  )}
                  {section.type === 'subheading' && (
                    <h3 className="text-2xl font-bold text-[#3D5919] mb-4 playfair-display">
                      {section.text}
                    </h3>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="text-gray-700 mb-6 montserrat-medium leading-relaxed text-lg">
                      {section.text}
                    </p>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc list-inside mb-6 space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 montserrat-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.type === 'highlight' && (
                    <div className="bg-[#D6E2B4] p-6 rounded-lg mb-6">
                      <p className="text-[#3D5919] font-semibold montserrat-medium text-lg">
                        {section.text}
                      </p>
                    </div>
                  )}
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-[#3D5919] pl-6 mb-6">
                      <p className="text-xl italic text-[#3D5919] playfair-display">
                        "{section.text}"
                      </p>
                    </blockquote>
                  )}
                  {section.type === 'case-study' && (
                    <div className="bg-[#FDFCE9] border border-[#D6E2B4] rounded-lg p-6 mb-6">
                      <h4 className="text-xl font-bold text-[#3D5919] mb-4 playfair-display">
                        📋 Cas Clinique
                      </h4>
                      <div className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <p key={itemIndex} className="text-gray-700 montserrat-medium">
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#3D5919] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6 playfair-display">
              Besoin d'un accompagnement personnalisé ?
            </h3>
            <p className="text-xl mb-8 montserrat-medium">
              Profitez de mon expertise pour atteindre vos objectifs de santé
            </p>
            <a 
              href="#rendez-vous" 
              className="bg-[#D6E2B4] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-white transition-all transform hover:scale-105 font-bold montserrat-medium inline-block"
            >
              Réserver ma consultation gratuite
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .playfair-display {
          font-family: 'Playfair Display', serif;
        }
        .montserrat-medium {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

// Article Data
const articles = {
  nutrition: {
    id: 'nutrition-personnalisee',
    title: "L'approche scientifique de la nutrition personnalisée",
    excerpt: "Comment la recherche moderne révolutionne notre compréhension des besoins nutritionnels individuels et pourquoi chaque métabolisme est unique.",
    date: "20 Janvier 2025",
    readTime: "8 min",
    category: "Science & Nutrition",
    image: "🧬",
    imagePrompt: "Image d'ADN en double hélice avec des aliments colorés intégrés dans la structure génétique, fond scientifique moderne",
    tags: ["Métabolisme", "Recherche", "Personnalisation"],
    content: [
      {
        type: 'heading',
        text: 'La révolution de la nutrition individualisée'
      },
      {
        type: 'paragraph',
        text: 'Dans un monde où les régimes "one-size-fits-all" dominent encore les discours nutritionnels, la science nous révèle une vérité fondamentale : chaque individu possède des besoins nutritionnels uniques. Cette révolution de la nutrition personnalisée transforme radicalement notre approche thérapeutique.'
      },
      {
        type: 'subheading',
        text: 'La génétique nutritionnelle : au cœur de l\'individualité'
      },
      {
        type: 'paragraph',
        text: 'Les recherches récentes en nutrigénomique démontrent que nos gènes influencent directement notre métabolisme des macronutriments. Par exemple, les variations du gène AMY1 déterminent notre capacité à digérer l\'amidon, expliquant pourquoi certaines personnes tolèrent mieux les féculents que d\'autres.'
      },
      {
        type: 'highlight',
        text: 'Points clés de la recherche : 40% de la population présente une variation génétique affectant le métabolisme des graisses'
      },
      {
        type: 'list',
        items: [
          'Les polymorphismes du gène FTO influencent la sensation de satiété',
          'L\'expression du gène COMT module notre sensibilité au stress et nos besoins en magnésium',
          'Le gène APOE détermine notre réponse aux graisses saturées'
        ]
      },
      {
        type: 'subheading',
        text: 'Le microbiote : notre deuxième cerveau nutritionnel'
      },
      {
        type: 'paragraph',
        text: 'Le microbiote intestinal, composé de plus de 100 000 milliards de bactéries, agit comme un véritable laboratoire métabolique personnalisé. Les études montrent que la composition microbiotique influence l\'extraction calorique, la production de vitamines, la régulation inflammatoire et l\'axe intestin-cerveau.'
      },
      {
        type: 'case-study',
        content: [
          'Sarah, 34 ans, consultait pour une prise de poids inexpliquée malgré un régime strict.',
          'L\'analyse révéla : une résistance à l\'insuline masquée, un déficit en magnésium lié au stress chronique, une dysbiose intestinale post-antibiotiques.',
          'Protocole personnalisé : réintroduction progressive des glucides complexes, supplémentation ciblée, gestion du stress.',
          'Résultats à 3 mois : Perte de 8 kg, normalisation de l\'insulinémie, amélioration de 40% du score de fatigue.'
        ]
      },
      {
        type: 'subheading',
        text: 'L\'approche clinique individualisée'
      },
      {
        type: 'paragraph',
        text: 'En pratique clinique, cette individualité se traduit par une évaluation multidimensionnelle incluant l\'analyse métabolique, l\'historique alimentaire et comportemental, et les biomarqueurs spécifiques.'
      },
      {
        type: 'quote',
        text: 'La nutrition personnalisée n\'est plus une utopie mais une réalité clinique qui nécessite une expertise approfondie pour traduire les données biologiques en recommandations pratiques et durables.'
      }
    ]
  },
  
  tca: {
    id: 'troubles-comportement-alimentaire',
    title: "Démystifier les troubles du comportement alimentaire",
    excerpt: "Une analyse approfondie des mécanismes psychologiques et physiologiques qui influencent notre relation à l'alimentation.",
    date: "15 Janvier 2025",
    readTime: "12 min",
    category: "Psychologie Nutritionnelle",
    image: "🧠",
    imagePrompt: "Illustration artistique d'un cerveau avec des connexions synaptiques colorées, entouré d'aliments symbolisant l'équilibre nutritionnel",
    tags: ["TCA", "Psychologie", "Thérapie"],
    content: [
      {
        type: 'heading',
        text: 'Comprendre la complexité des TCA'
      },
      {
        type: 'paragraph',
        text: 'Les troubles du comportement alimentaire (TCA) représentent l\'une des pathologies les plus complexes en nutrition clinique. Loin des clichés, ils touchent toutes les populations et nécessitent une compréhension approfondie des mécanismes neurobiologiques et psychologiques sous-jacents.'
      },
      {
        type: 'subheading',
        text: 'Neurobiologie des TCA : quand le cerveau dysfonctionne'
      },
      {
        type: 'paragraph',
        text: 'Les recherches en neuroimagerie révèlent des anomalies dans le système dopaminergique chez les patients souffrant de TCA : hyperactivation du cortex préfrontal, dysfonction de l\'insula, et déséquilibre du striatum.'
      },
      {
        type: 'highlight',
        text: 'Les neurotransmetteurs impliqués : Sérotonine (régule l\'humeur et la satiété), Dopamine (contrôle la motivation), GABA (neurotransmetteur inhibiteur principal)'
      },
      {
        type: 'subheading',
        text: 'Typologie clinique des TCA'
      },
      {
        type: 'list',
        items: [
          'Anorexie mentale restrictive : restriction calorique extrême, distorsion de l\'image corporelle',
          'Boulimie nerveuse : cycle restriction-compulsion-compensation',
          'Hyperphagie boulimique : compulsions sans compensations, forte association avec l\'obésité'
        ]
      },
      {
        type: 'case-study',
        content: [
          'Emma, 19 ans - Anorexie mentale : IMC 15,2 kg/m², aménorrhée depuis 18 mois, apports 600-700 kcal/jour.',
          'Protocole thérapeutique en 3 phases : stabilisation médicale, restructuration cognitive, consolidation.',
          'Résultats à 1 an : poids stable à 50 kg, reprise des cycles menstruels, amélioration de l\'anxiété, réintégration scolaire réussie.'
        ]
      },
      {
        type: 'subheading',
        text: 'Approche thérapeutique intégrée'
      },
      {
        type: 'paragraph',
        text: 'La prise en charge nécessite une approche multidisciplinaire combinant stabilisation médicale, restructuration cognitive et consolidation à long terme. Le travail sur l\'image corporelle et les déclencheurs émotionnels est essentiel.'
      },
      {
        type: 'quote',
        text: 'Les TCA sont des pathologies multifactorielles nécessitant une approche globale et spécialisée. La compréhension des mécanismes neurobiologiques permet d\'adapter les interventions thérapeutiques.'
      }
    ]
  },
  
  micronutrition: {
    id: 'micronutrition-maladies-chroniques',
    title: "Micronutrition et maladies chroniques : état de la recherche",
    excerpt: "Les dernières découvertes sur l'impact des micronutriments dans la prévention et la gestion des pathologies chroniques.",
    date: "10 Janvier 2025",
    readTime: "15 min",
    category: "Nutrition Thérapeutique",
    image: "⚕️",
    imagePrompt: "Composition scientifique montrant des molécules de vitamines et minéraux en 3D, avec des cellules saines en arrière-plan",
    tags: ["Micronutrition", "Maladies chroniques", "Prévention"],
    content: [
      {
        type: 'heading',
        text: 'Les micronutriments : acteurs clés de la santé'
      },
      {
        type: 'paragraph',
        text: 'L\'explosion des maladies chroniques (diabète, maladies cardiovasculaires, cancers, maladies auto-immunes) interpelle la communauté scientifique. Au-delà des macronutriments, les micronutriments émergent comme des acteurs clés dans la prévention et la prise en charge thérapeutique.'
      },
      {
        type: 'subheading',
        text: 'Fondements scientifiques de la micronutrition'
      },
      {
        type: 'paragraph',
        text: 'La micronutrition étudie l\'impact des micronutriments sur la santé. Contrairement à la nutrition classique centrée sur les calories, elle se focalise sur la densité nutritionnelle et la biodisponibilité.'
      },
      {
        type: 'highlight',
        text: 'Déficiences subcliniques : 80% de la population présente un déficit en vitamine D, 40% des femmes souffrent de carence en fer, 60% des adultes ont des apports insuffisants en oméga-3'
      },
      {
        type: 'subheading',
        text: 'Micronutrition et diabète de type 2'
      },
      {
        type: 'list',
        items: [
          'Chrome : améliore la sensibilité à l\'insuline de 20-30%',
          'Magnésium : régulateur de plus de 300 enzymes, déficit chez 75% des diabétiques',
          'Acide alpha-lipoïque : prévient la neuropathie diabétique'
        ]
      },
      {
        type: 'subheading',
        text: 'Maladies cardiovasculaires et oméga-3'
      },
      {
        type: 'paragraph',
        text: 'L\'EPA (acide eicosapentaénoïque) agit comme anti-inflammatoire puissant et réduit les triglycérides de 20-50%. Le DHA maintient la fluidité membranaire et protège contre l\'arythmie.'
      },
      {
        type: 'case-study',
        content: [
          'Paul, 55 ans - Syndrome métabolique : tour de taille 108 cm, glycémie 1,15 g/L, triglycérides 2,8 g/L.',
          'Bilan micronutritionnel : déficits en vitamine D, magnésium, déséquilibre oméga-6/oméga-3.',
          'Protocole personnalisé : supplémentation ciblée + optimisation alimentaire.',
          'Résultats à 6 mois : perte de 8 kg, normalisation des paramètres métaboliques, amélioration de 40% de la fatigue.'
        ]
      },
      {
        type: 'subheading',
        text: 'Cancer et micronutrition préventive'
      },
      {
        type: 'paragraph',
        text: 'Le sélénium réduit le risque de cancer colorectal de 58%, la vitamine D régule l\'expression de plus de 1000 gènes, et la curcumine inhibe les facteurs inflammatoires.'
      },
      {
        type: 'quote',
        text: 'La micronutrition représente une approche thérapeutique complémentaire prometteuse dans la prise en charge des maladies chroniques, reposant sur une évaluation précise et une supplémentation personnalisée.'
      }
    ]
  }
};

// Main Demo Component
// Blog Section Component
const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Les bases d'une alimentation équilibrée",
      excerpt: "Découvrez les principes fondamentaux pour une nutrition saine et durable.",
      date: "15 Janvier 2025",
      image: "🥗",
      category: "Nutrition",
      readTime: "5 min",
      content: "Une alimentation équilibrée repose sur la variété et la modération. Il est essentiel d'inclure tous les groupes alimentaires : fruits et légumes, protéines, glucides complexes, et bonnes graisses. L'hydratation joue également un rôle crucial. Privilégiez les aliments non transformés et écoutez les signaux de votre corps.",
      tags: ["équilibre", "nutrition", "santé"]
    },
    {
      id: 2,
      title: "Mythe ou réalité : les féculents font-ils grossir ?",
      excerpt: "Démystifions ensemble les idées reçues sur les glucides complexes.",
      date: "10 Janvier 2025",
      image: "🍞",
      category: "Mythes",
      readTime: "7 min",
      content: "Les féculents ne font pas grossir par eux-mêmes. C'est la quantité, la qualité et l'accompagnement qui comptent. Les glucides complexes sont essentiels pour l'énergie et le bon fonctionnement du cerveau. Choisissez des féculents complets et adaptez les portions à vos besoins énergétiques.",
      tags: ["féculents", "glucides", "perte de poids"]
    },
    {
      id: 3,
      title: "Comment maintenir sa motivation sur le long terme",
      excerpt: "Les clés psychologiques pour réussir votre transformation nutritionnelle.",
      date: "5 Janvier 2025",
      image: "💪",
      category: "Psychologie",
      readTime: "6 min",
      content: "La motivation fluctue naturellement. L'important est de créer des habitudes durables plutôt que de dépendre uniquement de la motivation. Fixez-vous des objectifs réalistes, célébrez les petites victoires, et n'hésitez pas à demander du soutien. La patience et la bienveillance envers soi-même sont essentielles.",
      tags: ["motivation", "habitudes", "psychologie"]
    },
    {
      id: 4,
      title: "Hydratation : combien d'eau boire par jour ?",
      excerpt: "L'importance de l'hydratation dans votre équilibre nutritionnel.",
      date: "1 Janvier 2025",
      image: "💧",
      category: "Hydratation",
      readTime: "4 min",
      content: "Les besoins en eau varient selon l'âge, l'activité physique et le climat. En général, 1,5 à 2L par jour sont recommandés. L'eau aide à la digestion, au transport des nutriments et à l'élimination des déchets. Écoutez votre soif et observez la couleur de vos urines comme indicateur d'hydratation.",
      tags: ["hydratation", "eau", "santé"]
    },
    {
      id: 5,
      title: "Gestion du stress et alimentation émotionnelle",
      excerpt: "Comment le stress influence nos choix alimentaires et que faire.",
      date: "28 Décembre 2024",
      image: "🧘‍♀️",
      category: "Bien-être",
      readTime: "8 min",
      content: "Le stress chronique peut perturber nos habitudes alimentaires. Il est important de reconnaître les signaux de faim émotionnelle versus physique. Des techniques de gestion du stress comme la méditation, la respiration profonde et l'activité physique peuvent aider à retrouver un rapport sain à l'alimentation.",
      tags: ["stress", "émotions", "bien-être"]
    },
    {
      id: 6,
      title: "Nutrition pendant l'exercice physique",
      excerpt: "Optimiser votre alimentation avant, pendant et après l'effort.",
      date: "20 Décembre 2024",
      image: "🏃‍♀️",
      category: "Sport",
      readTime: "9 min",
      content: "L'alimentation autour de l'exercice doit être adaptée à l'intensité et à la durée de l'effort. Avant : privilégiez les glucides. Pendant : hydratez-vous régulièrement. Après : combinez protéines et glucides pour la récupération. La timing et la composition des repas jouent un rôle crucial dans les performances.",
      tags: ["sport", "performance", "récupération"]
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const postsPerPage = 3;

  const categories = ['Tous', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-20 bg-[#D6E2B4]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-8 playfair-display">Blog</h2>
        <p className="text-center text-[#3D5919] mb-12 montserrat-medium max-w-2xl mx-auto">
          Découvrez mes conseils, astuces et réflexions pour une vie plus saine et équilibrée
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full transition-all montserrat-medium ${
                selectedCategory === category
                  ? 'bg-[#3D5919] text-white'
                  : 'bg-white text-[#3D5919] hover:bg-[#3D5919] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <span className="bg-[#D6E2B4] text-[#3D5919] px-3 py-1 rounded-full text-xs font-semibold montserrat-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#3D5919] mb-3 playfair-display">{post.title}</h3>
                <p className="text-gray-600 mb-4 montserrat-medium">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded montserrat-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 montserrat-medium">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                  </div>
                  <button 
                    onClick={() => handleReadMore(post)}
                    className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold montserrat-medium flex items-center group"
                  >
                    Lire plus 
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mb-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white text-[#3D5919] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3D5919] hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-full transition-all montserrat-medium ${
                  currentPage === index + 1
                    ? 'bg-[#3D5919] text-white'
                    : 'bg-white text-[#3D5919] hover:bg-[#3D5919] hover:text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white text-[#3D5919] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3D5919] hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="text-center">
          <a href="#rendez-vous" className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium">
            <span className="hidden sm:inline">Besoin de conseils personnalisés ?</span>
            <span className="sm:hidden">Conseils personnalisés</span>
          </a>
        </div>
      </div>

      {/* Blog Post Modal */}
      {selectedPost && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{selectedPost.image}</span>
            <div>
              <span className="bg-[#D6E2B4] text-[#3D5919] px-3 py-1 rounded-full text-sm font-semibold montserrat-medium">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl font-bold text-[#3D5919] mt-2 playfair-display">{selectedPost.title}</h2>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 montserrat-medium">
          <span>{selectedPost.date}</span>
          <span>•</span>
          <span>{selectedPost.readTime}</span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-6 montserrat-medium">{selectedPost.content}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedPost.tags.map((tag, index) => (
            <span key={index} className="bg-[#D6E2B4] text-[#3D5919] px-3 py-1 rounded-full text-sm montserrat-medium">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#rendez-vous"
            onClick={closeModal}
            className="bg-[#3D5919] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105 montserrat-medium inline-block w-full max-w-xs sm:max-w-md md:max-w-lg"
          >
            Prendre rendez-vous pour en savoir plus
          </a>
        </div>
      </div>
    </div>
  </div>
)}
    </section>
  );
};

// Footer Component
const Footer = () => {
  const [newsletterData, setNewsletterData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterData);
    alert('Merci pour votre inscription à la newsletter !');
    setNewsletterData({ firstName: '', lastName: '', email: '' });
  };

  const handleNewsletterChange = (e) => {
    setNewsletterData({
      ...newsletterData,
      [e.target.name]: e.target.value
    });
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
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:+212614216149" className="hover:text-[#D6E2B4] transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +212 614-216149
              </a>
              <a href="mailto:dieteticienne.ajibe.rim@gmail.com" className="hover:text-[#D6E2B4] transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                dieteticienne.ajibe.rim@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/diet.rim.ajibe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6E2B4] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rim-ajibe-22a191338" target="_blank" rel="noopener noreferrer" className="hover:text-[#D6E2B4] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Navigation</h4>
            <ul className="space-y-2 montserrat-medium">
              <li><a href="#accueil" className="hover:text-[#D6E2B4] transition-colors">Accueil</a></li>
              <li><a href="#services" className="hover:text-[#D6E2B4] transition-colors">Services</a></li>
              <li><a href="#qui-suis-je" className="hover:text-[#D6E2B4] transition-colors">Qui suis-je ?</a></li>
              <li><a href="#blog" className="hover:text-[#D6E2B4] transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Liens Utiles</h4>
            <ul className="space-y-2 montserrat-medium">
              <li><a href="#processus" className="hover:text-[#D6E2B4] transition-colors">Processus</a></li>
              <li><a href="#tarifs" className="hover:text-[#D6E2B4] transition-colors">Tarifs</a></li>
              <li><a href="#faq" className="hover:text-[#D6E2B4] transition-colors">FAQ</a></li>
              <li><a href="#temoignages" className="hover:text-[#D6E2B4] transition-colors">Témoignages</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 playfair-display">Newsletter</h4>
            <p className="text-gray-300 mb-4 montserrat-medium">
              Restez informé(e) des dernières actualités
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="text"
                name="firstName"
                value={newsletterData.firstName}
                onChange={handleNewsletterChange}
                placeholder="Prénom"
                className="w-full px-4 py-2 rounded-full text-black focus:outline-none montserrat-medium"
                required
              />
              <input
                type="text"
                name="lastName"
                value={newsletterData.lastName}
                onChange={handleNewsletterChange}
                placeholder="Nom"
                className="w-full px-4 py-2 rounded-full text-black focus:outline-none montserrat-medium"
                required
              />
              <input
                type="email"
                name="email"
                value={newsletterData.email}
                onChange={handleNewsletterChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded-full text-black focus:outline-none montserrat-medium"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#D6E2B4] text-[#3D5919] px-6 py-2 rounded-full hover:bg-white transition-colors font-bold montserrat-medium"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <p className="montserrat-medium">© 2025 Dt Rim Ajibe. Tous droits réservés.</p>
            <span className="hidden sm:inline text-gray-400">•</span>
            <p className="montserrat-medium">
              Made by{' '}
              <a 
                href="https://nerdsdev.pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#D6E2B4] hover:text-white transition-colors font-semibold"
              >
                Nerdsdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

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
  
  if (currentArticle) {
    return (
      <ArticlePage 
        article={articles[currentArticle]} 
        onBack={() => setCurrentArticle(null)}
      />
    );
  }

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
      
      
      <TestimonialsSection />
      
      <FAQSection />
      
      {/* <BlogSection /> */}
      
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