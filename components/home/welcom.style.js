import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create ({
    container: {
        width: "100%"
    },
    small:{
        fontSize: SIZES.medium ,
        color:COLORS.primary,
        fontFamily: "bold",        
        marginHorizontal: SIZES.small
    },
    welcomeTxt: (color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge -6,
        marginTop: 10,
        color: color,
        marginHorizontal: SIZES.small
       
    }),
    searchContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
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
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 16,
        backgroundColor: COLORS.lightGray,
      },
      fixedCategoryContainer: {
        flexDirection: 'row',
        marginRight: 20,
        backgroundColor: COLORS.lightGray,
       
      },
      fixedCategoryButton: {
        backgroundColor: COLORS.black,
        borderRadius: 20,
        padding: 10,
        marginLeft: 20,

      },
      fixedicon:{
        alignItems: 'center',
        marginLeft: 15,
        marginTop:5,
        width:50
      },
      scoicon:{
        alignItems: 'center',
        marginLeft: 30,
        marginTop:5,
        width:50
      },
      categoryButton1:{
        marginLeft: 20,
        backgroundColor: COLORS.primary,
        borderRadius:10,
        
        


      },
      categoryText1:{
        marginTop: 5, // Margin between icon and title
        color: COLORS.white,
        fontSize: SIZES.xSmall,
        marginBottom:5,
        textAlign: 'center',
      },
      scrollableCategoryContainer: {
        paddingBottom:10,
        paddingTop:10,
        flexDirection: 'row',
         borderColor:COLORS.gray2,
        borderLeftWidth:1,
        borderBottomWidth:1,
        borderTopWidth:1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
        
      },
      scrollableCategoryItem: {
        
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
      },
      scrollableCategoryIcon: {
        marginRight: 8,
        color:COLORS.offwhite
      },
      scrollableCategoryText: {
        color: COLORS.darkGray,
        fontSize:SIZES.xSmall,
      },
      categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
        marginTop: 20,
       
      },
      categoryButton: {
        alignItems: 'center',
        marginLeft: 20,
        
        borderRadius:10,
        width:80,
        borderWidth:2,
        borderColor:COLORS.primary
      },
      categoryText: {
        marginTop: 5, // Margin between icon and title
        color: COLORS.primary,
        fontSize: SIZES.small,
        marginBottom:5,
        textAlign: 'center',

      },
      faicon:{
        size: 24,
        color: COLORS.primary,
      }

})
export default styles