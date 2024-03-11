import { View, Text } from 'react-native'
import React from 'react'
import VectorD from '../../../assets/imge/Register-imge/Group.svg'
import VectorL from '../../../assets/imge/Register-imge/Star 1.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'

const Register_Headr = () => {
    return (

        <View style={{width: SCREEN_WIDTH - 40, alignSelf:'center', marginVertical:'5%' }}>
            <Text style={{ color: '#000000', fontSize: 50, fontFamily: 'Dragrace', textAlign: 'center' , marginBottom:'3%' }}>RENTİFİY</Text>
        </View>
    )
}

export default Register_Headr