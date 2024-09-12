import React from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from "react-native";

const LoadingScreen = () => {
  return (
    <View
      style={styles.popupContainer}
    >
             <ActivityIndicator size="large" color={"black"} />

    </View>
  );
};
const styles = StyleSheet.create({
  popupContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "transparent",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
export default LoadingScreen;
