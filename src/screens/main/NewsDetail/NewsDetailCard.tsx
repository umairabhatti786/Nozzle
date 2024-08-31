import React, { useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import Circle from "../../../components/Circle";

const NewsDetailCard = ({ navigation, onPress }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: "100%",
        height: verticalScale(200),
        overflow: "hidden",
        borderRadius: scale(12),
        marginVertical: verticalScale(20),
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "absolute",
        }}
        source={images.news1}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: scale(10),
          top: verticalScale(10),
        }}
      >
        <View style={{ ...appStyles.row, gap: scale(5) }}>
          <Image
            style={{
              width: scale(15),
              height: scale(15),
              tintColor: colors.white,
            }}
            source={images.back}
            resizeMode="contain"
          />
          <CustomButton
            text="Exclusive"
            width={scale(80)}
            borderRadius={12}
            height={33}
            size={13}
            fontWeight={"600"}
            fontFam={font.poppinsSemiBold}
            textColor={colors.black}
            bgColor={colors.white}
          />
        </View>

        <Circle source={images.share} backgroundColor={"#FFFFFF34"} />
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          paddingHorizontal: scale(10),
          paddingVertical: verticalScale(15),
          gap: verticalScale(10),
        }}
      >
        <View style={{ top: "75%" }}>
          <CustomText
            text={
              "Salah and Liverpool aim to pile more misery on Leeds boss Marsch"
            }
            color={colors.white}
            size={17}
            lineHeight={25}
            fontFam={font.RalewayBold}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsDetailCard;

const styles = StyleSheet.create({});
