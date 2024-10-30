import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { ModeSelection } from './pages/ModeSelection';
import { Quiz } from './pages/Quiz';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ModeSelection />} />
          <Route path="/quiz/:categoryId/:mode" element={<Quiz />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;