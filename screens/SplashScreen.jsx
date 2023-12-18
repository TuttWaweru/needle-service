import React, { useEffect } from 'react';
import { View, StyleSheet,Image } from 'react-native';




const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the main screen after 1.5 seconds
      navigation.replace("OnboardingScreen"); // Replace 'Home' with the name of your main screen component
    }, 2500);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Need.png')} // Path to your company logo image
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40C1D0', // Set background color if needed
  },
  logo: {
    
    width: '80%', // Adjust the logo size as needed
  },
});

export default SplashScreen;
