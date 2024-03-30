import React, { useEffect, useRef } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

function IntroCard({title, description}) {

    console.log(description.split(" ").join(" "));

    return (
        <Flex h='100%' w='100%' p='5%'>
            <Card borderRadius='lg' maxH='50%' bgColor="#2E2C2C" opacity = "80%"  display={"flex"} alignContent={"center"} p='5%'>
                <CardBody>
                    <Heading color="#FFFFFF" mb="10%">{title}</Heading>
                    <TypeAnimation
                        sequence={[
                            1800,
                            description.split(" ").join(" ")
                        ]}
                        omitDeletionAnimation={true}
                        wrapper="span"
                        speed={60}
                        style={{ fontSize: '1em', display: 'inline-block', color: "#FFFFFF" }}
                    />    
                </CardBody>
            </Card>
        </Flex>
        
    );
  }
  
  export default IntroCard;