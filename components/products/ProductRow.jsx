import {FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from "./productRow.style"

const Productrow = () => {
    const products = [1, 2]
  return (
    <View style={styles.container}>
    <FlatList
    data={products}
    renderItem={({item}) => <ProductCardView/>}
    horizontal
    
    />
    </View>
    
  )
}

export default Productrow

