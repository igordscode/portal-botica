import { Protocol, Ingredient, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home Científica', path: '/' },
  { label: 'Protocolos', path: '/protocolos' },
  { label: 'Biblioteca de Activos', path: '/biblioteca-de-ativos' },
  { label: 'Para Profesionales', path: '/para-profissionais' },
];

export const PROTOCOLS: Protocol[] = [
  {
    id: '1',
    slug: 'performance-cognitiva',
    title: 'Performance Cognitiva & Nootrópicos',
    shortDescription: 'Optimización de neurotransmisores para enfoque, memoria y claridad mental.',
    objective: 'Modular la acetilcolina y dopamina para sostener estados de flujo mental sin la ansiedad típica de los estimulantes.',
    targetAudience: ['Ejecutivos con alta carga mental', 'Estudiantes en periodo preparatorio', 'Adultos mayores con deterioro cognitivo leve'],
    fundamentals: 'La base de este protocolo reside en la sinergia entre precursores de colina y adaptógenos que reducen el cortisol, permitiendo la neuroplasticidad.',
    activeClasses: ['Nootrópicos', 'Adaptógenos', 'Precursores de Fosfolípidos'],
    evidenceLevel: 'A',
    tags: ['Enfoque', 'Memoria', 'Neuroprotección']
  },
  {
    id: '2',
    slug: 'sono-e-recuperacao',
    title: 'Arquitectura del Sueño & Recuperación',
    shortDescription: 'Inducción fisiológica del sueño REM y profundo a través de la regulación del ciclo circadiano.',
    objective: 'Restaurar la homeostasis del GABA y melatonina endógena.',
    targetAudience: ['Insomnio crónico', 'Trabajadores nocturnos', 'Atletas de alto rendimiento'],
    fundamentals: 'Enfocado en reducir la latencia del sueño y disminuir los despertares nocturnos a través de la relajación muscular y neural.',
    activeClasses: ['Minerales Quelados', 'Aminoácidos Inhibitorios', 'Fitoterápicos Sedantes'],
    evidenceLevel: 'A',
    tags: ['Sueño', 'Relajación', 'Ciclo Circadiano']
  },
  {
    id: '3',
    slug: 'longevidade',
    title: 'Longevidad Celular & Mitocondrial',
    shortDescription: 'Soporte a la biogénesis mitocondrial y combate al estrés oxidativo.',
    objective: 'Mejorar la eficiencia energética celular y reducir la inflamación crónica de bajo grado (inflammaging).',
    targetAudience: ['Preventivo 40+', 'Pacientes con fatiga crónica'],
    fundamentals: 'Activación de las vías de las sirtuinas y AMPK.',
    activeClasses: ['Polifenoles', 'Coenzimas', 'Antioxidantes'],
    evidenceLevel: 'B',
    tags: ['Anti-aging', 'Energía', 'Mitocondria']
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    id: 'mg',
    name: 'Magnesio Treonato',
    scientificName: 'Magnesium L-Threonate',
    category: 'Mineral',
    mechanism: 'Única forma de magnesio capaz de atravesar la barrera hematoencefálica eficientemente, aumentando la densidad sináptica.'
  },
  {
    id: 'om3',
    name: 'Omega-3 (DHA High)',
    scientificName: 'Docosahexaenoic acid',
    category: 'Ácido Graso',
    mechanism: 'Componente estructural de las membranas neuronales, esencial para la fluidez de membrana y señalización celular.'
  },
  {
    id: 'ash',
    name: 'Ashwagandha KSM-66',
    scientificName: 'Withania somnifera',
    category: 'Adaptógeno',
    mechanism: 'Modula el eje HPA, reduciendo los niveles de cortisol sérico y mejorando la resiliencia al estrés.'
  },
  {
    id: 'the',
    name: 'L-Teanina',
    scientificName: 'Gamma-glutamylethylamide',
    category: 'Aminoácido',
    mechanism: 'Aumenta ondas Alpha cerebrales, promoviendo relajación alerta y antagonizando efectos colaterales de la cafeína.'
  }
];