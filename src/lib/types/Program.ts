export interface Program {
  name: string;
  school: string;
  category: string;
  type: 'Certificate' | 'Bachelor\'s' | 'Master\'s' | 'Doctorate';
  classes: {
    label: string,
    type?: 'math' | 'english' | 'physics' | 'chemistry' | 'biology'
  }[];
}