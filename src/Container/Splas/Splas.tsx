import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing, Image } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';

const Splash = () => {
  const animatedValues = useRef(Array.from({ length: 10 }, () => new Animated.Value(0))).current;
  const imageTranslateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const svgTranslateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current; // Add this line

  const text = "Rentifiy";

  useEffect(() => {
    const animations = text.split('').map((_, index) => {
      return Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 200,
        delay: index * 50,
        easing: Easing.linear,
        useNativeDriver: true,
      });
    });

    Animated.stagger(100, animations).start();

    const imageAnimationTimeout = setTimeout(() => {
      Animated.timing(imageTranslateY, {
        toValue: -1000,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();

      Animated.timing(svgTranslateY, { // Add this block
        toValue: -1000,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, 5000);

    return () => clearTimeout(imageAnimationTimeout);
  }, []);

  return (
    <View style={{ backgroundColor: '#323232', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      {text.split('').map((char, index) => (
        <Animated.Text
          key={index}
          style={{
            color: '#000000',
            fontSize: 40,
            opacity: animatedValues[index],
            fontFamily: 'Dragrace',
            transform: [
              {
                translateX: animatedValues[index].interpolate({
                  inputRange: [0, 1],
                  outputRange: [-20, 0],
                }),
              },
            ],
          }}>
          {char}
        </Animated.Text>
      ))}
      <Animated.Image
        source={require('../../assets/imge/Splas-imge/1.png')}
        style={{
          width: 250,
          height: 250,
          position: 'absolute',
          zIndex: 3,
          transform: [{ translateY: imageTranslateY }],
        }}
      />
      <Animated.View style={{ transform: [{ translateY: svgTranslateY }], position: 'absolute', zIndex:2, width: SCREEN_WIDTH, height: SCREEN_HEIGHT, bottom:'-20%' }}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT*10}>
          <Path
            d={`M${SCREEN_WIDTH * 0.001} ${SCREEN_WIDTH * 0.999} 
                C ${SCREEN_WIDTH * 0.5} ${SCREEN_WIDTH * 0.005}, ${SCREEN_WIDTH * 0.55} ${SCREEN_WIDTH * 0.01}, ${SCREEN_WIDTH} ${SCREEN_WIDTH * 0.99}
                L ${SCREEN_WIDTH} ${SCREEN_WIDTH}
                L 0 ${SCREEN_WIDTH * 200} `}
            fill="#FFFFFF"
          />
        </Svg>
      </Animated.View>
    </View>
  );
};

export default Splash;
