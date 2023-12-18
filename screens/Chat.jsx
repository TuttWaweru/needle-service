import React from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../constants';
import styles from './chat.style';
import { ScrollView } from 'react-native-gesture-handler';
import Bottomtab from '../components/home/Bottomtab';

const Chat = () => {
  const navigation = useNavigation();

  const chats = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hello, how are you?',
      profilePhoto: '../assets/images/prof.jpg',
      timestamp: new Date(),
      unread: 1,
    },
    {
        id: 2,
        name: 'Jane Doe',
        lastMessage: 'Hello,',
        profilePhoto: 'url_to_profile_photo',
        timestamp: new Date(),
        unread: 2,
      },
      {
        id: 3,
        name: 'PlastMed',
        lastMessage: 'Did you review the last requirment?',
        profilePhoto: 'url_to_profile_photo',
        timestamp: new Date(),
        unread: 0,
      },
      {
        id: 4,
        name: 'Mary Tanner',
        lastMessage: 'We are changing the price',
        profilePhoto: 'url_to_profile_photo',
        timestamp: new Date(),
        unread: 0,
      },
      {
        id: 5,
        name: 'Mary Tanner',
        lastMessage: 'We are changing the price',
        profilePhoto: 'url_to_profile_photo',
        timestamp: new Date(),
        unread: 0,
      },
      {
        id: 6,
        name: 'Mary Tanner',
        lastMessage: 'We are changing the price',
        profilePhoto: 'url_to_profile_photo',
        timestamp: new Date(),
        unread: 0,
      },
    // Add more chat objects
  ];

  const navigateToChat = (chatId) => {
    // Navigate to the individual chat screen
    navigation.navigate('OpenChat', { chatId });
  };

  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => navigateToChat(item.id)}>
            <View style={styles.profileContainer}>
                    {/* Display the profile photo here */}
                    <Image source={require('../assets/images/prof.jpg')} style={styles.profilePhoto} />
            </View>
            <View style={styles.detailsContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                    <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
            </View>
                    {item.unread > 0 && (
                        <Text style={styles.unread}>{item.unread}</Text>
                    )}
    </TouchableOpacity>
  );

  const formatTimestamp = (timestamp) => {
            const now = moment();
            const messageTime = moment(timestamp);
        
            // Calculate the difference in hours
            const hoursDiff = now.diff(messageTime, 'hours');
        
            // Format the timestamp based on the time difference
            if (hoursDiff < 24) {
                return moment(timestamp).fromNow(); // "2 hours ago", "a minute ago", etc.
            } 
            else {
            return moment(timestamp).format('MMM D, YYYY'); // "Dec 31, 2022"
            }
  };

             return (
            
                <View style={styles.container}>
                    <Text style={styles.header}>
                    Your Conversations
                    </Text>
                    <ScrollView>
                        <View style={styles.body}>
                            <FlatList
                            data={chats}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderChatItem}
                            />
                        </View>
                    </ScrollView>

                    
                    <View style={styles.bottom}>
                    <Bottomtab/>
                    </View>
                </View>
        
        
            );
};

export default Chat

