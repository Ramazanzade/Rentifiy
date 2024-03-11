import { View, Text } from 'react-native'
import React from 'react'
import Vector from '../../../assets/imge/Accountsetup-imge/Vector.svg'
import Vector2 from '../../../assets/imge/Accountsetup-imge/Vector-d.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const Accont_Headr = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'column', width: SCREEN_WIDTH - 20, alignSelf: 'center', marginTop: '10%' }}>
            <Text style={{ color: '#000000', fontSize: 50, fontFamily: 'Dragrace', textAlign: 'center' }}>RENTİFİY</Text>
            <View style={{marginVertical:'5%'}}>
                <Text style={{ color: 'rgba(248, 207, 141, 1)', fontSize: 23, fontWeight: '400', textAlign: 'center' }}>Join your account for</Text>
                <Text style={{ color: 'rgba(222, 167, 77, 1)', fontSize: 23, fontWeight: '400', textAlign: 'center' }}>better Experience</Text>
            </View>
        </View>
    )
}

export default Accont_Headr