import React, { useState } from 'react';
import { View, Text,TouchableOpacity, ImageBackground, Image, StyleSheet, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants';


const StartLogin = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
 

  
  return (
    <ImageBackground source={require('../assets/images/background1.png')} style={styles.backgroundImage}>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/Need.png')} style={styles.headerPhoto} />
      </View>
      <Text style={styles. headerText}>HELLO</Text>
      <Text style={styles.subText}>Welcome to Nidlle online Platfrom  </Text>
      <Text style={styles.subText}> for all medical equipments </Text>
       <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText1}>SignUp</Text>
      </TouchableOpacity>


   
    
  
   
    </SafeAreaView>
  </ImageBackground>
);
};

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    
  },
  container: {
    flex: 1,
  },
  header: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
        
  },
  headerText:{
  textAlign:"center",
  marginTop:50,
  fontWeight: 'semibold',
    fontSize:SIZES.xLarge,
    color:COLORS.gray

  },
  subText:{
    textAlign:"center",
    marginTop:5,
    fontWeight: 'regular',
    fontSize:SIZES.xSmall,
    color:COLORS.gray
  
},
  headerPhoto:{
    
    borderBottomLeftRadius:240,
    resizeMode:"cover",
    height:300,
    width:"100%"

  },
  signInButton: {
    marginTop:30,
    backgroundColor:COLORS.primary,
    paddingVertical: 15,
    borderRadius: 15,
    width:250,
    alignSelf:"center",
    alignItems: 'center',
    
  },
  registerButton:{
    marginTop:10,
    borderWidth:2,
    paddingVertical: 15,
    borderRadius: 5,
    borderColor:COLORS.gray,
    width:250,
    borderRadius: 15,
    alignSelf:"center",
    alignItems: 'center',

  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'semibold',
    fontSize:SIZES.medium,
    
  },
  buttonText1: {
    color:COLORS.gray,
    fontWeight: 'semibold',
    fontSize:SIZES.medium,
    
  },
 
 
});

export default StartLogin;
