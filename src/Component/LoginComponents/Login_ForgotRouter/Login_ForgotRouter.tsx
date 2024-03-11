import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Forgotvector from '../../../assets/imge/Login-imge/keds.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Login_ForgotRouter = ({navigation}:any) => {
  return (
    <View style={{display:'flex',flexDirection:'row', justifyContent:'flex-end', width:SCREEN_WIDTH-20, alignSelf:'flex-start'}}>
    <View style={{marginVertical:'5%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotOtpScreen')}>
            <Text style={{color:'rgba(222, 167, 77, 1)', fontSize:12, fontWeight:'500'}}>Forgot Password?</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default Login_ForgotRouter