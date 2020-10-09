import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { addFavorite } from "../actions/favorites";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    favorites: state.favoritesReducer.favoritesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    add: (favorite) => dispatch(addFavorite(favorite)),
  };
};

class CharacterDetailsScreen extends Component {
  componentDidMount() {
    const { state } = this.props;
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>
          This is {this.props.route.params.item.name}'s details screen.
        </Text>
        <Text> Birth year: {this.props.route.params.item.birth_year}</Text>
        <Text> Eye color: {this.props.route.params.item.eye_color}</Text>
        <Text> Gender: {this.props.route.params.item.gender}</Text>
        <Text> Height: {this.props.route.params.item.height}</Text>
        <Text> Mass: {this.props.route.params.item.mass}</Text>
        <Text> Skin color: {this.props.route.params.item.skin_color}</Text>

        <Button
          title="Add to favorites"
          onPress={() => {
            // ovdje treba provjeriti nalazi li se vec u favoritima
            let arr = this.props.favorites;
            let char = this.props.route.params.item.name;
            let found = false;
            for (let i = 0; i < arr.length; i++) {
              if (arr[i].name == char) {
                found = true;
                break;
              }
            }
            if (!found) {
              this.props.add(this.props.route.params.item.name);
              Alert.alert(
                "Added to favorites",
                "This character has been added to your favorites",
                [
                  {
                    text: "OK",
                  },
                ],
                { cancelable: false }
              );
            } else {
              Alert.alert(
                "Already a favorite",
                "This character is already in your favorites",
                [
                  {
                    text: "OK",
                  },
                ],
                { cancelable: false }
              );
            }
          }}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailsScreen);
