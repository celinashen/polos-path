
import './Mongol.css';
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
import Dialog from '../components/Dialog';

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
          <div className = "background-image-mongol">
            <Grid templateColumns='repeat(6, 1fr)' gap={6}>
              <GridItem w='100%'>
                <IntroCard 
                  title="Mongol" 
                  description="After leaving Afghanistan and the Middle East, Marco and his family continued east and entered the Mongol Empire. The Mongol Empire was an empire founded by Genghis Khan in 1206 C.E.. At its peak, it covered 23 million square km of territory, reaching from the Pacific Ocean in the east, all the way to the Danube river in the west!">
                </IntroCard>
              </GridItem>
              <GridItem w='100%' h='100vh' >
                {/* REPLACE WITH PAIZA */}
                <Dialog
                  posFromTop={'30vh'}
                  charSrc={'/img/narrator.png'}  
                  imageMaxWProp={'70%'}
                  isCard={false}
                  dialogSeq={[
                    'The Mongol Emperor reigning when the Polos reached the Mongol Empire was a man named Kublai Khan.', 
                    800,
                    'Marco and his family were very close to Kublai Khan.', 
                    800,
                    'In fact, Kublai Khan even gave them special passports which allowed them to travel freely and easily within the Mongol Empire.',
                    800,
                    'These special passports were called paiza.'
                  ]}
                  charName='Rustichello'
                  charRole="Marco Polo's Friend"
                  options={{
                      "Click here to see what Marco's paiza might have looked like" : "", 
                  }}
                  showImage={false}
                  showArtifact={true}
                  imageSrc={'/img/landing-bg.png'}
                  artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;autoplay=1&controls=0&mute=1' 
                />
              </GridItem>
              <GridItem w='100%' >
                <StaticCard 
                    hasAvatar={true}
                    posFromTop='20vh'
                    hasImage={false}
                    text='While the Polos travelled around the area, including Tibet and Yunnan, they came across some curious objects. Can you spot any nearby?'
                  />
              </GridItem>
              <GridItem w='100%' h='100vh'>
                  {/* REPLACE WITH BAMBOO*/}
                  <ArtifactCard 
                    posFromTop='60vh' 
                    artifact='https://www.youtube.com/embed/CHHiIJ0acXo?si=q8iBtytFN1J6F9BZ&amp;autoplay=1&controls=0&mute=1' 
                    artifactDescription={[
                      'You’ve found some bamboo!',
                      'Marco Polo wrote of “canes” (which were actually bamboo shoots) in his account.',
                      'He described their enormous size, and also observed how locals would use short bamboo stems to create fire-cracker explosions at night to scare away dangerous wild animals.',
                    ]}
                    src={'/img/bamboo.png'}  
                    hasImage={false}
                  />
              </GridItem>
              <GridItem>
                <ArtifactCard 
                  posFromTop='20vh' 
                  artifact='https://www.youtube.com/embed/G2SJDfgSIAg?si=jo4yoc1m22w2VWDc&amp;autoplay=1&controls=0&mute=1' 
                  artifactDescription={[
                    'You found some golden teeth-grills!',
                    'Interestingly, Marco Polo noticed that in Yunnan, the people “all [had] gold teeth”. They didn’t really have gold teeth growing out of their mouths… Instead, Polo saw that locals made gold casts for their teeth to wear over their real teeth! This might have been as a show of status or auspiciousness, or even to protect their teeth!',
                  ]}
                  src={'/img/goldenGrills.png'}  
                  hasImage={false}
                />
              </GridItem>
              <GridItem w='100%' h='100vh' style={{textAlign: "center"}} bgGradient='linear(to-r, green.200, gray.)'>
                <Flex w='100%' h='100vh' direction="row" align="center" justify="flex-end" pr="5%">
                    <Next destination={"Malabar"} next={"/malabar"}/>
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
