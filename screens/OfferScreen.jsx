import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Bottomtab from '../components/home/Bottomtab';
import {Ionicons} from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants';
import { useNavigation } from '@react-navigation/native';


const ProductAddScreen = () => {
  const navigation = useNavigation();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };
  const handleImagePicker = async () => {
    Alert.alert('Choose Image Source', '', [
      { text: 'Camera', onPress: takePhoto },
      { text: 'Gallery', onPress: pickImage },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };


  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      multiple: true,
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

  const pickProfileImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const takeProfilePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Sorry, we need camera permissions to make this work!');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const postProduct = () => {
    // Implement logic to post the product to the database
    // You can use the product data (productName, productPrice, etc.) and images array
    // Use your preferred state management or API call here
    // After posting, navigate to the Activate Ads screen or the product category screen
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView >
      <View style={styles.backContainer}>
    <TouchableOpacity onPress={() =>  navigation.navigate('Home')}  style={styles.back}>
       <Ionicons name='arrow-back' size={30} color={COLORS.white} style={styles.backText} />
          
       </TouchableOpacity>
       <Text style={styles.header}> Submit Offer</Text>
       </View>
      <View style={styles.imageContainerHeader}>
      < TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
          <Ionicons name="camera" size={24} color="#fff" style={styles.cameraIcon} />
          <Text style={styles.imagePickerText}>Add Photos</Text>
        </TouchableOpacity>

      <View style={styles.imageContainer}>
        {images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </View>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Product Name"
        onChangeText={(text) => setProductName(text)}
        value={productName}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Category"
        onChangeText={(text) => setProductCategory(text)}
        value={productCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Price"
        onChangeText={(text) => setProductPrice(text)}
        value={productPrice}
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        placeholder="Product Location"
        onChangeText={(text) => setProductLocation(text)}
        value={productLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Product Description"
        onChangeText={(text) => setProductDescription(text)}
        value={productDescription}
        multiline
      />
        

      <TouchableOpacity style={styles.postButton} onPress={postProduct}>
        <Text style={styles.postButtonText}>Publish ad</Text>
      </TouchableOpacity>
    </ScrollView>
    <View style = {styles.Bottomtab}>
    <Bottomtab />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  backContainer:{
    flexDirection:"row",
       
  },
  back:{
    backgroundColor:COLORS.primary,
    width:50,
    height:50,
    borderRadius:30,
  },
  backText:{
    color:"white",
    textAlign:"center",
    marginTop:8,

  },
  header: {
    color: '#40C1D0',
    textAlign:"right",
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 16,
    marginLeft:60,
    marginTop:20
    
  },
  cameraIcon: {
    marginRight: 8,
    marginTop:10
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 16,
    color: '#40C1D0',
  },
  imageContainerHeader:{
   alignSelf:"center",
   
    

  },
  imagePickerButton: {
    backgroundColor: '#40C1D0',
    padding: 12,
    borderRadius: 100,
    width:100,
    height:100,
    marginBottom: 16,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#fff',
    fontSize: 15,
    textAlign:"center",
    marginTop:5
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 0,
    
  },
  image: {
    width: 50,
    height: 30,
    marginRight: 8,
    marginBottom: 0,
    borderRadius: 8,
  },
  input: {

    borderColor: '#ddd',
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    marginTop:10,
  },
  postButton: {
    backgroundColor:COLORS.primary,
    padding: 16,
    borderRadius: 8,
    marginTop:10,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductAddScreen;
