import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Apple from '../../assets/imge/Accountsetup-imge/apple-seeklogo.com 1.svg'
import { SCREEN_WIDTH } from '../../Utils/common'

const Apple_entry = () => {
    return (
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(244, 183, 85, 1)', borderRadius: 25, width: SCREEN_WIDTH - 40, height: 62, marginVertical: '5%' }}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
                <View style={{ margin: '4%' }}>
                    <Apple />
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(244, 183, 85, 1)', textAlign: 'center', marginLeft: '13%' }}>Continue with Apple</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Apple_entry