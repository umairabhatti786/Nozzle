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
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";

const NewsCard = ({ navigation,onPress }: any) => {
  return (
 
      <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
        style={{
          width: windowWidth / 1.3,
          height: verticalScale(170),
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
            right: scale(15),
            alignItems: "flex-end",
            top: verticalScale(10),
          }}
        >
          <CustomButton
            text="5 hours ago"
            width={"30%"}
            borderRadius={12}
            height={33}
            size={13}
            textColor={colors.white}
            bgColor={"#050E2938"}
          />
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
          <View style={{ gap: verticalScale(10), top: "30%" }}>
            <CustomButton
              text="Exclusive"
              width={scale(80)}
              borderRadius={12}
              height={33}
              size={13}
              fontWeight={"600"}
              fontFam={font.poppinsSemiBold}
              // onPress={() => navigation.navigate("SelectGame")}
              textColor={colors.black}
              bgColor={colors.white}
            />

            <CustomText
              text={
                "Salah and Liverpool aim to pile more misery on Leeds boss Marsch"
              }
              color={colors.white}
              size={19}
              lineHeight={25}
              fontFam={font.RalewaySemiBold}
            />
          </View>
        </View>
      </TouchableOpacity>
  
  );
};

export default NewsCard;

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
    width: scale(95),
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(3.5),
    borderRadius: scale(30),
    backgroundColor: colors.white,
    gap: scale(5),
    justifyContent: "center",
  },
});
