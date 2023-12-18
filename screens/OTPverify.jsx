import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
//import auth from '@react-native-firebase/auth';

const OTPverify= () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']); // An array to hold 4 OTP digits
  const otpInputs = Array(4).fill(0).map((_, index) => useRef(null));
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  const handleOTPChange = (text, index) => {
    // Update the OTP digit in the array
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input field if there's a value
    if (text && index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  const handleContinue = async () => {
    if (isChecked) {
    const enteredOTP = otp.join('');
    
    try {
      // Verify the entered OTP using Firebase Authentication
      const confirmation = await auth().signInWithPhoneNumber('+1234567890'); // Replace with the user's phone number
      await confirmation.confirm(enteredOTP);

      // OTP verification successful, navigate to the next screen
      // Implement your navigation logic here
    } catch (error) {
      console.error('Error verifying OTP: ', error);
      // Handle OTP verification failure here
    }
    // Assuming verification is successful, navigate to ConfirmationScreen
    navigation.navigate('AccountSetupScreen');
} else {
    alert('Please agree to the terms and conditions.');
  }
  };

  return (
    <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.backButton}>
                    <FontAwesomeIcon name="arrow-left" size={24} color="#40C1D0" />
                  </View>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                <Image
        source={require('../assets/images/Need.png')} // Path to your company logo image
        style={styles.logo}
     
      />
                </View>
              </View>

        <Text style= {styles.OTPverify}> Enter OTP To Verify </Text>
      <View style={styles.otpContainer}>
        {otpInputs.map((inputRef, index) => (
          <TextInput
            key={index}
            ref={inputRef}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={text => handleOTPChange(text, index)}
            value={otp[index]}
          />
         
        ))
        
        }
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style= {styles.verify}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkboxContainer} onPress={toggleCheckbox}>
        <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]} />
        <Text style={styles.label}>I agree to the terms and conditions</Text>
      </TouchableOpacity>
    </View>
    
    
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 200,
    marginBottom: 10
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 10
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:50
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 80
    
  },
  OTPverify:{
    
    fontSize: 20,
    fontFamily:'semibold',
   color:"black"
  },
  verify:{
   fontSize: 20,
   color:"white"

  },
  button: {
    
   
    marginBottom: 250,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
     width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  checkbox: {
    width: 20,
    
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#40C1D0',
    borderColor: '#40C1D0',
  },
  unchecked: {
    borderColor: '#000',
  },
  label: {
    fontSize: 16,
  },
});

export default OTPverify;
