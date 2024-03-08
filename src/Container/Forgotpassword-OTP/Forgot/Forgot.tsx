import { View, Text } from 'react-native'
import React from 'react'
import Forgot_Headr from '../../../Component/Forgot-OTPComponents/ForgotComponent/Forgot_Headr'
import Forgot_Body from '../../../Component/Forgot-OTPComponents/ForgotComponent/Forgot_Body'

const Forgot = ({navigation}:any) => {
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <Forgot_Headr navigation={navigation}/>
        <Forgot_Body navigation={navigation}/>
    </View>
  )
}

export default Forgot