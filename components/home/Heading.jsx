import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from '../../constants';
import styles from '../home/heading.style';
const Heading = () => {
  return (
    <View style={styles.container}>
        <View style= {styles.header}>
            <Text style={styles.headerTitle}>All Products</Text>
                <TouchableOpacity>
                    <Ionicons name= "ios-grid" size={24} color= {COLORS.primary}/>

                </TouchableOpacity>
        </View>

    </View>
  )
}

export default Heading;

