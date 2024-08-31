import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import MatchProgress from "./MatchProgress";
import OtherMatchesCard from "./OtherMatchesCard";

const MatchDetail = ({ navigation }: any) => {
  const [selectedDetail, setSelectedDetail] = useState(0);

  const matchResultData = [
    { number: "1", point: "1.8" },
    { number: "x", point: "2.1" },
    { number: "2", point: "1.3" },
  ];

  const Header = () => {
    return (
      <View style={appStyles.row}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => navigation.goBack()}
          style={{
            width: "22%",
            height: verticalScale(20),
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: scale(15), height: scale(15) }}
            resizeMode="contain"
            source={images.back}
          />
        </TouchableOpacity>

        <CustomText
          text={"UEFA Champions League"}
          color={colors.black200}
          fontWeight="bold"
          fontFam={font.RalewayBold}
          size={18}
        />
      </View>
    );
  };
  return (
    <ScreenLayout>
      <ScrollView>
        <View style={{ flex: 1, padding: scale(20), gap: verticalScale(30) }}>
          <Header />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: verticalScale(92),
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                gap: verticalScale(10),
                marginBottom: verticalScale(30),
              }}
            >
              <View style={styles.leagueContaine}>
                <Image
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                  source={images.arsenal}
                />
              </View>

              <CustomText
                text={"View"}
                size={15}
                fontFam={font.poppinsMedium}
                fontWeight="700"
                color={colors.black}
              />
            </TouchableOpacity>

            <View
              style={{
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ ...appStyles.row, paddingTop: "15%" }}>
                <CustomText
                  text={"2 - 3"}
                  size={35}
                  fontFam={font.poppinsBold}
                  fontWeight="bold"
                  color={colors.black}
                />
              </View>

              <CustomText
                text={"90.15"}
                size={15}
                fontFam={font.poppinsBold}
                fontWeight="bold"
                color={colors.black}
              />
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                gap: verticalScale(10),
                marginBottom: verticalScale(30),
              }}
            >
              <View style={styles.leagueContaine}>
                <Image
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                  source={images.astonvilla}
                />
              </View>

              <CustomText
                text={"Aston Villa"}
                size={15}
                fontFam={font.poppinsMedium}
                fontWeight="700"
                color={colors.black}
              />
            </TouchableOpacity>
          </View>

          <View style={{ ...appStyles.row }}>
            {["Match Detail", "Line Up", "H2H"].map((item, index) => {
              return (
                <CustomButton
                  text={item}
                  width={scale(100)}
                  height={47}
                  size={13}
                  borderRadius={999}
                  onPress={() => setSelectedDetail(index)}
                  textColor={selectedDetail == index ? colors.white : "#808080"}
                  bgColor={
                    selectedDetail == index ? colors.black : "transparent"
                  }
                />
              );
            })}
          </View>

          <View style={styles.matchProgressMain}>
            <MatchProgress
              endProgress="12"
              startProgress="27"
              title="Attacks"
              progressData={0.5}
            />
            <MatchProgress
              endProgress="12"
              startProgress="6"
              title="Shoots"
              progressData={0.4}
            />

            <MatchProgress
              endProgress="30%"
              startProgress="70%"
              title="Possesion"
              progressData={0.7}
            />
          </View>

          <View style={{ gap: verticalScale(10) }}>
            <CustomText
              text={"Match result"}
              fontWeight="600"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={14}
            />
            <View style={appStyles.rowjustify}>
              {matchResultData.map((item, index) => {
                return (
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.matchResultContainer,
                    }}
                  >
                    <CustomText
                      text={item.number}
                      color={"#808080"}
                      size={16}
                      fontFam={font.poppinsMedium}
                    />
                    <CustomText
                      text={item.point}
                      color={colors.black200}
                      size={16}
                      fontFam={font.poppinsBold}
                    />
                  </View>
                );
              })}
            </View>

            <CustomButton
              text="25.40"
              fontFam={font.poppinsMedium}
              onPress={() => navigation.navigate("SelectGame")}
              textColor={colors.white}
              bgColor={colors.blue}
            />
          </View>

          <View style={{ gap: verticalScale(10) }}>
            <CustomText
              text={"Other Matches"}
              fontWeight="600"
              fontFam={font.poppinsMedium}
              color={colors.black200}
              size={14}
            />
            <OtherMatchesCard />
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default MatchDetail;

const styles = StyleSheet.create({
  leagueContaine: {
    width: scale(65),
    height: scale(65),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9999,
    backgroundColor: "#222232",
  },
  matchProgressMain: {
    width: "100%",
    height: verticalScale(150),
    borderRadius: scale(15),
    backgroundColor: "#F8F8F8",
    paddingVertical: scale(20),
    paddingLeft: scale(20),
    paddingRight: scale(10),
    marginTop: verticalScale(-10),

    gap: verticalScale(25),
  },
  matchResultContainer: {
    width: "30%",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(7),
    borderRadius: scale(7),
    backgroundColor: "#F3F4F5",
    gap: scale(5),
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#00000020",
  },
});
