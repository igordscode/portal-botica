export interface Protocol {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  objective: string;
  targetAudience: string[];
  fundamentals: string;
  activeClasses: string[];
  evidenceLevel: 'A' | 'B' | 'C';
  tags: string[];
}

export interface Ingredient {
  id: string;
  name: string;
  scientificName: string;
  category: string;
  mechanism: string;
  commonDosageRange?: string; // Informational only
}

export interface NavItem {
  label: string;
  path: string;
}