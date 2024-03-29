import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Grid, GridItem } from '@chakra-ui/react';
import Artifact from './Artifact';
import { motion } from 'framer-motion';
import './InfoCard.css';

function InfoCard({posFromTop, closedText, openText}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card 
            as={motion.div}
            layout
            bg='white'
            opacity={!isOpen ? "90%" : "100%"}
            whileHover={!isOpen ? { scale: 1.1 } : {}}
            whileTap={!isOpen ? { scale: 0.9 } : {scale: 0.995}}
            transition='0.2s easeOut'
            onClick={() => setIsOpen(!isOpen)}
            initial={{ borderRadius: 5 }}
            data-isOpen={isOpen}
            className = "parent"
            mt={!isOpen ? posFromTop : "10vh"}
        >
            
            {!isOpen ? (
                <CardBody as={motion.div} layout className="child">
                    <Text>{closedText}</Text>
                </CardBody>
            ) : (
                <CardBody as={motion.div} layout className="child-open">
                    <Grid templateColumns='repeat(4, 1fr)' gap={6} minH="100%">
                        <GridItem colSpan={3}>
                            <Artifact link = "https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;autoplay=1&controls=0&mute=1"></Artifact>
                        </GridItem>
                        <GridItem colSpan={1}>{openText}</GridItem>
                    </Grid>
                </CardBody>
            )}
        </Card>
    );
  }

//   <iframe width="560" height="315" src="https://www.youtube.com/embed/CHHiIJ0acXo?si=xIYAhq9kCJRgg0g1&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//   
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <motion.div
//       layout
//       data-isOpen={isOpen}
//       initial={{ borderRadius: 50 }}
//       className="parent"
//       onClick={() => setIsOpen(!isOpen)}
//     >
//       <motion.div layout className="child" />
//     </motion.div>
//   );
  
  export default InfoCard;