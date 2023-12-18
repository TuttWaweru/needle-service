import styles from './home.style';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, TouchableOpacity, ScrollView,Image, FlatList } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import NotificationIcon from './NotificationIcon ';
import Welcome from '../components/home/Welcome';
import Heading from '../components/home/Heading'
import ProductRow from "../components/products/ProductRow"
import Bottomtab from '../components/home/Bottomtab'


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
          <Text style={styles.buttonText} onPress={() => navigation.navigate('OfferScreen')}>PLACE OFFER</Text>
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
      
      <ProductRow/>
      <ProductRow/>
      <ProductRow/>
      <ProductRow/>
      <ProductRow/>
      <ProductRow/>
      
     </ScrollView>
     <View>
     <Bottomtab/>
          </View>
  
    </SafeAreaView>
  );
};

export default Home;
