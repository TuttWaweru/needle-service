import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import styles from '../home/bottom.style';
import {Search,Home,Profile} from '../../screens'

const Heading = () => {
  const [activeIcon, setActiveIcon] = useState('home-outline');
  const navigation = useNavigation();

  const handleIconPress = (iconName) => {
    setActiveIcon(iconName);
    // Navigate to different screens based on the selected icon
    switch (iconName) {
      case 'home-outline':
        navigation.navigate('Home');
        break;
      case 'megaphone':
        navigation.navigate('Search');
        break;
      case 'person-outline':
        navigation.navigate('Profile');
        break;
      case 'chatbox-ellipses-outline':
        navigation.navigate('Chat');
        break;
      // Add more cases for other icons as needed
      default:
        // Do nothing for icons without a specific screen
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleIconPress('home-outline')}>
          <Ionicons
            name="home-outline"
            size={24}
            color={activeIcon === 'home-outline' ? COLORS.primary : COLORS.gray}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('megaphone')}>
          <Ionicons
            name="megaphone"
            size={24}
            color={activeIcon === 'megaphone' ? COLORS.primary : COLORS.gray}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('person-outline')}>
          <Ionicons
            name="person-outline"
            size={24}
            color={activeIcon === 'person-outline' ? COLORS.primary : COLORS.gray}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress('chatbox-ellipses-outline')}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color={activeIcon === 'chatbox-ellipses-outline' ? COLORS.primary : COLORS.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
