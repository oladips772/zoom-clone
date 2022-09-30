/** @format */
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

function StartMeeting({ roomName, roomId, setRoomName, setRoomId, joinRoom }) {
  return (
    <View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          placeholder="enter room name"
          placeholderTextColor="#767476"
          value={roomName}
          onChangeText={(val) => setRoomName(val)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          placeholder="enter room id"
          placeholderTextColor="#767476"
          value={roomId}
          keyboardType="numeric"
          onChangeText={(val) => setRoomId(val)}
        />
      </View>
      <Button title="Start Meeting" onPress={() => joinRoom()}></Button>
    </View>
  );
}

export default StartMeeting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    height: "100%",
    padding: 15,
  },
  textInput: {
    padding: 5,
    fontSize: 17,
    color: "white",
  },
  info: {
    height: 40,
    width: "100%",
    backgroundColor: "#373538",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    marginBottom: 12,
  },
});
