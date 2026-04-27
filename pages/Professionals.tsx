import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserCheck, FileText, Phone, Mail, ShieldCheck, Beaker, MessageSquare, Award, Brain } from 'lucide-react';

const Professionals: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Enfoque Técnico y Regulatorio */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="text-botica-navy dark:text-botica-gold" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Área del Prescriptor
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Soporte técnico-científico directo de la Dirección Técnica para médicos y profesionales de la salud. 
            Garantía de calidad y cumplimiento normativo en cada formulación.
          </p>
        </div>

        {/* Las 2 Cartas Originales de Cumplimiento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-botica-cream dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <UserCheck className="text-botica-navy dark:text-botica-gold mb-6" size={32} />
            <h3 className="text-xl font-bold mb-4 dark:text-white">Material Científico</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Acceso a láminas técnicas, sugerencias de fórmulas detalladas, monografías validadas por la Regencia y soporte en medicina basada en evidencias.
            </p>
            <button className="text-botica-navy dark:text-botica-gold font-semibold text-sm hover:underline flex items-center gap-2">
              Solicitar Biblioteca Técnica →
            </button>
          </div>

          <div className="bg-botica-cream dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <Beaker className="text-botica-navy dark:text-botica-gold mb-6" size={32} />
            <h3 className="text-xl font-bold mb-4 dark:text-white">Consultoría Farmacotécnica</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Discusión de casos complejos, viabilidad de activos raros y desarrollo de vehículos personalizados directamente con nuestra Química Farmacéutica.
            </p>
            <button className="text-botica-navy dark:text-botica-gold font-semibold text-sm hover:underline flex items-center gap-2">
              Hablar con Regencia →
            </button>
          </div>
        </div>

        {/* Ecosistema de Colaboración con IA */}
        <div className="mt-24 pt-16 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold dark:text-white mb-4">Ecosistema de Colaboración</h2>
            <p className="text-slate-500">Alianzas estratégicas impulsadas por ciencia de datos y farmacología de precisión.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-botica-gold/30">
              <Brain className="mx-auto text-botica-navy dark:text-botica-gold mb-4" size={28} />
              <h4 className="font-bold mb-2 dark:text-white">Inteligencia Clínica</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Soporte de nuestra Sofia AI para verificación de sinergias y optimización de biodisponibilidad.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-botica-gold/30">
              <Award className="mx-auto text-botica-gold mb-4" size={28} />
              <h4 className="font-bold mb-2 dark:text-white">Soporte de Adherencia</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Monitoreo inteligente para facilitar el cumplimiento del tratamiento por parte del paciente.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-botica-gold/30">
              <FileText className="mx-auto text-botica-navy dark:text-botica-gold mb-4" size={28} />
              <h4 className="font-bold mb-2 dark:text-white">I+D Colaborativo</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Co-creación de protocolos exclusivos basados en su experiencia clínica y farmacogenómica.</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-botica-gold/30">
              <MessageSquare className="mx-auto text-botica-gold mb-4" size={28} />
              <h4 className="font-bold mb-2 dark:text-white">Divulgación</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Espacio editorial para sus estudios, proyectando su autoridad a nuestra red de pacientes.</p>
            </div>
          </div>
        </div>

        {/* Banner de Contacto */}
        <div className="bg-botica-slate rounded-2xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-serif font-bold mb-6">Canal Directo - Q.F. Regente</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Mail size={20} className="text-botica-gold" />
                <span className="text-sm md:text-base">direcao.tecnica@boticaguarani.com.py</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone size={20} className="text-botica-gold" />
                <span className="text-sm md:text-base">+595 9XX XXX XXX</span>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 border-t border-slate-700 pt-6 inline-block">
              Área Restringida - Atención exclusiva para discusión de casos clínicos y farmacotécnicos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Professionals;