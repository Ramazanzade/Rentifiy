import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import SplasScreen from './src/Navigator/Stcak/SplasStack/SplasScreen';
import OnboardingScreen from './src/Navigator/Stcak/OnboardingStack/OnboardingScreen';
import AccountSetupScreen from './src/Navigator/Stcak/AccountSetupStack/AccountSetupScreen';
import LoginScreen from './src/Navigator/Stcak/LoginStack/LoginScreen';
import ForgotOtpScreen from './src/Navigator/Stcak/ForgotOtpStack/ForgotOtpScreen';
import RegisterScreen from './src/Navigator/Stcak/RegisterStack/RegisterScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         {/* <Stack.Screen name="SplaScreen" component={SplasScreen} />  */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
        <Stack.Screen name="AccountSetupScreen" component={AccountSetupScreen} />
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Stack.Screen name="ForgotOtpScreen" component={ForgotOtpScreen} /> */}
        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const BigApp = () => {
  return (
    // <Provider store={store} >
      <App />
    // </Provider>
  )
}

export default BigApp;