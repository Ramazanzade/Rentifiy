import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'
import Message from '../../assets/imge/ForgotOtp-imge/tick-square.svg'
import LoadingPage from '../../Contance/Loading-Page/LoadingPage'
import LinearGradient from 'react-native-linear-gradient'

const Reset_succesfully_modal = ({ navigation }: any) => {
    const [loading, setloading] = useState(false)
    const NextLogin = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            navigation.navigate('LoginScreen')

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
                            <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 20, width: SCREEN_WIDTH - 40, }}>
                                <View style={{ backgroundColor: 'rgba(244, 183, 85, 1)', alignSelf: 'center', borderRadius: 50, padding: '5%', marginTop: '-18%' }}>
                                    <Message />
                                </View>
                                <View style={{ marginTop: '12%' }}>
                                    <Text style={{ color: 'rgba(244, 183, 85, 1)', textAlign: 'center', fontSize: 23, }}>Congratulations !</Text>
                                    <Text style={{ color: 'rgba(78, 78, 78, 1)', textAlign: 'center', fontSize: 15, marginVertical: '4%' }}>Your account is ready to use. You will
                                        be redirected to the Home page in a
                                        few seconds.</Text>
                                </View>
                                <TouchableOpacity
                                    style={{ marginTop: '12%', alignSelf: 'center', width: SCREEN_WIDTH / 1.8, borderRadius: 20,height:50 , marginBottom:'5%' }}
                                    onPress={() => NextLogin()}>
                                    <LinearGradient
                                        colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                                        style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center', }}>Done</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
            }
        </View>

    )
}

export default Reset_succesfully_modal