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

const LeagueCard = ({ onPress,item}: any) => {
    const navigation =useNavigation()


  const LeagueContainer = ({ name, gole, leagueImage, gole1 }: any) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ ...appStyles.row, gap: scale(8),width:"80%" }}>
          <Image
            style={{
              width: scale(25),
              height: scale(25),
            }}
            source={leagueImage}
          />

          <CustomText text={name} color={colors.black200} size={14} />
        </View>
        <View style={{ ...appStyles.row, gap: scale(20) }}>
            <View style={{width:scale(20)}}>
            <CustomText text={gole} color={colors.gray900} size={15} />


            </View>
            <View style={{width:scale(20)}}>
                          <CustomText text={gole1} color={colors.black200} size={15} />


            </View>
        </View>
      </View>
    );
  };
  return (
    <View
    style={{
      width: "100%",
      overflow: "hidden",
      borderRadius: scale(25),
      marginVertical: verticalScale(10),
      backgroundColor: item?.backgroundColor,
    }}
  >
    <TouchableOpacity
    activeOpacity={0.6}
        onPress={onPress}

      style={{
        paddingHorizontal: scale(10),
        paddingTop: verticalScale(15),
      }}
    >
      <CustomText
        text={"Premier League"}
        fontWeight="400"
        color={colors.black200}
        size={14}
      />
    </TouchableOpacity>
    <TouchableOpacity 
        activeOpacity={0.6}
        onPress={onPress}
    style={{ paddingHorizontal: scale(15), gap: verticalScale(5) }}>
      <View
        style={{
          ...appStyles.row,
          justifyContent: "space-between",
          marginTop: verticalScale(6),
        }}
      >
        <View style={{ gap: verticalScale(8), width: "75%" }}>
          <LeagueContainer
            name={"Chelsea"}
            leagueImage={images.chelsea}
            gole={"0"}
            gole1={"1"}
          />
          <LeagueContainer
            name={"Leicester C"}
            leagueImage={images.leicester}
            gole={"2"}
            gole1={"2"}
          />
        </View>

        <View style={styles.rankingContainer}>
          <Image
            style={{
              width: scale(15),
              height: scale(15),
            }}
            source={images.ranking}
          />
          <CustomText
            text={"790"}
            color={colors.gray900}
            size={16}
            fontFam={font.poppinsBold}
          />
        </View>
      </View>

      <View style={{ ...appStyles.row, gap: scale(6) }}>
        <Image
          style={{
            width: scale(17),
            height: scale(17),
          }}
          resizeMode="contain"
          source={images.play}
        />
        <CustomText
          text={"49:30"}
          color={colors.black200}
          size={13}
          style={{ marginTop: 3 }}
        />
      </View>
      
    </TouchableOpacity>
    <View style={{...appStyles.row,zIndex:999}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingVertical: verticalScale(12),paddingLeft:scale(15) }}
        >
          {["1.8", "2.1", "1.3", "1.6", "2.3", "3.2"].map((item, index) => {
            return (
              <View
                style={{
                  ...appStyles.row,
                  ...styles.PlayContainer,
                }}
              >
                <CustomText
                  text={item}
                  color={colors.black200}
                  size={16}
                  //   style={{ marginBottom: 3 }}
                  fontFam={font.poppinsBold}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
  </View>
  );
};

export default LeagueCard;

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
});
