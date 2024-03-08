import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fvector from '../../../assets/imge/Register-imge/Vector.svg'
import Fvector2 from '../../../assets/imge/Register-imge/Group-2.svg'

const Register_Footer = ({navigation}:any) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{marginTop:'-5%'}} >
                <Fvector />
            </View>
            <View style={{ alignSelf: 'flex-end', display: 'flex', flexDirection: 'row', marginBottom: '6%' }}>
                <Text style={{ color: '#A9A9A9', fontSize: 12, fontWeight: '500' }}>Have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{ color: '#F63D68', fontSize: 12, fontWeight: '500' }}>  Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Fvector2 />
            </View>
        </View>
    )
}

export default Register_Footer