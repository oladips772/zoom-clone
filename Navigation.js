/** @format */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import MeetingRoom from "./screens/MeetingRoom";

function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeetingRoom"
          component={MeetingRoom}
          options={{
            title: "Start Meeting",
            headerStyle: {
              backgroundColor: "#1c1c1c",
              shadowOpacity: 0,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
