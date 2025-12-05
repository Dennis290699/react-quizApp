import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { SubjectCategories } from './pages/SubjectCategories';
import { ModeSelection } from './pages/ModeSelection';
import { Quiz } from './pages/Quiz';
import { ThemeToggle } from './components/ThemeToggle';
import { ChristmasEffect } from './components/ChristmasEffect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subject/:subjectId" element={<SubjectCategories />} />
            <Route path="/subject/:subjectId/category/:categoryId" element={<ModeSelection />} />
            <Route path="/quiz/:subjectId/:categoryId/:mode" element={<Quiz />} />
          </Routes>
        </AnimatePresence>
        <ThemeToggle />
        <ChristmasEffect />
      </div>
    </Router>
  );
}

export default App;
