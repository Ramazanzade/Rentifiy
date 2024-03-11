import { View, Text, TouchableOpacity, ScrollView, Dimensions, Modal } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SCREEN_WIDTH } from '../../Utils/common'



const PrivacyModal = ({ navigation, onPress }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(17, 17, 17, 0.3)' }}>
            <View style={{ backgroundColor: '#FFFFFF', width: SCREEN_WIDTH - 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <View style={{ width: SCREEN_WIDTH - 60, height: 300, marginTop: '5%' }}>
                    <ScrollView>
                        <Text style={{ color: 'rgba(0, 0, 0, 1)', fontSize: 15, textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perspiciatis eligendi eveniet porro eos. Tempore mollitia iste ullam fugit deleniti doloremque modi consequatur nisi cum eum! Minima ut ducimus ipsum nam iusto explicabo blanditiis? Repudiandae id placeat laudantium autem quas impedit incidunt in iste iusto minima culpa illum aperiam quidem assumenda voluptates perferendis vitae vel, mollitia ab odio animi aspernatur! Corporis saepe earum ab dolorem dignissimos veniam minus voluptatum iusto id nostrum. Eos alias facere reprehenderit laboriosam, dolor veniam. Cum adipisci neque magni non perspiciatis, voluptate quod laudantium, nostrum ex corporis amet est exercitationem a officia temporibus vitae? Nihil, eaque!</Text>
                    </ScrollView>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '10%', marginBottom: '10%', width: SCREEN_WIDTH }}>
                    <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgba(244, 183, 85, 1)', borderRadius: 10, height: 40, width: SCREEN_WIDTH / 3 }} onPress={onPress}>
                        <Text style={{ color: 'rgba(246, 197, 119, 1)', textAlign: 'center', fontSize: 15, fontWeight: '500', marginTop: '2%' }}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignSelf: 'center', height: 40, width: SCREEN_WIDTH / 3 }} onPress={onPress}>
                        <LinearGradient
                            colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
                            style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Text style={{ color: '#FCFCFD', textAlign: 'center', fontSize: 15, fontWeight: '500' }} >Accept</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {/* <Modal
                        animationType="slide"
                        transparent={true}
                        visible={visible}
                        onRequestClose={() => onCancel()}
                    ></Modal> */}
                </View>
            </View>
        </View>

    )
}

export default PrivacyModal
