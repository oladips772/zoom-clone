/** @format */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.container}>
      <Entypo name="notification" size={25} color="#efefef" />
      <Text style={tw`text-white text-xl font-bold`}>Meet And Chat</Text>
      <Entypo name="new-message" size={25} color="#efefef" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
});
