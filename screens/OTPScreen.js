import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const OTPScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState('US'); // Default country code
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = async () => {
    // Implement OTP sending logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backButton}>
            <FontAwesomeIcon name="arrow-left" size={24} color="#FFFFFF" />
          </View>
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          {/* Your logo component goes here */}
        </View>
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Login/Register</Text>
      </View>
      <Text style={styles.infoText}>Phone number is needed to register or login</Text>
      <View style={styles.phoneInputContainer}>
        <View style={styles.areaCodePickerContainer}>
          <Picker
            style={styles.areaCodePicker}
            selectedValue={countryCode}
            onValueChange={itemValue => setCountryCode(itemValue)}
          >
            <Picker.Item label="+1" value="US" />
            {/* Add more country codes as needed */}
          </Picker>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Enter Phone Number"
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleSendOTP}>
        <FontAwesomeIcon name="arrow-right" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
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
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextContainer: {
    marginBottom: 10,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  areaCodePickerContainer: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  areaCodePicker: {
    height: 40,
  },
  phoneInput: {
    flex: 2,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  continueButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OTPScreen;
