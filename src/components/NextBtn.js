import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Button } from '@chakra-ui/react';
import { MdNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Next({destination, next}) {
    console.log("NEXT: ", next);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        setIsTransitioning(true);
        setClickPosition({ x: event.clientX, y: event.clientY });
        setTimeout(() => {
            console.log(next);
            window.location.href = next;
        }, 400); 
    };

    // After the transition animation completes, navigate to the next page
    const handleAnimationComplete = () => {
        window.location.href = '/' + next.split('').join('');
    };

    return (
        <>
            <Link to={next} style={{ textDecoration: 'none' }} onClick={handleClick}>
            <Button 
                rightIcon={<MdNavigateNext />} 
                colorScheme='teal' 
                size='lg'
                as={motion.div}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                transition='0.05s easeOut'
                style={{cursor:"pointer"}}
                onClick={handleClick}
            >
                {destination}
            </Button>
            </Link>
            <AnimatePresence>
                {isTransitioning && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 3000 }}
                    style={{
                        position: 'absolute',
                        top: clickPosition.y,
                        left: clickPosition.x,
                        backgroundColor: '#2E2E2E',
                        borderRadius: '50%',
                        width: '1px',
                        height: '1px',
                        
                    }}
                />
                )}
            </AnimatePresence>
        </> 
    );
  }
  
export default Next;