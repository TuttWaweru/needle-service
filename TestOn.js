import styles from './home.style';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import NotificationIcon from './NotificationIcon ';
import Welcome from '../components/home/Welcome';
import Heading from '../components/home/Heading'


const Home = () => {
  const navigation = useNavigation();
  const unreadNotificationsCount = 3; 


  return (
   
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        
      <View style={styles.logoContainer}>
                <Image
        source={require('../assets/images/logo2.png')} // Path to your company logo image
        style={styles.logo}
     
      />
                </View>
                
        <TouchableOpacity style={styles.placeOfferButton}>
          <Text style={styles.buttonText}>PLACE AN OFFER</Text>
        </TouchableOpacity>
        
         <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Notifications')}>
         <View style={styles.cartCount}> 
        <Text style= {styles.cartnumber}>8</Text>
        </View>
          
            <FontAwesomeIcon name="bell" size={30} style={styles.icon} />
        </TouchableOpacity>
         </View>
    <ScrollView>
      <Welcome/>
      <Heading/>
      
     </ScrollView>
       
    </SafeAreaView>
  );
};

export default Home;
