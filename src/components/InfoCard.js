import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Grid, GridItem } from '@chakra-ui/react';
import Artifact from './Artifact';
import { motion } from 'framer-motion';
import './InfoCard.css';

function InfoCard() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card 
            as={motion.div}
            layout
            bg='orange.400'
            whileHover={!isOpen ? { scale: 1.1 } : {}}
            whileTap={{ scale: 0.9 }}
            transition='0.2s easeOut'
            onClick={() => setIsOpen(!isOpen)}
            initial={{ borderRadius: 5 }}
            data-isOpen={isOpen}
            className = "parent"
            >
            
            {!isOpen ? (
                <CardBody as={motion.div} layout className="child">
                    <Text>You discovered a Paiza</Text>
                </CardBody>
            ) : (
                <CardBody as={motion.div} layout className="child-open">
                    <Grid templateColumns='repeat(4, 1fr)' gap={6} minH="100%">
                        <GridItem colSpan={3}>
                            <Artifact link = "https://www.youtube.com/embed/67M1c8cpbvg?autoplay=1&controls=0&mute=1"></Artifact>
                        </GridItem>
                        <GridItem colSpan={1}>Hi there</GridItem>
                    </Grid>
                </CardBody>
            )}
        </Card>
    );
  }
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