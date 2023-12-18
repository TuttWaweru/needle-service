import { TouchableOpacity, Text, View, Image } from 'react-native'
import { useState } from 'react'
import styles from "../screens/productDetails.style"
import React from 'react'
import {Ionicons, SimpleLineIcons, MaterialCommunityicons, Fontisto} from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'


const ProductDetails = ({navigation}) => {
  const[count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    
  if (count > 1){
    setCount(count - 1)
  }
  }


  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
       <TouchableOpacity onPress={() => navigation.goBack()}>
       <Ionicons name='chevron-back-circle' size={30}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={() => {}}>
       <Ionicons name='heart' size={30} color={COLORS.primary}/>
       </TouchableOpacity>

      
      <Image
                 source={require('../assets/images/endo.png')} // Path to your company logo image
                style={styles.image}
                />
                </View>
    
     <View style={styles.details}>
      <View style={styles.titleRow}>
        <Text style={styles.title}> Product</Text>
        <View style={styles.priceWrapper}>
        <Text style={styles.price}> $245 </Text>

        </View>

      </View>
      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1,2,3,4,5].map ((index) => (
            <Ionicons
            key={index}
            name='star'
            size={24}
            color="gold"
            />
          ))}
           <Text style={styles.ratingText}>(4.9)</Text>
        </View>
        <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement ()}>
              <SimpleLineIcons 
              name= "minus" size={20}
              />
            </TouchableOpacity>
            
          
          <Text style={styles.ratingText}>{count}</Text>
          <TouchableOpacity onPress={() => increment ()}>
              <SimpleLineIcons 
              name= "plus" size={20}
              />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.descrptionWrapper}>
        <Text style={styles.descrption}>Descrption</Text>
        <Text style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit est id tempus tincidunt. Donec consectetur nulla nec blandit luctus. Nunc eget nunc in dui vehicula fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse non faucibus libero, id dapibus neque. Suspendisse in ante arcu. Integer at finibus nulla. Suspendisse potenti. Integer vel magna a turpis sodales tempor. Nam maximus egestas ex, id porttitor velit imperdiet eget. Cras semper mauris sit amet lobortis aliquet. Nam luctus mauris eleifend consequat euismod. Vivamus convallis eros non nunc suscipit, vitae interdum orci sollicitudin. Proin felis leo, interdum nec diam at, porta tempus felis. Fusce viverra velit non sem rutrum dapibus.

        </Text>
      </View>
      <View style={{marginBottom: SIZES.small}}>
        <View style={styles.location}>
          <View style ={{flexDirection: 'row'}}>
          <Ionicons name='location-outline' size={20}/>
          <Text>    Poland </Text>
          </View>

          <View style ={{flexDirection: 'row'}}>
          <MaterialCommunityicons name='truck-delivery-outline' size={20}/>
          <Text> Free Delivery </Text>
          </View>
        </View>
      </View>

            <View style={styles.cartRow}>
              <TouchableOpacity onPress={() => {}} style={styles.cardBtn}>
                <Text style={styles.cartTitle}> Buy NOw</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}/>
              </TouchableOpacity>




            </View>
     </View>
    </View>
  )
}

export default ProductDetails

