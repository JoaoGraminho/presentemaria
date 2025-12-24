
import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Timeline from './components/Timeline';
import Moments from './components/Moments';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Hero />
      <Story />
      <Timeline />
      <Moments />
      <Gallery />
      <Letter />
      <Footer />
    </main>
  );
};

export default App;
