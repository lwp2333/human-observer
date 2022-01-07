import React from 'react';
import {
  Box,
  Text,
  Icon,
  IconButton,
  HStack,
  Stagger,
  useDisclose,
  Heading,
  Center,
  StatusBar,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = ({ navigation }) => {
  const { isOpen, onToggle } = useDisclose();

  return (
    <>
      <StatusBar hidden />
      <Box
        flex={1}
        p={4}
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
        <Center flex={1}>
          <Heading color="white" fontSize="3xl" fontWeight={500}>
            React Native Base
          </Heading>
        </Center>

        <Box justifyContent="center" alignItems="flex-end" minH={200}>
          <Stagger
            visible={isOpen}
            initial={{
              opacity: 0,
              scale: 0,
              translateY: 0,
            }}
            animate={{
              translateY: 0,
              scale: 1,
              opacity: 1,
              transition: {
                type: 'spring',
                mass: 0.8,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}
            exit={{
              translateY: 34,
              scale: 0.5,
              opacity: 0,
              transition: {
                duration: 100,
                stagger: {
                  offset: 30,
                  reverse: true,
                },
              },
            }}>
            <IconButton
              mb="2"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              onPress={() => navigation.navigate('DrawerView')}
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="location-pin"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="2"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              onPress={() => navigation.navigate('TabsView')}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="microphone"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="2"
              variant="solid"
              bg="teal.400"
              colorScheme="teal"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  size="6"
                  name="video"
                  color="warmGray.50"
                />
              }
            />
            <IconButton
              mb="2"
              variant="solid"
              bg="red.500"
              colorScheme="red"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="photo-library"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="warmGray.50"
                />
              }
            />
          </Stagger>
        </Box>
        <HStack justifyContent="flex-end">
          <IconButton
            variant="solid"
            borderRadius="full"
            onPress={onToggle}
            bg="cyan.400"
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="warmGray.50"
                _dark={{
                  color: 'warmGray.50',
                }}
              />
            }
          />
        </HStack>

        <Center>
          <Text color="white" fontSize="sm">
            by lwp2333
          </Text>
        </Center>
      </Box>
    </>
  );
};

export default Login;
