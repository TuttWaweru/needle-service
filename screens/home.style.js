import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../constants/index';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      
      
    },
    
      outlineIcon: {
        position: 'absolute',
        zIndex: -1,
        
      },
    icon: {
      marginRight: 10,
      color: "#40C1D0"
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    logoContainer: {
    
      width: 50,
      height: 60,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    logo: {
        width:140,
        height: 40,
        marginLeft:100,
       
        justifyContent: 'center',
        alignItems: 'center',
        
        
      },
    placeOfferButton: {
     backgroundColor: '#40C1D0',
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 80,
     
      
      
    },
    buttonText: {
      color: 'white',
      fontSize:SIZES.small,
      paddingLeft:1,
      paddingRight:1,
      textTransform:"capitalize"
      
      
      
    },
    cartCount: {
        position: "absolute",
        bottom: 16,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center",
        zIndex: 999
    
    },
    cartnumber:{
        fontFamily: "regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite
    },
    
  });

export default styles 