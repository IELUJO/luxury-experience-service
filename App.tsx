import React, { useState, useEffect } from 'react';
import {
  Award,
  Target,
  Compass,
  Ruler,
  BookOpenCheck,
  GraduationCap,
  Clock,
  Calendar,
  MonitorPlay,
  DollarSign,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Globe,
  Briefcase,
  Menu,
  X
} from 'lucide-react';
import { NavItem, ModuleItem, Razon, Oferta, TargetProfile } from './types';

// --- Constants ---

const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Diplomado', href: '#diplomado' },
  { label: 'Programa', href: '#programa' },
  { label: 'Detalles', href: '#detalles' },
  { label: 'Contacto', href: '#contacto' },
];

const WHATSAPP_URL = "https://wa.me/525561039849?text=Hola%2C%20solicito%20informaci%C3%B3n%20sobre%20el%20Diplomado%20Luxury%20Experience%20%26%20Service";
const MASTER_URL = "https://master-lujo.ielujo.com";

const RAZONES: Razon[] = [
  {
    title: 'El producto se copia. El servicio, no.',
    description: 'Dos boutiques pueden vender el mismo bolso al mismo precio. La diferencia entre la que factura y la que no está en la experiencia. Este diplomado se centra en esa diferencia.'
  },
  {
    title: 'Metodología, no inspiración',
    description: 'Trabajamos con herramientas concretas: metodología LEXA para cuantificar los atributos de la experiencia, protocolo LEARN para recuperación de servicio, estándares Forbes, LQA y AAA aplicados a tu marca. Nada de frases motivacionales sobre "sorprender al cliente".'
  },
  {
    title: 'Un proyecto final que te llevas puesto',
    description: 'No terminas con un diploma y apuntes. Terminas con el Manual de Servicio de tu empresa o tu proyecto, construido módulo a módulo.'
  },
  {
    title: 'Networking con el sector',
    description: 'Compartirás aula con directivos, managers y empresarios del lujo en México y Latinoamérica. En nuestros diplomados, los alumnos señalan el networking como uno de los mayores beneficios del programa.'
  }
];

const OFERTAS: Oferta[] = [
  {
    title: '80 horas de formación',
    description: '10 módulos y 40 temas, con interacción directa con los profesores.',
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: 'Enfoque multisectorial',
    description: 'Retail, hotelería, alta gastronomía, wellness, joyería, travel retail, inmobiliaria, automoción y banca privada. El servicio de lujo se aprende cruzando sectores, no encerrado en uno.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Profesores en activo',
    description: 'Aprenderás de profesionales en activo en el sector del lujo, no de académicos de escritorio.',
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: 'Contenido phygital',
    description: 'Clienteling, concierge digital, CRM de lujo y protocolos de seguimiento — porque el cliente VIC ya no distingue entre el canal físico y el digital.',
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: 'Modalidad híbrida',
    description: 'Online en vivo por Zoom, con 2 experiencias presenciales en vivo: Inmersión Luxury Retail e Inmersión Luxury Experience.',
    icon: <MonitorPlay className="w-6 h-6" />
  }
];

interface Professor {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin: string;
}

const PROFESSORS: Professor[] = [
  {
    name: 'Frank Sánchez',
    role: 'CEO',
    company: 'Instituto Europeo del Lujo',
    image: '/frank-sanchez.jpg',
    linkedin: 'https://www.linkedin.com/in/franks%C3%A1nchezielujoluxurymexico/'
  },
  {
    name: 'Amparo de la Concepción',
    role: 'Directora Académica',
    company: 'Instituto Europeo del Lujo',
    image: '/amparo-delaconcepcion.jpg',
    linkedin: 'https://www.linkedin.com/in/amparodelaconcepcion/'
  },
  {
    name: 'Julio César González',
    role: 'Account Director, Global Luxury & Lifestyle, Central America & México',
    company: 'IHG Hotels & Resorts',
    image: '/julio-cesar-gonzalez.jpg',
    linkedin: 'https://www.linkedin.com/in/julio-c%C3%A9sar-gonz%C3%A1lez-68053973/'
  },
  {
    name: 'Adrián Aguirre Robles',
    role: 'Customer Experience and Operations Director',
    company: 'ALE MARINE',
    image: '/adrian-aguirre.png',
    linkedin: 'https://www.linkedin.com/in/adri%C3%A1n-aguirre-robles-bb25a51a/'
  }
];

// Citas de texto extraidas de los testimonios en video de alumnos de los diplomados IELujo.
// Rellenar con los textos y nombres que proporcione Amparo.
interface Testimonial {
  quote: string;
  name: string;
  program: string;
}

const TESTIMONIALS: Testimonial[] = [];

const PROFILES: TargetProfile[] = [
  { title: 'Directivos de Experiencia de Cliente', description: 'Responsables de Experiencia de Cliente, Servicio al Cliente y Calidad en marcas de lujo o aspiracionales.' },
  { title: 'Store Managers y gerentes', description: 'Gerentes de boutique y managers de equipos en contacto con cliente de alto valor.' },
  { title: 'Profesionales de hospitality', description: 'Hotelería, gastronomía, wellness y turismo de lujo.' },
  { title: 'Empresarios', description: 'Que quieren elevar su servicio a estándar de lujo como estrategia de diferenciación — los protocolos y metodologías de este diplomado son trasladables a marcas que no son de lujo.' },
  { title: 'Consultores y formadores', description: 'En experiencia de cliente, que necesitan metodología específica del sector del lujo.' }
];

const MODULES: ModuleItem[] = [
  {
    id: 1,
    title: 'El nuevo paradigma del lujo: de la posesión a la experiencia',
    subtopics: [
      'Producto, servicio y experiencia: las tres caras de la promesa del lujo.',
      'Los códigos propios del lujo experiencial.',
      'La transformación del lujo-producto al lujo-experiencia.',
      'La luxurización de marcas a través de la experiencia.'
    ]
  },
  {
    id: 2,
    title: 'Psicología del cliente de alto poder adquisitivo',
    subtopics: [
      'Análisis de la pirámide del cliente de lujo: tipologías, psicología y expectativas.',
      'Qué busca realmente el cliente en las experiencias de lujo.',
      'Generaciones del lujo: cómo servir diferencialmente a Boomers, X, Millennials y Gen Z.',
      'La anticipación como base del servicio de lujo: adelantarse a lo que el cliente no pide.'
    ]
  },
  {
    id: 3,
    title: 'Economía de la experiencia y ROI del servicio',
    subtopics: [
      'La economía de la experiencia: por qué se paga más por sentir.',
      'El modelo de negocio del lujo: cómo la experiencia justifica el precio.',
      'Las tendencias que marcan el rumbo: lujo silencioso, slow luxury y retail experiencial.',
      'El ROI del servicio: calcula cuánto cuesta un cliente perdido y cuánto genera uno fiel.'
    ]
  },
  {
    id: 4,
    title: 'Diseño del Luxury Customer Journey',
    subtopics: [
      'Cómo lograr una experiencia verdaderamente de lujo, fluida y sin fricciones.',
      'Los momentos de la verdad: cómo diseñarlos para conquistar al cliente VIC.',
      'Cómo diseñar momentos wow para una experiencia de lujo memorable.',
      'Cómo medir el recorrido del cliente con los indicadores correctos.'
    ]
  },
  {
    id: 5,
    title: 'Marketing sensorial, atmósfera y neuroarquitectura',
    subtopics: [
      'Neuroarquitectura: cómo el espacio guía el comportamiento y la emoción.',
      'Uso de la identidad olfativa y el sonido para conseguir una atmósfera memorable.',
      'Cómo la luz, la textura y el color elevan la percepción de lujo.',
      'Visual merchandising: el arte de vender a través de la presentación.'
    ]
  },
  {
    id: 6,
    title: 'Protocolos, ritualidad y comunicación del lujo',
    subtopics: [
      'Metodología LEXA: cómo cuantificar los atributos que definen la experiencia de lujo.',
      'Creación de rituales de anticipación, personalización, discreción y recuperación.',
      'Cómo aplicar los estándares internacionales (Forbes, LQA, AAA) a una marca.',
      'La comunicación en el lujo: uso efectivo del lenguaje verbal, paraverbal y corporal.'
    ]
  },
  {
    id: 7,
    title: 'Gestión de las crisis y retención de clientes de alto valor',
    subtopics: [
      'Service Recovery: cómo convertir una queja en fidelidad.',
      'El protocolo LEARN y la compensación inteligente, paso a paso.',
      'Cómo manejar al cliente difícil y las situaciones especiales.',
      'Cómo recuperar la confianza y gestionar crisis también en lo digital.'
    ]
  },
  {
    id: 8,
    title: 'El lujo en el mundo digital: clienteling y experiencia phygital',
    subtopics: [
      'Las claves de la experiencia de lujo phygital: unir sin costuras lo físico y lo digital.',
      'El concierge digital: comunicar lujo por WhatsApp, correo y redes sociales.',
      'Del CRM al Clienteling de lujo: la relación personalizada con los clientes VIC.',
      'El seguimiento del cliente de lujo después de la experiencia. Protocolos.'
    ]
  },
  {
    id: 9,
    title: 'Aplicación sectorial y diseño de experiencias de lujo',
    subtopics: [
      'Lecciones de servicio de lujo en la alta gastronomía, el wellness y la salud.',
      'Cómo el travel retail, la cosmética y la joyería crean experiencias de lujo.',
      'El lujo basado en las relaciones de confianza: inmobiliaria, automoción y banca privada.',
      'Diseño de eventos exclusivos y activaciones de lujo para los clientes VIC.'
    ]
  },
  {
    id: 10,
    title: 'Creación de una cultura de excelencia a través de tu Manual de Servicio',
    subtopics: [
      'Cómo medir la lealtad y el vínculo emocional (NPS, CES, CSAT) de nuestros clientes.',
      'Cómo montar un programa de cliente misterioso para el lujo.',
      'Cómo construir y sostener una cultura de servicio de lujo en una organización.',
      'Proyecto final: tu propio Manual de Servicio, guiado y validado. Lo desarrollarás por fases a través de los diferentes módulos.'
    ]
  }
];

// --- Custom Branded Icons ---

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const OutlookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L1.5 4.5V19.5L12 24L22.5 19.5V4.5L12 0ZM20.5 18.25L12 21.85L3.5 18.25V5.75L12 2.15L20.5 5.75V18.25Z"/>
    <path d="M12 6.75L6 9V15L12 17.25L18 15V9L12 6.75ZM16.5 14.25L12 15.9L7.5 14.25V9.75L12 8.1L16.5 9.75V14.25Z"/>
    <path d="M12 9.5L9 10.75V13.25L12 14.5L15 13.25V10.75L12 9.5Z"/>
  </svg>
);

// --- Sub-components ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Identidad IELujo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo-ielujo.png"
            alt="IELujo Logo"
            className="h-9 md:h-11 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-md md:text-lg font-display font-bold tracking-widest text-[#d4af37] leading-tight">IELujo</span>
            <div className="flex flex-col">
              <span className="text-[6px] md:text-[8px] uppercase tracking-[0.25em] text-white font-medium leading-tight">Instituto Europeo</span>
              <span className="text-[6px] md:text-[8px] uppercase tracking-[0.25em] text-white font-medium leading-tight">Del Lujo</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
            Info
          </a>
        </div>

        {/* Logo Anáhuac */}
        <div className="flex items-center gap-4">
          <img
            src="/logo-anahuac.png"
            alt="Logo Universidad Anáhuac México"
            className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
          />
          <button className="lg:hidden text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-up">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm uppercase tracking-widest text-gray-400 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest text-gold font-bold">
            Solicitar Información
          </a>
        </div>
      )}
    </nav>
  );
};

const SectionTitle: React.FC<{ subtitle: string; title: string; light?: boolean }> = ({ subtitle, title, light }) => (
  <div className="mb-16">
    <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">{subtitle}</span>
    <h2 className={`text-4xl md:text-5xl font-display ${light ? 'text-white' : 'text-black'}`}>{title}</h2>
    <div className="w-20 h-1 bg-gold mt-6"></div>
  </div>
);

const ModuleCard: React.FC<{ module: ModuleItem }> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors px-4"
      >
        <div className="flex items-center gap-5">
          <span className="font-display text-2xl font-bold" style={{ color: 'rgba(212,175,55,0.55)' }}>
            {module.id.toString().padStart(2, '0')}
          </span>
          <h3 className="text-white font-semibold text-base md:text-lg">{module.title}</h3>
        </div>
        {isOpen ? <ChevronUp className="text-gold flex-shrink-0" /> : <ChevronDown className="text-gray-500 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-16 pb-8">
          <ul className="list-disc space-y-2 text-gray-400 font-light pl-4">
            {module.subtopics.map((topic, idx) => (
              <li key={idx}><span className="text-sm">{topic}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// --- Main Page Component ---

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Solicitud de información sobre el Diplomado Luxury Experience & Service');
    const body = encodeURIComponent(`Hola, soy ${formData.name} y quiero recibir información de precios, facilidades de pago, profesores y programa detallado del Diplomado Luxury Experience & Service 2027.`);
    window.location.href = `mailto:contacto@ielujo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-0">
        <div className="absolute inset-0 z-0 bg-[#050505]">
          <img
            src="/hero.jpg"
            alt="Alumnos del diplomado en una sesión híbrida en Richemont"
            className="w-full h-full object-cover brightness-110"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.2) 40%, rgba(5,5,5,0.3) 100%)' }}
          ></div>
          {/* La sombra se ciñe al titular en vez de cubrir toda la foto: el aula respira por los
              lados y el dorado conserva detrás el negro que necesita para leerse. Misma técnica
              que el hero del Máster: si se estrecha o la caída se acelera, las esquinas del texto
              caen sobre el aula clara y el dorado se hunde por debajo de 3:1 (WCAG AA). */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 64% 26% at 50% 42%, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.86) 55%, rgba(5,5,5,0.4) 82%, rgba(5,5,5,0) 100%)' }}
          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-display mb-6 tracking-tight">
            Diplomado <br />
            <span className="gold-gradient">Luxury Experience & Service</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Aprende a diseñar, dirigir y medir el servicio por el que el cliente de lujo paga más.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contacto" className="bg-gold text-black px-10 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-transform">
              Solicita información
            </a>
            <a href="#programa" className="border border-white/20 text-white px-10 py-4 rounded-sm font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors">
              Ver el programa
            </a>
          </div>
        </div>
      </section>

      {/* Presentación */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl text-gray-200 leading-relaxed mb-8">
            El programa de referencia en <span className="gold-gradient">diseño de experiencias</span> y cultura de servicio de excelencia en el sector del lujo.
          </p>
          <p className="text-gray-400 font-light leading-relaxed text-lg mb-6">
            A lo largo de 10 módulos, sus alumnos aprenden a convertir cada interacción con el cliente en un motivo para volver, uniendo fundamentos sólidos con herramientas, metodologías y casos reales aplicables desde el primer día.
          </p>
          <p className="text-gray-400 font-light leading-relaxed text-lg">
            Es uno de los tres diplomados que forman parte del Máster en Global Luxury Business y puede cursarse por separado obteniendo la certificación individual. Tiene una duración de 80 horas y su objetivo es formar a expertos capaces de implantar una cultura de servicio de excelencia, tanto en artículos como en servicios.
          </p>
        </div>
      </section>

      {/* Aval + Forma parte del Máster */}
      <section id="diplomado" className="py-24 bg-white text-black scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionTitle subtitle="Doble Reconocimiento y Aval" title="Certificación IELujo y Universidad Anáhuac" />
              <p className="text-gray-700 mb-6 leading-relaxed font-light">
                Diplomado organizado por el <strong>Instituto Europeo del Lujo</strong> con el aval oficial de la <strong>Universidad Anáhuac de México</strong>, dentro de su oferta de Educación Continua Universitaria.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                El diplomado monográfico sobre experiencia de cliente y servicio de lujo en México. Doble certificación —IELujo y Universidad Anáhuac— con alto valor curricular y reconocimiento en las empresas del sector.
              </p>
            </div>
            <div className="bg-[#050505] text-white p-10 border-l-4 border-gold">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Forma parte del Máster</span>
              <h3 className="font-display text-2xl mb-5">Máster en Global Luxury Business</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                El tercer diplomado del Máster en Global Luxury Business (Anáhuac + IELujo), junto a Luxury Sales y Luxury Management. Puedes cursarlo de forma independiente, con doble certificación Anáhuac e IELujo, o completar los tres diplomados y obtener adicionalmente el título de Máster.
              </p>
              <a href={MASTER_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-gold text-gold px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-gold hover:text-black transition-all">
                Conoce el Máster
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-24 bg-[#0a0a0a] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Objetivo" title="Qué vas a dominar" light />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0"><Compass className="text-gold w-5 h-5" /></div>
              <p className="text-gray-300 font-light leading-relaxed">Dominar el diseño y la gestión de experiencias de servicio de lujo: del customer journey a los rituales, protocolos y estándares internacionales (Forbes, LQA, AAA).</p>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0"><Ruler className="text-gold w-5 h-5" /></div>
              <p className="text-gray-300 font-light leading-relaxed">Aprender a medir lo que parece intangible: el ROI del servicio, la lealtad y el vínculo emocional con el cliente de alto poder adquisitivo.</p>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0"><BookOpenCheck className="text-gold w-5 h-5" /></div>
              <p className="text-gray-300 font-light leading-relaxed">Salir con un entregable real: tu propio <strong className="text-white font-semibold">Manual de Servicio</strong>, desarrollado por fases durante el diplomado, guiado y validado por los profesores.</p>
            </div>
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0"><GraduationCap className="text-gold w-5 h-5" /></div>
              <p className="text-gray-300 font-light leading-relaxed">Obtener la certificación oficial de la Universidad Anáhuac junto a la del Instituto Europeo del Lujo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué cursarlo */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Por qué cursarlo" title="La diferencia está en el método" light />
          <div className="grid md:grid-cols-2 gap-8">
            {RAZONES.map((r, idx) => (
              <div key={idx} className="bg-[#111] p-10 border border-white/5 hover:border-gold/30 transition-all duration-500">
                <h3 className="font-display text-xl text-white mb-4">{r.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué ofrecemos */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Qué ofrecemos" title="Una formación completa" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {OFERTAS.map((o, idx) => (
              <div key={idx} className="flex gap-5 p-7 border border-white/5 bg-black hover:bg-[#0c0c0c] transition-all">
                <div className="text-gold flex-shrink-0 mt-1">{o.icon}</div>
                <div>
                  <h4 className="text-white font-bold mb-2">{o.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{o.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A quién va dirigido */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="A quién va dirigido" title="Para quienes viven del cliente exigente" light />
          <div className="grid md:grid-cols-2 gap-6">
            {PROFILES.map((profile, idx) => (
              <div key={idx} className="flex gap-6 p-8 border border-white/5 bg-[#0a0a0a] hover:bg-[#0c0c0c] transition-all">
                <div className="text-gold flex-shrink-0"><Target className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wide">{profile.title}</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">{profile.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencias en vivo (2 clases presenciales) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Experiencias sobre el terreno" title="Dos inmersiones en vivo" light />
          <p className="text-gray-400 font-light leading-relaxed max-w-3xl -mt-8 mb-12">
            Las dos clases presenciales del diplomado están concebidas como experiencias en vivo: el servicio de lujo se entiende viviéndolo, no solo estudiándolo.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#111] p-10 border border-white/5 hover:border-gold/30 transition-all duration-500">
              <Sparkles className="text-gold w-8 h-8 mb-6" />
              <h3 className="font-display text-2xl text-white mb-3">Inmersión Luxury Retail</h3>
              <p className="text-gray-400 font-light leading-relaxed">Experiencia presencial en vivo en el entorno del retail de lujo.</p>
            </div>
            <div className="bg-[#111] p-10 border border-white/5 hover:border-gold/30 transition-all duration-500">
              <Award className="text-gold w-8 h-8 mb-6" />
              <h3 className="font-display text-2xl text-white mb-3">Inmersión Luxury Experience</h3>
              <p className="text-gray-400 font-light leading-relaxed">Experiencia presencial en vivo centrada en el diseño de la experiencia de cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profesorado */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Profesorado" title="Profesionales en activo del sector" light />
          <p className="text-gray-400 font-light leading-relaxed max-w-3xl -mt-8 mb-12">
            Nuestro claustro está formado por profesionales expertos, escogidos en virtud de los temas a cubrir en cada uno de nuestros diplomados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROFESSORS.map((prof, idx) => (
              <div key={idx} className="group bg-[#111] p-6 border border-white/5 hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                <a
                  href={prof.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gold/20 group-hover:border-gold transition-colors flex-shrink-0"
                  title={`Ver perfil de ${prof.name}`}
                >
                  <img src={prof.image} alt={prof.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </a>
                <h3 className="font-display text-lg font-bold text-white mb-1">{prof.name}</h3>
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{prof.role}</p>
                <p className="text-sm text-gray-500 font-light italic mt-auto">{prof.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programa */}
      <section id="programa" className="py-24 bg-[#0a0a0a] border-y border-white/5 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Programa del Diplomado</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">10 Módulos, 40 Temas</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              80 horas de formación y un proyecto final aplicado que desarrollas por fases: tu propio Manual de Servicio.
            </p>
          </div>
          <div className="bg-[#111] border border-white/10">
            {MODULES.map((mod) => (
              <ModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </div>
      </section>

      {/* Proyecto final */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="text-gold w-10 h-10 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Tu Manual de Servicio, <span className="gold-gradient">no el nuestro</span></h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg max-w-3xl mx-auto">
            Desde el primer módulo trabajas sobre tu propia marca o proyecto. Al terminar, tienes un Manual de Servicio completo: estándares, rituales, protocolos de recuperación y sistema de medición. Un documento de trabajo que puedes implantar el lunes siguiente.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Testimonios" title="Lo que dicen nuestros alumnos" light />
          <p className="text-gray-400 font-light leading-relaxed max-w-3xl -mt-8 mb-12 italic">
            "Valoración media de 9.46/10 otorgada en cuestionario anónimo por los alumnos de las 22 ediciones de nuestros diplomados."
          </p>
          {TESTIMONIALS.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-[#111] border border-white/5 p-8 flex flex-col">
                  {/* opacidad fundida en rgba: `gold` es clase CSS manual y no admite /opacity de Tailwind */}
                  <span className="font-display text-5xl leading-none select-none" style={{ color: 'rgba(212,175,55,0.4)' }}>"</span>
                  <p className="text-gray-300 font-light leading-relaxed mt-2 mb-6">{t.quote}</p>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-gold text-xs uppercase tracking-wider mt-1">{t.program}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detalles */}
      <section id="detalles" className="py-24 bg-white text-black scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* items-end: el pie de la foto cuadra con el final de la columna de datos, misma
              solucion que en la web del Master. */}
          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div>
              <SectionTitle subtitle="Datos Prácticos" title="Detalles del Diplomado" />
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Fechas</h4>
                    <p className="text-gray-600 font-light">Inicio: 5 de junio de 2027 · Fin: 14 de agosto de 2027</p>
                    <p className="text-gray-500 text-sm mt-1 italic">11 sábados, de 8:00 AM a 3:00 PM (hora CDMX)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MonitorPlay className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Duración & Modalidad</h4>
                    <p className="text-gray-600 font-light">80 horas · Online en vivo por Zoom</p>
                    <p className="text-gray-600 font-light">Con 2 clases presenciales</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DollarSign className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Inversión</h4>
                    <p className="text-gray-600 font-light">$45,000 MXN (IVA incluido)</p>
                    <p className="text-xs text-gray-500 mt-1">* Meses sin intereses y facilidades de pago disponibles</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Certificación</h4>
                    <p className="text-gray-600 font-light">Doble certificación: Universidad Anáhuac + IELujo</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/certificaciones.jpg" alt="Graduación de un diplomado IELujo en la Universidad Anáhuac" className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[#050505] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionTitle subtitle="Inicia tu camino" title="Contáctanos hoy" light />
              <p className="text-gray-400 font-light leading-relaxed mb-10 max-w-xl">
                ¿Dudas sobre si el diplomado encaja con tu empresa o tu proyecto? Escríbenos y te orientamos.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-xl font-display text-white">+52 55 6103 9849</a>
                </div>
                <div className="flex items-center gap-6 group">
                  <OutlookIcon className="w-10 h-10 text-[#0078d4]" />
                  <a href="mailto:contacto@ielujo.com" className="text-xl font-display text-white">contacto@ielujo.com</a>
                </div>
              </div>
            </div>
            <div className="bg-[#111] p-10 border border-white/10">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <input name="name" type="text" value={formData.name} onChange={handleInputChange} required className="w-full bg-black border border-white/10 text-white p-4 placeholder-gray-500" placeholder="Nombre completo" />
                <input name="email" type="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-black border border-white/10 text-white p-4 placeholder-gray-500" placeholder="Email" />
                <button type="submit" className="w-full bg-gold text-black p-5 font-bold uppercase tracking-widest hover:opacity-90 transition-all">Enviar mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-black text-center border-t border-white/5">
        <p className="text-gray-500 text-sm mb-2 font-light uppercase tracking-widest">© 2026 Instituto Europeo del Lujo. Avalado por Universidad Anáhuac México.</p>
        <a href={MASTER_URL} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-xs hover:text-gold transition-colors">Parte del Máster en Global Luxury Business</a>
      </footer>
    </div>
  );
};

export default App;
