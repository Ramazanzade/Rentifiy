import { View, Modal } from 'react-native'
import React, { useState } from 'react'
import Register_Headr from '../../Component/RegisterComponents/Register_Headr/Register_Headr'
import Register_Input from '../../Component/RegisterComponents/Register_Input/Register_Input'
import Register_Footer from '../../Component/RegisterComponents/Register_Footer/Register_Footer'
import LoadingPage from '../../Contance/Loading-Page/LoadingPage'
import { SCREEN_HEIGHT } from '../../Utils/common'

const Register = ({ navigation }: any) => {
  const [loading, setloading] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loading}
      >
        <LoadingPage />
      </Modal>
      <Register_Headr />
      <View style={{marginTop:'20%'}}>
        <Register_Input navigation={navigation} setloading={setloading} />
      </View>
      <Register_Footer navigation={navigation} />
    </View>
  )
}

export default Register