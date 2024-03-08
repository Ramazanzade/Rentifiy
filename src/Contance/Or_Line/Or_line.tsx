import { View, Text } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '../../Utils/common'

const Or_line = () => {
    return (
        <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
            <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50 }}></View>
            <View><Text style={{ color: '#D0D5DD', fontSize: 15, fontWeight: '600' }}>Or</Text></View>
            <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50 }}></View>
        </View>
    )
}

export default Or_line