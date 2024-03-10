import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { BlurView } from '@react-native-community/blur';

const LoadingPage = () => {
    return (
        <View style={{ flex: 1, }}>
            <BlurView
                style={{ flex: 1 }}
                blurType="light"
                blurAmount={1} 
            >
                <LottieView
                    source={require('../../assets/lollito/loading/Loading.json')}
                    autoPlay
                    loop
                    style={{ flex: 1 }}
                />
            </BlurView>
        </View>
    )
}

export default LoadingPage