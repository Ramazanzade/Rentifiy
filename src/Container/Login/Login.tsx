import { View, Text } from 'react-native'
import React from 'react'
import Login_Headr from '../../Component/LoginComponents/Login_Headr/Login_Headr'
import Login_Input from '../../Component/LoginComponents/Login_Input/Login_Input'
import Or_line from '../../Contance/Or_Line/Or_line'
import Google_entry from '../../Contance/Google_entry/Google_entry'
import Apple_entry from '../../Contance/Apple_entry/Apple_entry'
import Facebook_entry from '../../Contance/Facebook_entry/Facebook_entry'
import Footer from '../../Component/AccountSetupComponents/Footer/Footer'

const Login = ({navigation}:any) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Login_Headr />
            <Login_Input  navigation={navigation} />
            <View style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', flex:1}}>
                <View style={{ display: 'flex', flexDirection:'column', alignSelf: 'center' }}>
                    <Google_entry  />
                    <Apple_entry />
                    <Facebook_entry />
                </View>
                <View style={{ alignSelf: 'center'}}>
                    <Footer   navigation={navigation}/>
                </View>
            </View>
        </View>
    )
}

export default Login