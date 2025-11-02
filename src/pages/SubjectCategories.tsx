import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryCard } from '../components/CategoryCard';
import { subjects } from '../data/subjects';

export const SubjectCategories = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    navigate('/');
    return null;
  }

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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a Materias
        </motion.button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {subject.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Selecciona una categoría para comenzar
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {subject.categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <CategoryCard
                category={category}
                onClick={() => navigate(`/subject/${subjectId}/category/${category.id}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
