import React, { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Grid, GridItem, Image, Box, Flex, Heading, Button } from '@chakra-ui/react';
import Artifact from './Artifact';
import { motion } from 'framer-motion';
import './Dialog.css';
import { TypeAnimation } from 'react-type-animation';

function Dialog({posFromTop, charSrc, dialogSeq, isCard, charName, charRole, options}) {

    const [isOpen, setIsOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [answer, setAnswer] = useState('hello');
    const [dialog, setDialog] = useState(dialogSeq);

    const toggleCard = () => {
        setIsOpen(!isOpen);
    };

    const answerQuestion = (option) => {
        setAnswer([options[option]]);
        setShowOptions(false);
        setShowAnswer(true);
    };

    dialog.push(() => setShowOptions(true));

    useEffect(() => {
        if (showAnswer) {
            console.log("Show Answer:", answer);
            setDialog([]);
        }
    }, [showAnswer, answer]);

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
                <Flex flexDirection='row' minW='100%' alignItems={'center'} pb='2%'>
                    <Image
                        maxH='12vh'
                        style={{}}
                        onClick={toggleCard}
                        objectFit='contain'
                        src={charSrc}
                        alt='Chakra UI'
                    />
                    <Box pl='5%'>
                        <Heading size='sm' color='white'>{charName}</Heading>
                        <Text color='white'>{charRole}</Text>
                    </Box>
                </Flex>
                <Card
                    bg='white'
                    as={motion.div}
                    layout
                    initial={{ opacity: 0, y: '-50%' }}
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, y: '50%' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <CardBody as={motion.div} layout className="child-open">
                        <Flex direction = 'column'>
                            {!showAnswer && (
                                <TypeAnimation
                                    sequence={dialog}
                                    wrapper="span"
                                    speed={60}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                    omitDeletionAnimation={true}
                                    cursor={false}
                                />
                            )}
                            {showAnswer && (
                                <TypeAnimation
                                    sequence={answer}
                                    wrapper="span"
                                    speed={60}
                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                    omitDeletionAnimation={true}
                                    cursor={false}
                                />
                            )}
                            {showOptions && (
                                <Flex flexDirection = 'row' mt='3%'>
                                    {
                                        Object.entries(options).map(([key, optionValues]) => (
                                            <Button mr='2%' minW='10%' onClick={() => {
                                                setAnswer([options[key]]);
                                                setShowAnswer(true);
                                                setShowOptions(false);
                                            }}>
                                                {key}
                                            </Button>
                                        ))
                                    }
                                </Flex>
                                
                            )}
                        </Flex>
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
                src={charSrc}
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
            {/* <CardBody as={motion.div} layout className='child' p={'10%'}>
                {synopsis.map((str, index) => (
                    <Text key={index} mb='5%'>{str}</Text>
                ))}
            </CardBody> */}
        </Card>
      )}
    </>
    );
  }
  
  export default Dialog;


//   {dialog.map((str, index) => {
//     // Check if the current index matches any key in the options object
    
//     const optionsForIndex = options[index];
//     if (optionsForIndex) {
//         // Render options as buttons
//         console.log("INDEX FOUND: ", index);
//         console.log(options);
//         return (
//             <div key={index}>
//                 <Flex direction={'column'}>
//                     {Object.entries(optionsForIndex).map(([key, value]) => (
//                         <Button>
//                             {key}
//                         </Button>
//                     ))}
//                 </Flex>
                
//             </div>
//         );
//     } else {
//         // Render the next piece of dialog
//         console.log("INDEX NOT FOUND:" , index);
//         console.log("STRING: ", str);
//         return (
//             <TypeAnimation
//                 sequence={[
//                     dialog[index],
//                     1000,
//                     () => {
//                         // Animation completion callback
//                         if (index < dialog.length - 1) {
//                             setIndex(index + 1);
//                         }
//                     }
//                 ]}
//                 wrapper="span"
//                 speed={60}
//                 style={{ fontSize: '2em', display: 'inline-block' }}
//                 omitDeletionAnimation={true}
//                 cursor={false}
//             />
//         );
//     }
// })}