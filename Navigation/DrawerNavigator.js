import React, {Component} from 'react';
import {View, Text, StatusBar} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,  } from "@react-navigation/drawer";
import CategoriesScreen from "../src/Screens/CategoriesScreen";
import HomeScreen from "../src/Screens/HomeScreen";
import FavScreen from "../src/Screens/FavScreen";
import AboutScreen from "../src/Screens/AboutScreen";
import DrawerContent from "./DrawerContent";
import Icon from "react-native-vector-icons/Entypo";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
class DrawerNavigator extends Component {


  HomeStack = (props)=>{
    return (
     <Stack.Navigator screenOptions={DefaultStyle}>
       <Stack.Screen name="Home" component={HomeScreen} options={{
         headerLeft : ()=>{
           return (
          <Icon.Button  backgroundColor="black" name="menu" size={35} onPress={
           ()=>{
            props.navigation.openDrawer();
           }
          } />
           )
          }
       }} />
       {/* <Stack.Screen name="About" component={AboutScreen}/> */}
   </Stack.Navigator>
    )
   }
   CategoriesStack = (props)=>{
    return (
     <Stack.Navigator screenOptions={DefaultStyle}>
       <Stack.Screen name="Categories" component={CategoriesScreen}  options={{
         headerLeft : ()=>{
           return (
          <Icon.Button  backgroundColor="black" name="menu" size={35} onPress={
           ()=>{
            props.navigation.openDrawer();
           }
          } />
           )
          }
       }}  />
       {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
   </Stack.Navigator>
    )
   }
FavStack = (props)=>{
    return (
     <Stack.Navigator screenOptions={DefaultStyle}>
       <Stack.Screen name="Favorites" component={FavScreen}   options={{
         headerLeft : ()=>{
           return (
          <Icon.Button  backgroundColor="black" name="menu" size={35} onPress={
           ()=>{
            props.navigation.openDrawer();
           }
          } />
           )
          }
       }}  />
       {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
   </Stack.Navigator>
    )
   }
   AboutStack = (props)=>{
    return (
     <Stack.Navigator screenOptions={DefaultStyle}>
       <Stack.Screen name="About" component={AboutScreen}  options={{
         headerLeft : ()=>{
           return (
          <Icon.Button  backgroundColor="black" name="menu" size={35} onPress={
           ()=>{
            props.navigation.openDrawer();
           }
          } />
           )
          }
       }}  />
       {/* <Stack.Screen name="Favorites" component={FavScreen}/>
       <Stack.Screen name="About" component={AboutScreen}/> */}
   </Stack.Navigator>
    )
   }



    render(){
      return (
        <NavigationContainer>
           <StatusBar backgroundColor="black" barStyle="light-content" />
          <Drawer.Navigator  drawerContent={
           (props)=>{
            return <DrawerContent {...props} />
           }
           }>
            <Drawer.Screen name="Home" component={this.HomeStack} />
            <Drawer.Screen name="Categories" component={this.CategoriesStack} />
            <Drawer.Screen name="Favorites" component={this.FavStack} />
            <Drawer.Screen name="About" component={this.AboutStack} />
          </Drawer.Navigator>
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
export default DrawerNavigator;









