import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return <>
      <Navbar/>
      <Home />
  </>;
}
//10:17
export default App
