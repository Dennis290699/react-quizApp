import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronLeft } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';
import { useNavigate } from 'react-router-dom';

export const QuizReview = () => {
  const navigate = useNavigate();
  const { questions, answers } = useQuizStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto p-6 space-y-8"
    >
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold mb-4"
      >
        Question Review
      </motion.h2>
      
      <AnimatePresence>
        {questions.map((question, index) => {
          const isMultipleChoice = question.type === 'multiple';
          const userAnswer = answers[index];
          const correctAnswer = question.correctAnswer;

          const isCorrect = isMultipleChoice
            ? Array.isArray(userAnswer) && 
              Array.isArray(correctAnswer) &&
              userAnswer.length === correctAnswer.length &&
              userAnswer.every((ans) => correctAnswer.includes(ans))
            : userAnswer === correctAnswer;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold flex-grow pr-4 text-gray-800">
                  {question.question}
                </h3>
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                >
                  {isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                </motion.span>
              </div>

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => {
                  const isOptionCorrect = Array.isArray(correctAnswer)
                    ? correctAnswer.includes(optionIndex)
                    : optionIndex === correctAnswer;

                  const isOptionSelected = Array.isArray(userAnswer)
                    ? userAnswer.includes(optionIndex)
                    : userAnswer === optionIndex;

                  return (
                    <motion.div
                      key={optionIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + optionIndex * 0.05 }}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        isOptionCorrect
                          ? 'bg-green-100 border-2 border-green-500'
                          : isOptionSelected
                          ? 'bg-red-100 border-2 border-red-500'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      {option}
                      {isOptionCorrect && (
                        <span className="ml-2 text-green-600 text-sm font-medium">
                          (Correct Answer)
                        </span>
                      )}
                      {isOptionSelected && !isOptionCorrect && (
                        <span className="ml-2 text-red-600 text-sm font-medium">
                          (Your Answer)
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {question.explanation && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mt-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg border border-blue-200"
                >
                  <strong className="text-blue-700">Explanation:</strong> {question.explanation}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Finish Review
        </button>
      </motion.div>
    </motion.div>
  );
};