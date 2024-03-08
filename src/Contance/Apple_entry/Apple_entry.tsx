import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Apple from '../../assets/imge/Accountsetup-imge/apple-seeklogo.com 1.svg'

const Apple_entry = () => {
    return (
        <TouchableOpacity style={{ backgroundColor: '#F9FAFB', borderWidth: 1, borderColor: '#E4E7EC', borderRadius: 60, width: 60, height: 60, marginHorizontal: '9%' }}>
            <View style={{ alignSelf: 'center', marginTop: '20%' }}>
                <Apple />
            </View>
        </TouchableOpacity>
    )
}

export default Apple_entry