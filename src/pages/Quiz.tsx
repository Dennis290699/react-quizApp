import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/categories';
import { useQuizStore } from '../store/quizStore';
import { PreLoader } from '../components/PreLoader';
import { QuizQuestion } from '../components/QuizQuestion';
import { QuizResults } from '../components/QuizResults';

export const Quiz = () => {
  const { categoryId, mode } = useParams();
  const { initializeQuiz, isComplete, questions } = useQuizStore();
  const category = categories.find((c) => c.id === categoryId);

  useEffect(() => {
    if (category) {
      initializeQuiz(category.questions, mode as 'practice' | 'exam');
    }
  }, [category, mode]);

  if (!category || !questions.length) {
    return <PreLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4"
    >
      {isComplete ? <QuizResults /> : <QuizQuestion />}
    </motion.div>
  );
};