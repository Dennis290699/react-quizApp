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
      answerQuestion(index); // Enviamos solo el índice en caso de opción única
    }
  };

  const handleSubmit = () => {
    answerQuestion(selectedAnswers); // Enviamos array en caso de opción múltiple
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
          <div className="text-sm text-gray-500 mb-2">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <h2 className="text-2xl font-bold text-center">{question.question}</h2>
        </div>

        {question.image && (
          <div className="flex justify-center mb-8">
            <img src={question.image} alt="Related to question" className="max-w-full max-h-64 rounded-lg" />
          </div>
        )}

        <div className="space-y-4">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full p-4 text-left rounded-lg border-2 ${
                selectedAnswers.includes(index)
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-200'
              }`}
              onClick={() => handleSelect(index)}
            >
              {option}
            </motion.button>
          ))}
        </div>

        {question.type === 'multiple' && !isAnswered && (
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Enviar respuesta
          </button>
        )}

        {isAnswered && (
          <button
            onClick={handleNextQuestion}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Siguiente Pregunta
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
