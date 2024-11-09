import { motion } from 'framer-motion';
import { Trophy, RefreshCw, Home, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { useState } from 'react';
import { QuizReview } from './QuizReview';
import { motivationalMessages } from '../data/motivationalMessages';

export const QuizResults = () => {
  const navigate = useNavigate();
  const { score, questions, resetQuiz, clearAnswers } = useQuizStore();
  const [showReview, setShowReview] = useState(false);
  const percentage = (score / questions.length) * 100;

  const motivationalMessage = motivationalMessages.find(
    (msg) => percentage >= msg.minScore && percentage <= msg.maxScore
  )?.message;

  const handleReset = () => {
    resetQuiz();
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

      {motivationalMessage && (
        <p className="text-lg font-medium text-gray-700 mb-8">{motivationalMessage}</p>
      )}

      <div className="space-y-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg"
          onClick={handleReset}
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg"
          onClick={() => setShowReview(true)}
        >
          <ClipboardList className="w-5 h-5 mr-2" />
          Review Answers
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg"
          onClick={handleHomeClick}
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Menu
        </motion.button>
      </div>
    </motion.div>
  );
};