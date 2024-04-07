import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex, Avatar, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Narrator from './Narrator';



function StaticCard({posFromTop, hasAvatar, hasImage, text, src}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card 
            maxW='sm'
            mt={posFromTop}
        >
            <CardBody className="child" p={'10%'}>
                {hasAvatar && (
                    <Narrator/>
                )}
                <Text fontSize={'sm'}>{text}</Text>
                {hasImage && (
                    <Image
                        mt='5%'
                        objectFit='cover'
                        src={src}
                        alt='Chakra UI'
                    />
                )}
            </CardBody>
        </Card>
    );
  }
  
  export default StaticCard;