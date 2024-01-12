// App.jsx
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import AlphabetQuizz from './pages/AlphabetQuizz';
import Learn from './pages/Learn';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/AlphabetQuizz" element={<AlphabetQuizz />} />
          <Route path="/Learn" element={<Learn />} />

        </Routes>
      </div>
  );
}

export default App;
