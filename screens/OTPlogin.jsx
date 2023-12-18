import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity,Image } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
//import auth from '@react-native-firebase/auth';
import firebase from '../firebase';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



const OTPlogin = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('US'); // Default country code (United States)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleContinue = async () => {
    try {
      // Format the phone number with the selected country code
      const fullPhoneNumber = `+${countryCode}${phoneNumber}`;

      // Send OTP via SMS
      //const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber);
     // setVerificationId(confirmation.verificationId);

      // Automatically verify OTP (for demonstration purposes; handle in production securely)
      const otp = '123456'; // Assume OTP received via SMS is '123456'
      //const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      //await auth().signInWithCredential(credential);
      
      navigation.navigate('OTPverify');
      // OTP verification successful, navigate to the next screen (confirmation screen)
      // Implement your navigation logic here
    } catch (error) {
      console.error('Error:', error);
      // Handle OTP verification failure, show error to the user
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
      
      <Text>Enter your phone number:</Text>
      <View style={styles.phoneInputContainer}>
      <Text style = {styles.country}>
      <CountryPicker 
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCodeButton
        onSelect={country => setCountryCode(country.cca2)}
      />
      </Text>
        <TextInput
          style={styles.phoneNumberInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
      <FontAwesomeIcon style ={styles.arrow} name="arrow-right" 
      size={35} 
      color="#FFFFFF"
      
      
      />
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
    marginBottom: 180
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 180
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  },
  phoneInputContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 10
  },

  country: {
    paddingTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 100,
    borderRightWidth:0
  },
  phoneNumberInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  continueButton: {
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
     width: 100,
    height: 100,
    borderRadius: 30,
    backgroundColor: '#40C1D0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default OTPlogin;
