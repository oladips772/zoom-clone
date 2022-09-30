/** @format */
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import tw from "tailwind-react-native-classnames";
import Navigation from "./Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    height: "100%",
  },
});
