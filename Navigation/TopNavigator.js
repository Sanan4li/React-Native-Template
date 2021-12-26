import React, {Component} from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoriesScreen from "../src/Screens/CategoriesScreen";
import HomeScreen from "../src/Screens/HomeScreen";
import FavScreen from "../src/Screens/FavScreen";
import AboutScreen from "../src/Screens/AboutScreen";
const TopTabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
class TopNavigator extends Component {

    HomeStack = ()=>{
        return (
         <Stack.Navigator  screenOptions={DefaultStyle}>
           <Stack.Screen name="Home" component={HomeScreen}    />
           {/* <Stack.Screen name="About" component={AboutScreen}/> */}
       </Stack.Navigator>
        )
       }
       CategoriesStack = ()=>{
        return (
         <Stack.Navigator>
           <Stack.Screen name="Categories" component={CategoriesScreen}   />
           {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
       </Stack.Navigator>
        )
       }
    FavStack = ()=>{
        return (
         <Stack.Navigator>
           <Stack.Screen name="Favorites" component={FavScreen}    />
           {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
       </Stack.Navigator>
        )
       }
       AboutStack = ()=>{
        return (
         <Stack.Navigator>
           <Stack.Screen name="About" component={AboutScreen}   />
           {/* <Stack.Screen name="Favorites" component={FavScreen}/>
           <Stack.Screen name="About" component={AboutScreen}/> */}
       </Stack.Navigator>
        )
       }
    
    
    
    render(){
      return (
        <NavigationContainer>
             <StatusBar backgroundColor="black" barStyle="light-content" />
        <TopTabs.Navigator>
          <TopTabs.Screen name="Home" component={HomeScreen} />
          <TopTabs.Screen name="Categories" component={CategoriesScreen} />
          <TopTabs.Screen name="About" component={AboutScreen} />
        </TopTabs.Navigator>
      </NavigationContainer>
      )
    }
}
const DefaultStyle = {
    headerStyle: {
      backgroundColor: 'black',
      elevation:0,
    },
   // headerTitle : "Testing",
   // headerTitleAlign: "center",
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
export default TopNavigator;









