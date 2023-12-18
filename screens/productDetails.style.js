import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    container:{
        borderColor:"black",
        backgroundColor: "white",

    },
    upperRow:{
        marginHorizontal:20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        
        width: SIZES.width -44,
        zIndex:999,
        marginTop:10,
        
        
        
    },
    header:{
        fontFamily: "bold",
        fontSize: SIZES.large,
        marginLeft:130,
       
        marginTop:50

    },
   
    image:{
        marginTop:10,
        resizeMode:"contain",
        height: 300,
       
      
              
    },
    imageViewer: {
        flex: 1,
        backgroundColor: 'black', // Customize background color as needed
        // ... other ImageViewer styles
      },
      swiperContainer: {
        height: 300, // Adjust the height as needed
      },
      swiperPagination: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        
      },
      swiperDot: {
        
        width: 20,
        height: 10,
        borderRadius: 4,
        margin: 3,
      },
      activedot:{
        backgroundColor: COLORS.primary,
        width: 20,
        height: 10,
        borderRadius: 4,
        margin: 3,
      },
     
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray,
        marginTop:10,
        marginLeft:20
    },
    details:{
        marginTop: 5,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    Recomd:{
        fontFamily: "bold",
        fontSize: SIZES.large -2,
        paddingLeft:20,
        marginBottom:20

    },
    Carousel:{
        marginBottom:20,
        paddingBottom:100,
        paddingLeft:20,
    },
    Bottomtab:{
        
      },
    cartRow:{
        
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width,
   
    },
    cardBtn:{
        width: SIZES.width*0.7,
        backgroundColor: COLORS.black,
        padding: SIZES.small/2,
        borderRadius: SIZES.small,
        marginLeft:12
    },
    cartTitle:{
        marginLeft: SIZES.small,
        fontFamily: "semibold",
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        alignItems: "center",
        justifyContent: "center"
    },
    addCart: {
        width:37,
        height:37,
        borderRadius: 50,
        marhin: SIZES.small,
        backgroundColor: COLORS.black

    },
    seller:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -80,
        top: 10 
    },
    sellerdetails:{
        fontFamily: "medium",
        fontSize: SIZES.medium
    },
    iconseller:{
        backgroundColor: COLORS.primary,
        color:COLORS.offwhite,
        
      
        
    },
    icon:{
        backgroundColor: COLORS.primary,
        borderColor:COLORS.primary,
        
        justifyContent: "center",
        borderWidth:6,
        borderRadius:30
    },

    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20 

    },
    ratingRow: {
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5  

    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    price:{
        paddingHorizontal:10,
        fontFamily: "semibold",
        fontSize: SIZES.large,
        color:COLORS.black,
        marginLeft:15
    },
    priceWrapper:{
      
        borderRadius:15

    },
    rating:{
        top: SIZES.large,
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: SIZES.large

    },
    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium",
        paddingHorizontal: SIZES.xSmall
    },
    descrptionWrapper:{
        margin: SIZES.large*2,
        marginHorizontal: SIZES.large

    },
    descrption:{
        fontFamily: "medium",
        fontSize: SIZES.large -2
    },
    descText: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    location:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        padding:5,
        borderRadius:SIZES.small
    }


})

export default styles;