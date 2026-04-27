import React from 'react';
import { NavLink } from 'react-router-dom';
import { GraduationCap, Microscope, Users, ArrowRight, BookOpen } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Laboratory Glassware" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-botica-cream/90 via-botica-cream/95 to-botica-cream dark:from-slate-900/80 dark:via-slate-900/95 dark:to-slate-900"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="py-1.5 px-4 rounded-full bg-botica-navy/5 dark:bg-botica-navy/30 border border-botica-navy/10 dark:border-botica-navy/50 text-botica-navy dark:text-blue-200 text-xs font-bold tracking-widest uppercase">
              Dirección Técnica: Química Farmacéutica
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-8 leading-tight animate-fade-in-up delay-100">
            Ciencia Moderna & <br className="hidden md:block"/> 
            Tradición <span className="text-botica-navy dark:text-botica-gold italic">Guaraní</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-light animate-fade-in-up delay-200">
            Plataforma exclusiva para prescriptores, uniendo el rigor farmacéutico a las necesidades individuales de cada paciente en Paraguay.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
            <NavLink 
              to="/protocolos"
              className="px-8 py-4 rounded-full bg-botica-navy text-white font-medium hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Acceder a Base Científica <ArrowRight size={18} />
            </NavLink>
            <NavLink 
              to="/para-profissionais"
              className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-300"
            >
              Hablar con la Farmacéutica
            </NavLink>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-white dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white">Excelencia Magistral</h2>
            <div className="w-24 h-1 bg-botica-gold mx-auto mt-6 mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nuestra estructura es supervisada por Química Farmacéutica calificada para garantizar seguridad y eficacia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard 
              icon={<GraduationCap size={32} />}
              title="Apoyo Técnico"
              description="Soporte directo de la Dirección Técnica para dudas sobre dosis, vehículos e interacciones medicamentosas."
            />
            <PillarCard 
              icon={<Microscope size={32} />}
              title="Calidad Certificada"
              description="Materias primas con certificados de análisis y procesos conformes a las normas vigentes."
            />
            <PillarCard 
              icon={<Users size={32} />}
              title="Alianza Médica"
              description="Trabajamos en conjunto con el prescriptor para desarrollar la mejor solución terapéutica."
            />
          </div>
        </div>
      </section>

      {/* Feature Split Section */}
      <section className="py-24 bg-botica-cream dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative mb-12 lg:mb-0 order-2 lg:order-1">
              <div className="absolute -inset-4 bg-botica-navy/10 dark:bg-botica-gold/10 rounded-2xl rotate-2"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDorDW0nN95qAmAgAWrHUP57_flU78hiKlIL5dm8VNnm8Eiax0AIqu233XtZYPdnRcNuxf__zIunvFY3J5OkJUStpPQoxxNTSABthgYCESX4vdNTdAvVllknX9nNvD8MZvAl4YSfgYDIBVpGV0R06bFrqYqVGn1LVQuGyJ0Zi9QFRBhMB6t3qeX10hgcZqrk3JWjNE_j_5uTFkPJcHG9D7-OBm9WYRjONRL3G-QR51z-xPnixnUj5Mk21-jvfqcmvQwe-fOWNkv3o8" 
                alt="Pesquisa Científica" 
                className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-8">
                El Valor de la Farmacia Magistral
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300">
                <p>
                  La manipulación permite rescatar la individualidad del tratamiento. En Botica Guaraní, cada fórmula es preparada bajo supervisión directa de profesional habilitado.
                </p>
                <p className="border-l-4 border-botica-gold pl-6 italic">
                  "El arte de la farmacia antigua con la seguridad de la química moderna."
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Ajuste fino de dosis para pediatría y geriatría",
                    "Asociación de múltiples activos en una cápsula",
                    "Exención de excipientes alergénicos (sin gluten/lactosa)"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-botica-navy/10 flex items-center justify-center text-botica-navy dark:text-botica-gold">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-botica-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <StatItem value="Local" label="Laboratorio Propio" />
            <StatItem value="Q.F." label="Supervisión Integral" />
            <StatItem value="150+" label="Fórmulas Exclusivas" />
            <StatItem value="100%" label="Rigor Técnico" />
          </div>
        </div>
      </section>
    </>
  );
};

const PillarCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-botica-navy/30 dark:hover:border-botica-gold/50 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
    <div className="w-14 h-14 bg-botica-navy/5 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 text-botica-navy dark:text-botica-gold group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const StatItem: React.FC<{ value: string, label: string }> = ({ value, label }) => (
  <div className="p-4">
    <div className="text-4xl md:text-5xl font-serif font-bold mb-2 text-botica-gold">{value}</div>
    <div className="text-blue-100/80 text-xs font-bold uppercase tracking-widest">{label}</div>
  </div>
);

export default Home;