import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({

    container:{
        marginTop: SIZES.xSmall,
        //marginBottom: -SIZES.small,
        marginHorizontal: 12,
        marginBottom:10
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    headerTitle:{
        fontFamily: "semibold",
        fontSize: SIZES.xLarge -2,
        color: COLORS.gray

    }
})

export default styles