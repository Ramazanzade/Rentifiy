import { View, Text, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Login from '../../../assets/imge/Login-imge/Abstract.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import { matrixTransform } from 'react-native-svg/lib/typescript/elements/Shape'
const Login_Headr = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: SCREEN_WIDTH - 20, alignSelf: 'flex-end', marginTop: '5%', marginBottom:'5%' }}>
      <Text style={{ color: '#1A1C1E', fontSize: 50, fontFamily: 'Dragrace' }}>RENTIFIY</Text>
    </View>
  )
}

export default Login_Headr