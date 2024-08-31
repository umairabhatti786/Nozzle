import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";

const UserInfo = ({ navigation, image, title, date }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ width: scale(42), height: scale(42), borderRadius: 999 }}
        source={images.man2}
      />
      <View style={{ width: "40%", marginTop: 4 }}>
        <CustomText
          text={"Brian Imanuel"}
          numberOfLines={1}
          fontFam={font.poppinsSemiBold}
          color={colors.black}
          size={16}
        />

        <CustomText
          text={"May 15, 2020 "}
          numberOfLines={1}
          color={colors.gray900}
          size={13}
        />
      </View>

      <View style={{ ...appStyles.row, gap: scale(7) }}>
        <Image
          style={{ width: scale(16), height: scale(16) }}
          source={images.heart}
          resizeMode="contain"
        />

        <CustomText
          text={"1403"}
          numberOfLines={1}
          fontFam={font.poppinsSemiBold}
          color={colors.black}
          size={13}
        />
        <Spacer width={scale(3)} />

        <Image
          style={{ width: scale(16), height: scale(16) }}
          source={images.chat}
          resizeMode="contain"
        />

        <CustomText
          text={"976"}
          numberOfLines={1}
          fontFam={font.poppinsSemiBold}
          color={colors.black}
          size={13}
        />
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({});
