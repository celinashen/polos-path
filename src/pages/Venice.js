
import './Venice.css';
import React, { useEffect, useRef } from 'react';
import InfoCard from '../components/InfoCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import DialogueCard from '../components/DialogueCard';
import ImageCard from '../components/ImageCard';


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
          <Grid templateColumns='repeat(6, 1fr)' gap={6}>
            <GridItem w='100%'><IntroCard title="Venice" description="We begin in Venice, a bustling city in Italy, because this is where Marco was born in the year 1254 C.E., over 700 years ago. Keep scrolling to learn more!"></IntroCard></GridItem>
            <GridItem w='100%' h='100vh' />
            <GridItem w='100%' h='100vh' ><ImageCard hasAvatar={true} posFromTop={'15vh'} synopsis="Marco’s family were successful and important traders. His father, Niccolo Polo, and his uncle, Maffeo Polo, travelled far out and frequently as they did business in the Middle East, had property in Constantinople, and even had affairs in the Western Mongol Empire." cta='Click here to zoom into the map!'></ImageCard></GridItem>
            <GridItem w='100%' ><DialogueCard posFromTop="30vh" hasAvatar={false} hasImage={true} src={'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} text='In 1271 C.E., Marco joined his father and uncle on their travels. He was only 17-years-old then! By the time he came home to Venice after their adventures, Marco had turned into a 41-year-old man! That’s a long time to be travelling.'></DialogueCard></GridItem>
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
