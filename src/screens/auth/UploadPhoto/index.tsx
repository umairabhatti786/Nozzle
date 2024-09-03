import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
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

const UploadPhoto = ({ navigation }: any) => {
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
            <BackButton bgColor={colors.white}
            onPress={()=>navigation.goBack()}
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
            text={"Upload Your Photo"}
          />

          <View
            style={{
              gap: verticalScale(8),
              flex: 1,
              alignItems: "center",
              paddingTop: "30%",
            }}
          >
            <View style={{ gap: verticalScale(5), alignItems: "center" }}>
              <CustomBox />

              <CustomText
                size={13}
                fontFam={font.Inter_SemiBold}
                color={colors.secondry}
                text={"Click to upload"}
              />
              <CustomText
                size={14}
                color={colors.white}
                text={"SVG, PNG, JPG or GIF (max. 800x400px)"}
              />
            </View>
          </View>

          <CustomText
                size={20}
                style={{textAlign:"center"}}
                lineHeight={22}
                  fontFam={font.DarkerGrotesque_Medium}
                color={colors.white}
                text={"Please have someone take a picture of how you normally sit at your desk while you work. Ensure the full person, chair, and desk with computer are visible."}
              />
                        <Spacer height={verticalScale(20)} />


          <CustomButton
            text="Submit Photo"
            fontWeight="700"
            width={"100%"}
            onPress={()=>navigation.navigate("ScannigInstructions")}
            size={18}
            bgColor={colors.secondry}
          />

          <Spacer height={verticalScale(20)} />
        </View>
      </ScreenLayout>
    </>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  
});
