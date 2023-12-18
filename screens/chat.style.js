import { StyleSheet } from "react-native";
import {COLORS, SIZES,FONTS} from '../constants/index';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        
      },
      body:{
        backgroundColor: "white",
        borderTopLeftRadius:60,
        borderTopRightRadius:50
       
      },
      bottom:{
        backgroundColor: "white",
      },
     
      header: {
        fontFamily: "bold",
        fontSize: 20,
        alignItems:"center",
        color: COLORS.white,
        marginBottom: 20,
        marginTop: 100,
        marginLeft:30,
         
      },
      chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
         marginTop:50,
         paddingLeft:10,
         paddingRight:10
      },
      profileContainer: {
        marginRight: 10,
        paddingRight:5,
        
        borderRadius:30
      },
      profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      detailsContainer: {
        flex: 1,
      },
      name: {
        fontFamily: "bold",
        fontSize: 18,
        color: COLORS.primary,
      },
      lastMessage: {
        
        color: COLORS.gray,
      },
      timestamp: {
        
        color: COLORS.primary,
      },
      unread: {
        marginRight:20,
        color: COLORS.red,
        fontWeight: 'bold',
      },
  });

export default styles 