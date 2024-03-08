import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
const Splas = () => {
  const rotationValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);
  const animatedValues = useRef(Array.from({ length: 10 }, () => new Animated.Value(0))).current;
  const text = "Rentifiy";
  useEffect(() => {
    Animated.parallel([
      Animated.timing(rotationValue, {
        toValue: 0.5,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.timing(scaleValue, {
        toValue: 0.2,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true
      }),
      Animated.delay(2000)
    ]).start(() => {
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
    }

    );
  }, []);


  const rotate = rotationValue.interpolate({
    inputRange: [0, 0.8],
    outputRange: ['0deg', '630deg']
  });

  return (
    <View style={{ backgroundColor: '#323232', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'red' }}>
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
      </View>
        <Animated.View
          style={{
            height: 120,
            width: 120,
            backgroundColor: '#F4B755',
            borderRadius: 20,
            transform: [{ rotate }, { scale: scaleValue }],
          }}>
        </Animated.View>
    </View>
  );
};

export default Splas;




