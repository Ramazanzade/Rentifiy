import { View, Text } from 'react-native'
import React from 'react'
import Vector from '../../../assets/imge/Accountsetup-imge/Vector.svg'
import Vector2 from '../../../assets/imge/Accountsetup-imge/Vector-d.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
const Accont_Headr = () => {
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '4%', width: SCREEN_WIDTH - 20, alignSelf: 'flex-end' }}>
                <View>
                    <Text style={{ color: "#1A1C1E", fontSize: 20, fontWeight: '500' }}>Welcome to</Text>
                    <Text style={{ color: '#F63D68', fontSize: 40, fontWeight: '700', marginVertical:'2%' }}>Bloomify.</Text>
                    <Text style={{ color: '#98A2B3', fontSize: 13, fontWeight: '400'}}>Embrace joy with Bloomify. Start now!</Text>
                </View>
                <View>
                    <Vector />
                </View>
            </View>
            <View>
                <Vector2 />
            </View>
        </View>
    )
}

export default Accont_Headr