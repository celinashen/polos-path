
import './Intro.css';
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


function Intro() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleScroll = (event) => {
        const container = containerRef.current;
        const scrollAmount = event.deltaY * 1.0;
        container.scrollLeft += scrollAmount;
    };

    console.log("REACHED INTRO");

  return (
      <div className="background-container" onWheel={handleScroll} ref={containerRef}>
            <Card h="80vh" w="90vw" opacity={'80%'}>
                <Grid templateColumns='repeat(2, 1fr)' gap={6} h='100vh'>
                    <GridItem h='100%' w='100%'>
                        <Box boxSize='sm' h='100%' w='100%' p='50px'>
                            <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'} alignItems={'center'}>
                                <Image src='/img/marcopolo.png' alt='Dan Abramov' />
                            </Flex>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Text as='i' fontSize='3xl'>
                            Welcome to Polo’s Path! Here, you’ll get to travel with Marco Polo for portions of his 24-year journey. You’ll also get to check out some of the interesting things he saw along the way!
                        </Text>
                    </GridItem>
                </Grid>
            </Card>     
      </div>
  );
}


//BEGINNING


export default Intro;
