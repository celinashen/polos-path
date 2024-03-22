import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';

function IntroCard() {

    return (
        <Card maxW='70%' minH = '100vh'>
            <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
        </Card>
    );
  }
  
  export default IntroCard;