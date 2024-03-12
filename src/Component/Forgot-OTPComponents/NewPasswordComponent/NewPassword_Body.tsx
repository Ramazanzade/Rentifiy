import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import Eye from '../../../assets/imge/Login-imge/eye.svg'
import IsEye from '../../../assets/imge/Login-imge/eye-slash.svg'
import NewVector from '../../../assets/imge/ForgotOtp-imge/3.svg'
import NewVector2 from '../../../assets/imge/ForgotOtp-imge/4.svg'
import { SCREEN_WIDTH } from '../../../Utils/common'
import Reset_succesfully_modal from '../../../Modal/Forgot_Password_Modal/Reset_succesfully_modal'
import LinearGradient from 'react-native-linear-gradient'

const NewPassword_Body = ({ navigation }: any) => {
  const [paswword, setpaswword] = useState('')
  const [oterpaswword, setoterpaswword] = useState('')
  const [show, setshow] = useState(false)
  const [hideText, setHideText] = useState(true);
  const [otershow, setotershow] = useState(false)
  const [oterhideText, setoterHideText] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const presshow = () => {
    setshow(!show)
    setHideText(!hideText);
  }
  const oterpresshow = () => {
    setotershow(!otershow)
    setoterHideText(!oterhideText);
  }
  const New = () => {
    if (paswword.trim() !== '' && oterpaswword.trim() !== '') {
      setModalVisible(true);
      console.log('1');
    }
    console.log('3');
  }
  const resetState = () => {
    setModalVisible(false);
  };
  return (
    <View style={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginTop: '20%' }}>
      <View>
        <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center' }}>
          <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(100, 100, 100, 1)' }}>
            New Password
          </Text>
          <TextInput
            onChangeText={setpaswword}
            value={hideText ? paswword.replace(/./g, '*') : paswword}
            style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 13, color: '#ACB5BB', padding: '4%' }}
            placeholderTextColor='#ACB5BB'
          />
          <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
            <TouchableOpacity onPress={presshow} style={{}}>
              {show ? (
                <Eye />
              ) : (
                <IsEye />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'relative', width: SCREEN_WIDTH - 30, alignSelf: 'center', marginTop: '10%' }}>
          <Text style={{ position: 'absolute', top: -15, left: 20, zIndex: 1, backgroundColor: 'white', paddingHorizontal: 5, fontSize: 11, color: 'rgba(100, 100, 100, 1)' }}>
            Confirm Password
          </Text>
          <TextInput
            onChangeText={setoterpaswword}
            value={oterhideText ? oterpaswword.replace(/./g, '*') : oterpaswword}
            style={{ borderWidth: 1, borderColor: 'rgba(165, 165, 165, 1)', borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', textAlign: 'left', paddingLeft: 25, fontSize: 12, color: '#ACB5BB', padding: '4%' }}
            placeholderTextColor='#ACB5BB'
          />
          <View style={{ position: 'absolute', zIndex: 1, alignItems: 'flex-end', marginTop: '5%', alignSelf: 'flex-end', paddingRight: '28%' }}>
            <TouchableOpacity onPress={oterpresshow} style={{}}>
              {otershow ? (
                <Eye />
              ) : (
                <IsEye />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={{ borderRadius: 50, width: SCREEN_WIDTH - 30, alignSelf: 'center', height: 65, marginBottom: '10%', marginTop:'5%' }} onPress={New}>
          <LinearGradient
            colors={['rgba(244, 183, 85, 0.27)', 'rgba(244, 183, 85, 0.5)', 'rgba(244, 183, 85, 0.7)', 'rgba(244, 183, 85, 0.75)', 'rgba(244, 183, 85, 0.9)', 'rgba(244, 183, 85, 1)']}
            style={{ flex: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFFFFF', fontWeight: '500' }}>Contiune</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            resetState();
          }}>
          <Reset_succesfully_modal navigation={navigation} />
        </Modal>
      </View>
    </View>
  )
}

export default NewPassword_Body