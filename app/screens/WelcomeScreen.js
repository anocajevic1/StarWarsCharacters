import React, { Component } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "react-native-paper";

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    textAlign: "center",
    paddingBottom: 50,
    backgroundColor: "#ffa5a5",
  },
  bg: {
    position: "absolute",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#3d7ea6",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fcdada",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  text: {
    color: "#ffa5a5",
    fontSize: 18,
  },
});

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Image
          source={require("../assets/vader.jpg")}
          style={styles.bg}
        ></Image>
        <Text style={styles.text}>Welcome</Text>
        <IconButton
          icon="arrow-down-bold-hexagon-outline"
          style={styles.arrow}
        ></IconButton>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Characters")}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>View characters</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
