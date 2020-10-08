import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default class CharacterListScreen extends Component {
  state = {
    characters: [],
  };

  constructor(props) {
    super(props);
  }

  getCharacters() {
    axios.get("https://swapi.dev/api/people/?_limit=20").then((response) => {
      this.setState({ characters: response.data }, () => {
        console.log(this.state.characters);
      });
    });
  }

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <SafeAreaView>
        <Button
          title="View my favorites"
          onPress={() => this.props.navigation.navigate("Favorites")}
        ></Button>
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
});
