import { View, Text, TouchableOpacity, ScrollView,Image, FlatList } from 'react-native';
import React from 'react'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import styles from './welcom.style'
import { COLORS, SIZES } from '../../constants'
import {Feather, Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Search,Cart } from '../../screens';


const fixedCategories = [
  { id: '1', name: 'All Category', icon: 'bars', screen: 'Cart' },
  // ...
];

const scrollableCategories = [
  { id: '3', name: 'Thermometer', icon: 'thermometer', screen: 'ThermometerScreen' },
  { id: '4', name: 'Medical', icon: 'shield', screen: 'MedicalScreen' },
  { id: '5', name: 'Containers', icon: 'cube', screen: 'ContainersScreen' },
  { id: '6', name: 'Equipments', icon: 'fire-extinguisher', screen: 'EquipmentsScreen' },
  { id: '7', name: 'Clinic', icon: 'stethoscope', screen: 'ClinicScreen' },
  { id: '8', name: 'Wheelchair', icon: 'wheelchair', screen: 'WheelchairScreen' },
  // ...
];

const Welcome = () => {
    const navigation = useNavigation();

    const handleCategoryPress = (screenName) => {
      
      navigation.navigate(screenName);
    };

  return (
   <View>
          <View style= {styles.container}>
            <Text style= {styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
        
            Discover
            </Text>

            <Text style= {styles.small}>
        
            Unique equipment for your Clinics
            </Text>
        </View>
        <View style= {styles.searchContainer}> 
            <TouchableOpacity>
            <Feather name='search' size={24} style={styles.searchIcon}/>
        
             </TouchableOpacity>
                <View style={styles.searchWrapper}>
                <TextInput
                style={styles.searchInput}
                value=''
                onPressIn={ () =>navigation.navigate("Search")}
                placeholder='What are you looking for'
                />
                </View>
        
        <View>
            <TouchableOpacity style={styles.searchBtn} onPressIn={ () =>navigation.navigate("Search")}>
                <Ionicons name="options" size={SIZES.large} color={COLORS.offwhite}                           
                
                />
            </TouchableOpacity>
            
        </View>
        
        </View>
      
        <View style={styles.categoryContainer}>
        {/* Fixed icon buttons */}
        <View style={styles.fixedCategoryContainer}>
          {fixedCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryButton1}
              onPress={() => handleCategoryPress(category.screen)}
            >
              <FontAwesomeIcon style={styles.fixedicon} name={category.icon} size={30} color={COLORS.white} />
              <Text style={styles.categoryText1}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Scrollable categories with icons and titles */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollableCategoryContainer}>
          {scrollableCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryButton}
              onPress={() => handleCategoryPress(category.screen)}
            >
              <FontAwesomeIcon style={styles.scoicon} name={category.icon} size={24} color={COLORS.primary} />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
       
   </View>
  )
}

export default Welcome