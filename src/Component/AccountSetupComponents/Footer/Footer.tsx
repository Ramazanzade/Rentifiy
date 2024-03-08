import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

const Footer = ({navigation}:any) => {
    return (
            <View style={{ alignSelf: 'center' }}>
                <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'row', marginBottom: '6%' }}>
                    <Text style={{ color: '#A9A9A9', fontSize: 12, fontWeight: '500' }}>Don’t have an account ?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={{ color: '#F63D68', fontSize: 12, fontWeight: '500' }}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ color: '#A9A9A9', fontSize: 12, textAlign: 'center' }}>Signing up implies acceptance of our </Text>
                    <TouchableOpacity>
                        <Text style={{ color: '#F63D68', fontSize: 12, textAlign: 'center' }}>Terms & Conditions and Privacy Policy.</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

export default Footer