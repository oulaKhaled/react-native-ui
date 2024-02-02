import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";


const Header=({headerText,HeaderIcon})=>{
    return(
        <View style={style.view}>
            <Text style={style.text}>{headerText}</Text>
            <FontAwesome name={HeaderIcon} size={24} color="#f96163"/>
        </View>
        
    );
};
export default Header;

const style=StyleSheet.create({
    view:{
        flexDirection:"row"
    },
    text:{
        flex:1,
        fontSize:22,
        fontWeight:"700"

    }
})
