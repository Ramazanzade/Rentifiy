import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Message from '../../assets/imge/ForgotOtp-imge/message-notif.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
import LoadingPage from '../../Contance/Loading-Page/LoadingPage'
import LinearGradient from 'react-native-linear-gradient'
const Check_email_modal = ({ navigation }: any) => {
    const [loading, setloading] = useState(false)
    const NextOtp = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            navigation.navigate('OTP')

        }, 3000)
    }
    return (
        <View style={{ flex: 1 }}>
            {
                loading ?
                    (
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={loading}
                        >
                            <LoadingPage />
                        </Modal>
                    ) :
                    (

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(17, 17, 17, 0.3)' }}>
                            <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: SCREEN_WIDTH - 40, }}>
                                <View style={{ backgroundColor: 'rgba(246, 197, 119, 1)', alignSelf: 'center', borderRadius: 50, padding: '5%', marginTop: '-18%' }}>
                                    <Message />
                                </View>
                                <View style={{ marginTop: '15%' }}>
                                    <Text style={{ color: '#1D2939', textAlign: 'center', fontSize: 23, }}>Check your number</Text>
                                    <Text style={{ color: '#98A2B3', textAlign: 'center', fontSize: 15, marginVertical: '5%' }}>We have sent a instructions to recover your password to your email</Text>
                                </View>
                                <TouchableOpacity
                                    style={{ marginTop: '12%', alignSelf: 'center', width: SCREEN_WIDTH / 1.8, borderRadius: 30, marginBottom: '2%', height:50 }}
                                    onPress={() => NextOtp()}>
                                    <LinearGradient
                                        colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                                        style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center',}}>Done</Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
            }

        </View>
    )
}

export default Check_email_modal