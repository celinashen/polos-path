
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
            <GridItem w='100%'><IntroCard title="The Silk Road" description="Explore Marco Polo's journey through the Silk Road and find new artifacts along the way!"></IntroCard></GridItem>
            <GridItem w='100%' h='100vh' />
            <GridItem w='100%' h='100vh' />
            <GridItem w='100%' ><InfoCard posFromTop="30vh" closedText={"Learn more about the Paiza"} openText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nunc id erat ultrices posuere a non orci. Etiam dapibus neque imperdiet nunc pellentesque interdum id et mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lacinia eu ante nec lacinia."}></InfoCard></GridItem>
            <GridItem w='100%' h='100vh'/>
          </Grid>
            
            {/* <h1 className = "test">GeeksForGeeks</h1> */}
        </div>
      </div>
  );
}

export default SilkRoad;
