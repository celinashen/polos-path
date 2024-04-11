import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex, Avatar, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Narrator from './Narrator';
import { TypeAnimation } from 'react-type-animation';



function ImageCard({posFromTop, synopsis, cta, hasAvatar, src, hasImageDescription, imageDescription, hasImage, dialog, charSrc, charName, charRole}) {

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
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    width: '100%',
                    height: '100%',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '10%'
                }}
                onClick={toggleCard} // Close the card when clicked outside
            >
            {hasAvatar && (
                <Flex flexDirection='row' minW='100%' alignItems={'center'} pb='2%'>
                    <Image
                        maxH='12vh'
                        style={{}}
                        onClick={toggleCard}
                        objectFit='contain'
                        src={charSrc}
                        alt='Chakra UI'
                    />
                    <Box pl='2%'>
                        <Heading size='sm' color='white'>{charName}</Heading>
                        <Text color='white'>{charRole}</Text>
                    </Box>
                </Flex>
            )}
            <Card
                maxW='100%'
                bg='white'
                as={motion.div}
                layout
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: '0%' }}
                exit={{ opacity: 0, y: '50%' }}
                onClick={(e) => e.stopPropagation()}
            >
                <CardBody as={motion.div} layout className='child-open' maxH='80vh' maxW='100%'>
                    {!hasAvatar && (
                        <Grid templateColumns='repeat(3, 1fr)' gap={3} minH='100%'>
                            <GridItem colSpan={hasImageDescription ? 2 : 3} maxW='100%'>
                                <Image
                                    maxW='100%'
                                    maxH='50vh'
                                    objectFit='contain'
                                    src={src}
                                    alt='Chakra UI'
                                />
                            </GridItem>
                            {hasImageDescription && (
                                <GridItem colSpan={1}>
                                    <Text>{imageDescription}</Text>
                                </GridItem>
                            )}
                        </Grid>
                    )}
                    {
                        hasAvatar && (
                            <Grid templateColumns='repeat(3, 1fr)' gap={3} minH='100%'>
                                {hasImage && (
                                    <GridItem colSpan={hasImageDescription ? 2 : 3} maxW='100%'>
                                        <Flex direction='row' justifyContent={'center'} alignItems='center'>
                                            <Image
                                                maxW='100%'
                                                maxH='50vh'
                                                objectFit='contain'
                                                src={src}
                                                alt='Chakra UI'
                                            />
                                        </Flex>
                                    </GridItem>
                                )}
                                {hasImageDescription && (
                                    <GridItem colSpan={1}>
                                        <TypeAnimation
                                            sequence={dialog}
                                            wrapper="span"
                                            speed={60}
                                            style={{ fontSize: '1em', display: 'inline-block' }}
                                            omitDeletionAnimation={true}
                                            cursor={false}
                                        />
                                    </GridItem>
                                )}
                            </Grid>
                        )
                    }
                </CardBody>
            </Card>
            </div>
        )}

      {/* Original card */}
      <Card
        maxW='sm'
        as={motion.div}
        layout
        bg="#2E2C2C" 
        color="white"
        opacity = "90%"
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
            {synopsis.map((str, index) => (
                <Text key={index} mb='5%'>{str}</Text>
            ))}
        </CardBody>
      </Card>
    </>
    );
  }
  
  export default ImageCard;