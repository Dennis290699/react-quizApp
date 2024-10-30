import { create } from 'zustand';
import { QuizQuestion } from '../types/quiz';

interface QuizState {
  currentQuestion: number;
  score: number;
  answers: (number | number[])[];
  mode: 'practice' | 'exam';
  questions: QuizQuestion[];
  isComplete: boolean;
}

interface QuizStore extends QuizState {
  initializeQuiz: (questions: QuizQuestion[], mode: 'practice' | 'exam') => void;
  answerQuestion: (answerIndex: number | number[]) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestion: 0,
  score: 0,
  answers: [],
  mode: 'practice',
  questions: [],
  isComplete: false,

  initializeQuiz: (questions, mode) => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selectedQuestions = mode === 'exam' ? shuffled.slice(0, 20) : questions;
    
    set({
      questions: selectedQuestions,
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
        // Verifica si todas las respuestas correctas están seleccionadas
        const correctAnswers = question.correctAnswer as number[];
        isCorrect = correctAnswers.every((answer) => answerIndex.includes(answer)) &&
                    correctAnswers.length === answerIndex.length;
      } else if (typeof answerIndex === 'number') {
        isCorrect = question.correctAnswer === answerIndex;
      }

      return {
        score: isCorrect ? state.score + 1 : state.score,
        answers: [...state.answers, answerIndex],
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

  resetQuiz: () => {
    set({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
    });
  },
}));
