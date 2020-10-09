import "react-native-gesture-handler";
import React, { Component } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import CharacterList from "./app/screens/CharacterListScreen";
import Favorites from "./app/screens/MyFavoritesScreen";
import Details from "./app/screens/CharacterDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import configureStore from "./app/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const store = configureStore();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Characters" component={CharacterList} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );

  createCharactersStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={CharacterList} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
  createFavoritesStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" children={this.createHomeStack} />
            <Drawer.Screen
              name="Characters"
              children={this.createCharactersStack}
            />
            <Drawer.Screen
              name="Favorites"
              children={this.createFavoritesStack}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
