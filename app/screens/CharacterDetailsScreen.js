import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default class CharacterDetailsScreen extends Component {
  componentDidMount() {
    const { state } = this.props;
    console.log(this.props);
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>
          This is {this.props.route.params.item.name}'s details screen.
        </Text>
        <Text> Birth year: {this.props.route.params.item.birth_year}</Text>
        <Text> Eye color: {this.props.route.params.item.eye_color}</Text>
        <Text> Gender: {this.props.route.params.item.gender}</Text>
        <Text> Height: {this.props.route.params.item.height}</Text>
        <Text> Mass: {this.props.route.params.item.mass}</Text>
        <Text> Skin color: {this.props.route.params.item.skin_color}</Text>

        <Button title="Add to favorites"></Button>
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
