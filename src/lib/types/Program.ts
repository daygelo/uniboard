export interface Program {
  name: string;
  category: string;
  school: string;
  requirements: { [key: string]: string };
}