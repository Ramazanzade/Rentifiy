import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../../../assets/imge/ForgotOtp-imge/arrow-left.svg'
import One from '../../../assets/imge/ForgotOtp-imge/1.svg'
import One2 from '../../../assets/imge/ForgotOtp-imge/2.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const NewPassword_Headr = ({ navigation }: any) => {
    return (
        <View>
            <View>
                <TouchableOpacity style={{ marginTop: '5%', marginLeft: '5%' }} onPress={() => navigation.navigate('OTP')}>
                    <Icon height={30} width={30} />
                </TouchableOpacity>
            </View>
            <View style={{ width: '80%', marginTop:'5%', alignSelf:'center' }}>
                <Text style={{ fontSize: 25, color: '#1A1C1E', fontWeight: '800', textAlign:'center' }}>Create New Password</Text>
                <Text style={{ color: '#6C7278', fontWeight: '400', fontSize: 12 , marginTop:'3%', textAlign:'center'}}>Your new password must be different from previous used password.</Text>
            </View>
        </View>
    )
}

export default NewPassword_Headr