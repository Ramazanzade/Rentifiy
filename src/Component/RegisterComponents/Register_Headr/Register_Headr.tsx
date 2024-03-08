import { View, Text } from 'react-native'
import React from 'react'
import VectorD from '../../../assets/imge/Register-imge/Group.svg'
import VectorL from '../../../assets/imge/Register-imge/Star 1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Register_Headr = () => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', width: SCREEN_WIDTH - 20, alignSelf: 'flex-end' }}>
                <View style={{ alignSelf: 'center' , marginTop:'-10%'}}>
                    <Text style={{ fontSize: 30, color: '#1A1C1E', fontWeight: '600' }}>Registration</Text>
                    <Text style={{ color: '#6C7278', fontSize: 13 }}>Join our community!</Text>
                </View>
                <View style={{ marginTop: '10%'}}>
                    <VectorL />
                </View>
            </View>
            <View style={{ marginTop: '-10%' }}>
                <VectorD />
            </View>
        </View>
    )
}

export default Register_Headr