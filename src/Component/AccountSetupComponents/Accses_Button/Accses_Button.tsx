import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../../Utils/common'

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
            <TouchableOpacity style={{ backgroundColor: '#F63D68', width: SCREEN_WIDTH - 40, alignSelf: 'center', borderRadius: 50, marginBottom: '5%' }} onPress={() => Nextlogin()}>
                <Text style={{ color: '#FCFCFD', textAlign: 'center', fontSize: 15, padding: '5%', fontWeight: '500' }}>Sign In with email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#F2F4F7', width: SCREEN_WIDTH - 40, alignSelf: 'center', borderRadius: 50 }}>
                <Text style={{ color: '#667085', textAlign: 'center', fontSize: 15, padding: '5%', fontWeight: '500' }}>Continue with Guest</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Accses_Button