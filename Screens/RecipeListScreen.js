import React from "react";
import {StyleSheet,View,Text,ScrollView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchFilter from "../components/SearchFilter";
import CategoreisFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
const RecipeList=()=>{
    return(
    <SafeAreaView style={{ flex:1,marginHorizontal:16}}>
    <View>
    
  {/** render Header  */}
<Header headerText={"Hi,John"} HeaderIcon={"bell-o"}/>
{/**Searech Filter */}
<SearchFilter icon={"search"} placeholder={"enter you favorite recipe"}/>
<View style={{marginTop:15 ,}}>
{/** Categoreis filter*/}
<Text style={{fontSize:22, fontWeight:"bold",marginBottom:13}}>
Categoreis 
</Text> 
{/** Categoreis  List */}

 <CategoreisFilter/>
 </View>

 {/** Recipes Filter */}
 <View style={{marginTop:22,}}>
<Text style={{fontSize:22, fontWeight:"bold",marginBottom:13}}>
Recipes
</Text> 
 {/** Recipes List */}

 <RecipeCard/>
</View> 
 
  </View>   
    </SafeAreaView>
    );
}
export default RecipeList;

