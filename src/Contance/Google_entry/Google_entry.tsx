import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Google from '../../assets/imge/Accountsetup-imge/google.svg'
import { SCREEN_WIDTH } from '../../Utils/common'

const Google_entry = () => {
    return (
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(244, 183, 85, 1)', borderRadius: 25, width: SCREEN_WIDTH - 40, height: 62,}}>
        <View style={{ flexDirection: 'row', flex: 1, }}>
            <View style={{ margin: '5%' }}>
                <Google />
                </View>
                <View style={{alignSelf:'center'}}>
                    <Text style={{ color: 'rgba(244, 183, 85, 1)', textAlign: 'center', marginLeft: '10%' }}>Continue with Google</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Google_entry