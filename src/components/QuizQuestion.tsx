import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';

export const QuizQuestion = () => {
  const { questions, currentQuestion, answers, answerQuestion, nextQuestion } = useQuizStore();
  const question = questions[currentQuestion];
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswers([]);
    setIsAnswered(false);
  }, [currentQuestion]);

  const handleSelect = (index: number) => {
    if (question.type === 'multiple') {
      setSelectedAnswers((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setSelectedAnswers([index]);
      setIsAnswered(true);
      answerQuestion(index);
    }
  };

  const handleSubmit = () => {
    answerQuestion(selectedAnswers);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentQuestion}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        className="max-w-2xl mx-auto p-6"
      >
        <div className="mb-8">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            {question.question}
          </h2>
        </div>

        {question.image && (
          <div className="flex justify-center mb-8">
            <img 
              src={question.image} 
              alt="Question illustration" 
              className="max-w-full max-h-64 rounded-lg shadow-md dark:shadow-gray-800" 
            />
          </div>
        )}

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-4 text-left rounded-lg border-2 transition-colors duration-200 ${
                selectedAnswers.includes(index)
                  ? 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 text-gray-900 dark:text-white'
                  : 'border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => handleSelect(index)}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {question.type === 'multiple' && !isAnswered && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="mt-6 w-full px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors duration-200"
          >
            Submit Answer
          </motion.button>
        )}

        {isAnswered && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNextQuestion}
            className="mt-6 w-full px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors duration-200"
          >
            Next Question
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};