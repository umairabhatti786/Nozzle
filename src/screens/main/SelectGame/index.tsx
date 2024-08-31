import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";

const SelectGame = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPAssword] = useState(true);

  const [values, setValues] = useState({
    email: "info@gmail.com",
    password: "123456789",
  });

  const sportsData = [
    {
      name: "Soccer",
      background: images.soccerBackground,
      sportImage: images.soccer,
    },
    {
      name: "Basketball",
      background: images.sportBackground,
      sportImage: images.basketball,
    },
    {
      name: "Football",
      background: images.sportBackground,
      sportImage: images.football,
    },
    {
      name: "Baseball",
      background: images.sportBackground,
      sportImage: images.baseball,
    },
    {
      name: "Tennis",
      background: images.sportBackground,
      sportImage: images.tennis,
    },
    {
      name: "Volleyball",
      background: images.sportBackground,
      sportImage: images.volleyball,
    },
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      
      }}
    >
      <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            paddingHorizontal: scale(20),
            paddingTop: verticalScale(40),
          }}
      >



      <CustomText
        text={"What sport do you"}
        color={colors.black100}
        size={24}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <Spacer height={verticalScale(4)} />
      <CustomText
        text={"interest?"}
        color={colors.black100}
        size={24}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <Spacer height={verticalScale(5)} />

      <CustomText
        text={"Which sport are you interested in? Please  your favorite one."}
        color={colors.gray500}
        size={12}
        style={{ marginTop: 2 }}
        fontFam={font.poppinsRegular}
      />
      <Spacer height={verticalScale(25)} />

      <View style={{ ...appStyles.rowjustify, flexWrap: "wrap" }}>
        {sportsData.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                alignItems: "center",
                gap: verticalScale(10),
                marginBottom: verticalScale(30),
              }}
            >
              <ImageBackground
                style={{
                  width: scale(85),
                  height: scale(85),
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: scale(100),
                }}
                resizeMode="contain"
                source={item.background}
              >
                <Image
                  style={{ width: "50%", height: "50%" }}
                  resizeMode="contain"
                  source={item.sportImage}
                />
              </ImageBackground>

              <CustomText
                text={item.name}
                size={12}
                fontFam={font.poppinsMedium}
                numberOfLines={3}
                color={"#111010"}
                //   style={styles.descriptionText}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={{
          alignItems: "center",
          width: "100%",
          gap: verticalScale(10),
          marginTop: verticalScale(30),
        }}
      >
        <CustomButton
          text="Continue"
          width={"100%"}
          onPress={() => navigation.navigate("Premium")}
          textColor={colors.black}
          bgColor={colors.primary}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Premium")}
          style={{
            width: "40%",
            height: verticalScale(30),
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <CustomText
            text={"Skip"}
            size={13}
            textDecorationLine="underline"
            numberOfLines={3}

            color={colors.gray800}
            //   style={styles.descriptionText}
          />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectGame;

const styles = StyleSheet.create({
  checkBox: {
    width: 21,
    height: 21,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  authContainer: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    backgroundColor: colors.gray400,
    alignItems: "center",
    justifyContent: "center",
  },
  convertButton: {
    height: "100%",
    width: "50%",
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
