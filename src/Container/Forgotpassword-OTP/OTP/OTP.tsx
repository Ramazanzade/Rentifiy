import { View, Text } from 'react-native'
import React from 'react'
import OTP_Headr from '../../../Component/Forgot-OTPComponents/OTPCopmonent/OTP_Headr'
import OTP_Body from '../../../Component/Forgot-OTPComponents/OTPCopmonent/OTP_Body'

const OTP = ({navigation, pinCount}:any) => {
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <OTP_Headr navigation={navigation}/>
            <OTP_Body pinCount={4} />
        </View>
    )
}

export default OTP