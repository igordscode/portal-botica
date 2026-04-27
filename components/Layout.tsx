import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Beaker, ShieldCheck, GraduationCap, Lock } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Dark Mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Warning Banner */}
      <div className="bg-botica-slate text-slate-300 text-xs py-1 px-4 text-center font-medium tracking-wide">
        ÁREA RESTRINGIDA A PROFESIONALES DE LA SALUD • DIRECCIÓN TÉCNICA: Q.F. REGENTE
      </div>

      {/* Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-slate-800' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded shadow-sm p-1 flex items-center justify-center">
                   <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNGIrpziYfhM9HcIYJfYMx0edh-YRdCUBq5zuLbkv2mis4Cll0uAtR_Ke2UMMCjWq-P8YFHiR6oPd8iJIV2Q3F_ntm1ndjKfViRm0u-d3n5qyVhnCiVTdcM5zreIV-dhoBF8iJeSTpx13pUK-8tqWnBGUrOMRTnxNcou4N9WnPjnWytxliHck5kn4izeysXK_ZkJMvtuPHHwBKxfKyBDJhchbfNoneYoxWOfdgRPyp12DoQ47lnW2oNjMysVVj2HLGpoPM3JXcdLw" 
                    alt="Botica Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-serif font-bold text-botica-navy dark:text-white leading-none">
                    Botica Guaraní
                  </h1>
                  <span className="text-xs uppercase tracking-[0.2em] text-botica-gold font-medium">
                    Plataforma Científica
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-botica-navy dark:text-botica-gold font-semibold' 
                        : 'text-slate-600 dark:text-slate-400 hover:text-botica-navy dark:hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <NavLink 
                to="/para-profissionais"
                className="px-5 py-2.5 rounded-full bg-botica-navy text-white text-sm font-medium shadow-lg shadow-botica-navy/20 hover:bg-opacity-90 transition-all hover:-translate-y-0.5"
              >
                Área del Prescriptor
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setIsDark(!isDark)}
                className="p-2 text-slate-500"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 absolute w-full animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-botica-navy/5 text-botica-navy dark:text-botica-gold'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-botica-slate text-white border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white rounded p-0.5 flex items-center justify-center">
                   <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSgmygzqQJ3fdscI0610E_9Dhi9gq-QrWl_pxHZZnow9FMHrumrakQ4Md34_22UErLVpFa1mFLMO1fPMxQWTTfQw_iRprrkBvl86PNjG8szbx1RbTTrGcMXnoUTTcZpiALIqCEuEyDIzyIz-ngafZs_TZ4hGzlc6i1pJr-rXdDZl7LuEsj8reuTpVsUtfR-7xF9dk6aaQTiV575PVujAjM9MXNU2byovLIXP2zJ0ndt6dbjIeQJfqvQGnotYQTE22f6-5iWhH0S1M" 
                    alt="Botica Logo Small" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-serif text-lg font-bold">Botica Guaraní</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Referencia en manipulación magistral en Paraguay. 
                Aliando la sabiduría tradicional al rigor farmacéutico moderno.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-botica-gold tracking-wider uppercase mb-4">Plataforma</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><NavLink to="/protocolos" className="hover:text-white transition-colors">Protocolos</NavLink></li>
                <li><NavLink to="/biblioteca-de-ativos" className="hover:text-white transition-colors">Biblioteca de Activos</NavLink></li>
                <li><a href="#" className="hover:text-white transition-colors">Base Científica</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-botica-gold tracking-wider uppercase mb-4">Legal & Compliance</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Lock size={14} /> Aviso Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dirección Técnica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Normas DINAVISA</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-botica-gold tracking-wider uppercase mb-4">Contacto Profesional</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>cientifico@boticaguarani.com.py</li>
                <li>+595 9XX XXX XXX</li>
                <li className="pt-2 text-xs text-slate-500">Atención exclusiva a prescriptores.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8">
            <div className="bg-slate-800/50 rounded-lg p-6 flex flex-col md:flex-row gap-4 items-start">
              <ShieldCheck className="text-botica-gold shrink-0" size={32} />
              <div className="text-xs text-slate-400 space-y-2">
                <p className="font-semibold text-white">Importante - Responsabilidad Técnica:</p>
                <p>El contenido de esta plataforma se destina exclusivamente a profesionales de la salud. La formulación final es responsabilidad del prescriptor en conjunto con la validación de la Dirección Técnica de la Química Farmacéutica responsable.</p>
                <p>Las informaciones aquí contenidas tienen carácter educacional. Consulte siempre a un profesional habilitado.</p>
              </div>
            </div>
            <p className="text-center text-slate-600 text-xs mt-8">© 2024 Botica Guaraní. Asunción, Paraguay.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;