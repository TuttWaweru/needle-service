import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
       width: 170,
       height:240,
       marginEnd: 22,
       borderRadius: SIZES.medium,
       backgroundColor: COLORS.lightWhite 
    },
    imagecontainer:{
        flex: 1,
        width: 160,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
        backgroundColor:COLORS.gray2
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        width:'100%'
    },
    details:{
        padding:SIZES.small,
        
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.small,
        marginBottom: 2
    },
    supplier: {
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
    },
    price: {
        fontFamily: "bold",
        fontSize: SIZES.medium
    
    },
    addBtn: {
        position: "absolute",
        bottom:SIZES.small,
        right: SIZES.small
    }
    
})



export default styles;