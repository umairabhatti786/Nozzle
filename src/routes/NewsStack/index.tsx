import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/main/Home";
import MatchDetail from "../../screens/main/MatchDetail";
import NewsDetail from "../../screens/main/NewsDetail";
import News from "../../screens/main/News";


const NewsStack = () => {
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
      <Stack.Screen name={"News"} component={News} />
      <Stack.Screen name={"NewsDetail"} component={NewsDetail} />
      

    </Stack.Navigator>
  );
};
export default NewsStack;
