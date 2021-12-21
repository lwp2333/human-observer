import React from 'react';
import { NativeBaseProvider, Container, Heading, Center } from 'native-base';
import { Text } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
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
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
