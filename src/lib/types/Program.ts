import categories from '$lib/categories';

export interface Program {
  id: string;
  name: string;
  school: string;
  category: keyof typeof categories;
  type: 'Certificate' | 'Bachelor\'s' | 'Master\'s' | 'Doctorate';
  icon: string;
  classes: {
    label: string,
    type?: 'math' | 'english' | 'physics' | 'chemistry' | 'biology'
  }[];
  grades?: { [key: string]: number },
  other?: string[];
  sources?: string[];
}