import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center } from '@chakra-ui/react';

function IntroCard({title, description}) {

    return (
        <Card maxW='70%' minH = '100vh' bgColor="#2E2C2C" opacity = "80%"  display={"flex"} alignContent={"center"} borderRadius={0}>
            <CardBody>
                <Heading color="#FFFFFF">{title}</Heading>
                <Text color="#FFFFFF">{description}</Text>
            </CardBody>
        </Card>
    );
  }
  
  export default IntroCard;