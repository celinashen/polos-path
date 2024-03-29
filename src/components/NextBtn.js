import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Button } from '@chakra-ui/react';
import { MdNavigateNext } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Next({destination, next}) {

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleClick = () => {
        setIsTransitioning(true);
    };

    // After the transition animation completes, navigate to the next page
    const handleAnimationComplete = () => {
        window.location.href = next;
    };

    return (
        <Link to="atlantic">
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
            
    );
  }
  
  export default Next;

//   <>
//             <AnimatePresence>
//                 {isTransitioning && (
//                 <motion.div
//                     key="wipe-transition"
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                     variants={{
//                     initial: { width: '100%' },
//                     animate: { width: '0%' },
//                     exit: { width: '100%' },
//                     }}
//                     transition={{ duration: 0.5 }} // Adjust duration as needed
//                     style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     height: '100%',
//                     backgroundColor: 'teal', // Change this to the desired color
//                     zIndex: 9999, // Ensure the colored rectangle covers the entire page
//                     }}
//                     onAnimationComplete={handleAnimationComplete}
//                 />
//                 )}
//             </AnimatePresence>