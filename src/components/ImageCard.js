import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex, Avatar, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Narrator from './Narrator';



function ImageCard({posFromTop, synopsis, cta, hasAvatar}) {

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
                maxW='60vw'
                bg='white'
                as={motion.div}
                layout
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: '0%' }}
                exit={{ opacity: 0, y: '50%' }}
            >
                <CardBody as={motion.div} layout className='child-open' maxH='80vh' maxW='100%'>
                <Grid templateColumns='repeat(3, 1fr)' minH='100%'>
                    <GridItem colSpan={3} maxW='100%'>
                    <Image
                        maxW='100%'
                        objectFit='contain'
                        src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Chakra UI'
                    />
                    </GridItem>
                </Grid>
                </CardBody>
            </Card>
            </div>
        )}

      {/* Original card */}
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
            {hasAvatar && (
                <Narrator/>
            )}
            <Text fontSize={'sm'}>{synopsis}</Text>
            <Text fontSize={'sm'} mt='10%'>{cta}</Text>
        </CardBody>
      </Card>
    </>
    );
  }
  
  export default ImageCard;