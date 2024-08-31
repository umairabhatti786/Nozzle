import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { ScrollView } from "react-native-gesture-handler";
import NewsDetailCard from "./NewsDetailCard";
import UserInfo from "./UserInfo";
import { windowWidth } from "../../../utils/Dimensions";

const NewsDetail = ({ navigation }: any) => {
  const detailText =
    "League wins. The match is scheduled for Sunday at the Emirates.The Gunners put forth a real statement of intent after their 1-0 win against Manchester United. Mikel Arteta's side had already surrendered points to Liverpool, Manchester City and League wins. The match is scheduled for Sunday at the Emirates.The Gunners put forth a real statement of intent after their 1-0 win against Manchester United. Mikel Arteta's side had already surrendered points to Liverpool, Manchester City and League wins. The match is scheduled for Sunday at the Emirates.The Gunners put forth a real statement of intent after their 1-0 win against Manchester United. Mikel Arteta's side had already surrendered points to Liverpool, Manchester City and League wins";

  return (
    <ScreenLayout>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: scale(20) }}>
          <NewsDetailCard />

          <UserInfo />

          <View
            style={{
              ...appStyles.row,
              gap: scale(10),
              width: windowWidth / 1.3,
            }}
          >
            <CustomText text={"A"} color={colors.black} size={55} />
            <CustomText
              text={
                "rsenal will have to grind it out against Aston Villa if they are to register"
              }
              color={colors.black}
              size={13}
              style={{ marginBottom: 6 }}
              lineHeight={20}
            />
          </View>
          <View>
            <View
              style={{
                ...appStyles.row,
              }}
            >
              <CustomText
                text={detailText}
                size={13}
                numberOfLines={14}
                lineHeight={25}
                color={"#181818"}
              />
            </View>

            <View
              style={{
                ...appStyles.rowjustify,

                width: "100%",
                backgroundColor: colors.blue,
                paddingHorizontal: scale(15),
                paddingVertical: verticalScale(10),
                borderRadius: scale(10),
                marginTop: verticalScale(10),
              }}
            >
              <View style={{ alignItems: "center" }}>
                <CustomText text={"PTS"} color={"#BBBBBB"} size={13} />

                <CustomText text={"27.4"} color={colors.white} size={14} />
              </View>
              <View style={{ alignItems: "center" }}>
                <CustomText text={"AST"} color={"#BBBBBB"} size={13} />

                <CustomText text={"33.4"} color={colors.white} size={14} />
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomText text={"STY"} color={"#BBBBBB"} size={13} />

                <CustomText text={"18.8"} color={colors.white} size={14} />
              </View>

              <View style={{ alignItems: "center" }}>
                <CustomText text={"PER"} color={"#BBBBBB"} size={13} />

                <CustomText text={"26.4"} color={colors.white} size={14} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({});
