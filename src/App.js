import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import SilkRoad from './pages/SilkRoad';

function App() {
  return (
    <ChakraProvider>
      <SilkRoad></SilkRoad>
    </ChakraProvider>
  );
}

export default App;
