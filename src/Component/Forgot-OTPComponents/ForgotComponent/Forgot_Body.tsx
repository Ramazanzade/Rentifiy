import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import One3 from '../../../assets/imge/ForgotOtp-imge/3.svg'
import One4 from '../../../assets/imge/ForgotOtp-imge/4.svg'
import Message from '../../../assets/imge/ForgotOtp-imge/message-notif.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Check_email_modal from '../../../Modal/Forgot_Password_Modal/Check_email_modal'
import LinearGradient from 'react-native-linear-gradient'
const Forgot_Body = ({ onRegister, navigation }: any) => {
    const [number, setnumber] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const resetState = () => {
        setnumber('');
        setModalVisible(false);
    };
    const Next = () => {
        console.log('4');

        if (number.trim() !== '') {
            setModalVisible(true);
            console.log('1');
        } else if (number.trim() !== '') {
            navigation.navigate('OTP')
            console.log('2');

        }
        console.log('3');


    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <View>
                <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginVertical: '7%' }}>
                    <Text style={{ position: 'absolute', top: -13, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 14, color: 'rgba(172, 181, 187, 1)' }}>
                        Number
                    </Text>
                    <TextInput
                        onChangeText={setnumber}
                        value={number}
                        style={{ borderWidth: 1, borderColor: '#DCE4E8', borderRadius: 20, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 15, color: 'rgba(52, 64, 84, 1)', padding: '4%' }}
                        placeholderTextColor='#ACB5BB'
                        keyboardType='numeric'
                    />
                </View>
                <View style={{ alignSelf: 'center', marginTop: '10%' }}>
                    <TouchableOpacity style={{ borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center',height:65 }} onPress={Next}>
                        <LinearGradient
                            colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                            style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFFFFF', fontWeight: '500' }}>Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            resetState();
                        }}>
                        <Check_email_modal navigation={navigation} />
                    </Modal>
                </View>
            </View>
        </View>
    )
}


export default Forgot_Body