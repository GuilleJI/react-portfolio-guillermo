import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return <>
      <Navbar/>
      <Home />
      <Skills />
      <About />
      <Portfolio />
  </>;
}
//10:17
export default App
