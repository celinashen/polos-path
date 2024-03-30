import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex, Avatar, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';



function SoloCard({posFromTop}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card 
            maxW='sm'
            layout
            bg='white'
            mt={posFromTop}
        >
            <CardBody as={motion.div} layout className="child">
                <CardHeader>
                    <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='' src={'/img/Yuan.jpg'} />
                        <Box>
                        <Heading size='sm'>Kublai Khan</Heading>
                        <Text>Emperor Shizu of Yuan</Text>
                        </Box>
                    </Flex>
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                    Hi there! What can I do for you?
                    </Text>
                </CardBody>
                <Image
                    objectFit='cover'
                    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Chakra UI'
                />
            </CardBody>            
        </Card>
    );
  }
  
  export default SoloCard;