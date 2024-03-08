import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import Eye from '../../../assets/imge/Login-imge/eye.svg'
import IsEye from '../../../assets/imge/Login-imge/eye-slash.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Login_ForgotRouter from '../Login_ForgotRouter/Login_ForgotRouter'
import Or_line from '../../../Contance/Or_Line/Or_line'
const Login_Input = ({ navigation, onRegister }: any) => {
    const [email, setemail] = useState('')
    const [paswword, setpaswword] = useState('')
    const [show, setshow] = useState(false)
    const [hideText, setHideText] = useState(true);
    const [signInColor, setSignInColor] = useState('#F63D68');
    const [signInColortext, setSignInColortext] = useState('#98A2B3');
    const [buttonOpacity] = useState(new Animated.Value(0));
    useEffect(() => {
        if (paswword.trim() !== '' && email.trim() !== '') {
            setSignInColor('#F63D68');
            setSignInColortext('#FCFCFD')
        } else {
            setSignInColor('#F2F4F7');
            setSignInColortext('#98A2B3')
        }
    }, [email, paswword]);

    const SingIn = () => {
        if (paswword.trim() !== '' && email.trim() !== '') {
            onRegister();
        } else {

        }

    }
    const presshow = () => {
        setshow(!show)
        setHideText(!hideText);
    }
    useEffect(() => {
        Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 400,
            delay: 800,
            useNativeDriver: true,
        }).start();
    })
    return (
        <View>
            <View>
                <View style={{ marginVertical: '5%' }}>
                    <TextInput
                        onChangeText={setemail}
                        value={email}
                        placeholder='Enter your email or number'
                        style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                    />
                </View>
                <View style={{ position: 'relative' }}>
                    <TextInput
                        onChangeText={setpaswword}
                        value={hideText ? paswword.replace(/./g, '*') : paswword}
                        placeholder='Enter your password'
                        style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
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
                    <Animated.View style={{ alignSelf: 'center', transform: [{ translateY: buttonOpacity.interpolate({ inputRange: [0, 1], outputRange: [-40, 0] }) }], position: 'absolute', zIndex: -1, marginTop: '30%' }}>
                        <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={SingIn}>
                            <Text style={{ textAlign: 'center', fontSize: 15, color: signInColortext, fontWeight: '500' }}>Sign In</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <View style={{ marginTop: '4%' }}>
                    <Or_line />
                </View>
            </View>
        </View>
    )
}

export default Login_Input