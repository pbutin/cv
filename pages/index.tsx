import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
