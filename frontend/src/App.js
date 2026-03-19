import React from "react";
import "./App.css";
import { LanguageProvider } from './context/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Hospital from './components/Hospital';
import Donor from './components/Donor';
import CNTS from './components/CNTS';
import AISection from './components/AISection';
import Technology from './components/Technology';
import Impact from './components/Impact';
import Vision from './components/Vision';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <Hero />
        <Problem />
        <Solution />
        <Hospital />
        <Donor />
        <CNTS />
        <AISection />
        <Technology />
        <Impact />
        <Vision />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
