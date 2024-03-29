
import './Venice.css';
import React, { useEffect, useRef } from 'react';
import InfoCard from '../components/InfoCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import DialogueCard from '../components/DialogueCard';


function Venice() {

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
            <GridItem w='100%'><IntroCard title="Venice" description="We begin in Venice, a bustling city in Italy, because this is where Marco was born in the year 1254 C.E., over 700 years ago."></IntroCard></GridItem>
            <GridItem w='100%' h='100vh' />
            <GridItem w='100%' h='100vh' ><DialogueCard></DialogueCard></GridItem>
            <GridItem w='100%' ><InfoCard posFromTop="30vh" closedText={"Learn more about the Paiza"} openText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nunc id erat ultrices posuere a non orci. Etiam dapibus neque imperdiet nunc pellentesque interdum id et mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras lacinia eu ante nec lacinia."}></InfoCard></GridItem>
            <GridItem w='100%' h='100vh' style={{textAlign: "center"}} bgGradient='linear(to-r, green.200, gray.)'>
              <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                  <Next destination={"Sail the Atlantic"} next={"atlantic"}/>
              </Flex>
            </GridItem>
          </Grid>
            
            {/* <h1 className = "test">GeeksForGeeks</h1> */}
        </div>
      </div>
  );
}

export default Venice;
