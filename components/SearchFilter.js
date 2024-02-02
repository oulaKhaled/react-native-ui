import React from "react";
import {StyleSheet,View,Text,ScrollView,TextInput} from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const SearchFilter=({icon,placeholder})=>{
    return(
        <View style={styles.view}>
        <FontAwesome name={icon} size={20} color="#f96163"/>
        <TextInput style={styles.textStyle}
           placeholder= {placeholder} >
               
            </TextInput>

            
        </View>

    );
}
export default SearchFilter;

const styles=StyleSheet.create({
    view:{
        backgroundColor:"#fff",
        flexDirection:"row",
        paddingVertical:16,
        paddingHorizontal:16,
        marginVertical:16,
        shadowColor:"#000",
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.1,
        shadowRadius:7
    },
    textStyle:{
        paddingLeft:8,
        fontSize:16,
        
    }
})