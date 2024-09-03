import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";

const OnboardingScreen = ({navigation}:any) => {
  return (
    <ScreenLayout edges={["left", "right", ]}>
      <ImageBackground
      style={{...appStyles.main,alignItems:"center",justifyContent:"flex-end"}}
      source={images.onboarding_background}
      >
        <View style={{padding:scale(30),gap:verticalScale(15),alignItems:"center",marginBottom:verticalScale(10)}}>
          <Image
          style={{width:scale(100),height:scale(100),}}
          source={images.logo}
          resizeMode="contain"
          />
        <CustomText
          size={22}
          color={colors.white}
          text={"Welcome to"}
        />
        <View style={{alignItems:"center",marginBottom:verticalScale(15)}}>
        <CustomText
          size={20}
          fontFam={font.DarkerGrotesque_Bold}
          fontWeight="700"
          color={colors.white}
          text={"Nozzle"}
        />
          <CustomText
          size={15}
          color={colors.darkGray}
          text={"Nozzle Full Body Scan App"}
        />

        </View>

        <CustomButton
            text="Get Started"
            fontWeight="700"
            onPress={()=>navigation.navigate("RegisterScreen")}
            width={windowWidth/1.8}
            borderRadius={5}
            height={verticalScale(35)}
            bgColor={colors.secondry}
          />
         

        </View>
    

      </ImageBackground>
      
     
    
    </ScreenLayout>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
