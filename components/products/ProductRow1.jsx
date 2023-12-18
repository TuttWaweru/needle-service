import {FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import CartCardView from './CartCardView'
import styles from "./productRow.style"

const Productrow1= () => {
    const products = [1, 2]
  return (
    <View style={styles.container}>
    <FlatList
    data={products}
    renderItem={({item}) => <CartCardView/>}
    horizontal
    
    />
    </View>
    
  )
}

export default Productrow1

