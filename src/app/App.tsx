import { useEffect } from 'react';

// Componente para cargar el selector de idiomas
function LanguageSelector() {
  useEffect(() => {
    // Evitar duplicar el script si ya existe
    if (document.getElementById('google-translate-script')) return;

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en,pt', // Español, Inglés, Portugués
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: true,
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, backgroundColor: '#fff', padding: '8px 12px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
      <span style={{ fontSize: '12px', fontWeight: 'bold', display: 'block', marginBottom: '4px', color: '#333' }}>🌐 Idioma / Language:</span>
      <div id="google_translate_element"></div>
    </div>
  );
}
import { useState, useEffect } from "react";
import {
  Plane,
  Anchor,
  MapPin,
  Mountain,
  Shield,
  Clock,
  Star,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  CreditCard,
  Banknote,
  Mail,
  ChevronRight,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/WhatsApp_Image_2026-08-21_at_9.50.03_PM.jpeg";

const WHATSAPP = "5492902402988";
const EMAIL = "patagonialivre@gmail.com";

const HERO_IMG =
  "https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?w=1920&h=1080&fit=crop&auto=format";

const NAV_LINKS = ["Servicios", "Reservas", "Excursiones", "Reseñas", "Contacto"];

const SERVICES = [
  {
    icon: Plane,
    title: "Aeropuerto",
    subtitle: "Aeropuerto Armando Tola · FTE",
    description:
      "Traslados puntuales hacia y desde el aeropuerto de El Calafate, con seguimiento de vuelos en tiempo real para que nunca pierdas tu vuelo.",
  },
  {
    icon: Anchor,
    title: "Puerto",
    subtitle: "Puerto Bandera / Puerto Bajo la Sombra",
    description:
      "Coordinamos embarques y desembarques con total comodidad y puntualidad, adaptándonos a los horarios de cada embarcación.",
  },
  {
    icon: MapPin,
    title: "Destinos Turísticos",
    subtitle: "Glaciares, lagos y montañas",
    description:
      "Te llevamos a los destinos más icónicos: Glaciar Perito Moreno, El Chaltén, Torres del Paine, Lago Argentino y más.",
  },
  {
    icon: Mountain,
    title: "Excursiones",
    subtitle: "Experiencias únicas a medida del pasajero",
    description:
      "Ocasionalmente ofrecemos excursiones guiadas a los lugares más impresionantes de la Patagonia austral. Consultá disponibilidad.",
  },
];

const PILLARS = [
  {
    icon: Shield,
    label: "Seguros",
    text: "Vehículos en perfecto estado y conductores profesionales habilitados con toda la documentación al día.",
  },
  {
    icon: Clock,
    label: "Puntuales",
    text: "Respetamos siempre el horario acordado. Tu tiempo es nuestro compromiso más importante.",
  },
  {
    icon: Star,
    label: "Confiables",
    text: "Años de experiencia en la región con cientos de pasajeros satisfechos que vuelven a elegirnos.",
  },
  {
    icon: CheckCircle,
    label: "Responsables",
    text: "Atención personalizada desde la reserva hasta tu destino final. Siempre disponibles para vos.",
  },
];

const EXCURSIONS = [
  {
    img: "https://images.unsplash.com/photo-1668190413524-0ae4556d1e11?w=800&h=600&fit=crop&auto=format",
    title: "Glaciar Perito Moreno",
    desc: "Uno de los glaciares más espectaculares del mundo, maravilla natural del Parque Nacional Los Glaciares.",
    detail: "Te llevamos hasta el Glaciar Perito Moreno, una de las maravillas naturales más impresionantes del planeta. Durante el trayecto disfrutarás de paisajes únicos de la Patagonia austral, paramos en algunos puntos panoramicos, avistando la fauna autoctona. Al llegar, tendrás tiempo para recorrer las pasarelas y observar el glaciar de cerca, escuchar el crujido del hielo y presenciar los desprendimientos. Un día que no vas a olvidar.",
    duration: "Día completo",
    price: "$210.000",
    priceLabel: "Precio vehículo hasta 4 pax",
  },
  {
    img: "https://images.unsplash.com/photo-1590246646417-b0199da13a3d?w=800&h=600&fit=crop&auto=format",
    title: "Torres del Paine",
    desc: "Travesía al parque nacional más bello de la Patagonia chilena, con paisajes que quitan el aliento.",
    detail: "Un viaje internacional al corazón del Parque Nacional Torres del Paine, en Chile. Cruzamos la frontera y nos adentramos en uno de los destinos de trekking más reconocidos del mundo. Paisajes de montañas, lagos turquesa, cóndores y una naturaleza salvaje que te va a dejar sin palabras. Incluye coordinación del cruce fronterizo.",
    duration: "Día completo",
  },
  {
    img: "https://images.unsplash.com/photo-1631499756201-d6ca43f323f0?w=800&h=600&fit=crop&auto=format",
    title: "El Chaltén",
    desc: "La capital del trekking argentino, a los pies del mítico Monte Fitz Roy y sus cumbres graníticas.",
    detail: "Te trasladamos a El Chaltén, el pueblo del trekking argentino ubicado a 220 km de El Calafate. Desde allí podés acceder a las sendas hacia el Fitz Roy, el Cerro Torre y los miradores más icónicos de la Patagonia. El viaje en sí ya es una experiencia, atravesando la estepa y los valles glaciares de Santa Cruz.",
    duration: "Día completo"
  },
];

const initialForm = {
  nombre: "",
  telefono: "",
  email: "",
  fecha: "",
  hora: "",
  origen: "",
  destino: "",
  pasajeros: "1",
  observaciones: "",
  pago: "destino",
};

// ─── Reviews data ────────────────────────────────────────────────────────────

interface Review {
  id: number;
  nombre: string;
  origen: string;
  rating: number;
  comentario: string;
  fecha: string;
}

const SEED_REVIEWS: Review[] = [];

const STORAGE_KEY = "pl_reviews";
const EMAILS_KEY  = "pl_review_emails";

function loadReviews(): Review[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Review[]) : SEED_REVIEWS;
  } catch {
    return SEED_REVIEWS;
  }
}

function saveReviews(reviews: Review[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch {
    // storage unavailable — no-op
  }
}

function loadUsedEmails(): Set<string> {
  try {
    const stored = localStorage.getItem(EMAILS_KEY);
    return stored ? new Set(JSON.parse(stored) as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function registerEmail(email: string) {
  try {
    const emails = loadUsedEmails();
    emails.add(email.toLowerCase().trim());
    localStorage.setItem(EMAILS_KEY, JSON.stringify([...emails]));
  } catch {
    // no-op
  }
}

function isEmailUsed(email: string): boolean {
  return loadUsedEmails().has(email.toLowerCase().trim());
}

// ─── Navbar ─────────────────────────────────────────────────────────────────

function Navbar({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a2744]/97 backdrop-blur-md shadow-xl"
          : "bg-gradient-to-b from-[#1a2744]/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <ImageWithFallback
            src={logoImg}
            alt="Patagonia Livre — Traslado de Pasajeros"
            className="h-12 w-12 object-contain drop-shadow-md"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-bold text-base tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Patagonia Livre
            </span>
            <span className="text-white/50 text-[10px] tracking-widest uppercase">
              El Calafate · Argentina
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {link}
            </a>
          ))}
          <a
            href="#reservas"
            className="bg-[#2a9d8f] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#238b7e] transition-colors shadow"
          >
            Reservar ahora
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1.5 rounded"
          aria-label="Menú"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2744] border-t border-white/10 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-4 text-white/80 hover:text-white border-b border-white/10 font-medium text-base transition-colors"
            >
              {link}
              <ChevronRight size={16} className="text-white/30" />
            </a>
          ))}
          <a
            href="#reservas"
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 bg-[#2a9d8f] text-white py-3.5 rounded-xl font-semibold text-base"
          >
            <MessageCircle size={18} />
            Reservar ahora
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={HERO_IMG}
        alt="Parque Nacional Los Glaciares, Patagonia Argentina"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/75 via-[#1a2744]/45 to-[#1a2744]/85" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-24">
        {/* Logo hero */}
        <div className="flex justify-center mb-6">
          <ImageWithFallback
            src={logoImg}
            alt="Patagonia Livre — Traslado de Pasajeros"
            className="h-36 w-36 md:h-44 md:w-44 object-contain drop-shadow-2xl"
          />
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-[4.5rem] font-bold leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Tu viaje,<br />
          <em className="not-italic text-[#7ed8cf]">nuestro compromiso</em>
        </h1>

        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Traslados seguros, confiables y puntuales hacia aeropuertos, puertos
          y los destinos más espectaculares de la Patagonia austral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#reservas"
            className="inline-flex items-center justify-center gap-2 bg-[#2a9d8f] text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#238b7e] transition-colors shadow-lg shadow-[#2a9d8f]/30"
          >
            Reservar traslado <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 border border-white/35 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors"
          >
            Ver servicios
          </a>
        </div>

        {/* Quick trust bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-white/55 text-sm">
          {["Vehículos habilitados", "Seguimiento de vuelos", "24 / 7 disponible", "Pago al llegar"].map(
            (item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={13} className="text-[#2a9d8f]" />
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#f4f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Nuestros Servicios
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a2744]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            ¿A dónde te llevamos?
          </h2>
          <p className="text-[#6b7480] mt-4 max-w-xl mx-auto leading-relaxed">
            Cubrimos todos los traslados que necesitás en la Patagonia, con
            la comodidad y seguridad que merecés.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 border border-[#1a2744]/8 hover:border-[#2a9d8f]/40 hover:shadow-xl transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 bg-[#2a9d8f]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2a9d8f]/20 transition-colors">
                  <Icon size={22} className="text-[#2a9d8f]" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1a2744] mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {svc.title}
                </h3>
                <p className="text-xs text-[#2a9d8f] font-semibold mb-3 tracking-wide">
                  {svc.subtitle}
                </p>
                <p className="text-sm text-[#6b7480] leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Trust Pillars ───────────────────────────────────────────────────────────

function TrustPillars() {
  return (
    <section className="py-20 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Por qué elegirnos
          </p>
          <h2
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Viajá con tranquilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#2a9d8f]/12 rounded-full flex items-center justify-center mx-auto mb-5 border border-[#2a9d8f]/20">
                  <Icon size={26} className="text-[#2a9d8f]" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.label}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Booking Form ─────────────────────────────────────────────────────────────

function BookingSection() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const pagoLabel =
      form.pago === "online"
        ? "Online (tarjeta de crédito/débito)"
        : "Al llegar al destino (efectivo o transferencia)";

    const lines = [
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono || "—"}`,
      `Email: ${form.email || "—"}`,
      `Fecha: ${form.fecha}`,
      `Hora: ${form.hora}`,
      `Origen: ${form.origen}`,
      `Destino: ${form.destino}`,
      `Pasajeros: ${form.pasajeros}`,
      `Forma de pago: ${pagoLabel}`,
      ...(form.observaciones ? [`Observaciones: ${form.observaciones}`] : []),
    ];

    // 1 — WhatsApp (nueva pestaña, acción directa del usuario)
    const waMsg = `🚐 *Nueva Reserva – Patagonia Livre*\n\n` + lines.join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waMsg)}`, "_blank");

    // 2 — Email (enlace mailto disparado por un anchor oculto, sin popup)
    const subject = `Nueva Reserva – ${form.nombre} – ${form.fecha}`;
    const body =
      `Nueva solicitud de reserva recibida desde el sitio web de Patagonia Livre.\n\n` +
      lines.join("\n") +
      `\n\n---\nEnviado automáticamente desde el formulario de patagonialivre.com`;
    const anchor = document.createElement("a");
    anchor.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    anchor.click();

    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-[#1a2744]/15 rounded-xl px-4 py-3 text-sm bg-[#f9f7f3] text-[#1a2744] placeholder:text-[#1a2744]/35 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]/35 focus:border-[#2a9d8f]/50 transition-all";

  return (
    <section id="reservas" className="py-24 bg-[#f4f0e8]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Reservas
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a2744]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Solicitá tu traslado
          </h2>
          <p className="text-[#6b7480] mt-4 max-w-xl mx-auto">
            Completá el formulario y te contactamos a la brevedad. La reserva
            se enviará automáticamente por WhatsApp y por correo electrónico.
          </p>
          {/* Channel indicators */}
          <div className="inline-flex items-center gap-4 mt-5 bg-white border border-[#1a2744]/8 rounded-2xl px-5 py-3 shadow-sm">
            <span className="flex items-center gap-1.5 text-sm font-medium text-[#3a4a60]">
              <MessageCircle size={15} className="text-green-500" />
              WhatsApp
            </span>
            <span className="text-[#1a2744]/20">+</span>
            <span className="flex items-center gap-1.5 text-sm font-medium text-[#3a4a60]">
              <Mail size={15} className="text-[#1a2744]" />
              Correo electrónico
            </span>
            <span className="text-[#2a9d8f] text-xs font-bold uppercase tracking-wide">
              automático
            </span>
          </div>
        </div>

        {submitted ? (
          <div className="bg-white border border-[#2a9d8f]/25 rounded-3xl p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-[#2a9d8f]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-[#2a9d8f]" />
            </div>
            <h3
              className="text-2xl font-bold text-[#1a2744] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¡Reserva enviada!
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 border border-green-200 text-sm font-semibold px-4 py-2 rounded-full">
                <MessageCircle size={14} /> WhatsApp enviado
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#1a2744]/6 text-[#1a2744] border border-[#1a2744]/12 text-sm font-semibold px-4 py-2 rounded-full">
                <Mail size={14} /> Correo enviado
              </span>
            </div>
            <p className="text-[#6b7480] mb-8 max-w-sm mx-auto text-sm">
              Nos pondremos en contacto para confirmar tu reserva a la brevedad.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              className="bg-[#1a2744] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1a2744]/85 transition-colors"
            >
              Hacer otra reserva
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-[#1a2744]/8 rounded-3xl p-8 md:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Nombre completo *
                </label>
                <input name="nombre" value={form.nombre} onChange={handleChange} required
                  className={inputClass} placeholder="Ej: María González" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Pasajeros *
                </label>
                <div className="relative">
                  <select name="pasajeros" value={form.pasajeros} onChange={handleChange} required
                    className={inputClass + " appearance-none pr-8 cursor-pointer"}>
                    {["1","2","3","4","5","6","7","8+"].map((n) => (
                      <option key={n} value={n}>{n} {n === "1" ? "pasajero" : "pasajeros"}</option>
                    ))}
                  </select>
                  <Users size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a2744]/35 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Teléfono
                </label>
                <input name="telefono" value={form.telefono} onChange={handleChange}
                  className={inputClass} placeholder="+54 9 2902 000000" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Email
                </label>
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  className={inputClass} placeholder="correo@ejemplo.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Fecha del traslado *
                </label>
                <input name="fecha" type="date" value={form.fecha} onChange={handleChange} required
                  className={inputClass} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Hora *
                </label>
                <input name="hora" type="time" value={form.hora} onChange={handleChange} required
                  className={inputClass} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Punto de origen *
                </label>
                <input name="origen" value={form.origen} onChange={handleChange} required
                  className={inputClass} placeholder="Ej: Hotel Xelena, El Calafate" />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Destino *
                </label>
                <input name="destino" value={form.destino} onChange={handleChange} required
                  className={inputClass} placeholder="Ej: Aeropuerto El Calafate" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-3">
                  Forma de pago *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "destino", icon: Banknote, label: "Al llegar al destino", sub: "Efectivo o transferencia" },
                    { value: "online",  icon: CreditCard, label: "Pago online", sub: "Tarjeta de crédito / débito" },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    const selected = form.pago === opt.value;
                    return (
                      <label key={opt.value}
                        className={`flex items-center gap-4 border-2 rounded-2xl p-4 cursor-pointer transition-all select-none ${
                          selected ? "border-[#2a9d8f] bg-[#2a9d8f]/5" : "border-[#1a2744]/12 hover:border-[#2a9d8f]/35"
                        }`}>
                        <input type="radio" name="pago" value={opt.value} checked={selected}
                          onChange={handleChange} className="accent-[#2a9d8f] w-4 h-4" />
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${selected ? "bg-[#2a9d8f]/15" : "bg-[#1a2744]/6"}`}>
                          <Icon size={18} className={selected ? "text-[#2a9d8f]" : "text-[#1a2744]/50"} />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-[#1a2744]">{opt.label}</p>
                          <p className="text-xs text-[#6b7480]">{opt.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#1a2744] uppercase tracking-wide mb-2">
                  Observaciones
                </label>
                <textarea name="observaciones" value={form.observaciones} onChange={handleChange}
                  rows={3} className={inputClass + " resize-none"}
                  placeholder="Equipaje especial, número de vuelo, necesidades particulares..." />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#1a2744]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-[#6b7480]">
                <MessageCircle size={14} className="text-green-500 flex-shrink-0" />
                <span>WhatsApp</span>
                <span className="text-[#1a2744]/20">+</span>
                <Mail size={14} className="text-[#1a2744]/60 flex-shrink-0" />
                <span>Email — enviados automáticamente</span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#2a9d8f] hover:bg-[#238b7e] text-white px-10 py-4 rounded-xl font-semibold transition-colors shadow-md shadow-[#2a9d8f]/25 whitespace-nowrap"
              >
                <ArrowRight size={18} />
                Enviar reserva
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Excursions ───────────────────────────────────────────────────────────────

function Excursions() {
  const [selected, setSelected] = useState<typeof EXCURSIONS[0] | null>(null);

  return (
    <section id="excursiones" className="py-24 bg-[#1a2744]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Excursiones
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Destinos que enamoran
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto leading-relaxed">
            Ocasionalmente ofrecemos excursiones a los lugares más
            inolvidables de la Patagonia. Consultanos disponibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXCURSIONS.map((exc, i) => (
            <div
              key={i}
              onClick={() => setSelected(exc)}
              className="group rounded-2xl overflow-hidden bg-[#0f1825] border border-white/8 hover:border-[#2a9d8f]/40 hover:shadow-2xl hover:shadow-[#2a9d8f]/10 transition-all duration-400 cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden bg-[#0f1825]">
                <img
                  src={exc.img}
                  alt={exc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1825]/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#2a9d8f] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {exc.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {exc.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">
                  {exc.desc}
                </p>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-white/40 text-xs uppercase tracking-wide">{exc.priceLabel ?? "Precio por persona"}</span>
                  <span className="text-[#2a9d8f] font-bold text-lg">{exc.price}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[#2a9d8f] text-sm font-semibold group-hover:gap-3 transition-all">
                  Ver detalle <ChevronRight size={15} className="flex-shrink-0" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative bg-[#0f1825] rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden">
              <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1825] to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
              >
                <X size={18} />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#2a9d8f] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {selected.duration}
                </span>
              </div>
            </div>
            <div className="p-7">
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {selected.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                {selected.detail}
              </p>
              <div className="flex items-center justify-between mb-6 py-4 border-t border-b border-white/10">
                <span className="text-white/50 text-sm">{selected.priceLabel ?? "Precio por persona"}</span>
                <span className="text-[#2a9d8f] font-bold text-2xl">{selected.price}</span>
              </div>
              <a
                href="#reservas"
                onClick={() => setSelected(null)}
                className="block w-full bg-[#2a9d8f] hover:bg-[#238f82] text-white text-center font-semibold py-3.5 rounded-xl transition-colors"
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────

function StarDisplay({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          className={n <= rating ? "text-amber-400 fill-amber-400" : "text-[#1a2744]/15"}
        />
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hovered, setHovered] = useState(0);
  const labels = ["", "Malo", "Regular", "Bueno", "Muy bueno", "¡Excelente!"];
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          aria-label={`${n} estrella${n > 1 ? "s" : ""}`}
          className="transition-transform active:scale-90 hover:scale-115"
        >
          <Star
            size={32}
            className={
              n <= (hovered || value)
                ? "text-amber-400 fill-amber-400 drop-shadow-sm"
                : "text-white/80 fill-transparent hover:text-amber-200"
            }
          />
        </button>
      ))}
      {(hovered || value) > 0 && (
        <span className="ml-1 text-sm font-semibold text-[#2a9d8f]">
          {labels[hovered || value]}
        </span>
      )}
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es-AR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => loadReviews());
  const [newReview, setNewReview] = useState({
    nombre: "", email: "", origen: "", rating: 0, comentario: "", captcha: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simple math captcha generated once per mount
  const [captchaQ] = useState(() => {
    const a = Math.floor(Math.random() * 8) + 1;
    const b = Math.floor(Math.random() * 8) + 1;
    return { a, b, answer: a + b };
  });

  const avg = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setNewReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (newReview.rating === 0) {
      setError("Por favor seleccioná una calificación con las estrellas.");
      return;
    }
    if (!newReview.email.trim()) {
      setError("El correo electrónico es obligatorio para verificar tu identidad.");
      return;
    }
    if (isEmailUsed(newReview.email)) {
      setError("Ya existe una reseña registrada con este correo electrónico. Solo se permite una reseña por usuario.");
      return;
    }
    if (parseInt(newReview.captcha, 10) !== captchaQ.answer) {
      setError(`La respuesta a la verificación no es correcta. ¿Cuánto es ${captchaQ.a} + ${captchaQ.b}?`);
      return;
    }

    setError("");
    const review: Review = {
      id: Date.now(),
      nombre: newReview.nombre,
      origen: newReview.origen,
      rating: newReview.rating,
      comentario: newReview.comentario,
      fecha: new Date().toISOString().slice(0, 10),
    };
    const updated = [review, ...reviews];
    setReviews(updated);
    saveReviews(updated);
    registerEmail(newReview.email);
    setSubmitted(true);
    setNewReview({ nombre: "", email: "", origen: "", rating: 0, comentario: "", captcha: "" });
  }

  const inputClass =
    "w-full border border-[#1a2744]/15 rounded-xl px-4 py-3 text-sm bg-white text-[#1a2744] placeholder:text-[#1a2744]/30 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]/40 focus:border-[#2a9d8f]/50 transition-all";

  return (
    <section id="reseñas" className="py-24 bg-[#edeae2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Reseñas
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1a2744]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lo que dicen nuestros pasajeros
          </h2>
          {/* Average */}
          <div className="inline-flex items-center gap-3 mt-5 bg-white border border-[#1a2744]/8 rounded-2xl px-6 py-3 shadow-sm">
            <span
              className="text-3xl font-bold text-[#1a2744]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {avg.toFixed(1)}
            </span>
            <div className="flex flex-col items-start gap-0.5">
              <StarDisplay rating={Math.round(avg)} size={14} />
              <span className="text-xs text-[#6b7480]">
                {reviews.length} reseña{reviews.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Two-column layout: reviews left, form right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Review list (scrollable column) */}
          <div className="lg:col-span-3 flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-1"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#2a9d8f20 transparent" }}>
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-[#1a2744]/8 rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1a2744] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-bold text-sm">
                        {r.nombre.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-[#1a2744] text-sm leading-tight">{r.nombre}</p>
                      {r.origen && (
                        <p className="text-xs text-[#6b7480] flex items-center gap-1 mt-0.5">
                          <MapPin size={10} />{r.origen}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <StarDisplay rating={r.rating} size={13} />
                  </div>
                </div>
                <p className="text-sm text-[#3a4a60] leading-relaxed">"{r.comentario}"</p>
                <p className="text-xs text-[#6b7480]/60 pt-2 border-t border-[#1a2744]/6">
                  {formatDate(r.fecha)}
                </p>
              </div>
            ))}
          </div>

          {/* ── Write a review form (always visible) */}
          <div className="lg:col-span-2 sticky top-28">
            <div className="bg-[#1a2744] rounded-3xl p-7 shadow-xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#2a9d8f]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={36} className="text-[#2a9d8f]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    ¡Gracias por tu reseña!
                  </h3>
                  <p className="text-white/55 text-sm">
                    Tu opinión nos ayuda a seguir mejorando cada día.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Star size={16} className="text-amber-400 fill-amber-400" />
                      <p className="text-[#2a9d8f] uppercase tracking-widest text-xs font-semibold">
                        Tu opinión
                      </p>
                    </div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ¿Cómo fue tu experiencia?
                    </h3>
                    <p className="text-white/45 text-sm mt-1">
                      Dejá tu reseña y ayudá a otros viajeros.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Tu nombre *
                      </label>
                      <input
                        name="nombre"
                        value={newReview.nombre}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Ej: Ana García"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={newReview.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="correo@ejemplo.com"
                      />
                      <p className="text-white/30 text-[10px] mt-1.5 leading-snug">
                        Solo para verificación. No se publicará ni compartirá. Una reseña por correo.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Ciudad de origen
                      </label>
                      <input
                        name="origen"
                        value={newReview.origen}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Ej: Buenos Aires"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Calificación *
                      </label>
                      <StarPicker
                        value={newReview.rating}
                        onChange={(n) => setNewReview((prev) => ({ ...prev, rating: n }))}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Tu comentario *
                      </label>
                      <textarea
                        name="comentario"
                        value={newReview.comentario}
                        onChange={handleChange}
                        required
                        rows={3}
                        className={inputClass + " resize-none"}
                        placeholder="Contanos cómo fue tu viaje con Patagonia Livre..."
                      />
                    </div>

                    {/* Captcha */}
                    <div className="bg-white/8 border border-white/10 rounded-xl p-4">
                      <label className="block text-xs font-bold text-white/60 uppercase tracking-wide mb-2">
                        Verificación: ¿Cuánto es {captchaQ.a} + {captchaQ.b}? *
                      </label>
                      <input
                        name="captcha"
                        type="number"
                        value={newReview.captcha}
                        onChange={handleChange}
                        required
                        className={inputClass + " w-24"}
                        placeholder="..."
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-xs bg-red-400/10 border border-red-400/20 rounded-lg px-3 py-2 leading-snug">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-[#2a9d8f] text-white py-4 rounded-xl font-bold text-base hover:bg-[#238b7e] transition-colors shadow-lg shadow-[#2a9d8f]/30"
                    >
                      Publicar reseña
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const waUrl = `https://wa.me/${WHATSAPP}`;
  const mailUrl = `mailto:${EMAIL}`;

  return (
    <section id="contacto" className="py-24 bg-[#f4f0e8]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-[#2a9d8f] uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Contacto
          </p>
          <h2
            className="text-4xl font-bold text-[#1a2744]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Estamos para ayudarte
          </h2>
          <p className="text-[#6b7480] mt-4 max-w-md mx-auto">
            Comunicate con nosotros por el medio que prefieras. Respondemos
            rápido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* WhatsApp */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center bg-white border border-[#1a2744]/8 rounded-2xl p-8 hover:border-green-300 hover:shadow-xl hover:shadow-green-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
              <MessageCircle size={28} className="text-green-600" />
            </div>
            <h3
              className="font-bold text-[#1a2744] mb-1 text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WhatsApp
            </h3>
            <p className="text-xs text-[#6b7480] mb-3 uppercase tracking-wide">
              Atención inmediata
            </p>
            <span className="text-[#2a9d8f] font-bold">
              +54 9 2902 402988
            </span>
          </a>

          {/* Email */}
          <a
            href={mailUrl}
            className="group flex flex-col items-center text-center bg-white border border-[#1a2744]/8 rounded-2xl p-8 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
              <Mail size={28} className="text-blue-600" />
            </div>
            <h3
              className="font-bold text-[#1a2744] mb-1 text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Email
            </h3>
            <p className="text-xs text-[#6b7480] mb-3 uppercase tracking-wide">
              Respondemos en 24 hs
            </p>
            <span className="text-[#2a9d8f] font-bold break-all text-sm">
              {EMAIL}
            </span>
          </a>

          {/* Ubicación */}
          <div className="flex flex-col items-center text-center bg-white border border-[#1a2744]/8 rounded-2xl p-8">
            <div className="w-16 h-16 bg-[#2a9d8f]/10 rounded-full flex items-center justify-center mb-4">
              <MapPin size={28} className="text-[#2a9d8f]" />
            </div>
            <h3
              className="font-bold text-[#1a2744] mb-1 text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ubicación
            </h3>
            <p className="text-xs text-[#6b7480] mb-3 uppercase tracking-wide">
              Donde nos necesités
            </p>
            <span className="text-[#2a9d8f] font-bold text-center">
              El Calafate, Santa Cruz
              <br />
              Patagonia, Argentina
            </span>
          </div>
        </div>

        {/* WhatsApp CTA banner */}
        <div className="bg-[#1a2744] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white font-bold text-xl md:text-2xl mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ¿Necesitás un traslado urgente?
            </h3>
            <p className="text-white/55 text-sm">
              Escribinos por WhatsApp y te respondemos al instante.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-md shadow-green-900/20 whitespace-nowrap"
          >
            <MessageCircle size={20} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="bg-[#0d1520] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 mb-8 border-b border-white/8">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={logoImg}
              alt="Patagonia Livre"
              className="h-10 w-10 object-contain opacity-90"
            />
            <div>
              <span
                className="text-white font-bold block"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Patagonia Livre
              </span>
              <span className="text-white/35 text-xs tracking-widest uppercase">
                El Calafate · Argentina
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/45 hover:text-white/80 text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/8 hover:bg-[#2a9d8f]/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} className="text-white/60" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-9 h-9 bg-white/8 hover:bg-[#2a9d8f]/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail size={16} className="text-white/60" />
            </a>
          </div>
        </div>

        <p className="text-white/30 text-xs text-center">
          &copy; {new Date().getFullYear()} Patagonia Livre — Traslados y Excursiones en la Patagonia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // ── SEO: meta tags + structured data ──────────────────────────────────────
  useEffect(() => {
    // Title
    document.title = "Patagonia Livre | Traslados y Excursiones en El Calafate, Patagonia Argentina";

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.content = content;
    };

    // Remove any noindex injected by the hosting platform
    document.querySelectorAll('meta[name="robots"]').forEach(el => el.remove());
    const robotsMeta = document.createElement("meta");
    robotsMeta.setAttribute("name", "robots");
    robotsMeta.content = "index, follow";
    document.head.insertBefore(robotsMeta, document.head.firstChild);

    // Standard SEO
    setMeta("description", "Traslados de pasajeros seguros, confiables y puntuales en El Calafate, Santa Cruz, Argentina. Aeropuerto, puerto y destinos turísticos: Glaciar Perito Moreno, El Chaltén, Torres del Paine. Reservá online.");
    setMeta("keywords", "traslados El Calafate, transfer aeropuerto El Calafate, remis El Calafate, excursiones Patagonia, Perito Moreno traslado, Patagonia Livre, turismo Santa Cruz Argentina");
    setMeta("language", "es");
    setMeta("author", "Patagonia Livre");
    setMeta("geo.region", "AR-Z");
    setMeta("geo.placename", "El Calafate, Santa Cruz, Argentina");

    // Open Graph (redes sociales y previsualización)
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://www.patagonialivre.ar/", true);
    setMeta("og:title", "Patagonia Livre | Traslados en El Calafate, Patagonia", true);
    setMeta("og:description", "Traslados seguros y puntuales al aeropuerto, puerto y glaciares de El Calafate. Reservá online por WhatsApp o email.", true);
    setMeta("og:locale", "es_AR", true);
    setMeta("og:site_name", "Patagonia Livre", true);

    // Twitter / X
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Patagonia Livre | Traslados en El Calafate");
    setMeta("twitter:description", "Traslados seguros al aeropuerto, puerto y glaciares de El Calafate, Patagonia Argentina.");

    // JSON-LD: negocio local (Google lo usa para el panel de knowledge)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.patagonialivre.ar/",
      "url": "https://www.patagonialivre.ar/",
      "name": "Patagonia Livre",
      "description": "Traslados de pasajeros y excursiones en El Calafate, Patagonia Argentina. Aeropuerto, puerto y destinos turísticos.",
      "telephone": "+5492902402988",
      "email": "patagonialivre@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "El Calafate",
        "addressRegion": "Santa Cruz",
        "addressCountry": "AR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-50.3374",
        "longitude": "-72.2746"
      },
      "areaServed": [
        "El Calafate", "El Chaltén", "Torres del Paine", "Santa Cruz", "Patagonia"
      ],
      "serviceType": [
        "Traslado aeropuerto", "Transfer turístico", "Excursiones Patagonia",
        "Traslado puerto", "Remis El Calafate"
      ],
      "priceRange": "$$",
      "openingHours": "Mo-Su 00:00-23:59",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "reservations",
        "telephone": "+5492902402988",
        "availableLanguage": ["Spanish", "English"]
      }
    };

    let script = document.getElementById("ld-json") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => { /* meta tags se quedan, se limpian al desmontar el app completo */ };
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = ""; };
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f4f0e8] text-[#1a2744] scroll-smooth"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <LanguageSelector />
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Services />
      <TrustPillars />
      <BookingSection />
      <Excursions />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
