/** @format */
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const MeetingRoom = ({ navigation }) => {
  const [roomName, setRoomName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState(["john", "tiago"]);
  const [startCamera, setStartCamera] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.front);

  const Items = [
    {
      id: 1,
      name: "microphone",
      title: "Mute",
      customColor: "#ff751f",
    },
    {
      id: 2,
      name: "video-camera",
      title: "Stop",
    },
    {
      id: 3,
      name: "plus-square",
      title: "Add",
    },
    {
      id: 4,
      name: "group",
      title: "People",
    },
    {
      id: 5,
      name: "upload",
      title: "Share",
    },
  ];

  const enableCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("camera access denied");
    }
  };

  const JoinRoom = () => {
    enableCamera();
    socket.emit("join-room", { roomId: roomId, userName: roomName });
    console.log("room created:", +roomId + " " + roomName);
  };

  useEffect(() => {
    const API_URL = "http://c10c-105-112-96-154.ngrok.io";
    socket = io(`${API_URL}`);
    console.log("meeting room working");
    socket.on("connection", () => console.log("socket io connected "));
    socket.on("all-users", (users) => {
      console.log("active users:");
      console.log(users);
      setActiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* #start meeting section */}
      {startCamera ? (
        <View>
          <View style={styles.UserContainer}>
            <View style={styles.activeUsersContainer}>
              <Camera
                type={type}
                style={{
                  width: activeUsers ? 200 : "100%",
                  height: activeUsers ? 200 : 400,
                }}
              ></Camera>
              {activeUsers?.map((user, index) => (
                <View style={styles.userView} key={index}>
                  <Text style={tw`text-white font-bold`}>{user}</Text>
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              ...styles.secondContainer,
              marginTop: activeUsers ? 120 : 10,
            }}
          >
            {Items.map((item, index) => (
              <View
                style={{
                  ...styles.btContainer,
                  marginTop: activeUsers ? 120 : 10,
                }}
                key={item.id}
              >
                <TouchableOpacity style={styles.button}>
                  <FontAwesome name={item.name} size={18} color="#efefef" />
                </TouchableOpacity>
                <Text style={tw`text-gray-300 mt-2 font-bold`}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <StartMeeting
          roomName={roomName}
          roomId={roomId}
          setRoomName={setRoomName}
          setRoomId={setRoomId}
          joinRoom={JoinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    height: "100%",
    padding: 15,
  },
  camera: {
    height: 400,
    width: "100%",
  },
  btContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    width: 38,
    height: 38,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#1f1f1f",
    justifyContent: "space-between",
    borderBottomWidth: 2,
  },
  userView: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  activeUsersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  UserContainer: {
    // width: "100%",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "100%",
  },
});
