import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import SilkRoad from './pages/SilkRoad';
import theme from './theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Atlantic from './pages/Atlantic';
import Landing from './pages/Landing';
import Intro from './pages/Intro';

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
          <Route path='/silkroad' element = {<SilkRoad/>}/>
          <Route path='/atlantic' element = {<Atlantic/>}/>
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;

