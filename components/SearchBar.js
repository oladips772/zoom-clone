/** @format */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="search" size={20} color={"#858585"} />
      <Text style={tw`text-gray-400 text-xl ml-2`}>search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    backgroundColor: "#333333",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 6,
  },
});
