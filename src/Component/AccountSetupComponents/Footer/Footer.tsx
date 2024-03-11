import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import PrivacyModal from '../../../Modal/Privacy/PrivacyModal'

const Footer = ({ navigation }: any) => {
    const [showmodal, setshowmodal] = useState(false)
    const Privacy = () => {
        setshowmodal(true)
        
    }
    const Cancle =()=>{
        setshowmodal(false)
        console.log('Salam');
        
    }
    return (
        <View style={{ alignSelf: 'center' }}>
            <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', marginBottom: '6%' }}>
                <Text style={{ color: 'rgba(108, 108, 108, 1)', fontSize: 12, fontWeight: '500' }}>Don’t have an account ?  </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={{ color: 'rgba(246, 197, 119, 1)', fontSize: 12, fontWeight: '500' }}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
                <Text style={{ color: 'rgba(108, 108, 108, 1)', fontSize: 12, textAlign: 'center' }}>Signing up implies acceptance of our </Text>
                <TouchableOpacity onPress={Privacy}>
                    <Text style={{ color: 'rgba(246, 197, 119, 1)', fontSize: 12, textAlign: 'center' }}>Terms & Conditions and Privacy Policy.</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showmodal}
                onRequestClose={() => {
                    Cancle();
                }}
            >
                <PrivacyModal navigation={navigation} onCancel={Cancle} visible={showmodal} />
            </Modal>
        </View>
    )
}

export default Footer