import { motion } from 'framer-motion';
import { BookOpen, Brain, ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { categories } from '../data/categories';

export const ModeSelection = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Categories
        </motion.button>

        <div className="text-center mb-12">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Select Your Mode
          </motion.h1>
          <p className="text-xl text-gray-600">
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
                onClick={() => navigate(`/quiz/${category.id}/${mode.id}`)}
                className={`bg-white rounded-xl shadow-lg p-8 cursor-pointer border-2 border-transparent hover:border-${mode.color}-500 transition-colors duration-300`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-${mode.color}-100 p-4 mb-6`}>
                  <Icon className={`w-full h-full text-${mode.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{mode.title}</h3>
                <p className="text-gray-600">{mode.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};