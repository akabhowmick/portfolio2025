import { useDarkMode } from './hooks/useDarkMode';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation isDark={isDark} toggleDarkMode={() => setIsDark(!isDark)} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 bg-gray-900 dark:bg-black text-center text-gray-400">
        <p>&copy; 2025 Code by AB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
