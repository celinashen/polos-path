
import './Landing.css';
import React, { useEffect, useRef } from 'react';
import InfoCard from '../components/InfoCard';
import IntroCard from '../components/IntroCard';
import { 
    Grid, 
    GridItem, 
    Flex, 
    Center,
    Box,
    Image,
    Text,
    Card,
    Button
} from '@chakra-ui/react';
import Next from '../components/NextBtn';
import DialogueCard from '../components/DialogueCard';
import { MdNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Landing() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleScroll = (event) => {
        const container = containerRef.current;
        const scrollAmount = event.deltaY * 1.0;
        container.scrollLeft += scrollAmount;
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        setIsTransitioning(true);
        setClickPosition({ x: event.clientX, y: event.clientY });
        setTimeout(() => {
            window.location.href = '/polospath';
        }, 600); // Adjust the delay as needed to match your animation duration
    };

  return (
      <div className="background-container" onWheel={handleScroll} ref={containerRef}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} h='100vh'>
                <GridItem h='100%' w='100%'>
                    <Box boxSize='sm' h='100%' w='100%' p='50px'>
                        <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'} alignItems={'center'}>
                            <Image src='/img/marcopolo.png' alt='Dan Abramov' />
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem p='10%' pt='30%' pb='30%'>
                    <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'}>
                        <Text fontSize='7xl' color={'white'} fontWeight={'medium'} lineHeight={'90%'} mb='5%'>
                            adventure with marco polo*
                        </Text>
                        <Link to={'/polospath'} style={{ textDecoration: 'none' }} onClick={handleClick}>
                            <Button 
                                rightIcon={<MdNavigateNext />} 
                                color='#FFFFFF'
                                variant='outline' 
                                size='lg'
                                as={motion.div}
                                style={{cursor:"pointer"}}
                                onClick={handleClick}
                                _hover={{ bg: '#FFFFFF', color: '#000000' }}
                            >
                                *Start the journey
                            </Button>
                        </Link>
                    </Flex>

                </GridItem>
                <AnimatePresence>
                    {isTransitioning && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 2500 }}
                        style={{
                        position: 'absolute',
                        top: clickPosition.y,
                        left: clickPosition.x,
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: '1px',
                        height: '1px',
                        }}
                    />
                    )}
                </AnimatePresence>
            </Grid>
      </div>
  );
}


//BEGINNING
// <Card h="80vh" w="90vw" opacity={'80%'}>
//                 <Grid templateColumns='repeat(2, 1fr)' gap={6} h='100vh'>
//                     <GridItem h='100%' w='100%'>
//                         <Box boxSize='sm' h='100%' w='100%' p='50px'>
//                             <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'} alignItems={'center'}>
//                                 <Image src='/img/marcopolo.png' alt='Dan Abramov' />
//                             </Flex>
//                         </Box>
//                     </GridItem>
//                     <GridItem>
//                         <Text as='i' fontSize='3xl'>
//                             Welcome to Polo’s Path! Here, you’ll get to travel with Marco Polo for portions of his 24-year journey. You’ll also get to check out some of the interesting things he saw along the way!
//                         </Text>
//                     </GridItem>
//                 </Grid>
//             </Card>     

export default Landing;
