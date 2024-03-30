import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Center, Flex, Avatar, Box, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';



function Narrator() {

    return (
        <Grid templateColumns='repeat(4, 1fr)' maxH='40%' mb='5%'>
            <GridItem colSpan={1}>
                <Flex h='100%' w='100%' flexDirection='row' alignItems={'center'} >
                    <Image borderColor="#D4A751" name='' maxH='6vh' src={'/img/narrator.png'} />
                </Flex>
            </GridItem>
            <GridItem colSpan={3}>
                <Flex h='100%' w='100%' direction='row' alignItems='center'>
                    <Box>
                        <Heading size='sm'>Rustichello</Heading>
                    </Box>
                </Flex>
            </GridItem>
        </Grid>
    );
  }
  
  export default Narrator;