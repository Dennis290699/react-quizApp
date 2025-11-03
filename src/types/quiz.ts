export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[] | Record<number, string>; 
  explanation: string;
  image?: string;
  type: 'multiple' | 'single' | 'matching';
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: QuizQuestion[];
}

export interface Subject {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  categories: QuizCategory[];
}
