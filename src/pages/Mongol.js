
import './Mongol.css';
import React, { useEffect, useRef, useState } from 'react';
import InfoCard from '../components/ArtifactCard';
import IntroCard from '../components/IntroCard';
import { Grid, GridItem, Flex, Center } from '@chakra-ui/react';
import Next from '../components/NextBtn';
import DialogueCard from '../components/DialogueCard';
import ImageCard from '../components/ImageCard';
import ArtifactCard from '../components/ArtifactCard';
import { AnimatePresence } from 'framer-motion';
import CircleExitAnim from '../components/CircleExitAnim';

function Mongol() {

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
          <div className = "background-image">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%'>
                <IntroCard 
                  title="Mongol" 
                  description="[placeholder]">
                </IntroCard>
              </GridItem>
              <GridItem w='100%' h='100vh' >
                <ImageCard 
                  hasAvatar={true} 
                  posFromTop={'15vh'} 
                  synopsis={[
                    'After leaving Afghanistan and the Middle East, Marco and his family continued east and entered the Mongol Empire.',
                    'The Mongol Empire was an empire founded by Genghis Khan in 1206 C.E.. At its peak, it covered 23 million square km of territory, reaching from the Pacific Ocean in the east, all the way to the Danube river in the west!',
                    'Click here to see these areas on a map!'
                  ]}
                  src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  />
              </GridItem>
              <GridItem w='100%' ></GridItem>
              <GridItem w='100%' h='100vh'>
                <ArtifactCard 
                  isCard={true}
                  hasAvatar={true} 
                  posFromTop={'15vh'}
                  artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;autoplay=1&controls=0&mute=1' 
                  synopsis={[
                    'Click here to see what Marco’s paiza might have looked like'
                  ]}
                  artifactDescription={[
                    'The Mongol Emperor reigning when the Polos reached the Mongol Empire was a man named Kublai Khan.',
                    'Marco and his family were very close to Kublai Khan. In fact, Kublai Khan even gave them special passports which allowed them to travel freely and easily within the Mongol Empire. These special passports were called paiza.'
                  ]}
                  src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  />
              </GridItem>
              <GridItem w='100%' h='100vh' style={{textAlign: "center"}} bgGradient='linear(to-r, green.200, gray.)'>
                <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                    <Next destination={"Tibet"} next={"/tibet"}/>
                </Flex>
              </GridItem>
            </Grid>
              
              {/* <h1 className = "test">GeeksForGeeks</h1> */}
          </div>
        )}
      </div>
  );
}

export default Mongol;
