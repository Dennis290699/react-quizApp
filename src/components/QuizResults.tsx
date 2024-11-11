import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Home, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { useState } from 'react';
import { QuizReview } from './QuizReview';
import { motivationalMessages } from '../data/motivationalMessages';
import { PreLoader } from './PreLoader'; // Importa el PreLoader

export const QuizResults = () => {
  const navigate = useNavigate();
  const { score, questions, resetQuiz, clearAnswers } = useQuizStore();
  const [showReview, setShowReview] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const percentage = (score / questions.length) * 100;

  const motivationalMessage = motivationalMessages.find(
    (msg) => percentage >= msg.minScore && percentage <= msg.maxScore
  )?.message;

  const handleReset = () => {
    setIsLoading(true); // Mostrar el PreLoader
    setTimeout(() => {
      resetQuiz();
      setIsLoading(false); // Ocultar el PreLoader
    }, 1500); // Tiempo de carga simulado de 1.5 segundos
  };

  const handleHomeClick = () => {
    clearAnswers();
    navigate('/');
  };

  if (showReview) {
    return <QuizReview onFinish={() => {
      clearAnswers();
      navigate('/');
    }} />;
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-md mx-auto text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
    >
      {isLoading && <PreLoader />} {/* Renderiza el PreLoader si isLoading es true */}

      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 mx-auto mb-6"
      >
        <Trophy className="w-full h-full text-yellow-400" />
      </motion.div>

      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Quiz Complete!
      </h2>
      <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
        You scored{' '}
        <span className="font-bold text-indigo-600 dark:text-indigo-400">
          {score}
        </span>{' '}
        out of {questions.length} ({percentage.toFixed(1)}%)
      </p>

      {motivationalMessage && (
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">{motivationalMessage}</p>
      )}

      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors duration-200"
          onClick={handleReset}
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white rounded-lg shadow-md transition-colors duration-200"
          onClick={() => setShowReview(true)}
        >
          <ClipboardList className="w-5 h-5 mr-2" />
          Review Answers
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-600 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg shadow-md transition-colors duration-200"
          onClick={handleHomeClick}
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Menu
        </motion.button>
      </div>
    </motion.div>
  );
};
