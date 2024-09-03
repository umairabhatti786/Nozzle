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

const AfterScanning = ({ navigation }: any) => {
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
          </View>

          <CustomText
            size={39}
            fontFam={font.DarkerGrotesque_Medium}
            fontWeight="600"
            lineHeight={35}
            style={{marginRight:scale(50)}}
            color={colors.white}
            text={
              "Thank you for completing the scan. Further personalization of the chair will follow."
            }
          />

          <View
            style={{
              gap: verticalScale(8),
              flex: 1,
              paddingTop: "30%",
              paddingHorizontal: scale(30),
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: scale(100),
                height: scale(100),
              }}
              source={images.logo_crop}
              resizeMode="contain"
            />
          </View>

          <CustomButton
            text="Finish"
            fontWeight="700"
            onPress={()=>navigation.navigate("RegisterScreen")}
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

export default AfterScanning;

const styles = StyleSheet.create({});
