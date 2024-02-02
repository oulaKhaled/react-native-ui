import React from "react";
import { StyleSheet,View,Text,Image ,SafeAreaView, Pressable, ScrollView} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const RecipeDetailsScreen=({navigation,route})=>{// props that we are taking from RecipeCard.js,we can also definde it with hooks
    const {item}=route.params;
    return(
        <View  style={{
            backgroundColor:item.color,flex:1}}>
            <SafeAreaView style={{flexDirection:"row" ,marginHorizontal:16,top:50}}>
               <Pressable style={{flex:1}} onPress={()=>navigation.goBack()}>
               <FontAwesome name={"arrow-circle-left"} size={28} color={"white"} />
           
               </Pressable>
               <FontAwesome name={"heart-o"} size={28} color={"white"}/>

            </SafeAreaView>
            <View style={{ 
            backgroundColor:'#fff',
            flex:1,
            marginTop:240,
            borderTopLeftRadius:56,
            borderTopRightRadius:56,
            alignItems:"center",
            padding:16,
            }}>
            <View style={{
           // backgroundColor:'#D71313',
             height:300, 
             width:300,
             position:"absolute",
             top:-150}}>
             <Image source={item.image}// item is the param from the renderItem fun in ReacipeCard. and we took it as props here 
                style={{width:"100%", height:"100%", resizeMode:"contain"}}
             />
            </View>
            {/** Recipe Name  */}
            <Text  style={{
                marginTop:160,
                fontSize:28,
                fontWeight:"bold"
            }}> {item.name}</Text>
            <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                  {/** Recipe Descrepiton  */}
            <Text style={{fontSize:20, marginVertical:16}}> {item.description}</Text>
            
            {/** Recipe Extra Details */}
            <View style={{flexDirection:"row",justifyContent:"space-between",width:"100%",  }}>
            <View style={{
            paddingHorizontal:16,
            paddingVertical:26,
            borderRadius:8,
            alignItems:"center" ,
            backgroundColor:"rgba(255,0,0,0.38)"}}> 
            <Text style={{fontSize:20,fontWeight:400}}> {item.time}</Text>
            </View>
            <View style={{backgroundColor:"rgba(135,206,235,0.8)",
            paddingHorizontal:16,
            paddingVertical:26,
            borderRadius:8,
            alignItems:"center"}}> 
            <Text style={{fontSize:20,fontWeight:400}}> {item.difficulty}</Text>
            </View>
            <View style={{backgroundColor:"rgba(255,165,0,0.48)",
            paddingHorizontal:16,
            paddingVertical:26,
            borderRadius:8,
            alignItems:"center"}}> 
            <Text style={{fontSize:20,fontWeight:400}}> {item.calories}</Text>
            </View>

            </View>

            {/** Recipe Ingredients */}
            <View  style={{ alignSelf:"flex-start", marginVertical:22}}>
            <Text  style={{fontSize:22,fontWeight:"600",marginBottom:6}}> Ingredients</Text>
            
            {item.ingredients.map((ingredients)=>{
                 return (<View style={{flexDirection:"row",alignItems:"center",marginVertical:2}}>
                    <View style={{backgroundColor:"red", height:10, width:10,borderRadius:5,}}></View>
                    <Text style={{fontSize:18, marginLeft:6}}>{ingredients}</Text>
                </View>
              
            );
             })}


            </View>


            {/**Reacipe Steps */}
          
            <View  style={{ alignSelf:"flex-start", marginVertical:22}}>
            <Text  style={{fontSize:22,fontWeight:"600",marginBottom:6}}> Steps: </Text>
            
            {item.steps.map((step,index)=>{
                return(
                    <Text style={{fontSize:18, marginLeft:6}}>{`${index+1} ) ${step}`}</Text>
              
              
            );
             })}


            </View>

            </ScrollView>

            </View>


        </View>    
        </View>
    )
}
export default RecipeDetailsScreen;

