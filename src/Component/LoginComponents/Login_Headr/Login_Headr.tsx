import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Login from '../../../assets/imge/Login-imge/Abstract.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import { matrixTransform } from 'react-native-svg/lib/typescript/elements/Shape'
const Login_Headr = () => {
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', width:SCREEN_WIDTH-20, alignSelf:'flex-end', marginTop:'5%'}}>
    <View style={{marginTop:'2%'}}>
        <Text style={{color:'#1A1C1E', fontSize:30, fontWeight:'700'}}>Sign in to your Account</Text>
        <Text style={{color:'#6C7278', fontSize:13, fontWeight:'300', marginTop:'2%'}}>Welcome back to our community!</Text>
    </View>
    <View>
        <Login/>
    </View>
</View>
  )
}

export default Login_Headr