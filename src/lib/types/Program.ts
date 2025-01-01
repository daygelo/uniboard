import categories from '$lib/categories';

export interface Program {
  name: string;
  school: string;
  category: keyof typeof categories;
  type: 'Certificate' | 'Bachelor\'s' | 'Master\'s' | 'Doctorate';
  icon: string;
  classes: {
    label: string,
    type?: 'math' | 'english' | 'physics' | 'chemistry' | 'biology'
  }[];
}