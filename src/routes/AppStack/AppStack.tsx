import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../../screens/auth/Oboarding";
import RegisterScreen from "../../screens/auth/Register";
import CharacteristicsForm from "../../screens/auth/CharacteristicsForm";
import UploadPhoto from "../../screens/auth/UploadPhoto";
import ScannigInstructions from "../../screens/auth/ScannigInstructions";
import AfterScanning from "../../screens/auth/AfterScanning";
import Scanning from "../../screens/auth/Scanning";


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
      <Stack.Screen name={"OnBoarding"} component={OnboardingScreen} />
      <Stack.Screen name={"RegisterScreen"} component={RegisterScreen} />
      <Stack.Screen name={"CharacteristicsForm"} component={CharacteristicsForm} />
      <Stack.Screen name={"UploadPhoto"} component={UploadPhoto} />
      <Stack.Screen name={"ScannigInstructions"} component={ScannigInstructions} />
      <Stack.Screen name={"AfterScanning"} component={AfterScanning} />
      <Stack.Screen name={"Scanning"} component={Scanning} />




     

      








    </Stack.Navigator>
  );
};
export default AppStack;
