import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';
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
                <CardBody as={motion.div} layout className="child">
                    <Artifact></Artifact>
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