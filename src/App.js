import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Mongol from './pages/Mongol';
import theme from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Afghanistan from './pages/Afghanistan';
import Landing from './pages/Landing';
import Intro from './pages/Intro';
import Venice from './pages/Venice';
import Tibet from './pages/Tibet';

import { AnimatePresence, motion, Spring } from "framer-motion";

function App() {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };
  const transitionColor = "deepskyblue";

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path='/' element = {<Landing/>}/>
          <Route path='/polospath' element = {<Intro/>}/>
          <Route path='/venice' element = {<Venice/>}/>
          <Route path='/afghanistan' element = {<Afghanistan/>}/>
          <Route path='/mongol' element = {<Mongol/>}/>
          <Route path='/tibet' element = {<Tibet/>}/>
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;

