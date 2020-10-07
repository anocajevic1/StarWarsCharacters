import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

export default class CharacterListScreen extends Component {
  constructor(props) {
    super(props);
  }

  getCharacters() {
    //for(int i=0; i<50; i++) ??
    //ovo dobavljanje radi samo trebam smisliti nacin kako da ih smjestam u tabelu
    //ako se ova tabele ne moze dirati onda moze obicni ul li

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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          {/* long content here */}
          <Button
            title="View my favorites"
            onPress={() => this.props.navigation.navigate("Favorites")}
          ></Button>
        </SafeAreaView>
      </ScrollView>
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
