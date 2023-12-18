import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './openchat.style';
import Bottomtab from '../components/home/Bottomtab';
import {COLORS, } from '../constants/index';


const OpenChat = ({ route }) => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Dummy data for testing
  const chatData = {
    id: 1,
    name: 'John Doe',
    profilePhoto: 'url_to_profile_photo',
    messages: [
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 2, text: 'Hi there!yes but it was not showing', isUser: false },
      { id: 2, text: 'Hi there!yes but it was not showing', isUser: false },
      { id: 2, text: 'Hi there!yes but it was not showing', isUser: false },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
      { id: 1, text: 'Hello, did you have to chec k the price!', isUser: true },
    ],
  };

  const { name, profilePhoto, messages: initialMessages } = chatData;

  const sendMessage = () => {
    // Add the new message to the messages array
    const updatedMessages = [...messages, { id: messages.length + 1, text: newMessage, isUser: true }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <View style={styles.container}>
                        <View style={styles.header}>
                                <View style={styles.button}> 
                                    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                                        <Text style={styles.backButton}>{'<'}</Text>
                                    </TouchableOpacity>
                                </View>
                                    <Text style={styles.chatName}>{name}</Text>
                                    <Image source={require('../assets/images/prof.jpg')}style={styles.profilePhoto} />
                        </View>
                        <ScrollView>
                <View style={styles.messagecontainer}>
                   <FlatList
                        data={initialMessages.concat(messages)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                        <View style={item.isUser ? styles.userMessage : styles.respondentMessage}>
                            <Text style={styles.messageText}>{item.text}</Text>
                        </View>
                        )}
                        />
                   </View>
                   </ScrollView>
                   <View style={styles.messageInputContainer}>
                        <TextInput
                        style={styles.messageInput}
                        placeholder="Type a message..."
                        value={newMessage}
                        onChangeText={(text) => setNewMessage(text)}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                        {/* Use the paper airplane icon from the library */}
                        <Icon name="paper-plane" size={20} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                        <View style={styles.bottom}>
                    <Bottomtab/>
                    </View>
                 
    </View>
  );
};

export default OpenChat

