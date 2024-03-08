import { View, Modal } from 'react-native'
import React, { useState } from 'react'
import Register_Headr from '../../Component/RegisterComponents/Register_Headr/Register_Headr'
import Register_Input from '../../Component/RegisterComponents/Register_Input/Register_Input'
import Register_Footer from '../../Component/RegisterComponents/Register_Footer/Register_Footer'
import LoadingPage from '../../Contance/Loading-Page/LoadingPage'

const Register = ({navigation}:any) => {
    const [loading, setloading] = useState(false);

  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
          <Modal
                animationType="slide"
                transparent={true}
                visible={loading}
            >
                <LoadingPage />
            </Modal>
        <Register_Headr/>
        <Register_Input navigation={navigation} setloading={setloading} />
        <Register_Footer navigation={navigation}/>
    </View>
  )
}

export default Register