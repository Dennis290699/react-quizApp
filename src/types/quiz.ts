export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[]; // Permite tanto un solo índice como un array
  explanation: string;
  image?: string;
  type: 'multiple' | 'single';
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: QuizQuestion[];
}
