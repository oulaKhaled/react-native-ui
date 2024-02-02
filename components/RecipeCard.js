import react from "react";
import { StyleSheet,View,Text,ScrollView,Image,FlatList,Pressable } from "react-native";
import {colors, recipeList} from "./constants";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const RecipeCard =()=>{// ther is no way that we can take navigation as props, so we must defined it with a hook 
   const navigation= useNavigation();
   
   return (<View >
    <FlatList  
     data={recipeList}  
    renderItem={ ({item})=>(
      /** Main View  */
        <Pressable style={styles.list} onPress={()=> navigation.navigate("RecipeDetail",{item:item})}>{/**we took the params as props */}
        <Image source={item.image} style={styles.img}/>
        <Text>{item.name}</Text>


       {/** Seconed view for sepcify recipes, adding more info  */}
        <View style={{flexDirection:"row" ,marginTop:8}}>
        <Text>{item.time}</Text>
        <Text> | </Text>



        {/** Another view for adding a rating and an icon */}
        <View style={{flexDirection:"row"}}> 
        <Text style={{marginRight:4}}> {item.rating}</Text>
        <FontAwesome name="star" size={16} color={colors.COLOR_PRIMARY}/>
        </View> 
        </View>
        </Pressable>
    )} 
 //numColumns={2}
   //columnWrapperStyle={{
    //       justifyContent:"space-between",
   //   }}
  showsVerticalScrollIndicator={false}
    
        ></FlatList>
    </View>)
}
export default RecipeCard;

const styles = StyleSheet.create({
    list:{
        backgroundColor:colors.COLOR_LIGHT,
        shadowColor:"#000",
        shadowOffset:{width:0, height:4},
        shadowOpacity:0.1,
        shadowRadius:7,
        borderRadius:16,
        marginVertical:16,
        alignItems:"center",
        paddingHorizontal:8,
        paddingVertical:26,
       
    },
    img:{
        width:150,
        height:150,
        resizeMode:"center",

    }
})
//  contentContainerStyle={{ flexGrow: 1 }}
   // style={{flexGrow:1}}
 //keyExtractor={(item,index)=>{item.id}}