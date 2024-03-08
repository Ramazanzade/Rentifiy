import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountSetup from '../../../Container/Account-Setup/AccountSetup';
const Stack = createNativeStackNavigator();
const AccountSetupScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="AccountSetup" component={AccountSetup} />
        </Stack.Navigator>
    )
}

export default AccountSetupScreen