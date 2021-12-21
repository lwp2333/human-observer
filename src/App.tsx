import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
