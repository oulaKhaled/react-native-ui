import { StyleSheet,Text,View,Image, ScrollView,Pressable,FlatList } from "react-native";
import React from "react";
import RecipeList from "./RecipeListScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const WelocmeScreen=({navigation})=>{

    return(
       
         <View style={styles.viewStyle}>
       
        <Image source={require("../img/welcome1.png")}/>
        <Text style={styles.text1}> 40k+ permium recipes</Text>
        <Text style={styles.text2}> Cook Like A Chef</Text>
        <Pressable style={styles.pressStyle} onPress={()=>navigation.navigate("RecipeList")} >
        <Text style={{fontSize:18,color:"#fff",fontWeight:"700"}} >Let's Go </Text>
        

        </Pressable>


        
    </View>
   
  
   );
}

export default WelocmeScreen;

const styles = StyleSheet.create({

    text1:{
        color:"#EA1179",
        fontSize:22,
        fontWeight:"bold" ,
       
    },
    text2:{
        fontWeight:"bold",
        fontSize:45,
        color:"#3D3C42",
        marginTop:44,
        marginBottom:20

    },
    viewStyle:{
        flex:1,
        alignItems:"center",

    },
    pressStyle:{
        borderRadius:18,
        paddingVertical:17,
        width:"80%",
        alignItems:"center",
        backgroundColor:"#f96163",
        padding:20,
        margin:10,
    }
});


