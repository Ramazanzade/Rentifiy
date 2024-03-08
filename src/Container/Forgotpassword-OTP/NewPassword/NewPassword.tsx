import { View, Text } from 'react-native'
import React from 'react'
import NewPassword_Headr from '../../../Component/Forgot-OTPComponents/NewPasswordComponent/NewPassword_Headr'
import NewPassword_Body from '../../../Component/Forgot-OTPComponents/NewPasswordComponent/NewPassword_Body'

const NewPassword = ({navigation}:any) => {
    return (
        <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
            <NewPassword_Headr navigation={navigation} />
            <NewPassword_Body navigation={navigation}/>
        </View>
    )
}

export default NewPassword