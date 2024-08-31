import { View, Text, LogBox, TouchableOpacity, Image, StatusBar } from "react-native";
import React from "react";
import RootNavigator from "./src/routes";
import { Provider } from "react-redux";
;

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();
const App = () => {

 
  
  return (
                <RootNavigator />





  );
};

export default App;
