import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Container, Heading, Center } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeicons from 'react-native-vector-icons/FontAwesome';

const Tab_1 = () => {
  return (
    <SafeAreaView>
      <Container>
        <Center>
          <Heading color="emerald.500">Tab_1</Heading>
        </Center>
      </Container>
    </SafeAreaView>
  );
};

const Tab_2 = () => {
  return (
    <SafeAreaView>
      <Container>
        <Center>
          <Heading color="emerald.500">Tab_2</Heading>
          <FontAwesomeicons name="rocket" size={30} color="#900" />
        </Center>
      </Container>
    </SafeAreaView>
  );
};
const Tab_3 = () => {
  return (
    <SafeAreaView>
      <Container>
        <Center>
          <Heading color="emerald.500">Tab_3</Heading>
        </Center>
      </Container>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();
export default function TabsView() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Tab_1') {
            iconName = focused ? 'ios-book' : 'ios-book-outline';
          } else if (route.name === 'Tab_2') {
            iconName = focused ? 'ios-barbell' : 'ios-barbell-outline';
          } else if (route.name === 'Tab_3') {
            iconName = focused ? 'ios-walk' : 'ios-walk-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Tab_1" component={Tab_1} options={{ tabBarBadge: 3 }} />
      <Tab.Screen name="Tab_2" component={Tab_2} />
      <Tab.Screen name="Tab_3" component={Tab_3} />
    </Tab.Navigator>
  );
}
