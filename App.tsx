import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import SplashScreen from './src/components/SplashScreen';

export default function App() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }, []);

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>

      <SplashScreen visible={visible} />
    </>
  );
}
