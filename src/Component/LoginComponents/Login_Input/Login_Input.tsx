import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Eye from '../../../assets/imge/Login-imge/eye.svg'
import IsEye from '../../../assets/imge/Login-imge/eye-slash.svg'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/common'
import Login_ForgotRouter from '../Login_ForgotRouter/Login_ForgotRouter'
import Or_line from '../../../Contance/Or_Line/Or_line'
import LinearGradient from 'react-native-linear-gradient'
const Login_Input = ({ navigation, onRegister }: any) => {
    const [number, setnumber] = useState('')
    const [paswword, setpaswword] = useState('')
    const [show, setshow] = useState(false)
    const [hideText, setHideText] = useState(true);   
    const SingIn = () => {
        if (paswword.trim() !== '' && number.trim() !== '') {
            onRegister();
        } else {

        }

    }
    const presshow = () => {
        setshow(!show)
        setHideText(!hideText);
    }


    return (
        <View>
            <View>
                <View style={{ marginVertical: '7%', position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
                    <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                        Phone Number
                    </Text>
                    <TextInput
                        onChangeText={setnumber}
                        value={number}
                        style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                        keyboardType='numeric'
                    />
                </View>
                <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
                    <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                        Password
                    </Text>
                    <TextInput
                        onChangeText={setpaswword}
                        value={hideText ? paswword.replace(/./g, '*') : paswword}
                        style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 13, color: '#ACB5BB', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                    />
                    <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
                        <TouchableOpacity onPress={presshow} style={{}}>
                            {show ? (
                                <Eye />
                            ) : (
                                <IsEye />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View >
                <View style={{ position: 'relative' }}>
                    <Login_ForgotRouter navigation={navigation} />
                    <TouchableOpacity style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', height:60}} onPress={SingIn}>
                        <LinearGradient
                            colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                            style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 15, color:'#FFFFFF', fontWeight: '500' }}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: '4%' }}>
                    <Or_line />
                </View>
            </View>
        </View>
    )
}

export default Login_Input