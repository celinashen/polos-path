
import './Malabar.css';
import React, { useEffect, useRef, useState } from 'react';
import InfoCard from '../components/ArtifactCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import StaticCard from '../components/StaticCard';
import ImageCard from '../components/ImageCard';
import ArtifactCard from '../components/ArtifactCard';
import { AnimatePresence } from 'framer-motion';
import CircleExitAnim from '../components/CircleExitAnim';

function Malabar() {

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
      <div className="background-container" onWheel={handleScroll} ref={containerRef}>
        <AnimatePresence>
          {isLoading && (
            <CircleExitAnim/>
          )}
        </AnimatePresence>
        {!isLoading && (
            <div className = "background-image-malabur">
                <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                <GridItem w='100%'>
                    <IntroCard 
                      title="Malabar Peninsula, India" 
                      description="Welcome to Malabar Peninsula, India!">
                    </IntroCard>
                </GridItem>
                <GridItem w='100%' h='100vh' >
                  <ImageCard 
                    src='../../img/malabar-map.png' 
                    hasImage={true}
                    hasImageDescription={true} 
                    hasAvatar={true} 
                    posFromTop={'50vh'} 
                    synopsis={[
                      "Wondering where Marco Polo travelled here?"
                    ]}
                    charName='Rustichello'
                    charRole="Marco Polo's Friend"
                    charSrc={'/img/narrator.png'} 
                    dialog = {[
                      "The Malabar Peninsula lines the southwestern coast of India, stretching from Goa southward. It is largely comprised of long stretches of sand and dunes, and also lagoons linked to inland water sources by canals!",
                      1300,
                      "Marco and his family arrived here while they were sailing from China back to home to Venice.",
                      1000,
                      "While the Polos were here in India, they encountered many interesting new cultures, religions, and people. They also came across lots of shiny, precious gems!",
                      1500,
                      "Can you spot any gems nearby?"
                    ]}
                  />
                </GridItem>
                <GridItem w='100%' >
                  <ArtifactCard 
                    posFromTop='40vh' 
                    artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=q8iBtytFN1J6F9BZ&amp;autoplay=1&controls=0&mute=1' 
                    artifactDescription={[
                      'Congratulations! You’ve found some huge, beautiful natural pearls!',
                      'In his account, Marco writes about how pearl-fishing in India was practised, and how it made the kingdom rich!',
                      'First, merchants hired many fit fishermen to dive in shallow waters and collect oysters from the seabed. But before this, the merchants would also pay Brahmins to charm sea creatures in the daytime, so that the fishermen would not be harmed on their dive down to the seabed',
                      'After the oysters were collected and pearls extracted, the king receives a substantial duty for all the pearls sold and exported! This made the king and the kingdom quite rich.'
                    ]}
                    src={'/img/pearl.png'}  
                    hasImage={false}
                  />
                </GridItem>
                <GridItem w='100%' h='100vh'>
                  {/* REPLACE WITH DIAMOND */}
                  <ArtifactCard 
                    posFromTop='70vh' 
                    artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=q8iBtytFN1J6F9BZ&amp;autoplay=1&controls=0&mute=1' 
                    artifactDescription={[
                      'You found some jewellery!',
                      'Indeed, Marco was entranced and impressed by the volume of shiny gems used for jewellery in Malabar, India. He observed that although the people generally did not wear much clothes due to the temperate weather, the king wore a collarfull of precious stones — rubies, sapphires, emeralds and other brilliant gems.',
                      'He also wrote that the king wore a long necklace bearing 104 large pearls and rubies – prayer beads to recite 104 prayers! The king also wore lots of gold bracelets on his wrists, ankles, and toes!',
                      'Marco wrote that the king owned so many precious stones and materials because any gems that were found within the kingdom were not allowed to be sold overseas! Instead, they would immediately be taken to the courts and the king would pay twice their value.'
                    ]}
                    src={'/img/jewelry.png'}  
                    hasImage={false}
                  />
                </GridItem>
                <GridItem w='100%' h='100vh'>
                  <StaticCard 
                    hasAvatar={true}
                    posFromTop='20vh'
                    hasImage={false}
                    text='I hope you’ve had fun on our journey! I hope to see you again!'
                  />
                </GridItem>
                <GridItem w='100%' h='100vh' style={{textAlign: "center"}} bgGradient='linear(to-r, green.200, gray.)'>
                    <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                        <Next destination={"Teleport back home"} next={"/"}/>
                    </Flex>
                </GridItem>
                </Grid>
                
                {/* <h1 className = "test">GeeksForGeeks</h1> */}
            </div>
        )}
      </div>
  );
}

export default Malabar;
