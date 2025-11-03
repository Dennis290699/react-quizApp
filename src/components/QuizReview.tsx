import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronLeft } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

interface QuizReviewProps {
  onFinish: () => void;
}

export const QuizReview = ({ onFinish }: QuizReviewProps) => {
  const { questions, answers } = useQuizStore();

  const isRecordMapping = (v: unknown): v is Record<number, string> =>
    !!v && typeof v === 'object' && !Array.isArray(v);

  const isNumberArray = (v: unknown): v is number[] => Array.isArray(v) && v.every((x) => typeof x === 'number');

  const isMatchingEqual = (a: Record<number, string>, b: Record<number, string>) => {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every((k) => a[Number(k)] === b[Number(k)]);
  };

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
        className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
      >
        Question Review
      </motion.h2>
      
      <AnimatePresence>
        {questions.map((question, index) => {
          const userAnswer = answers[index];
          const correctAnswer = question.correctAnswer;

          let isCorrect = false;

          if (question.type === 'multiple') {
            isCorrect = isNumberArray(userAnswer) &&
                        isNumberArray(correctAnswer) &&
                        userAnswer.length === correctAnswer.length &&
                        userAnswer.every((ans) => correctAnswer.includes(ans));
          } else if (question.type === 'matching') {
            if (isRecordMapping(userAnswer) && isRecordMapping(correctAnswer)) {
              isCorrect = isMatchingEqual(userAnswer, correctAnswer);
            } else {
              isCorrect = false;
            }
          } else {
            isCorrect = userAnswer === correctAnswer;
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold flex-grow pr-4 text-gray-800 dark:text-white">
                  {question.question}
                </h3>
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isCorrect 
                      ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' 
                      : 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                  }`}
                >
                  {isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                </motion.span>
              </div>

              {/* 🔹 Mostrar tipo matching de forma diferente */}
              {question.type === 'matching' ? (
                <div className="mt-4 space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Tus respuestas:
                    </p>
                    {Object.entries(isRecordMapping(userAnswer) ? userAnswer : {}).map(([num, letter]) => (
                      <p key={num} className="text-gray-700 dark:text-gray-300">
                        {num} → {letter}
                      </p>
                    ))}
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Respuesta correcta:
                    </p>
                    {Object.entries(isRecordMapping(correctAnswer) ? correctAnswer : {}).map(([num, letter]) => (
                      <p key={num} className="text-green-700 dark:text-green-300">
                        {num} → {letter}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                // 🔸 Render clásico para single/multiple
                <div className="mt-4 space-y-3">
                  {question.options.map((option, optionIndex) => {
                    const isOptionCorrect = Array.isArray(correctAnswer)
                      ? (correctAnswer as number[]).includes(optionIndex)
                      : optionIndex === (correctAnswer as number);

                    const isOptionSelected = Array.isArray(userAnswer)
                      ? (userAnswer as number[]).includes(optionIndex)
                      : userAnswer === optionIndex;

                    let optionClass = 'p-4 rounded-lg transition-all duration-300 ';
                    
                    if (isOptionSelected && isOptionCorrect) {
                      optionClass += 'bg-green-100 dark:bg-green-900/50 border-2 border-green-500 dark:border-green-400';
                    } else if (isOptionSelected && !isOptionCorrect) {
                      optionClass += 'bg-red-100 dark:bg-red-900/50 border-2 border-red-500 dark:border-red-400';
                    } else if (isOptionCorrect) {
                      optionClass += 'bg-green-50 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400';
                    } else {
                      optionClass += 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600';
                    }

                    return (
                      <motion.div
                        key={optionIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + optionIndex * 0.05 }}
                        className={optionClass}
                      >
                        <span className="text-gray-900 dark:text-gray-100">{option}</span>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {question.explanation && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mt-6 text-sm text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
                >
                  <strong className="text-blue-700 dark:text-blue-400">Explanation:</strong>{' '}
                  {question.explanation}
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
          onClick={onFinish}
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 dark:hover:from-purple-600 dark:hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Finish Review
        </button>
      </motion.div>
    </motion.div>
  );
};
