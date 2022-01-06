import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import linearGradient from 'react-native-linear-gradient';
import Routes from './routes';

export default function App() {
  const theme = extendTheme({
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        200: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        300: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        400: {
          normal: 'Roboto-Regular',
          italic: 'Roboto-Italic',
        },
        500: {
          normal: 'Roboto-Medium',
        },
        600: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic',
        },
      },
    },
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto',
    },
  });

  const config = {
    dependencies: {
      'linear-gradient': linearGradient,
    },
  };
  return (
    <NativeBaseProvider config={config} theme={theme}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
