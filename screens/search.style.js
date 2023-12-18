import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";



const styles = StyleSheet.create({

    searchContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50,
        marginTop:30
    },
    searchIcon:{
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.medium,
        borderRadius: SIZES.medium
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width: 50,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium
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
      
        width: 100,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      logo: {
          
          height: 40,
          marginLeft:70,
         
          justifyContent: 'center',
          alignItems: 'center',
          
          
        },
      placeOfferButton: {
       backgroundColor: '#40C1D0',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
       
        
        
      },
      buttonText: {
        color: 'white',
        fontSize: 8,
        paddingLeft:1,
        paddingRight:1
        
        
        
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
      Bottomtab:{
        marginTop:150
      }

})
export default styles