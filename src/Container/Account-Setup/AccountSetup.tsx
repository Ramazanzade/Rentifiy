import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import Accont_Headr from '../../Component/AccountSetupComponents/Accont_Headr/Accont_Headr';
import Accses_Button from '../../Component/AccountSetupComponents/Accses_Button/Accses_Button';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import Google_entry from '../../Contance/Google_entry/Google_entry';
import Facebook_entry from '../../Contance/Facebook_entry/Facebook_entry';
import Apple_entry from '../../Contance/Apple_entry/Apple_entry';
import Star from '../../assets/imge/Accountsetup-imge/Star 1.svg';
import Vector from '../../assets/imge/Accountsetup-imge/Vector-a.svg';
import Footer from '../../Component/AccountSetupComponents/Footer/Footer';
import LoadingPage from '../../Contance/Loading-Page/LoadingPage';
import LottieView from 'lottie-react-native';
import Or_line from '../../Contance/Or_Line/Or_line';

const AccountSetup = ({ navigation }: any) => {
    const [loading, setloading] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={loading}
            >
                <LoadingPage />
            </Modal>
            <View style={{ backgroundColor: '#FFFFFF', height: SCREEN_HEIGHT }}>
                <Accont_Headr />
                <Accses_Button navigation={navigation} setloading={setloading} />
                <View style={{marginTop: '3%' }}>
                    <Or_line/>
                </View>
                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
                        <View style={{ marginTop: '3%' }}>
                            <Star />
                        </View>
                        <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', flex: 1 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '12%', marginTop: '7%' }}>
                                <Google_entry />
                                <Apple_entry />
                                <Facebook_entry />
                            </View>
                            <View style={{ alignSelf: 'center', marginTop: '25%' }}>
                                <Footer  navigation={navigation} />
                            </View>
                        </View>
                        <View style={{ marginTop: '-7%' }}>
                            <Vector />
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
};

export default AccountSetup;
