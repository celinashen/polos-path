
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
import { TypeAnimation } from 'react-type-animation';


function Intro() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const [isDoneTyping, setIsDoneTyping] = useState(false);
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
            window.location.href = '/venice';
        }, 600); // Adjust the delay as needed to match your animation duration
    };

    useEffect(() => {
        // Creating a timeout within the useEffect hook
        setTimeout(() => {
            setIsDoneTyping(true);
        }, 21000);
    }, []);


  return (
      <div className="background-container" onWheel={handleScroll} ref={containerRef}>
        <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Card h="80vh" w="90vw" opacity={'90%'}>
                <Grid templateRows='repeat(2, 1fr)' gap={3}>
                    <GridItem>
                        <Flex h='100%' w='100%' direction={'column'} justifyContent={'center'} p={'10%'}>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Welcome to Polo’s Path!',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Here, you’ll get to travel with Marco Polo for portions of his 24-year journey.',
                                1000,
                                'You’ll also get to check out some of the interesting things he saw along the way!',
                                1000,
                                'Are you ready?'
                            ]}
                            wrapper="span"
                            speed={60}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                        />
                        </Flex>
                    </GridItem>
                    <GridItem>
                        {isDoneTyping && (
                            <Flex w="100%" direction={"row"} p={'10%'}>
                                <Link to={'/venice'} style={{ textDecoration: 'none' }} onClick={handleClick}>
                                    <Button 
                                        rightIcon={<MdNavigateNext />} 
                                        color='#FFFFFF'
                                        bg="#2E2E2E"
                                        variant='outline' 
                                        size='lg'
                                        style={{cursor:"pointer"}}
                                        onClick={handleClick}
                                        _hover={{ bg: '#FFFFFF', color: '#2E2E2E', outline: "#2E2E2E" }}
                                        as={motion.div}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 100 }}
                                        transition='0.1s easeIn'

                                    >
                                        *Start the journey
                                    </Button>
                                </Link>
                            </Flex>
                        )}
                    </GridItem>
                </Grid>
            </Card>   
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
</Flex>
      </div>
  );
}


//BEGINNING


export default Intro;
