/** @format */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import tw from "twrnc";

const MenuButtons = ({ navigation }) => {
  const Items = [
    {
      id: 1,
      name: "video-camera",
      title: "New meeting",
      customColor: "#ff751f",
    },
    {
      id: 2,
      name: "plus-square",
      title: "Join",
    },
    {
      id: 3,
      name: "calendar",
      title: "Schedule",
    },
    {
      id: 4,
      name: "upload",
      title: "Share Screen",
    },
  ];

  return (
    <View style={styles.container}>
      {Items.map((item, index) => (
        <View style={styles.btContainer} key={item.id}>
          <TouchableOpacity
            onPress={() => navigation.push("MeetingRoom")}
            style={{
              ...styles.button,
              backgroundColor: item.customColor ? item.customColor : "#0470dc",
            }}
          >
            <FontAwesome name={item.name} size={22} color="#efefef" />
          </TouchableOpacity>
          <Text style={tw`text-gray-300 mt-2 font-bold`}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderBottomColor: "#1f1f1f",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    paddingBottom: 10,
    marginBottom: 20,
  },
  btContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    width: 45,
    height: 45,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});
