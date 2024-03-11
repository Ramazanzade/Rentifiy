import { View, Text, TextInput, Animated, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Eye from '../../../assets/imge/Login-imge/eye.svg'
import IsEye from '../../../assets/imge/Login-imge/eye-slash.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import LinearGradient from 'react-native-linear-gradient'
const Register_Input = ({ setloading, navigation }: any) => {
    const [name, setname] = useState('')
    const [number, setnumber] = useState('')
    const [paswword, setpaswword] = useState('')
    const [confrimpaswword, setconfrimpaswword] = useState('')
    const [show, setshow] = useState(false)
    const [hideText, setHideText] = useState(true);
    const [show1, setshow1] = useState(false)
    const [hideText1, setHideText1] = useState(true);


    const Login = () => {
        if (paswword.trim() !== '' && number.trim() !== '' && name.trim() !== "", confrimpaswword.trim() !== '') {
            setloading(true)
            setTimeout(() => {
                setloading(false)
                navigation.navigate('LoginScreen')

            }, 3000);
        } else {
        }
    }
    const presshow = () => {
        setshow(!show)
        setHideText(!hideText);
    }
    const presshow1 = () => {
        setshow1(!show1)
        setHideText1(!hideText1);
    }
    return (
        <View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                    Full Name
                </Text>
                <TextInput
                    onChangeText={setname}
                    value={name}
                    style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: '100%', alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
            </View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginVertical: '7%' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                    Number
                </Text>
                <TextInput
                    onChangeText={setnumber}
                    value={number}
                    style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                    keyboardType='numeric'
                />
            </View>
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                    Password
                </Text>
                <TextInput
                    onChangeText={setpaswword}
                    value={hideText ? paswword.replace(/./g, '*') : paswword}
                    style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
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
            <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginTop: '7%' }}>
                <Text style={{ position: 'absolute', top: -12, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(165, 165, 165, 1)' }}>
                    Confirm  Password
                </Text>
                <TextInput
                    onChangeText={setconfrimpaswword}
                    value={hideText1 ? confrimpaswword.replace(/./g, '*') : confrimpaswword}
                    style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
                <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
                    <TouchableOpacity onPress={presshow1} style={{}}>
                        {show1 ? (
                            <Eye />
                        ) : (
                            <IsEye />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                <TouchableOpacity style={{width: SCREEN_WIDTH - 40, alignSelf: 'center', height:60, }} onPress={Login}>
                    <LinearGradient
                        colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                        style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFFFFF', fontWeight: '500' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Register_Input