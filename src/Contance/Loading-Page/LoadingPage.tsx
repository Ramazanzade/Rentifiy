import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const LoadingPage = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(17, 17, 17, 0.3)' }}>
            <LottieView
                source={require('../../assets/lollito/loading/loading.json')}
                autoPlay
                loop
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default LoadingPage