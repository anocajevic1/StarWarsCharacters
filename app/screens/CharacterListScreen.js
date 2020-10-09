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
    names: [],
  };

  constructor(props) {
    super(props);
  }

  getCharacters() {
    //uzela sam 20 da se ne mora skrolati puno :D
    axios.get("https://swapi.dev/api/people").then((response) => {
      this.setState({ characters: response.data }, () => {
        //console.log(this.state.characters);
        //u results se nalaze imena i ostalo bitno o likovima
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

        <FlatList
          style={styles.list}
          data={this.state.characters.results}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate("Details", { item })
              }
            >
              <View style={styles.row} key={Math.random()}>
                <Text style={styles.text}> {item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
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
  text: {
    fontSize: 30,
  },
  row: {},
});
