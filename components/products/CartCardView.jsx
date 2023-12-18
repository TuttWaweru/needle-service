import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style';
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const CartCardView = () => {
    const navigation= useNavigation();
  
    return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style= {styles.container}>
            <View style= {styles.imagecontainer}>
                <Image
                 source={require('../../assets/images/endo.png')} // Path to your company logo image
                style={styles.image}
                />
               
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Medical Equipments</Text>
                <Text style={styles.supplier} numberOfLines={1}> Equipments</Text>
                
            </View>
         

        </View>
 
    </TouchableOpacity>
  )
}

export default CartCardView

