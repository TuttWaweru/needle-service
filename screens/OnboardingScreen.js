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
       navigation.navigate('StartLogin');
  };
 
    const handleContinue = () => {
     
      if (currentPage < slides.length - 1) {
        pagerRef.current.setPage(currentPage + 1);
      } else {
        AsyncStorage.setItem('onboardingCompleted', 'true').then(() => {
          navigation.navigate('StartLogin'); // Navigate to the next screen
        });
      }
      
    };
    

    useEffect(() => {
      
      // Check if onboarding has been completed
      AsyncStorage.getItem('onboardingCompleted').then(value => {
       
        if (value) {
         //Onboarding has been completed, navigate to the next screen (e.g., HomeScreen)
          navigation.navigate('StartLogin');
        } else {
           //Onboarding has not been completed, show the onboarding screen
          setShowOnboarding(true);
        }
      });
    }, []);
    const slides = [
      {
        image: require('../assets/images/info1.png'),
        title: 'Handluj',
        text: 'Kupuj i sprzedawaj sprzet dla klinki medycyny estestycznej oraz salonu Kosmetycznego',
      },
      {
        image: require('../assets/images/info2.png'),
        title: 'Zalencia',
        text: 'Publikuj Zelecenia Po Zabiegach estetycznychaby budowac zaufanie i przyciagac nowych Klientow',
      },
      {
        image: require('../assets/images/info3.png'),
        title: 'Nowi Klienci',
        text: 'Obecrosc Twojej klinjki Dziestiatki nowych zadowolonych Klentow Zaczynamy',
      },
      
     
      
    ];
    const renderDots = () => {
      const dots = [];
      for (let i = 0; i < 3; i++) { // Assuming 3 slides, adjust this according to your actual slide count
        dots.push(
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: activeDotIndex === i ? '#40C1D0' : 'lightblue' },
            ]}
          />
        );
      }
      return dots;
    };

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
            <Text style={styles.titleText}>{slide.title}</Text>
              <Text style={styles.infoText}>{slide.text}</Text>
              
            </View>
          </View>
          
        ))}
      </PagerView>

      <View style={styles.dotsContainer}>{renderDots()}</View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        {currentPage < slides.length - 0 && (
          <View style={styles.arrow} >
          <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
                       
                       <FontAwesomeIcon  style={styles.arrowIcon} icon={faArrowRight} size={30} color='white' />
            
          </TouchableOpacity>
          </View>
        )}
      </View>
</GestureHandlerRootView>
);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)', 
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
    height: '100%', 
    resizeMode: 'cover',
        borderBottomLeftRadius:10
  
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '100%',
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height:"40%"
  },
  infoText: {
    fontSize: 18,
    color: COLORS.gray,  
    marginBottom: 20,
    marginTop:30
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: COLORS.gray, 
    marginBottom: 10,
   
  },
  dot: {
    width: 15,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    
  },
  dotsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    alignSelf: 'left', 
    marginBottom: 40,
    height:30
   
  },
  bottomContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20

  },
  buttonText: {
    fontSize: 18,
    color: 'black', 
  },
  skipButton: {
    marginRight: 120, 
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    backgroundColor: "#40C1D0",
    borderRadius: 10,
    width: 70
    
    
  },

  arrowIcon: {
    
    marginLeft: 20,
    color: "white",
    height:50,
    alignSelf: "center"
    
  },


});

export default OnboardingScreen;
