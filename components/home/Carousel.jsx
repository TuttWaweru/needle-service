import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';
import {COLORS} from "../../constants"

const Carousel = () => {
    const slides= [
        "https://https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aamc.org%2Fnews%2Fshortages-syringes-dye-diagnostic-exams-how-world-events-are-straining-everyday-health-care-supply&psig=AOvVaw1094MuNP8Gc2FNmDTnpCiQ&ust=1697585341306000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDygazc-4EDFQAAAAAdAAAAABAE",
        "https://d326fntlu7tble.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b0c7e11bb4-fn2.jpg",
        "https://d326fntlu7tble.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b0c7e11bb4-fn7.jpg",
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides} 
      dotColor= {COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius:15, width: "93%", marginTop: 15, height: "0%"}}
      autoplay
      circleLoop

      />
      
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center"


    }

})