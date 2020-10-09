import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import { DataTable, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { deleteFavorite } from "../actions/favorites";

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    favorites: state.favoritesReducer.favoritesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    delete: (key) => dispatch(deleteFavorite(key)),
  };
};

class MyFavoritesScreen extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          style={styles.list}
          data={this.props.favorites}
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
                        onPress: () => console.log(this.props),
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

export default connect(mapStateToProps, mapDispatchToProps)(MyFavoritesScreen);
