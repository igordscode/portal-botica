import React, { useState } from 'react';
import { INGREDIENTS } from '../constants';
import { Search, Database } from 'lucide-react';

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIngredients = INGREDIENTS.filter(ing => 
    ing.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ing.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-botica-cream dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
            Biblioteca de Activos
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
            Compendio de materias primas de alta pureza, con foco en sus mecanismos de acción y farmacocinética.
          </p>
          
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Buscar por activo o categoría..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-botica-navy dark:focus:ring-botica-gold outline-none shadow-sm transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredIngredients.map((item) => (
            <div key={item.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-botica-navy/50 transition-colors shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-botica-navy dark:text-botica-gold bg-botica-navy/5 dark:bg-botica-gold/10 px-2 py-1 rounded">
                  {item.category}
                </span>
                <Database size={16} className="text-slate-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-slate-500 italic mb-4 font-serif">
                {item.scientificName}
              </p>
              
              <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  <span className="font-semibold block mb-1 text-slate-900 dark:text-slate-200">Mecanismo de Acción:</span>
                  {item.mechanism}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredIngredients.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            Ningún activo encontrado para "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
};

export default Library;