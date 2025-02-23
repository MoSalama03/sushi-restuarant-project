import React, { PropsWithChildren } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
    <Navbar />
    <Hero />
    <Footer />
    </div>
    </>
  );
}

export default App;