import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/main/Home";
import MatchDetail from "../../screens/main/MatchDetail";
import Search from "../../screens/main/Search";


const HomeStack = () => {
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
      <Stack.Screen name={"Home"} component={Home} />
      <Stack.Screen name={"MatchDetail"} component={MatchDetail} />
      <Stack.Screen name={"Search"} component={Search} />

      

    </Stack.Navigator>
  );
};
export default HomeStack;
