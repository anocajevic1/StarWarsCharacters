import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class CharacterListScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>These are my favorites</Text>
      </View>
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
