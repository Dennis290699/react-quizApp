import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/categories';

export const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <Brain className="w-16 h-16 mx-auto text-indigo-600 dark:text-indigo-400 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Master Your Knowledge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose a category and test your skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard
                category={category}
                onClick={() => navigate(`/category/${category.id}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};