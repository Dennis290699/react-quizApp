import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { PreLoader } from '../components/PreLoader';

export const ModeSelection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { subjectId, categoryId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);
  const category = subject?.categories.find((c) => c.id === categoryId);

  if (!subject || !category) {
    navigate('/');
    return null;
  }

  const modes = [
    {
      id: 'practice',
      title: 'Practice Mode',
      description: 'Study at your own pace with all questions available',
      icon: BookOpen,
      color: 'emerald',
    },
    {
      id: 'exam',
      title: 'Exam Simulation',
      description: 'Test yourself with 20 random questions',
      icon: Brain,
      color: 'purple',
    },
  ];

  const handleModeSelection = (modeId: string) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/quiz/${subjectId}/${category.id}/${modeId}`);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      {isLoading && <PreLoader />} {/* Renderiza el PreLoader si isLoading es true */}
      
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(`/subject/${subjectId}`)}
          className="mb-8 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a Categorías
        </motion.button>

        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Select Your Mode
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose how you want to practice {category.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.id}
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleModeSelection(mode.id)} // Llama a la función de selección
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900 p-4 mb-6">
                  <Icon className="w-full h-full text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {mode.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {mode.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
