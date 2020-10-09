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
/*const persistedState = loadFromLocalStorage();

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState == null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState()));*/

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Characters"
        component={CharacterList}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );

  createCharactersStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Characters"
        component={CharacterList}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
  createFavoritesStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerStyle: {
            backgroundColor: "#3d7ea6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
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
