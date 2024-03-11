import React from 'react';
import { View, Text } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OTP_Body = ({ pinCount }: any) => {
  return (
    <View>
      <Text>Enter OTP:</Text>
      <OTPInputView
        pinCount={4} 
        style={{width: '80%', height: 200}}
        codeInputFieldStyle={{ borderWidth: 1, borderRadius: 10 }}
        codeInputHighlightStyle={{ borderColor: 'blue' }}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you can call a function here to handle it.`);
        }}
        
      />
    </View>
  );
};

export default OTP_Body;
