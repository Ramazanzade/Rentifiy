import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'
import LinearGradient from 'react-native-linear-gradient';

const Accses_Button = ({navigation, setloading}:any) => {
    const Nextlogin =()=>{
        console.log("salam");
        setloading(true)
        setTimeout(() => {
            setloading(false)
            navigation.navigate('LoginScreen')

        }, 3000);
    }
    return (
        <View>
            <TouchableOpacity style={{  width: SCREEN_WIDTH - 40, alignSelf: 'center', height:72, marginTop:'5%' }} onPress={() => Nextlogin()}>
            <LinearGradient
                  colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                  style={{ flex: 1, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                >
                <Text style={{ color: '#FCFCFD', textAlign: 'center', fontSize: 15, fontWeight: '500' }}>Contiune with Phone Number</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={{width: SCREEN_WIDTH - 40, alignSelf: 'center', borderRadius: 30 , marginVertical:'5%', borderWidth:1,borderColor:'rgba(244, 183, 85, 1)'}}>
                <Text style={{ color: '#667085', textAlign: 'center', fontSize: 15, padding: '5%', fontWeight: '500' }}>Continue with Guest</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Accses_Button