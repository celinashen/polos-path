import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Grid, GridItem, Image, Box } from '@chakra-ui/react';
import Artifact from './Artifact';
import { motion } from 'framer-motion';
import './ArtifactCard.css';

function InfoCard({posFromTop, src, artifact, artifactDescription, isCard, synopsis}) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {/* Conditional rendering for the expanded card */}
        {isOpen && (
            <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: '100%',
                height: '100%',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={toggleCard} // Close the card when clicked outside
            >
            <Card
                bg='white'
                as={motion.div}
                layout
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: '0%' }}
                exit={{ opacity: 0, y: '50%' }}
            >
                <CardBody as={motion.div} layout className="child-open">
                    <Grid templateColumns='repeat(4, 1fr)' gap={6} minH="100%">
                        <GridItem colSpan={3}>
                            <Artifact link={artifact}></Artifact>
                        </GridItem>
                        <GridItem colSpan={1}>
                            {artifactDescription.map((str, index) => (
                                <Text key={index} mb='5%'>{str}</Text>
                            ))}
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
            </div>
        )}

      {/* Original card */}
      {!isCard ? (
        <Box boxSize='xs' maxW='20%' minH='100%' pt={posFromTop}>
            <Image
                maxW='60%'
                style={{cursor:"pointer"}}
                onClick={toggleCard}
                objectFit='contain'
                src={src}
                alt='Chakra UI'
                />
        </Box>
      ) : (
        <Card
        maxW='sm'
        as={motion.div}
        layout
        bg='white'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition='0.2s easeOut'
        onClick={toggleCard}
        initial={{ borderRadius: 5 }}
        data-isOpen={isOpen}
        mt={posFromTop}
        >
            <CardBody as={motion.div} layout className='child' p={'10%'}>
                {synopsis.map((str, index) => (
                    <Text key={index} mb='5%'>{str}</Text>
                ))}
            </CardBody>
        </Card>
      )}
    </>
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