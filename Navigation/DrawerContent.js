import React, { Component } from 'react';
import {View, Image, StyleSheet} from "react-native";
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
  } from 'react-native-paper';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { DrawerContentScrollView , DrawerItem, DrawerItemList} from "@react-navigation/drawer";
class DrawerContent extends Component {
    render() {
        return (
            <DrawerContentScrollView {...this.props}>
            <View
              style={
                styles.drawerContent
              }
            >
              <View style={styles.userInfoSection}>
                <Avatar.Image
                  source={require("../src/images/me.jpg")}
                  size={100}
                  style={{marginLeft:"auto", marginRight:"auto"}}
                />
                <Title style={styles.title}>Sanan Ali </Title>
                {/* <Caption style={styles.caption}>@Sanan4li</Caption> */}
              </View>
              <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome5
                      name="home"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Home"
                  onPress={() => {}}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome5 name="info-circle" color={color} size={size} />
                  )}
                  label="About"
                  onPress={() => {}}
                />
                <DrawerItem
                  icon={({ color, size }) => (
                    <FontAwesome
                      name="heart"
                      color={color}
                      size={size}
                    />
                  )}
                  label="Favorites"
                  onPress={() => {}}
                />
              </Drawer.Section>
              <Drawer.Section title="Preferences">
                <TouchableRipple onPress={() => {}}>
                  <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                      <Switch value={false} />
                    </View>
                  </View>
                </TouchableRipple>
              </Drawer.Section>
            </View>
          </DrawerContentScrollView>
        );
    }
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        marginLeft:"auto",
        marginRight:"auto"
      },
      title: {
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft:"auto", 
        marginRight:"auto"
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },

})
export default DrawerContent;