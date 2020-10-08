import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class CharacterDetailsScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>This is the .. details screen</Text>
        <Button title="add .. to favorites"></Button>
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
