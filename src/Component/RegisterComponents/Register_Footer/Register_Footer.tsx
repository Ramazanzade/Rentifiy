import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fvector from '../../../assets/imge/Register-imge/Vector.svg'
import Fvector2 from '../../../assets/imge/Register-imge/Group-2.svg'

const Register_Footer = ({navigation}:any) => {
    return (
        <View style={{alignSelf:'center', display:'flex', flexDirection:'row', marginTop:'10%'}}>
                <Text style={{ color: '#A9A9A9', fontSize: 12, fontWeight: '500' }}>Have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{ color: 'rgba(246, 197, 119, 1)', fontSize: 12, fontWeight: '500' }}>  Log In</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Register_Footer