import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";
import { DataTable, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default class MyFavoritesScreen extends Component {
  state = {
    favorites: [
      {
        name: "banana",
        key: 1,
      },
      {
        name: "kivi",
        key: 2,
      },
    ],
  };

  removeFromFavorites(item) {
    //ovdje ce se brisati iz flat liste
    let arr = this.state.favorites;
    let position = arr.indexOf(item);
    arr.splice(position, 1);
    this.setState({ favorites: arr });
  }

  render() {
    return (
      <SafeAreaView>
        <Text>My Favorite Characters</Text>
        <FlatList
          style={styles.list}
          data={this.state.favorites}
          renderItem={({ item }) => (
            <View style={styles.row} key={item.key}>
              <Text> {item.name}</Text>
              <IconButton
                icon="delete"
                onPress={() =>
                  Alert.alert(
                    "Delete Character",
                    "Are you sure you want to delete this character from your favorites?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => this.removeFromFavorites(item),
                      },
                    ],
                    { cancelable: false }
                  )
                }
              />
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});
