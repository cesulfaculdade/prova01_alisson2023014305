import {StyleSheet} from "react-native";



export const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection:"row",
        height:54,
        backgroundColor:"#fff",
        marginLeft:24,
        marginRight:24,
        justifyContent:"space-between",
        marginBottom: 8,
        borderRadius:8
    },
    iconButton:{
        width:54,
        height:54,
        backgroundColor:"#E23C44",
        color:"#fff",
        borderTopRightRadius: 8,
        borderBottomRightRadius:8,

    },
    txtTarefa:{
        paddingLeft: 12,
        color:"#000"
    }
})