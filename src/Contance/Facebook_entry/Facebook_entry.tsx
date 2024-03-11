import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Facebook from '../../assets/imge/Accountsetup-imge/Facebook.svg'
import { SCREEN_WIDTH } from '../../Utils/common'

const Facebook_entry = () => {
    return (
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(244, 183, 85, 1)', borderRadius: 25, width: SCREEN_WIDTH - 40, height: 62}}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
                <View style={{ margin: '4%' }}>
                <Facebook />
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(244, 183, 85, 1)', textAlign: 'center', marginLeft: '10%' }}>Continue with Facebook</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default Facebook_entry