/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Home() {
  const buttonWidth = useSharedValue(150);
  const buttonRadius = useSharedValue(5);
  const [showCheckAnimation, setShowCheckAnimation] = useState(false);

  const animatedButtonStyles = useAnimatedStyle(() => ({
    width: buttonWidth.value,
    borderRadius: buttonRadius.value,
  }));

  function animate() {
    'worklet';
    buttonWidth.value = withTiming(40, {
      duration: 1000,
    });
    buttonRadius.value = withTiming(20, {
      duration: 1000,
    });

    setShowCheckAnimation(true);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        style={{
          width: 300,
          height: 300,
        }}
        source={require('../../animations/signin.json')}
        loop
        autoPlay
      />
      <TouchableOpacity onPress={animate}>
        <Animated.View
          style={[
            {
              height: 40,
              backgroundColor: showCheckAnimation ? '#2B7E85' : 'red',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            },
            animatedButtonStyles,
          ]}>
          {showCheckAnimation ? (
            <LottieView
              style={{
                width: 40,
                height: 40,
              }}
              source={require('../../animations/check.json')}
              loop={false}
              autoPlay
            />
          ) : (
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
              }}>
              Entrar
            </Text>
          )}
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
