import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../Utils/common';
import OtpImge from '../../../assets/imge/ForgotOtp-imge/6.svg'
import LinearGradient from 'react-native-linear-gradient';
const OTP_Time = () => {
    const [seconds, setSeconds] = useState(10);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    clearInterval(interval);
                    setModalVisible(true);
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
        <View>
            <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: SCREEN_WIDTH - 40, marginTop: '5%', position: 'relative' }}>
                <Text style={{ color: 'rgba(172, 181, 187, 1)', fontSize: 12, fontWeight: '600' }}>Send code reload in</Text>
                <Text style={{ color: 'rgba(222, 167, 77, 1)', fontSize: 15, fontWeight: '600' }}>0{minutes}:{remainingSeconds < 10 ? '0' : ''}{remainingSeconds}</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH - 60, borderRadius: 20 }}>
                        <View style={{ alignSelf: 'center', marginTop:'5%' }}>
                            <OtpImge />
                        </View>
                        <Text style={{ color: 'rgba(244, 183, 85, 1)', textAlign: 'center', fontSize: 25, marginTop:'10%' }}>Resend Code</Text>
                        <View style={{ display: 'flex', flexDirection: 'row',justifyContent:'space-evenly', marginTop:'10%', marginBottom:'5%' }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={{borderWidth:1, borderColor:'rgba(244, 183, 85, 1)', width:SCREEN_WIDTH/3.5, borderRadius:10, height:SCREEN_HEIGHT/19}}>
                                <Text style={{ color: 'rgba(246, 197, 119, 1)' , textAlign:'center'}}>Cancle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: 50, alignSelf: 'center', width:SCREEN_WIDTH/3.5}}>
                                <LinearGradient
                                    colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                                    style={{ flex: 1, borderRadius:10, justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFFFFF', fontWeight: '500',  }}>Resend</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default OTP_Time;
