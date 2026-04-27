import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { PROTOCOLS } from '../constants';
import { ArrowLeft, Target, Users, FlaskConical, FileText, AlertCircle } from 'lucide-react';

const ProtocolDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const protocol = PROTOCOLS.find(p => p.slug === slug);

  if (!protocol) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Protocolo no encontrado</h2>
        <NavLink to="/protocolos" className="text-botica-navy hover:underline">Volver a la lista</NavLink>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-botica-cream dark:bg-slate-900 pb-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NavLink to="/protocolos" className="inline-flex items-center text-sm text-slate-500 hover:text-botica-navy mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Volver a los Protocolos
          </NavLink>
          
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 bg-botica-navy text-white text-xs font-bold rounded uppercase tracking-wider">
              Protocolo Clínico
            </span>
            <span className="px-3 py-1 bg-botica-gold/20 text-botica-gold dark:text-yellow-500 text-xs font-bold rounded uppercase tracking-wider">
              Evidencia {protocol.evidenceLevel}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {protocol.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            {protocol.shortDescription}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 gap-12">
        
        {/* Objective Section */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-botica-navy dark:text-blue-300">
              <Target size={20} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Objetivo Terapéutico</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {protocol.objective}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Audience */}
           <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-300">
                <Users size={20} />
              </div>
              <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Público Indicado</h2>
            </div>
            <ul className="space-y-3">
              {protocol.targetAudience.map((audience, i) => (
                <li key={i} className="flex items-start text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 mr-3 flex-shrink-0"></span>
                  {audience}
                </li>
              ))}
            </ul>
          </section>

          {/* Classes */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-700 dark:text-purple-300">
                <FlaskConical size={20} />
              </div>
              <h2 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Clases de Activos</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {protocol.activeClasses.map((cls, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-sm font-medium">
                  {cls}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <NavLink to="/biblioteca-de-ativos" className="text-sm text-botica-navy dark:text-botica-gold hover:underline font-medium">
                Consultar monografías en la biblioteca →
              </NavLink>
            </div>
          </section>
        </div>

        {/* Fundamentals */}
        <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-700 dark:text-orange-300">
              <FileText size={20} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">Fundamentos Fisiológicos</h2>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
              {protocol.fundamentals}
            </p>
            <p className="text-sm text-slate-500 mt-4 italic">
              *Referencias bibliográficas completas disponibles mediante solicitud profesional.
            </p>
          </div>
        </section>

        {/* Disclaimer Box */}
        <div className="bg-botica-slate rounded-xl p-6 flex gap-4 border-l-4 border-botica-gold">
          <AlertCircle className="text-botica-gold shrink-0 mt-1" size={24} />
          <div>
            <h4 className="text-white font-bold mb-1">Aviso de Responsabilidad</h4>
            <p className="text-slate-300 text-sm">
              Este protocolo es una guía educacional basada en evidencias. La dosis, forma farmacéutica y duración del tratamiento deben ser definidas por el prescriptor habilitado, considerando las individualidades bioquímicas del paciente. No hay venta de medicamentos en este sitio.
            </p>
          </div>
        </div>

      </div>
    </article>
  );
};

export default ProtocolDetail;