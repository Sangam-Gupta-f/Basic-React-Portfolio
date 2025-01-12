import React from 'react';
import './App.scss';
import Contact from './components/contact-us/Contact';
import Port from './components/Portfolio/Port';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
function App() {
  return (
    <div className="App">
      <section className="Hero" >
        <Navbar />
        <Hero />
      </section>
      <section>
        <Port />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
