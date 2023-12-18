import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, Linking,} from 'react-native';
import styles from './profile.style';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Ionicons} from "@expo/vector-icons";
import Bottomtab from '../components/home/Bottomtab';
import { useNavigation } from '@react-navigation/native';

const Profile= () => {
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const navigation = useNavigation();

  const handleNotificationToggle = () => {
    setNotificationEnabled(!notificationEnabled);
  };

  const handleEditProfile = () => {
    navigation.navigate('AccountSetupScreen');
    // Navigate to the profile editing screen
    // You can use a navigation library for navigation logic
    console.log('Navigate to the profile editing screen');
  };

  const handleYourOffersClick = () => {
    // Navigate to the active ad screen
    console.log('Navigate to active ad screen');
  };

  const handleActivateLocation = () => {
    // Redirect to system location settings
    console.log('Redirect to system location settings');
  };

  const handleSupportTabClick = () => {
    // Open email client with support email
    Linking.openURL('mailto:kontakt@needle.pl');
  };

  const handlePrivacyPolicyClick = () => {
    // Redirect to the company's website for privacy policy
    Linking.openURL('https://your-website.com/privacy-policy');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
    
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image source={require('../assets/images/prof.jpg')} style={styles.profilePhoto} />
        <TouchableOpacity onPress={handleEditProfile}>
          <View style={styles.editProfileButton}>
          <Ionicons name='create-outline' size={20} style={styles.editicon} />
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            <Image source={{ uri: 'edit-icon-url' }} style={styles.editProfileIcon} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Profile Information */}
      <View style={styles.profileInfo}>
        <Text style={styles.profilename}>Mark Staker</Text>
        <Text style={styles.profiletel}>+14578656454</Text>
      </View>

      {/* Your Offers Section */}
      <View>
      <TouchableOpacity onPress={handleYourOffersClick} style={styles.yourOffers}>
      <FontAwesomeIcon name="tag" size={25} style={styles.icon} />
     
        <Text style={styles.text}>Your Offers</Text>
      </TouchableOpacity>
      </View>

      {/* User Location */}
      <TouchableOpacity onPress={handleActivateLocation} style={styles.location}>
      <FontAwesomeIcon name="globe" size={25} style={styles.icon} />
        <Text style={styles.text}> User Location</Text>
      </TouchableOpacity>

      {/* Notification Settings */}
      <View style={styles.notification}>
      <FontAwesomeIcon name="bell" size={25} style={styles.icon} />
      <Text style={styles.text}> Notification</Text>
        <Switch value={notificationEnabled} onValueChange={handleNotificationToggle} style={styles.switch} />
      </View>

      {/* Support Tab */}
      <TouchableOpacity onPress={handleSupportTabClick} style={styles.supportTab}>
      <FontAwesomeIcon name="question" size={30} style={styles.icon} />
        <Text style={styles.text}>Support</Text>
      </TouchableOpacity>

      {/* Privacy Policy */}
      <TouchableOpacity onPress={handlePrivacyPolicyClick} style={styles.privacyPolicy}>
       <FontAwesomeIcon name="file" size={25} style={styles.icon} />
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
       <View style={styles.versionContainer}>
       <Text style={styles.version}> Niddle Version 1.01</Text>
       </View>
      {/* Logout */}
      <TouchableOpacity onPress={handleLogout} style={styles.logout}>
      <Ionicons name='log-out-outline' size={20} style={styles.logouticon} />
       
        <Text style={styles.logouttext}>
          LOGOUT</Text>
      </TouchableOpacity>

   <View style = {styles.Bottomtab}>
    <Bottomtab />
    </View>
    </View>
  );
};

export default Profile;
