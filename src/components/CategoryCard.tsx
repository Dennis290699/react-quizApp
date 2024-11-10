import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { QuizCategory } from '../types/quiz';

interface CategoryCardProps {
  category: QuizCategory;
  onClick: () => void;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const Icon = Icons[category.icon as keyof typeof Icons] || BookOpen;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-colors duration-300"
      onClick={onClick}
    >
      <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900 p-3 mb-4">
        <Icon className="w-full h-full text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
        {category.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {category.description}
      </p>
      
      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1" />
          <span>{category.questions.length} questions</span>
        </div>
      </div>
    </motion.div>
  );
};