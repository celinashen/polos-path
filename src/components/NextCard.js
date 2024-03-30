import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex } from '@chakra-ui/react';
import Next from './NextBtn';

function NextCard({destination}) {

    return (
        <Card maxW="20vw" minH = '100vh' bgColor="#2E2C2C" opacity = "80%" borderRadius={0}>
            <Flex h='100vh' direction="row" align="center" justify="flex-end">
                <Next destination={destination}></Next>
            </Flex>
        </Card>
    );
  }
  
  export default NextCard;