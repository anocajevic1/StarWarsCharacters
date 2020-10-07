import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default class MyFavoritesScreen extends Component {
  render() {
    return (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          {/* long content here */}
          <Text>Favorite stuff here</Text>
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
