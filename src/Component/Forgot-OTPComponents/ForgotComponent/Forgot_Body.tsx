import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import One3 from '../../../assets/imge/ForgotOtp-imge/3.svg'
import One4 from '../../../assets/imge/ForgotOtp-imge/4.svg'
import Message from '../../../assets/imge/ForgotOtp-imge/message-notif.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Check_email_modal from '../../../Modal/Forgot_Password_Modal/Check_email_modal'
const Forgot_Body = ({ onRegister, navigation }: any) => {
    const [email, setemail] = useState('')
    const [signInColor, setSignInColor] = useState('#F63D68');
    const [signInColortext, setSignInColortext] = useState('#98A2B3');
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        if (email.trim() !== '') {
            setSignInColor('#F63D68');
            setSignInColortext('#FCFCFD')
        } else {
            setSignInColor('#F2F4F7');
            setSignInColortext('#98A2B3')
        }
    }, [email]);
    const resetState = () => {
        setemail('');
        setModalVisible(false);
    };
    const Next = () => {
        console.log('4');

        if (email.trim() !== '') {
            setModalVisible(true);
            console.log('1');
        } else if (email.trim() !== '') {
            navigation.navigate('OTP')
            console.log('2');

        }
        console.log('3');


    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', flex:1 }}>
          <View>
          <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginVertical: '7%' }}>
                <Text style={{ position: 'absolute', top: -13, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 14, color:'rgba(172, 181, 187, 1)' }}>
                    Email
                </Text>
                <TextInput
                    onChangeText={setemail}
                    value={email}
                    placeholder='Enter your email or number'
                    style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 15, color: 'rgba(52, 64, 84, 1)', padding: '4%' }}
                    placeholderTextColor='#ACB5BB'
                />
            </View>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '5%' }}>
                <View>
                    <One3 />
                </View>
                <View>
                    <One4 />
                </View>
            </View>
          </View>
            <View style={{ alignSelf: 'center', marginBottom:'10%'}}>
                <TouchableOpacity style={{ backgroundColor: signInColor, borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', padding: '4%' }} onPress={Next}>
                    <Text style={{ textAlign: 'center', fontSize: 15, color: signInColortext, fontWeight: '500' }}>Next</Text>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        resetState();
                    }}>
                    <Check_email_modal navigation={navigation}/>
                </Modal>
            </View>
        </View>
    )
}


export default Forgot_Body