import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, Platform } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import { Spacer } from "../../../components/Spacer";
import BackButton from "../../../components/BackButton";
import CustomBox from "../../../components/CustomBox";

const ScannigInstructions = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout edges={["left", "right"]}>
        <View
          style={{
            ...appStyles.main,
            backgroundColor: colors.primary,
            paddingHorizontal: scale(20),
            paddingBottom:verticalScale(20),
            paddingTop:Platform.OS=="ios"?verticalScale(50):verticalScale(20)
          }}
        >
          <View
            style={{
              ...appStyles.rowjustify,
              paddingBottom: verticalScale(20),
            }}
          >
            <BackButton
              bgColor={colors.white}
              onPress={() => navigation.goBack()}
            />

            <Image
              style={{
                width: scale(65),
                height: scale(65),
              }}
              source={images.logo_crop}
              resizeMode="contain"
            />
          </View>

          <CustomText
            size={38}
            fontFam={font.DarkerGrotesque_Medium}
            fontWeight="600"
            lineHeight={33}
            color={colors.white}
            text={"Scanning"}
          />
          <CustomText
            size={38}
            fontFam={font.DarkerGrotesque_Medium}
            fontWeight="600"
            lineHeight={33}
            color={colors.white}
            text={"Instructions"}
          />

          <View
            style={{
              gap: verticalScale(8),
              flex: 1,
              paddingTop: "30%",
              paddingHorizontal:scale(30)
            }}
          >
            <View style={{ ...appStyles.rowjustify, gap: scale(20) }}>
              <View style={{ alignItems: "center", gap: verticalScale(8) }}>
                <CustomBox
                width={100}
                height={100}
                imgWidth={"75%"}
                imgHeight={"75%"}

                img={images.correct_seating}

                 />

                <CustomText
                  size={10}
                  fontFam={font.Inter_SemiBold}
                  color={colors.white}
                  text={"Correct sitting postures"}
                />
                <Image
                  style={{
                    width: scale(25),
                    height: scale(25),
                  }}
                  source={images.tick_btn}
                  resizeMode="contain"
                />
              </View>

              <View style={{ alignItems: "center", gap: verticalScale(8) }}>
                <CustomBox
                width={100}
                height={100}
                imgWidth={"75%"}
                imgHeight={"75%"}

                img={images.incorrect_seating}

                 />

                <CustomText
                  size={10}
                  fontFam={font.Inter_SemiBold}
                  color={colors.white}
                  text={"Incorrect sitting postures "}
                />
                <Image
                  style={{
                    width: scale(25),
                    height: scale(25),
                  }}
                  source={images.cross_btn}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          <CustomText
            size={20}
            style={{ textAlign: "center" }}
            lineHeight={22}
            fontFam={font.DarkerGrotesque_Medium}
            color={colors.white}
            text={
              "Please sit down in your office chair and ensure the person who will scan you can move around you."
            }
          />
          <Spacer height={verticalScale(20)} />

          <CustomButton
            text="Next"
            fontWeight="700"
            onPress={()=>navigation.navigate("Scanning")}
            width={"100%"}
            size={18}
            bgColor={colors.secondry}
          />

          <Spacer height={verticalScale(20)} />
        </View>
      </ScreenLayout>
    </>
  );
};

export default ScannigInstructions;

const styles = StyleSheet.create({});
