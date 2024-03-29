import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import OTP_Time from './OTP_Time';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_WIDTH } from '../../../Utils/common';
import LoadingPage from '../../../Contance/Loading-Page/LoadingPage';

const OTP_Body = ({ navigation }: any) => {
    const [loading, setloading] = useState(false)
    const Next = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            navigation.navigate('NewPassword')
            console.log('salam');
            
        }, 3000);
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '20%' }}>
                <View style={{ width: SCREEN_WIDTH / 4 - 5 }}>
                    <OtpInputs
                        handleChange={(code) => console.log(code)}
                        numberOfInputs={4}
                        autofillFromClipboard={true}
                        inputStyles={styles.input}
                    />
                </View>
                <View style={{ marginTop: '15%', alignSelf: 'center' }}>
                    <OTP_Time navigation={navigation} />
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', height: 65, marginBottom: '10%' }} onPress={() => Next()}>
                    <LinearGradient
                        colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                        style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFFFFF', fontWeight: '500' }}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={loading}
            >
                <LoadingPage />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: SCREEN_WIDTH - 60,
        alignSelf: 'center',

    },
    input: {
        width: 60,
        height: 60,
        borderRadius: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'rgba(165, 165, 165, 1)',
        color: 'rgba(222, 167, 77, 1)'
    },
});

export default OTP_Body;
