import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../../assets/imge/ForgotOtp-imge/arrow-left.svg'
import One from '../../../assets/imge/ForgotOtp-imge/5.svg'
const Forgot_Headr = ({ navigation }: any) => {
    return (
        <View>
            <View>
                <TouchableOpacity style={{ marginTop: '5%', marginLeft: '5%' }} onPress={() => navigation.navigate('LoginScreen')}>
                    <Icon height={30} width={30} />
                </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', marginTop: '5%' }}>
                <View style={{ alignSelf: 'center', }}>
                    <Text style={{ fontSize: 25, color: '#1A1C1E', fontWeight: '800', textAlign: 'center' }}>Input Phone Number</Text>
                    <View style={{marginTop:'7%'}}>
                        <One width={600} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Forgot_Headr