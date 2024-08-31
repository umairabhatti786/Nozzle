import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../assets/images";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";
import { useNavigation } from "@react-navigation/native";
import { windowWidth } from "../../utils/Dimensions";

const UpcomingMatchesCard = ({ onPress, item, backgroundColor,borderColor }: any) => {
  const navigation = useNavigation();

  const LeagueContainer = ({ name, gole, leagueImage, gole1 }: any) => {
    return (
      <View
        style={{
          width: windowWidth / 1.2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          // backgroundColor:"green"
        }}
      >
        <View style={{ ...appStyles.row, gap: scale(8), width: "75%" }}>
          <Image
            style={{
              width: scale(25),
              height: scale(25),
            }}
            source={leagueImage}
          />

          <CustomText
            text={name}
            fontWeight="600"
            fontFam={font.RalewaySemiBold}
            style={{marginBottom:verticalScale(5)}}
            color={colors.black200}
            size={15}
          />
        </View>

        <CustomText text={gole} color={colors.black} size={15} />
      </View>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        overflow: "hidden",
        borderRadius: scale(10),
        marginVertical: verticalScale(10),
        backgroundColor: backgroundColor || colors.white,
        borderWidth: 1,
        borderColor: "#F3F4F5",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          padding: scale(10),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 2,
          borderColor: borderColor ||"#F3F4F5",
        }}
      >
        <CustomText
          text={"Tomorrow, May 29"}
          fontWeight="400"
          color={colors.black200}
          size={15}
        />
        <CustomText
          text={"20:00"}
          fontWeight="400"
          color={colors.black200}
          size={15}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{ paddingHorizontal: scale(15), gap: verticalScale(5) }}
      >
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: verticalScale(6),
          }}
        >
          <View style={{ gap: verticalScale(10),marginVertical:verticalScale(10) }}>
            <LeagueContainer
              name={"Dallas Mavericks"}
              leagueImage={images.dallasMavericks}
              gole={"60 Scores"}
            />
            <LeagueContainer
              name={"Oklahoma City Thunder"}
              leagueImage={images.leicester}
              gole={"40 Scores"}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.nextContainer} activeOpacity={0.4}>
        <Image
                style={{ width: scale(20), height: scale(20) }}
                source={images.videoPlay}
                resizeMode="contain"
              />
              <CustomText
                text={"Watch Now"}
                // fontWeight="400"
                color={colors.black200}
                size={13}
              />
            
            </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default UpcomingMatchesCard;

const styles = StyleSheet.create({
  battleContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(2),
    backgroundColor: colors.white,
    justifyContent: "space-around",
    width: "100%",
    borderRadius: scale(30),
  },
  PlayContainer: {
    width: scale(85),
    paddingHorizontal: scale(7),
    paddingVertical: verticalScale(4),
    borderRadius: scale(7),
    backgroundColor: colors.white,
    gap: scale(5),
    justifyContent: "center",
    marginRight: scale(8),
  },
  rankingContainer: {
    borderWidth: 1,
    borderColor: "#00000020",
    height: scale(67),
    width: scale(42),
    borderRadius: scale(8),
    alignItems: "center",
    justifyContent: "center",
    gap: verticalScale(5),
  },
  nextContainer: {
    width:"80%",
    height: verticalScale(35),
    backgroundColor: colors.primary,
    alignItems: "center",
    borderRadius: scale(10),
    justifyContent: "center",
    alignSelf:"flex-end",
    flexDirection: "row",
    gap: scale(8),
    marginBottom:verticalScale(10)
  },
});
