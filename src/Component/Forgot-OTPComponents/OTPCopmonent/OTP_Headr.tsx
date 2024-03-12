import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../../assets/imge/ForgotOtp-imge/arrow-left.svg'
import Start from '../../../assets/imge/ForgotOtp-imge/4.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const OTP_Headr = ({navigation}:any) => {
    return (
        <View style={{}}>
            <View>
                <TouchableOpacity style={{ marginTop: '5%', marginLeft: '5%' }} onPress={() => navigation.navigate('Forgot')}>
                    <Icon height={30} width={30} />
                </TouchableOpacity>
            </View>
                <View style={{ alignSelf: 'center', marginTop: '5%',width:SCREEN_WIDTH-60}}>
                    <Text style={{ fontSize: 25, color: '#1A1C1E', fontWeight: '900', textAlign:'center' }}>Verify Code</Text>
                    <Text style={{ color: '#6C7278', fontWeight: '400', fontSize: 14, marginTop: '5%' ,textAlign:'center' }}>Check your SMS inbox, we have sent you the code at <Text style={{color:'rgba(222, 167, 77, 1)'}}>+994555435507</Text></Text>
            </View>
        </View>
    )
}

export default OTP_Headr