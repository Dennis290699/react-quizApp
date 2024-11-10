import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export const PreLoader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Brain className="w-16 h-16 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
        <motion.div
          className="h-2 w-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-indigo-600 dark:bg-indigo-400"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};