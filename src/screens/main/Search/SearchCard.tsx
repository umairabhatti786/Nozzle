import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import Circle from "../../../components/Circle";

const SearchCard = ({
  navigation,
  image,
  title,
  time,
  des,
  source1,
  source2,
}: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: scale(15),
        alignItems: "center",
        paddingBottom: verticalScale(10),
      }}
    >
      <View style={appStyles.row}>
        <View
          style={{
            width: scale(45),
            height: scale(45),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            backgroundColor: "#222232",
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={source1}
            resizeMode="contain"
          />
        </View>

        <View style={{ marginLeft: -10 }}>
        <View
          style={{
            width: scale(40),
            height: scale(40),
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            backgroundColor: "#222232",
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={source2}
            resizeMode="contain"
          />
        </View>
        </View>
      </View>

      <View style={{ flex: 1, gap: verticalScale(5), marginTop: 4 }}>
        <View style={{ ...appStyles.rowjustify }}>
          <CustomText
            text={title}
            numberOfLines={1}
            color={colors.black}
            fontFam={font.RalewayBold}
            size={15}
          />
        </View>
        <CustomText
          text={time}
          fontWeight="400"
          numberOfLines={3}
          color={"#65656B"}
          size={12}
        />
      </View>

      <Image
        style={{ width: scale(13), height: scale(13) }}
        source={images.cross}
        resizeMode="contain"
      />
    </View>
  );
};

export default SearchCard;

const styles = StyleSheet.create({});
