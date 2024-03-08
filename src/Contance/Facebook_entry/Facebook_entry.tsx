import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Facebook from '../../assets/imge/Accountsetup-imge/Facebook.svg'

const Facebook_entry = () => {
    return (
        <TouchableOpacity style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E4E7EC', borderRadius: 60, width: 60, height: 60 }}>
            <View style={{ alignSelf: 'center', marginTop: '30%' }}>
                <Facebook />
            </View>
        </TouchableOpacity>
    )
}


export default Facebook_entry