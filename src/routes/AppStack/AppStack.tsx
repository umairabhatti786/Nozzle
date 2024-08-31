import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import GetStarted from "../../screens/auth/GetStarted";
import ForgetPassword from "../../screens/auth/ForgetPassword";
import Verification from "../../screens/auth/Verification";
import CreatePassword from "../../screens/auth/CreatePassword";
import OnBoarding from "../../screens/auth/OnBoarding";
import SelectGame from "../../screens/main/SelectGame";
import BottomTab from "../BottomTabs";
import UpcommingMatches from "../../screens/main/UpcommingMatches";
import Language from "../../screens/main/Language";
import Integration from "../../screens/main/Integration";
import Premium from "../../screens/main/Premium";
import SettingsScreen from "../../screens/main/SettingsScreen";
import Notification from "../../screens/main/Notification";

const AppStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      //  screenOptions={{ headerShown: false }
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
      <Stack.Screen name={"OnBoarding"} component={OnBoarding} />
      <Stack.Screen name={"GetStarted"} component={GetStarted} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"ForgetPassword"} component={ForgetPassword} />
      <Stack.Screen name={"Verification"} component={Verification} />
      <Stack.Screen name={"CreatePassword"} component={CreatePassword} />
      <Stack.Screen name={"SelectGame"} component={SelectGame} />

      

      <Stack.Screen name={"Signup"} component={Signup} />
      <Stack.Screen name={"BottomTab"} component={BottomTab} />
      <Stack.Screen name={"UpcommingMatches"} component={UpcommingMatches} />
      <Stack.Screen name={"Language"} component={Language} />
      <Stack.Screen name={"Integration"} component={Integration} />
      <Stack.Screen name={"Premium"} component={Premium} />
      <Stack.Screen name={"SettingsScreen"} component={SettingsScreen} />
      <Stack.Screen name={"Notification"} component={Notification} />







    </Stack.Navigator>
  );
};
export default AppStack;
