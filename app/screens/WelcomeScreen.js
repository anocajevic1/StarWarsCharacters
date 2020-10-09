import React, { Component } from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>This is the home screen</Text>
        <Button
          title="View Characters"
          style={styles.cta}
          onPress={() => this.props.navigation.navigate("Characters")}
        />
      </View>
    );
  }
}
