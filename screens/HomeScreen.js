/** @format */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuButtons from "../components/MenuButtons";
import ContactsMenu from "../components/ContactsMenu";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MenuButtons navigation={navigation} />
      <ContactsMenu />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    height: "100%",
    padding: 15,
    paddingTop: 28,
  },
});
