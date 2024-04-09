
import './Afghanistan.css';
import React, { useEffect, useRef, useState } from 'react';
import InfoCard from '../components/ArtifactCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import CircleExitAnim from '../components/CircleExitAnim';
import { AnimatePresence } from 'framer-motion';
import Dialog from '../components/Dialog';

function Afghanistan () {

  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollAmount = event.deltaY * 1.0;
    container.scrollLeft += scrollAmount;
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);

  return (
      <div className="background-container-atlantic" onWheel={handleScroll} ref={containerRef}>
        <AnimatePresence>
          {isLoading && (
            <CircleExitAnim/>
          )}
        </AnimatePresence>
        {!isLoading && (
          <div className = "background-image-atlantic">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%'><IntroCard title="Afghanistan" description="One of the countries the Polos traveled through early in his journey was Afghanistan."></IntroCard></GridItem>
              <GridItem w='100%' h='100vh'>
                <Dialog
                    posFromTop={'30vh'}
                    charSrc={'/img/narrator.png'}  
                    imageMaxWProp={'70%'}
                    isCard={false}
                    dialogSeq={[
                      'The travellers enjoyed the calm weather of Afghanistan, and stayed for a year (possibly because they fell sick with malaria too!).', 
                      800,
                      'While they were there, they came across many colourful natural materials!', 
                      800,
                      'See if you can spot them nearby…'
                    ]}
                    charName='Rustichello'
                    charRole="Marco Polo's Friend"
                  />
              </GridItem>
              <GridItem w='100%' h='100vh' >
              </GridItem>
              <GridItem w='100%' >
                <InfoCard 
                  posFromTop='80vh' 
                  artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;autoplay=1&controls=0&mute=1' 
                  artifactDescription={[
                    'You found some Lapis Lazuli!',
                    'Lapis Lazuli is a gemstone known for its deep, cool blue colour. Pigments like ultramarine blue are made from Lapis Lazuli.',
                    'Marco writes that the Lapis Lazuli found in Afghanistan are the “finest and the best [...] in the world”!'
                  ]}
                  src={'/img/ruby.png'}  
                  isCard={false}
                />
              </GridItem>
              <GridItem w='100%' h='100vh'>
                <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                    <Next destination={"The Mongol Empire"} next={"/mongol"}/>
                </Flex>
              </GridItem>
            </Grid>
          </div>
        )}
      </div>
  );
}

export default Afghanistan;



/* <InfoCard 
                  posFromTop='80vh' 
                  artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;autoplay=1&controls=0&mute=1' 
                  artifactDescription={[
                    'You found some Balas Rubies!',
                    'Balas Rubies are a type of bright red gemstone mined in Afghanistan.',
                    'In his accounts, Marco wrote that the King was extremely protective of these rubies. He wouldn’t allow anyone else to mine them, and would only send them to friends or exchange them for gold or silver!'
                  ]}
                  src={'/img/ruby.png'}  
                /> */
