import styles from "../screens/productDetails.style"
import { TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons, SimpleLineIcons, MaterialCommunityicons, Fontisto} from "@expo/vector-icons"
import { COLORS, SIZES } from '../constants'
import { ScrollView } from "react-native-gesture-handler"
import ImageViewer from 'react-native-image-zoom-viewer';
import Swiper from 'react-native-swiper';
import MapView, { Marker } from 'react-native-maps';
import Bottomtab from '../components/home/Bottomtab'
import { Home } from "."

const ProductDetails = ({ navigation }) => {
  const images = [
  
    { url: Image.resolveAssetSource(require('../assets/images/scan.png')).uri },
    { url: Image.resolveAssetSource(require('../assets/images/scan1.png')).uri },
    { url: Image.resolveAssetSource(require('../assets/images/scan2.png')).uri },
  ];
  const [showImageCarousel, setShowImageCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImageCarousel = (index) => {
    setCurrentIndex(index);
    setShowImageCarousel(true);
  };

  const closeImageCarousel = () => {
    setShowImageCarousel(false);
  };
  const navigateToChat = () => {
    // Implement navigation to the chat screen here
    // You need to have a "ChatScreen" or similar screen in your navigation stack
    // Example: navigation.navigate('ChatScreen', { /* Additional parameters */ });
  };
  const navigateToProfile = () => {
    // Implement navigation to the advertiser's profile screen
    // Example: navigation.navigate('ProfileScreen', { advertiserId: advertiserId });
  };

  const dialPhoneNumber = () => {
    // Implement phone dialing logic using the Linking API
    // Example: Linking.openURL(`tel:${advertiserPhoneNumber}`);
  };
  const [similarOffers, setSimilarOffers] = useState([
    // Your list of similar offers goes here
    { id: 1, title: 'Similar Offer 1', url: Image.resolveAssetSource(require('../assets/images/endo.png')).uri },
    { id: 2, title: 'Similar Offer 2', url: Image.resolveAssetSource(require('../assets/images/info1.png')).uri },
    // ... add more similar offers
  ]);
  const bounds = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <ScrollView>
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.upperRow}>
      <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
       <Ionicons name='arrow-back' size={30} color={COLORS.primary}/>
       </TouchableOpacity>

   

      </View>
     
      <Text style={styles.header}> Offer</Text>
      <View style={styles.swiperContainer}>
      <Swiper
            loop={false}
            showsButtons={false}
            showsPagination={true}
            dotStyle={styles.swiperDot} 
            activeDotStyle={styles.activedot}
            paginationStyle={styles.swiperPagination}
            onIndexChanged={(index) => setCurrentIndex(index)}
          >
            {images.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => openImageCarousel(index)}>
                <Image
                  source={{ uri: image.url }}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </Swiper>
          </View>
      
     <View style={styles.details}>
      <View style={styles.titleRow}>
        <Text style={styles.title}> Cosmetic Combine</Text>
         
        <TouchableOpacity onPress={navigateToChat}>
                <Ionicons name='chatbubble-ellipses-outline' size={30} color={COLORS.primary} />
              </TouchableOpacity>
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}> $1,245 </Text>
        </View>
      <Text style={styles.supplier} numberOfLines={1}> Medical Equipments</Text>
     
      <View style={styles.descrptionWrapper}>
     
        <Text style={styles.descrption}>Descrption</Text>
        <Text style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit est id tempus tincidunt. 
        Donec consectetur nulla nec blandit luctus. Nunc eget nunc in dui vehicula fermentum. Class 
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Suspendisse non faucibus libero, id dapibus neque. Suspendisse in ante arcu. Integer at 
        finibus nulla. Suspendisse potenti. Integer vel magna a turpis sodales tempor. Nam maximus
         egestas ex, id porttitor velit imperdiet eget. Cras semper mauris sit amet lobortis aliquet. 
         Nam luctus mauris eleifend consequat euismod. Vivamus convallis eros non nunc suscipit, vitae
          interdum orci sollicitudin. Proin felis leo, interdum nec diam at, porta tempus felis. Fusce
          
        </Text>
        <View>
          <Text style={styles.descrption}>Seller Details</Text>
          <View style={styles.seller}>
          <Text style={styles.sellerdetails}> Bruce Medicals</Text>
              <View style={styles.icon}>
                  <TouchableOpacity onPress={navigateToProfile} >
                    <Ionicons name='card' size={30}  
                    style={styles.iconseller}
                    />
                  </TouchableOpacity>
              </View>

              </View> 
              <View style={styles.seller}>
              <Text style={styles.sellerdetails}> +1901000458725</Text>
                  <View style={styles.icon}>
                    < TouchableOpacity onPress={dialPhoneNumber}>
                      <Ionicons name='call' size={30}  
                       style={styles.iconseller}
                       />
                    </TouchableOpacity>
                  </View>
              </View> 
              <Text style={styles.descrption}>Advertiser Location</Text>
              <View style={styles.location}>
               
              <MapView
              style={{  width: '100%', height: 300 }}
              initialRegion={bounds}
              region={{
                latitude: 37.78825, // Replace with the actual latitude of the advertiser
                longitude: -122.4324, // Replace with the actual longitude of the advertiser
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 37.78825, longitude: -122.4324 }} // Replace with the actual coordinates
                title="Advertiser Location"
                description="Location of the advertiser"
              />
            </MapView>
            </View>
        </View>
        
      </View>
                
     </View>
     
     <View>
      <Text style={styles.Recomd}>Similar Offers</Text>
     </View>
     <ScrollView horizontal style={styles.Carousel}>
              {/* Map through and display similar offers */}
              {similarOffers.map((offer, index) => (
                   <TouchableOpacity key={index} onPress={() => navigateToOffer(offer)}>
                   {/* Display each similar offer */}
                   <Image source={{ uri: offer.imageUrl }} style={styles.similarOfferImage} />
                <Text style={styles.similarOfferTitle}>{offer.title}</Text>
                 </TouchableOpacity>
              ))}
            </ScrollView>
     <ImageViewer
            imageUrls={images}
            index={currentIndex}
            isVisible={showImageCarousel}
            onClose={closeImageCarousel}
            renderIndicator={() => null} // Remove the default indicator
            enableSwipeDown={true}
            onSwipeDown={closeImageCarousel}
            style={styles.imageViewer}
            
            />
    
   
    </View>
    <View style = {styles.Bottomtab}>
    <Bottomtab />
    </View>
  </SafeAreaView>
  </ScrollView>
  )
};

export default ProductDetails

