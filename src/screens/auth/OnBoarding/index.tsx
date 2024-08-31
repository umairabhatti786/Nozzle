import React, { useRef, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../components/CustomButton";
import AppIntroSlider from "react-native-app-intro-slider";
import { images } from "../../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";

const OnBoarding = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<AppIntroSlider>(null);
  console.log("currentIndex", currentIndex);
  const onBoardingData = [
    {
      title: "KICK OFF WITH MATCH MASTER",
      description:
        "Experience the ultimate sports app with live game streaming, instant highlights, real-time news, personalized feeds.",
      image: images.footballBackground2,
      next: "Next",
    },
    {
      title: "STAY UPDATED WITH REAL-TIME SPORTS NEWS!",
      description:
        "Experience the ultimate sports app with live game streaming, instant highlights, real-time news, personalized feeds, and fantasy leagues.",
      image: images.footballBackground3,
      next: "Next",
    },
    {
      title: "PERSONALIZE YOUR FEED WITH FAVORITES TEAMS!",
      description:
        "Experience the ultimate sports app with live game streaming, instant highlights, real-time news, personalized feeds, and fantasy leagues.",
      image: images.footballBackground4,
      next: "Next",
    },
  ];

  const onSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item, index }: any) => {
    const { title, image, description, next } = item;

    const handleButtonPress = async () => {
      if (onBoardingData.length === index + 1) {
        navigation.navigate("GetStarted");
      } else {
        sliderRef?.current?.goToSlide(index + 1);
        setCurrentIndex(index + 1);
      }
    };

    return (
      <View style={styles.slideContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} resizeMode="cover" style={styles.image} />
        </View>
        <View
          style={{
            ...appStyles.row,
            gap: scale(8),
            alignSelf: "center",
            marginTop: verticalScale(15),
          }}
        >
          <View style={styles.dotImageContainer}>
            <Image
              source={
                currentIndex == 0
                  ? images.rectangleBlueDot
                  : images.rectangleGrayDot
              }
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.dotImageContainer}>
            <Image
              source={
                currentIndex == 1
                  ? images.rectangleBlueDot
                  : images.rectangleGrayDot
              }
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.dotImageContainer}>
            <Image
              source={
                currentIndex == 2
                  ? images.rectangleBlueDot
                  : images.rectangleGrayDot
              }
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <CustomText
            text={title}
            size={21}
            numberOfLines={2}
            lineHeight={27}
            fontWeight="700"
            fontFam={font.RalewayBold}
            color={colors.black}
            style={styles.titleText}
          />
          <CustomText
            text={description}
            size={11}
            numberOfLines={3}
            color={colors.gray800}
            style={styles.descriptionText}
          />
          <CustomButton
            text={next}
            borderRadius={10}
            width="70%"
            textColor={colors.black}
            style={styles.button}
            onPress={handleButtonPress}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("GetStarted")}
            style={{
              width: "40%",
              height: verticalScale(30),
              alignSelf: "center",
            }}
          >
            <CustomText
              text={"SKIP"}
              size={13}
              textDecorationLine="underline"
              numberOfLines={3}
              color={colors.gray800}
              style={styles.descriptionText}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={onBoardingData}
        ref={sliderRef}
        showNextButton={false}
        showDoneButton={false}
        dotStyle={{ backgroundColor: "transparent" }}
        onSlideChange={onSlideChange}
        activeDotStyle={{ backgroundColor: "transparent" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
  },
  imageContainer: {
    height: "66%",
    width: "102%",
    justifyContent: "flex-end",
    resizeMode: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
    marginTop: verticalScale(20),
    marginBottom: verticalScale(30),
  },
  titleText: {
    width: "75%",
    textAlign: "center",
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  descriptionText: {
    width: "90%",
    textAlign: "center",
    alignSelf: "center",
    marginTop: verticalScale(10),
  },
  button: {
    alignSelf: "center",
    marginTop: verticalScale(20),
  },
  dotStyle: {
    backgroundColor: colors.primary,
    opacity: 0.35,
  },
  activeDotStyle: {
    backgroundColor: colors.primary,
  },
  skipContainer: {
    height: 40,
    alignItems: "center",
  },
  skipButton: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  skipText: {
    textDecorationLine: "underline",
  },
  dotImageContainer: {
    width: scale(8),
    height: scale(8),
  },
});

export default OnBoarding;
