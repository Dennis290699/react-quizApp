import { create } from 'zustand';
import { QuizQuestion } from '../types/quiz';

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: (number | number[])[];
  mode: 'practice' | 'exam';
  questions: QuizQuestion[];
  originalQuestions: QuizQuestion[];
  isComplete: boolean;
}

interface QuizStore extends QuizState {
  initializeQuiz: (questions: QuizQuestion[], mode: 'practice' | 'exam') => void;
  answerQuestion: (answerIndex: number | number[]) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
  clearAnswers: () => void;
}

const shuffleQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  return [...questions].sort(() => Math.random() - 0.5);
};

const getExamQuestions = (questions: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = shuffleQuestions(questions);
  return shuffled.slice(0, 20); // Take first 20 questions for exam mode
};

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestion: 0,
  score: 0,
  answers: [],
  mode: 'practice',
  questions: [],
  originalQuestions: [],
  isComplete: false,

  initializeQuiz: (questions, mode) => {
    const selectedQuestions = mode === 'exam' 
      ? getExamQuestions(questions)
      : [...questions];
    
    set({
      questions: selectedQuestions,
      originalQuestions: questions,
      mode,
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
    });
  },

  answerQuestion: (answerIndex) => {
    set((state) => {
      const question = state.questions[state.currentQuestion];
      let isCorrect = false;

      if (question.type === 'multiple' && Array.isArray(answerIndex)) {
        const correctAnswers = question.correctAnswer as number[];
        isCorrect = correctAnswers.every((answer) => answerIndex.includes(answer)) &&
                    correctAnswers.length === answerIndex.length;
      } else if (typeof answerIndex === 'number') {
        isCorrect = question.correctAnswer === answerIndex;
      }

      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestion] = answerIndex;

      return {
        score: isCorrect ? state.score + 1 : state.score,
        answers: newAnswers,
      };
    });
  },

  nextQuestion: () => {
    set((state) => {
      const isLastQuestion = state.currentQuestion === state.questions.length - 1;
      return {
        currentQuestion: isLastQuestion ? state.currentQuestion : state.currentQuestion + 1,
        isComplete: isLastQuestion,
      };
    });
  },

  clearAnswers: () => {
    set({
      answers: [],
      score: 0,
      isComplete: false,
    });
  },

  resetQuiz: () => {
    set((state) => {
      const newQuestions = state.mode === 'exam' 
        ? getExamQuestions(state.originalQuestions)
        : [...state.originalQuestions];

      return {
        currentQuestion: 0,
        score: 0,
        answers: [],
        isComplete: false,
        questions: newQuestions,
      };
    });
  },
}));