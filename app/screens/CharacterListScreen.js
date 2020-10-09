import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#3d7ea6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fcdada",

    alignSelf: "center",
    textTransform: "uppercase",
  },
});

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
        <FlatList
          style={styles.list}
          data={this.state.characters.results}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate("Details", { item })
              }
            >
              <View style={styles.item} key={Math.random()}>
                <Text style={styles.text}> {item.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Favorites")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>View favorites</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
