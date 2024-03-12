import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgot from '../../../Container/Forgotpassword-OTP/Forgot/Forgot';
import OTP from '../../../Container/Forgotpassword-OTP/OTP/OTP';
import NewPassword from '../../../Container/Forgotpassword-OTP/NewPassword/NewPassword';
const Stack = createNativeStackNavigator();
const ForgotOtpScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Navigator>
    )
}

export default ForgotOtpScreen