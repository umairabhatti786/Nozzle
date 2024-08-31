import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/main/Home";
import MatchDetail from "../../screens/main/MatchDetail";
import Profile from "../../screens/main/Profile";
import EditProfile from "../../screens/main/EditProfile";


const ProfileStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

        cardStyleInterpolator: ({ current: { progress } }) => {
          return {
            cardStyle: {
              opacity: progress,
            },
          };
        },
      }}
    >
      <Stack.Screen name={"Profile"} component={Profile} />
      <Stack.Screen name={"EditProfile"} component={EditProfile} />
      

    </Stack.Navigator>
  );
};
export default ProfileStack;
