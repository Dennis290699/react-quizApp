import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Home, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { useState } from 'react';
import { QuizReview } from './QuizReview'; // Importa el nuevo componente

export const QuizResults = () => {
  const navigate = useNavigate();
  const { score, questions, answers, resetQuiz } = useQuizStore();
  const [showReview, setShowReview] = useState(false);
  const percentage = (score / questions.length) * 100;

  if (showReview) {
    return <QuizReview />; // Renderiza el componente de revisión
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="max-w-md mx-auto text-center p-8"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 mx-auto mb-6"
      >
        <Trophy className="w-full h-full text-yellow-400" />
      </motion.div>

      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-8">
        You scored <span className="font-bold text-indigo-600">{score}</span> out of{' '}
        {questions.length} ({percentage.toFixed(1)}%)
      </p>

      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg"
          onClick={resetQuiz}
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg"
          onClick={() => setShowReview(true)} // Cambia el estado para mostrar la revisión
        >
          <ClipboardList className="w-5 h-5 mr-2" />
          Review Answers
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg"
          onClick={() => navigate('/')}
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Menu
        </motion.button>
      </div>
    </motion.div>
  );
};
