import React from 'react';
import { NavLink } from 'react-router-dom';
import { PROTOCOLS } from '../constants';
import { ArrowRight, Activity, Book } from 'lucide-react';

const Protocols: React.FC = () => {
  return (
    <section className="py-20 bg-botica-cream dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-botica-gold font-bold uppercase tracking-widest text-xs">Aplicaciones Clínicas</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mt-4 mb-6">
            Protocolos Magistrales
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Directrices terapéuticas completas, fundamentadas en fisiología y evidencias clínicas, listas para personalización por el prescriptor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROTOCOLS.map((protocol) => (
            <div key={protocol.id} className="flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group">
              <div className="h-2 bg-botica-navy group-hover:bg-botica-gold transition-colors duration-300"></div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-semibold rounded-full text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                    Nivel de Evidencia: {protocol.evidenceLevel}
                  </div>
                  <Activity size={20} className="text-botica-navy dark:text-botica-gold opacity-50" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3 group-hover:text-botica-navy dark:group-hover:text-botica-gold transition-colors">
                  {protocol.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
                  {protocol.shortDescription}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {protocol.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <NavLink 
                    to={`/protocolos/${protocol.slug}`}
                    className="w-full py-3 rounded-lg border border-botica-navy text-botica-navy dark:border-slate-600 dark:text-slate-300 font-medium text-sm flex items-center justify-center gap-2 hover:bg-botica-navy hover:text-white dark:hover:bg-slate-700 transition-colors"
                  >
                    Ver Protocolo Completo <ArrowRight size={16} />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-botica-navy rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              ¿No encontró lo que busca?
            </h3>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Nuestro equipo científico puede ayudar en el desarrollo de fórmulas personalizadas para casos complejos.
            </p>
            <button className="px-6 py-3 bg-white text-botica-navy font-semibold rounded-full hover:bg-botica-gold hover:text-white transition-colors">
              Hablar con Farmacéutico
            </button>
          </div>
          <Book className="absolute -bottom-10 -right-10 text-white opacity-5 w-64 h-64" />
        </div>
      </div>
    </section>
  );
};

export default Protocols;