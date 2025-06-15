import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Check, ArrowRight, Calendar, Mail, Phone, MapPin, Instagram, Facebook, Star, Users, Heart, Target, Clock, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [expandedService, setExpandedService] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const services = [
    { 
      title: "Prise et Perte de Poids", 
      icon: <Target className="w-6 h-6" />,
      details: "En cas de troubles émotionnels ou psychologiques liés au poids, le suivi est possible uniquement si un accompagnement psychologique est déjà en place."
    },
    { 
      title: "Nutrition Thérapeutique", 
      icon: <Heart className="w-6 h-6" />,
      details: "Suivi possible pour la majorité des maladies chroniques; si les recommandations et traitements médicaux sont respectés. Le suivi ne s'adresse pas aux femmes enceintes."
    },
    { 
      title: "Nutrition Sportive", 
      icon: <Users className="w-6 h-6" />,
      details: "Pour débutants et sportifs de haut niveau, sauf en cas de dopage ou d'objectifs contraires au bien-être physique."
    }
  ];

  const processSteps = [
    { number: "1", title: "Consultation de Découverte GRATUITE", description: "Au cabinet ou à distance — c'est la première étape pour vérifier si je peux réellement vous aider. Cette étape est obligatoire !" },
    { number: "2", title: "Mini Questionnaire", description: "Vous remplissez un formulaire pour m'aider à bien comprendre votre situation en détail." },
    { number: "3", title: "Confirmation du rendez-vous", description: "Un message de rappel vous est envoyé la veille. Il suffit d'y répondre avant 20h pour confirmer votre présence. AUTREMENT LE RENDEZ-VOUS SERA ANNULÉ." },
    { number: "4", title: "Paiement et Lancement du Suivi", description: "Après la consultation de découverte, si mon accompagnement est adapté à vos besoins, vous validez le paiement et on commence !" },
    { number: "5", title: "Suivi tous les 15 jours", description: "Toutes les deux semaines, on se retrouve pour faire le point ensemble. Et entre-temps, je reste disponible 5j/7 pour vous accompagner au moindre doute ou besoin d'ajustement." }
  ];

  const plans = [
    { duration: "1 mois", type: "Basique", price: "600 MAD", color: "bg-[#D6E2B4]" },
    { duration: "2 mois", type: "Optimal", price: "1000 MAD", color: "bg-[#3D5919]", popular: true },
    { duration: "3 mois", type: "Ultime", price: "1500 MAD", color: "bg-[#D6E2B4]" }
  ];

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
    <div className="min-h-screen bg-[#FDFCE9]">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#3D5919]">Dt. Rim Ajibe</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors">Accueil</a>
            <a href="#services" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors">Services</a>
            <a href="#qui-suis-je" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors">Qui suis-je ?</a>
            <a href="#ressources" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors">Ressources</a>
            <a href="#blog" className="text-[#3D5919] hover:text-[#D6E2B4] transition-colors">Blog</a>
            <a href="#rendez-vous" className="bg-[#3D5919] text-white px-6 py-2 rounded-full hover:bg-[#2A3F0F] transition-colors">Rendez-vous</a>
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
              <a href="#accueil" className="block py-2 text-[#3D5919]">Accueil</a>
              <a href="#services" className="block py-2 text-[#3D5919]">Services</a>
              <a href="#qui-suis-je" className="block py-2 text-[#3D5919]">Qui suis-je ?</a>
              <a href="#ressources" className="block py-2 text-[#3D5919]">Ressources</a>
              <a href="#blog" className="block py-2 text-[#3D5919]">Blog</a>
              <a href="#rendez-vous" className="block py-2 bg-[#3D5919] text-white text-center rounded-full">Rendez-vous</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDFCE9] to-[#D6E2B4] pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-[#3D5919] mb-6 animate-fade-in">
              Prise en charge 360°
            </h1>
            <p className="text-xl md:text-2xl text-[#3D5919] mb-8 max-w-3xl mx-auto">
              Réapprendre à manger, rétablir l'équilibre, et reconstruire son mode de vie
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105">
                Consultation Gratuite
              </a>
              <a href="#services" className="border-2 border-[#3D5919] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-[#3D5919] hover:text-white transition-all">
                Découvrir mes services
              </a>
            </div>
          </div>
          <div className="mt-16 text-center">
            <ChevronDown className="w-8 h-8 text-[#3D5919] animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-[#D6E2B4] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-bold italic text-[#3D5919] mb-4">
              "Je vous montre le chemin...et c'est vous qui avancez."
            </blockquote>
            <p className="text-xl text-[#3D5919]">
              Car, le changement demande de l'implication!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="qui-suis-je" className="py-20 bg-[#FDFCE9]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919]">Qui suis-je ?</h2>
              <p className="text-lg text-gray-700">
                Je suis <span className="font-bold text-[#3D5919]">Rim Ajibe</span>, Diététicienne Clinicienne & Nutritionniste.
              </p>
              <p className="text-lg text-gray-700">
                Mon approche repose sur une <span className="font-bold">conviction</span> simple :
              </p>
              <p className="text-lg italic text-[#3D5919] bg-white p-4 rounded-lg shadow-lg">
                L'alimentation doit nourrir, soutenir la santé et apporter du réconfort, jamais devenir une source de stress ou de confusion.
              </p>
              <p className="text-lg text-gray-700">
                Il est essentiel de <span className="font-bold">traiter les causes profondes des déséquilibres</span>, plutôt que de simplement <span className="font-bold">masquer les symptômes</span>. 
                <span className="italic underline"> C'est en agissant à la racine que l'on obtient des résultats durables et véritables.</span>
              </p>
            </div>
            <div className="relative">
              <div className="bg-[#D6E2B4] rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="text-[#3D5919] font-bold text-xl">Nutrition & Santé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#3D5919] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Ma philosophie</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-2xl font-bold text-center mb-8">
              Je ne défends aucune tendance alimentaire. Je défends ce qui fonctionne pour vous.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Approche scientifique</h3>
                <p>Ma pratique repose sur des recommandations scientifiques fiables et actualisées. Je ne catégorise ni les glucides, ni les lipides, ni aucun type d'alimentation.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Personnalisation</h3>
                <p>Chaque personne est unique, et mon rôle est de m'adapter à votre état de santé, vos besoins réels, et vos objectifs.</p>
              </div>
            </div>
            <blockquote className="text-xl italic text-center mt-8 p-6 bg-white/10 rounded-lg">
              "Il n'existe pas un régime parfait valable pour tous. Ce qui fonctionne, c'est ce qui est aligné avec votre corps."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#FDFCE9]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12">J'accompagne les femmes, les hommes et les enfants pour :</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#D6E2B4] p-3 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#3D5919]">{service.title}</h3>
                  </div>
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="text-[#3D5919] hover:text-[#2A3F0F] font-semibold flex items-center"
                  >
                    {expandedService === index ? 'Masquer' : 'Lire plus'} <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  {expandedService === index && (
                    <p className="mt-4 text-gray-600 animate-fade-in">{service.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#rendez-vous" className="bg-[#D6E2B4] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-[#3D5919] hover:text-white transition-all font-bold">
              Je réserve ma consultation gratuite
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#D6E2B4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12">
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
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <p className="text-lg font-bold text-[#3D5919]">{testimonials[currentTestimonial].author}</p>
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
            <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105">
              Je commence mon accompagnement !
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="rendez-vous" className="py-20 bg-[#FDFCE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-4">Le Rendez-vous Bien-être</h2>
            <p className="text-center text-gray-700 mb-12">
              Je m'inscris pour prendre soin de moi, comprendre mon corps et mieux manger !
            </p>
            <form className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Votre nom..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D5919]"
                />
                <input
                  type="text"
                  placeholder="Votre prénom..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3D5919]"
                />
              </div>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#3D5919]"
              />
              <textarea
                placeholder="Votre message..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-[#3D5919]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#3D5919] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#2A3F0F] transition-colors"
              >
                Envoyez !
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D5919] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dt. Rim Ajibe</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#D6E2B4]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-[#D6E2B4]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="hover:text-[#D6E2B4]">Accueil</a></li>
                <li><a href="#services" className="hover:text-[#D6E2B4]">Services</a></li>
                <li><a href="#qui-suis-je" className="hover:text-[#D6E2B4]">Qui suis-je ?</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D6E2B4]">Blog</a></li>
                <li><a href="#rendez-vous" className="hover:text-[#D6E2B4]">Rendez-vous</a></li>
                <li><a href="#faq" className="hover:text-[#D6E2B4]">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
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
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p>© 2025 Dt Rim Ajibe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default App;
      //     </div>
      //   </div>
      // </section>

      // {/* Benefits Section */}
      // <section className="py-20 bg-[#D6E2B4]">
      //   <div className="container mx-auto px-4">
      //     <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12">Vous bénéficiez de :</h2>
      //     <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      //       <div className="bg-white rounded-lg p-8 shadow-lg">
      //         <h3 className="text-2xl font-bold text-[#3D5919] mb-4">Analyse & Compréhension</h3>
      //         <ul className="space-y-3">
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Analyse complète de votre dossier : antécédents, maladies, traitements et mode de vie</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Prise en compte de votre état de santé global</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Identification des erreurs alimentaires et des causes profondes</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Définition précise de vos objectifs et de vos besoins réels</span>
      //           </li>
      //         </ul>
      //       </div>
      //       <div className="bg-white rounded-lg p-8 shadow-lg">
      //         <h3 className="text-2xl font-bold text-[#3D5919] mb-4">Programme sur-mesure évolutif</h3>
      //         <ul className="space-y-3">
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Programme personnalisé renouvelé tous les 15 jours</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Plans détaillés : repas, quantités, alternatives, idées recettes</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>E-book recettes et snacks healthy tous les 15 jours</span>
      //           </li>
      //           <li className="flex items-start">
      //             <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
      //             <span>Disponibilité 5 jours /7 pour répondre à vos questions</span>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //     <div className="text-center mt-12">
      //       <a href="#rendez-vous" className="bg-[#3D5919] text-white px-8 py-4 rounded-full text-lg hover:bg-[#2A3F0F] transition-all transform hover:scale-105">
      //         Réservez votre consultation gratuite !
      //       </a>
      //     </div>
      //   </div>
      // </section>

      // {/* Process Section */}
      // <section className="py-20 bg-[#FDFCE9]">
      //   <div className="container mx-auto px-4">
      //     <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12">Votre parcours en 5 étapes</h2>
      //     <div className="max-w-4xl mx-auto">
      //       {processSteps.map((step, index) => (
      //         <div key={index} className="flex mb-8 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
      //           <div className="flex-shrink-0 w-12 h-12 bg-[#3D5919] text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
      //             {step.number}
      //           </div>
      //           <div className="flex-grow">
      //             <h3 className="text-xl font-bold text-[#3D5919] mb-2">{step.title}</h3>
      //             <p className="text-gray-700">{step.description}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //     <div className="text-center mt-12">
      //       <a href="#rendez-vous" className="bg-[#D6E2B4] text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-[#3D5919] hover:text-white transition-all font-bold">
      //         Faites le premier pas !
      //       </a>
      //     </div>
      //   </div>
      // </section>

      // {/* Pricing Section */}
      // <section className="py-20 bg-[#3D5919]">
      //   <div className="container mx-auto px-4">
      //     <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Formules et Tarifs</h2>
      //     <p className="text-white text-center mb-12 italic">**NOTE IMPORTANTE : Le paiement se fait en une seule fois.</p>
      //     <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      //       {plans.map((plan, index) => (
      //         <div key={index} className={`rounded-lg p-8 text-center transform hover:scale-105 transition-transform ${plan.popular ? 'bg-white text-[#3D5919] scale-105' : 'bg-[#D6E2B4] text-[#3D5919]'}`}>
      //           {plan.popular && (
      //             <div className="bg-[#3D5919] text-white text-sm px-4 py-1 rounded-full inline-block mb-4">
      //               Plus populaire
      //             </div>
      //           )}
      //           <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
      //           <p className="text-xl mb-4">{plan.type}</p>
      //           <p className="text-4xl font-bold mb-6">{plan.price}</p>
      //           <a href="#rendez-vous" className={`block py-3 px-6 rounded-full font-semibold transition-colors ${plan.popular ? 'bg-[#3D5919] text-white hover:bg-[#2A3F0F]' : 'bg-white text-[#3D5919] hover:bg-gray-100'}`}>
      //             Choisir
      //           </a>
      //         </div>
      //       ))}
      //     </div>
      //     <div className="text-center mt-12">
      //       <a href="#rendez-vous" className="bg-white text-[#3D5919] px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-all font-bold">
      //         Je réserve ma consultation de découverte gratuite !
      //       </a>
      //     </div>
      //   </div>
      // </section>

      // {/* Important Notice Section */}
      // <section className="py-20 bg-[#FDFCE9]">
      //   <div className="container mx-auto px-4">
      //     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
      //       <h2 className="text-3xl md:text-4xl font-bold text-[#3D5919] mb-8">IMPORTANT... AVANT DE COMMENCER !</h2>
      //       <div className="space-y-6 text-gray-700">
      //         <p className="text-lg">
      //           Si vous choisissez de travailler ensemble...c'est parce que vous savez que vous méritez un accompagnement sur-mesure, 
      //           fondé sur des solutions concrètes et adaptées à VOTRE vie — et que vous souhaitez enfin comprendre ce dont votre corps a vraiment besoin.
      //         </p>
      //         <p className="text-lg">
      //           Mais surtout, vous acceptez que <span className="font-bold">vous êtes l'acteur·rice</span> clé de votre transformation. 
      //           <span className="font-bold"> Personne ne peut faire ce chemin à votre place,</span> et c'est ce pouvoir entre vos mains qui fait toute la différence.
      //         </p>
      //         <p className="text-lg">
      //           Pour avancer, il faudra de <span className="font-bold">la patience, un engagement sincère, une communication transparente et de la durabilité.</span> 
      //           Je ne suis pas là pour juger, ni pour simplement célébrer vos succès. <span className="italic">Je suis là pour vous soutenir, surtout quand c'est difficile, et vous aider à garder le cap.</span>
      //         </p>
      //         <p className="text-lg italic font-bold text-[#3D5919]">
      //           Cette confiance mutuelle est la force qui vous mènera vers des résultats durables et personnalisés.
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      // {/* Quote Section 2 */}
      // <section className="py-20 bg-[#D6E2B4]">
      //   <div className="container mx-auto px-4">
      //     <div className="text-center max-w-4xl mx-auto">
      //       <h2 className="text-3xl md:text-5xl font-bold text-[#3D5919]">
      //         Créez des habitudes <span className="italic">saines</span> et <span className="italic">durables</span>,<br />
      //         sentez-vous <span className="italic">plus fort</span> et ayez <span className="italic">plus d'énergie</span> !
      //       </h2>
      //     </div>
      //   </div>
      // </section>

      // {/* FAQ Section */}
      // <section id="faq" className="py-20 bg-[#FDFCE9]">
      //   <div className="container mx-auto px-4">
      //     <h2 className="text-4xl md:text-5xl font-bold text-[#3D5919] text-center mb-12">Questions Fréquentes</h2>
      //     <div className="max-w-3xl mx-auto space-y-4">
      //       {faqs.map((faq, index) => (
      //         <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
      //           <button
      //             onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
      //             className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      //           >
      //             <span className="font-semibold text-[#3D5919]">{faq.question}</span>
      //             <ChevronDown className={`w-5 h-5 text-[#3D5919] transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
      //           </button>
      //           {expandedFaq === index && (
      //             <div className="px-6 py-4 bg-gray-50 text-gray-700 animate-fade-in">
      //               {faq.answer}
      //             </div>
      //           )}
      //         </div>
      //       ))}
          
