import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CharacterList from "./app/screens/CharacterListScreen";
import Favorites from "./app/screens/MyFavoritesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Characters" component={CharacterList} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Characters" component={CharacterList} />
          <Drawer.Screen name="Favorites" component={Favorites} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
