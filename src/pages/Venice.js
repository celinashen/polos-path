
import './Venice.css';
import React, { useEffect, useRef, useState } from 'react';
import InfoCard from '../components/ArtifactCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import DialogueCard from '../components/StaticCard';
import ImageCard from '../components/ImageCard';
import { motion, AnimatePresence } from 'framer-motion';
import CircleExitAnim from '../components/CircleExitAnim';
import Dialog from '../components/Dialog';



function Venice() {

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
          <div className = "background-image-venice">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%'><IntroCard title="Venice" description="We begin in Venice, a bustling city in Italy, because this is where Marco was born in the year 1254 C.E., over 700 years ago. Keep scrolling to learn more!"></IntroCard></GridItem>
              <GridItem w='100%' >
                <Dialog
                    posFromTop={'60vh'}
                    charSrc={'/img/narrator.png'}  
                    imageMaxWProp={'70%'}
                    isCard={false}
                    dialogSeq={[
                      'Marco’s family were successful and important traders.', 
                      800,
                      'His father, Niccolo Polo, and his uncle, Maffeo Polo, travelled far out and frequently as they did business in the Middle East, had property in Constantinople, and even had affairs in the Western Mongol Empire.', 
                      800
                    ]}
                    charName='Rustichello'
                    charRole="Marco Polo's Friend"
                    options={{
                        'Click here to see these areas on a map' : "These areas are the spots that Marco Polo visited - and I'll adventure here with you!", 
                    }}
                    showImage={true}
                    imageSrc={'/img/landing-bg.png'}
                  />
              </GridItem>
              <GridItem w='100%' h='100vh' >
                <Dialog
                  posFromTop={'10vh'}
                  charSrc={'/img/MarcoPoloStory.png'}  
                  imageMaxWProp={'70%'}
                  isCard={false}
                  dialogSeq={[
                    'In 1271 C.E., I joined my father and uncle on their travels.', 
                    800,
                    'I was only 17-years-old!', 
                    800,
                    'Guess how old I was when I next returned home to Venice?',
                  ]}
                  charName='Marco Polo'
                  charRole="Adventurer and Traveller"
                  options={{
                      'A. 25' : "Good try! When I came home after my adventures, I had become a 41-year-old man! 24 years is a long time to be travelling.", 
                      'B. 33' : "Good try! When I came home after my adventures, I had become a 41-year-old man! 24 years is a long time to be travelling.", 
                      "C. 41":"Bravo! When I came home after my adventures, I had become a 41-year-old man! 24 years is a long time to be travelling."
                  }}
                />
              </GridItem>
              <GridItem w='100%' h='100vh'>
                <ImageCard 
                  src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' 
                  hasImage={true}
                  hasImageDescription={true} 
                  hasAvatar={true} 
                  posFromTop={'10vh'} 
                  synopsis={[
                    "On his Eastward journey out to China, Marco and his family chose to go overland by the Silk Road.",
                    'Click here to find out more!'
                  ]}
                  charName='Rustichello'
                  charRole="Marco Polo's Friend"
                  charSrc={'/img/narrator.png'} 
                  dialog = {[
                    "The Silk Road was an important route that connected European countries with China.",
                    800,
                    "This connection meant that lots of goods and ideas could be passed between the two far-away places!",
                    800,
                    "The “silk” in its name comes from all the silk that was being traded from China into Europe.",
                    800,
                    "Now let’s follow the Silk Road, and head to our next location… Afghanistan!"
                  ]}

                />
              </GridItem>
              <GridItem w='100%' h='100vh' style={{textAlign: "center"}} bgGradient='linear(to-r, green.200, gray.)'>
                <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                    <Next destination={"Afghanistan"} next="afghanistan"/>
                </Flex>
              </GridItem>
            </Grid>
          </div>
        )}
      </div>
  );
}

export default Venice;


// <ImageCard 
//                   hasAvatar={true} 
//                   posFromTop={'15vh'} 
//                   synopsis={[
//                     "Marco’s family were successful and important traders. His father, Niccolo Polo, and his uncle, Maffeo Polo, travelled far out and frequently as they did business in the Middle East, had property in Constantinople, and even had affairs in the Western Mongol Empire.",
//                     'Click here to zoom into the map!'
//                   ]}
//                   src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
//                   />
