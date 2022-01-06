import React, { useState } from 'react';
import {
  Box,
  Center,
  Input,
  Icon,
  Stack,
  IconButton,
  HStack,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Login = ({ navigation }) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        bg={{
          linearGradient: {
            colors: ['lightBlue.300', 'violet.800'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        p="16"
        _text={{
          textAlign: 'center',
          fontSize: '2xl',
          fontWeight: 400,
          color: 'white',
        }}>
        React native Base
      </Box>
      <Center flex={0.6} px={3}>
        <Stack space={4} w="100%" alignItems="center">
          <Input
            size="lg"
            w={{
              base: '75%',
              md: '25%',
            }}
            variant="rounded"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                ml="2"
                size={5}
                color="muted.400"
              />
            }
            placeholder="Name"
          />
          <Input
            size="lg"
            w={{
              base: '75%',
              md: '25%',
            }}
            variant="rounded"
            type={showPass ? 'text' : 'password'}
            InputRightElement={
              <Icon
                onPress={() => {
                  setShowPass(!showPass);
                }}
                as={
                  <MaterialIcons
                    name={showPass ? 'visibility' : 'visibility-off'}
                  />
                }
                ml="2"
                size={5}
                color="muted.400"
              />
            }
            placeholder="Password"
          />
        </Stack>
      </Center>
      <Center flex={0.2} px={4}>
        <HStack space={8} alignItems="center">
          <IconButton
            colorScheme="indigo"
            rounded={50}
            variant="solid"
            onPress={() => navigation.navigate('DrawerView')}
            _icon={{
              as: FontAwesome5,
              name: 'arrow-left',
              size: 'sm',
            }}
          />
          <IconButton
            colorScheme="indigo"
            rounded={50}
            variant="solid"
            onPress={() => navigation.navigate('TabsView')}
            _icon={{
              as: FontAwesome5,
              name: 'arrow-right',
              size: 'sm',
            }}
          />
        </HStack>
      </Center>
    </SafeAreaView>
  );
};

export default Login;
