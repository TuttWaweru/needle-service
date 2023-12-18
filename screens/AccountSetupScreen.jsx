import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { COLORS,SIZES } from '../constants';

const AccountSetupScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  

  const handleContinue = async () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <FontAwesomeIcon name="user" size={100} color={COLORS.white} />
        <Text style = {styles.textIcon}> Add Your Photo</Text>

      </View>
      <Text style = {styles.text}>Add Surname/company name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name / Company Name"
        value={name}
        onChangeText={(text) => setName(text)}
      /> 
      <Text style = {styles.text1}>Add Your Address</Text> 
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <Text style = {styles.text1}>About Yourself</Text>
      <TextInput
        style={styles.input}
        placeholder="Profile Description"
        multiline
        numberOfLines={3}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
       <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  profilePictureContainer: {
    backgroundColor: COLORS.primary,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text:{
    color:"gray",
    fontSize:SIZES.medium,
    fontWeight: "semibold",
    marginRight:40,
    marginBottom:10
  },
  text1:{
    color:"gray",
    fontSize:SIZES.medium,
    fontWeight: "semibold",
    marginRight:120,
    marginBottom:10
  },
  textIcon:{
    color:"white",
    fontSize:SIZES.small
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: COLORS.white,
    marginBottom: 20,
    borderRadius: 15,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1
  },
  continueButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize:SIZES.medium,
    color: COLORS.white,
  },
});

export default AccountSetupScreen
