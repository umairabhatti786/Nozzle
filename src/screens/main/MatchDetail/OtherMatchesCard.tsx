import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
const OtherMatchesCard = ({}: any) => {
  return (
    <View
      style={{
        ...appStyles.rowjustify,

        width: "100%",
        backgroundColor: "#F3F4F5",
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(15),
        borderRadius: scale(10),
      }}
    >
      <View style={{ ...appStyles.rowjustify, gap: scale(10) }}>
        <Image
          style={{ width: scale(25), height: scale(25) }}
          resizeMode="contain"
          source={images.manchester}
        />
        <Image
          style={{ width: scale(25), height: scale(25) }}
          resizeMode="contain"
          source={images.chelsea}
        />
        <View style={{ ...appStyles.row, marginLeft: scale(8) }}>
          <View style={{ alignItems: "center" }}>
            <CustomText
              text={"Man United"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={15}
            />

            <CustomText
              text={"2"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={14}
            />
          </View>
        </View>

        <View style={appStyles.row}>
          <View style={{ alignItems: "center" }}>
            <CustomText
              text={"vs"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={15}
            />

            <CustomText
              text={"-"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={18}
            />
          </View>
        </View>

        <View style={appStyles.row}>
          <View style={{ alignItems: "center" }}>
            <CustomText
              text={"Chelsea FC"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={15}
            />

            <CustomText
              text={"3"}
              fontWeight="bold"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={14}
            />
          </View>
        </View>
      </View>

      <CustomText
        text={"FT"}
        fontWeight="bold"
        fontFam={font.poppinsMedium}
        color={colors.black200}
        size={14}
      />
    </View>
  );
};

export default OtherMatchesCard;

const styles = StyleSheet.create({});
