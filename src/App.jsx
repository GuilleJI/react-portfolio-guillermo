import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return <>
      <Navbar/>
      <Home />
      <Skills />
      <About />
  </>;
}
//10:17
export default App
