/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LottieView from 'lottie-react-native';
import { Modal } from 'react-native';

export default function SplashScreen({ visible }: { visible: boolean }) {
  return (
    <Modal visible={visible} animationType="fade">
      <LottieView
        style={{
          width: 100,
          height: 100,
          marginTop: 150,
        }}
        source={require('../../animations/welcome.json')}
        loop={false}
        autoPlay
        speed={3}
      />
    </Modal>
  );
}
