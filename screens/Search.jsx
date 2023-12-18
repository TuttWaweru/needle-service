import { View, Text,TextInput, TouchableOpacity, ScrollView,Image, FlatList } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import Bottomtab from '../components/home/Bottomtab'
import { COLORS, SIZES } from '../constants'
import {Feather, Ionicons} from '@expo/vector-icons'
import ProductRow from "../components/products/ProductRow"
import Wsearch from '../components/home/Wsearch';



const Search = () => {
  return (
    <SafeAreaView>
      
   <View style={styles.header}>
        
        <View style={styles.logoContainer}>
                  <Image
          source={require('../assets/images/logo2.png')} // Path to your company logo image
          style={styles.logo}
       
        />
                  </View>
                  
          <TouchableOpacity style={styles.placeOfferButton}>
            <Text style={styles.buttonText}>PLACE A OFFER</Text>
          </TouchableOpacity>
          
           <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Notifications')}>
           <View style={styles.cartCount}> 
          <Text style= {styles.cartnumber}>8</Text>
          </View>
              
              <FontAwesomeIcon name="bell" size={30} style={styles.icon} />
          </TouchableOpacity>
          
  
           </View>
 
        <ScrollView>
          <Wsearch/>
          <ProductRow/>
                         
        </ScrollView>
        <View style = {styles.Bottomtab}>
        <Bottomtab />
        </View>
         
        
  </SafeAreaView>
  );
};

export default Search

