/** @format */
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import tw from "twrnc";
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactsMenu = () => {
  const users = [
    {
      id: 1,
      name: "korede",
      profilePic:
        "https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_100_100/0/1632301101571?e=1645056000&v=beta&t=mdbmjAOZTFAvxu_kXV46uUpY2kLDEcVSJCUo9hlbtOk",
    },
    {
      id: 2,
      name: "Qazi",
      profilePic:
        "https://images.squarespace-cdn.com/content/v1/53adb821e4b061056cf6f1b2/1603292246221-T2C17RTO9D5U3FX8PBDG/Home_Review_RafehQazi.jpg",
    },
    {
      id: 3,
      name: "Sonny",
      profilePic:
        "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s900-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <View style={styles.container}>
      {/*  row div containing icon and text*/}
      <View style={styles.row}>
        {/* icon div below */}
        <View style={styles.icon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        <Text style={tw`text-xl text-gray-300 ml-3 font-bold`}>Starred</Text>
      </View>
      <>
        {users.map((user) => (
          <View style={styles.row} key={user.id}>
            {/* icon div below */}
            <View>
              <Image
                source={{ uri: user.profilePic }}
                style={styles.profilePic}
              />
            </View>
            <Text style={tw`text-xl text-gray-300 ml-3 font-bold`}>
              {user.name}
            </Text>
          </View>
        ))}
      </>
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    backgroundColor: "#333333",
    height: 50,
    width: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 15,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 15,
  },
});
