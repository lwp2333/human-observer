import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Container, Heading, Center, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabsView from 'screens/TabsView';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StatusBar, View } from 'react-native';
import Login from 'screens/Login';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} />
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

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </SafeAreaView>
  );
};

const DrawerView = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="DrawerView" component={DrawerView} />
        <Stack.Screen name="TabsView" component={TabsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
