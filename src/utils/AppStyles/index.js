import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const appStyles = StyleSheet.create({
  coontainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowjustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    backgroundColor: colors.black,
  },
  Container: {
    flex: 1,
  },
  main:{
    width:"100%",
    height:"100%"
  }
});
