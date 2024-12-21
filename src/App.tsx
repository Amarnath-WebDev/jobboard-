import { Navigation } from './components/navigation/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main-content">
        <Hero />
        <Features />
        <Stats />
        <Process />
        <Footer />
      </main>
    </div>
  );
}

export default App;