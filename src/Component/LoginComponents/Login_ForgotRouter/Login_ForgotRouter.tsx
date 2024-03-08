import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Forgotvector from '../../../assets/imge/Login-imge/keds.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Login_ForgotRouter = ({navigation}:any) => {
  return (
    <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between', width:SCREEN_WIDTH-20, alignSelf:'flex-start'}}>
    <View>
        <Forgotvector/>
    </View>
    <View style={{marginTop:'4%'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('ForgotOtpScreen')}>
            <Text style={{color:'#F63D68', fontSize:12, fontWeight:'500'}}>Forgot Password?</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}

export default Login_ForgotRouter