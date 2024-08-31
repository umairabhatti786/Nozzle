import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";

const EventTopContainer = ({
  navigation,
  item,
  selectedEvent,
  index,
  onPress,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      style={{
        ...appStyles.row,
        ...styles.footballContainer,
        backgroundColor:
          selectedEvent == item.id ? colors.blue : colors.gray1000,
        borderColor: selectedEvent == item.id ? "transparent" : "#D4D4D4",
        borderWidth: selectedEvent == item.id ? -1 : 1,
        minWidth: selectedEvent == item.id ?scale(95):scale(40),
        height:scale(38),
        marginLeft: selectedEvent == item.id ?scale(20):scale(10),
        marginRight: scale(10),


        
      }}
    >
      
      <Image
        style={{ width: scale(18), height: scale(18) }}
        resizeMode="contain"
        source={selectedEvent == item.id?item.sportfillImage:item.sportImage}
      />
      {selectedEvent == item.id && (
        <CustomText
          text={item.name}
          color={colors.white}
          size={12}
          style={{ marginBottom: 3 }}
          fontFam={font.RalewayBold}
        />
      )}
    </TouchableOpacity>
  );
};

export default EventTopContainer;

const styles = StyleSheet.create({
  battleContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(2),
    backgroundColor: colors.white,
    justifyContent: "space-around",
    width: "100%",
    borderRadius: scale(30),
  },
  footballContainer: {
  
    paddingVertical: verticalScale(7),
    borderRadius: 100,
    gap: scale(5),
    justifyContent: "center",
    marginRight:scale(5)
  },
});
