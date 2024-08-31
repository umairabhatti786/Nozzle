import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import Circle from "../../../components/Circle";

const NotificationCard = ({ navigation, image, title, time, des }: any) => {
  return (
    <View
      style={{ flexDirection: "row", gap: scale(15), alignItems: "center" ,
      paddingVertical:verticalScale(10),
      paddingHorizontal:scale(20)
    }}
    >
      <Circle
        width={45}
        height={45}
        tintColor={colors.white}
        source={images.notification}
      />
      <View style={{ flex: 1, gap: verticalScale(5), marginTop: 4 }}>
        <View style={{ ...appStyles.rowjustify }}>
          <CustomText
            text={title}
            numberOfLines={1}
            color={colors.black}
            fontFam={font.RalewayBold}
            size={15}
          />

          <CustomText
            text={time}
          color={"#0053A0"}
            size={15}
          />
        </View>
        <CustomText
          text={des}
          fontWeight="400"
          numberOfLines={3}
          color={"#868686"}
          size={11}
        />
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({});
