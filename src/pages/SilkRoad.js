
import './SilkRoad.css';
import React, { useEffect, useRef } from 'react';
import InfoCard from '../components/InfoCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem } from '@chakra-ui/react';

function SilkRoad() {

  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollAmount = event.deltaY * 1.0;
    container.scrollLeft += scrollAmount;
  };

  

  return (
      <div className="background-container" onWheel={handleScroll} ref={containerRef}>
        <div className = "background-image">
          <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem pt = "20vh" pl = "10vh" w='100%' bg='blue.100' opacity="20%"><IntroCard></IntroCard></GridItem>
            <GridItem w='100%' h='100vh' bg='blue.100' opacity="20%" />
            <GridItem w='100%' h='100vh' bg='blue.100' opacity="20%" />
            <GridItem w='100%' bg='blue.100' opacity="20%"><InfoCard></InfoCard></GridItem>
            <GridItem w='100%' h='100vh' bg='blue.100' opacity="20%"/>
          </Grid>
            
            {/* <h1 className = "test">GeeksForGeeks</h1> */}
        </div>
      </div>
  );
}

export default SilkRoad;
