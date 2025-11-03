import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizStore } from '../store/quizStore';

export const QuizQuestion = () => {
  const { questions, currentQuestion, answerQuestion, nextQuestion } = useQuizStore();
  const question = questions[currentQuestion];
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [matchingAnswers, setMatchingAnswers] = useState<Record<number, string>>({});
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswers([]);
    setMatchingAnswers({});
    setSelectedLeft(null);
    setIsAnswered(false);
  }, [currentQuestion]);

  // Estilos fijos por par para Tailwind (evita clases dinámicas purgadas)
  const PAIR_STYLES = [
    { border: 'border-rose-500 dark:border-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/30' },
    { border: 'border-sky-500 dark:border-sky-400', bg: 'bg-sky-50 dark:bg-sky-900/30' },
    { border: 'border-emerald-500 dark:border-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
    { border: 'border-amber-500 dark:border-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/30' },
    { border: 'border-violet-500 dark:border-violet-400', bg: 'bg-violet-50 dark:bg-violet-900/30' },
    { border: 'border-fuchsia-500 dark:border-fuchsia-400', bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/30' },
    { border: 'border-teal-500 dark:border-teal-400', bg: 'bg-teal-50 dark:bg-teal-900/30' },
    { border: 'border-cyan-500 dark:border-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-900/30' },
    { border: 'border-lime-500 dark:border-lime-400', bg: 'bg-lime-50 dark:bg-lime-900/30' },
    { border: 'border-orange-500 dark:border-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/30' },
  ] as const;

  const getPairStyle = (leftIndex: number | null) => {
    if (!leftIndex) return { border: '', bg: '' };
    const style = PAIR_STYLES[(leftIndex - 1) % PAIR_STYLES.length];
    return style;
  };

  const handleSelect = (index: number) => {
    if (question.type === 'multiple') {
      setSelectedAnswers((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      // Para preguntas de una sola opción, solo seleccionamos.
      // La validación se realizará al presionar el botón de envío.
      setSelectedAnswers([index]);
    }
  };

  const handleSubmit = () => {
    if (question.type === 'multiple') {
      answerQuestion(selectedAnswers);
    } else if (question.type === 'single') {
      const selected = selectedAnswers[0];
      if (selected !== undefined) {
        answerQuestion(selected);
      }
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  // 🧩 Lógica especial para matching con deshacer/reasignar
  const handleMatchSelect = (side: 'left' | 'right', value: string | number) => {
    if (side === 'left') {
      const leftIdx = value as number;
      if (selectedLeft === leftIdx) {
        // Si vuelves a pulsar el mismo izquierdo: deseleccionar y, si tenía par, eliminarlo
        setMatchingAnswers((prev) => {
          if (prev[leftIdx] === undefined) return prev;
          const copy = { ...prev };
          delete copy[leftIdx];
          return copy;
        });
        setSelectedLeft(null);
      } else {
        setSelectedLeft(leftIdx);
      }
      return;
    }

    // Click en la derecha
    const letter = value as string;
    const existingLeftForRight = Object.entries(matchingAnswers).find((entry) => entry[1] === letter)?.[0];

    if (existingLeftForRight) {
      if (selectedLeft !== null) {
        // Reasignar este derecho al izquierdo actualmente seleccionado
        setMatchingAnswers((prev) => {
          const copy = { ...prev } as Record<number, string>;
          delete copy[Number(existingLeftForRight)];
          copy[selectedLeft] = letter;
          return copy;
        });
        setSelectedLeft(null);
      } else {
        // No hay izquierdo seleccionado: deshacer emparejamiento de este derecho
        setMatchingAnswers((prev) => {
          const copy = { ...prev } as Record<number, string>;
          delete copy[Number(existingLeftForRight)];
          return copy;
        });
      }
      return;
    }

    if (selectedLeft !== null) {
      // Nuevo emparejamiento
      setMatchingAnswers((prev) => ({ ...prev, [selectedLeft]: letter }));
      setSelectedLeft(null);
    }
  };

  const handleSubmitMatching = () => {
    answerQuestion(matchingAnswers);
    setIsAnswered(true);
  };

  const renderMatching = () => {
    const leftItems = question.options.filter((opt) => /^\d+\./.test(opt));
    const rightItems = question.options.filter((opt) => /^[A-Z]\./.test(opt));

    return (
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3 text-center">Columna A</h3>
          {leftItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleMatchSelect('left', index + 1)}
              className={`w-full p-3 rounded-lg border-2 mb-2 transition ${(() => {
                const leftIdx = index + 1;
                const hasPair = matchingAnswers[leftIdx] !== undefined;
                const isSelectedLeft = selectedLeft === leftIdx;
                if (hasPair || isSelectedLeft) {
                  const style = getPairStyle(leftIdx);
                  return `${style.border} ${style.bg} text-gray-900 dark:text-white`;
                }
                return 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300';
              })()}`}
            >
              {item}
            </motion.button>
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-3 text-center">Columna B</h3>
          {rightItems.map((item, index) => {
            const letter = item.match(/^([A-Z])\./)?.[1] || '';
            const matched = Object.values(matchingAnswers).includes(letter);
            const leftIdxForThisRight = matched
              ? Number(Object.entries(matchingAnswers).find((entry) => entry[1] === letter)?.[0])
              : null;
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleMatchSelect('right', letter)}
                className={`w-full p-3 rounded-lg border-2 mb-2 transition ${(() => {
                  if (matched && leftIdxForThisRight) {
                    const style = getPairStyle(leftIdxForThisRight);
                    return `${style.border} ${style.bg} opacity-90 text-gray-900 dark:text-white`;
                  }
                  return 'border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300';
                })()}`}
              >
                {item}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
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

        {question.type === 'matching' ? (
          renderMatching()
        ) : (
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
        )}

        {/* Botones de envío */}
        {(question.type === 'multiple' || question.type === 'single') && !isAnswered && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            disabled={selectedAnswers.length === 0}
            className="mt-6 w-full px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors duration-200"
          >
            Submit Answer
          </motion.button>
        )}

        {question.type === 'matching' && !isAnswered && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmitMatching}
            className="mt-6 w-full px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white rounded-lg shadow-md transition-colors duration-200"
          >
            Submit Matching
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
