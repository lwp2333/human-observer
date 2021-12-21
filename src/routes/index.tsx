import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Container, Heading, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1} px={3}>
        <Heading
          color="emerald.500"
          onPress={() => navigation.navigate('Home')}>
          Splash
        </Heading>
      </Center>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Center flex={1} px={3}>
        <Container>
          <Heading>
            A component library for the
            <Heading color="emerald.500">React Ecosystem</Heading>
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Text>
        </Container>
      </Center>
    </SafeAreaView>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
