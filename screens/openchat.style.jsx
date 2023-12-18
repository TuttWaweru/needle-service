import { StyleSheet } from "react-native";
import {COLORS} from '../constants/index';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingBottom:90,
        backgroundColor: COLORS.primary,        
        borderBottomColor: COLORS.lightGray,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        
      },
      button:{
        marginTop:60,
        backgroundColor:"white",
        width:40,
        height:40,
        borderRadius:30
      },

      backButton: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft:12,
        marginTop:0,
        color:COLORS.primary,
        
        
      },
      messagecontainer:{
        backgroundColor: "white",
        
      

      },
      chatName: {
        marginTop:20,
        fontFamily: "bold",
        fontSize: 18,
        color: COLORS.black,
        
      },
      profilePhoto: {
        marginTop:60,
        backgroundColor:"white",
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode:"contain"
      },
      userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: COLORS.primary,
        padding: 10,
        margin: 5,
        borderRadius: 10,
      },
      respondentMessage: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.lightGray,
        padding: 10,
        margin: 5,
        borderRadius: 10,
      },
      messageText: {
              
        color: COLORS.lightGray,
      },
      messageInputContainer: {
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderTopColor: COLORS.lightGray,
      },
      messageInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
      },
      sendButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        padding: 10,
      },
      sendButtonText: {
        color: COLORS.white,
      },
  });

export default styles 