import React, { useEffect, useState,useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import { DotIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight,faSquare  } from '@fortawesome/free-solid-svg-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants'

const OnboardingScreen = () => {
    const pagerRef = useRef(null);
    const navigation = useNavigation();
    const [onboardingCompleted, setOnboardingCompleted] = useState(false);
    const [activeDotIndex, setActiveDotIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
     
  const handleSkip = () => {
       navigation.navigate('OnboardingScreen');
  };
    
 [];
    const slides = [
      {
        image: require('../assets/images/Wel1.png'),
        
       
      },         
     
          ];
    

    const onPageSelected = event => {
       const pageIndex = event.nativeEvent.position;
    setCurrentPage(pageIndex);
    setActiveDotIndex(pageIndex);
    };
  
  return (

    <GestureHandlerRootView style={styles.container}>

      <PagerView
       style={styles.viewPager} 
       initialPage={0} 
       ref={pagerRef}
       onPageSelected={onPageSelected}
      
       >

{slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <View style={styles.infoBox}>
            <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.continueButton}>
          <Text style={styles.buttonText}>Get Started</Text>
          <FontAwesomeIcon  style={styles.arrowIcon} icon={faArrowRight} size={30} color='white' />
        </TouchableOpacity>
        
      </View>
              
            </View>
          </View>
          
        ))}
      </PagerView>

   

     
</GestureHandlerRootView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPager: {
    flex: 1,
    width: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%', // Adjust the height as needed
    resizeMode: 'cover',
   
  
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.0)', // Semi-transparent white background
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    position: 'absolute', // Position the info box on top of the image
    bottom: 0, // Place it at the bottom of the slide
    left: 0, // Align it with the left edge
    right: 0, // Align it with the right edge
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height:"10%"
  },
  infoText: {
    fontSize: 18,
    color: COLORS.gray,  // Text color for slide information
    marginBottom: 20,
    marginTop:30
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.gray, // Text color for slide title
    marginBottom: 10,
   
  },
  
  bottomContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 70,
    
  },
  buttonText: {
    marginLeft:80,
    fontFamily: 'bold',
    fontWeight: "600",
    fontSize: SIZES.large,
    color: 'white', // Button text color
  },
  skipButton: {
    marginRight: 120, // Align Skip button to the left
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    backgroundColor: "#40C1D0",
    borderRadius: 20,
    width: 280,
    marginBottom: 70,

    
    
  },

  arrowIcon: {
    
    marginLeft: 50,
    color: "white",
    height:50,
    alignSelf: "center",

    
  },


});

export default OnboardingScreen;
