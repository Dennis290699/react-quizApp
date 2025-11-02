import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { BookOpen } from 'lucide-react';
import { Subject } from '../types/quiz';

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void;
}

export const SubjectCard = ({ subject, onClick }: SubjectCardProps) => {
  const Icon = Icons[subject.icon as keyof typeof Icons] || BookOpen;

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
        {subject.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {subject.description}
      </p>

      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <BookOpen className="w-4 h-4 mr-1" />
          <span>{subject.categories.length} categorías</span>
        </div>
      </div>
    </motion.div>
  );
};
