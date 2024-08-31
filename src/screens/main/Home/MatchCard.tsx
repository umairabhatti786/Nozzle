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

const MatchCard = ({ navigation }: any) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: verticalScale(160),
          overflow: "hidden",
          borderRadius: scale(25),
          marginVertical: verticalScale(20),
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", overflow: "hidden" }}
          source={images.footballGround}
        />

        <View
          style={{
            width: "65%",
            height: "100%",
            position: "absolute",
            padding: scale(20),
            gap: verticalScale(10),
          }}
        >
          <View
            style={{
              ...appStyles.row,
              ...styles.footballContainer
             
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={images.soccer}
            />
            <CustomText
              text={"Football"}
              color={colors.black200}
              size={14}
              style={{ marginBottom: 3 }}
              fontFam={font.RalewayBold}
            />
          </View>
          <View>
            <CustomText
              text={"Liverpool"}
              color={colors.black200}
              size={21}
              lineHeight={25}
              fontFam={font.RalewayBold}
            />
            <CustomText
              text={"Champion League"}
              color={colors.black200}
              lineHeight={25}
              size={20}
              fontFam={font.RalewayBold}
            />
          </View>

          <View
            style={{ ...appStyles.row, width: "100%", marginLeft: scale(14) }}
          >
            <Image
              style={{
                width: scale(30),
                height: scale(30),
                position: "absolute",
                zIndex: 999,
                left: scale(-15),
              }}
              source={images.chelsea}
            />
            <View
              style={{
                ...appStyles.row,
                ...styles.battleContainer
                
              }}
            >
              <CustomText
                text={"Chelsea"}
                color={colors.black200}
                size={11}
                fontFam={font.poppinsMedium}
              />

              <CustomText
                text={"Vs"}
                color={colors.black200}
                size={13}
                fontWeight="700"
                fontFam={font.poppinsMedium}
              />
              <CustomText
                text={"Leicester C"}
                color={colors.black200}
                size={11}
                fontFam={font.poppinsMedium}
              />
            </View>

            <Image
              style={{
                width: scale(30),
                height: scale(30),
                position: "absolute",
                zIndex: 999,
                right: scale(-15),
              }}
              source={images.leicester}
            />
          </View>

          <CustomText
            text={"Yesterday, 06.30 PM"}
            fontWeight="400"
            color={colors.black200}
            size={11}
          />
        </View>
      </View>

      <Image
        style={{
          height: verticalScale(175),
          width: scale(160),
          position: "absolute",
          top: verticalScale(4),
          right: scale(-25),
        }}
        source={images.man}
        resizeMode="contain"
      />
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({

    battleContainer:{
        paddingHorizontal: scale(15),
                paddingVertical: verticalScale(2),
                backgroundColor: colors.white,
                justifyContent: "space-around",
                width: "100%",
                borderRadius: scale(30),
    },
    footballContainer:{
        width: scale(95),
        paddingHorizontal: scale(5),
        paddingVertical: verticalScale(3.5),
        borderRadius: scale(30),
        backgroundColor: colors.white,
        gap: scale(5),
        justifyContent: "center",
    }


});
