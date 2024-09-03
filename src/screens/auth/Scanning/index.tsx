import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Animated,
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
import { BlurView } from "@react-native-community/blur";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import LinearGradient from "react-native-linear-gradient";
import CompletedModal from "./CompletedModal";

const Scanning = ({ navigation }: any) => {
  const [isScanning, setIsScanning] = useState(false);
  const [isScan, setIsScan] = useState(false);
  const lineAnimation = useRef(new Animated.Value(0)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

console.log('isScanning',isScanning)
  const startScanning = () => {
    setIsScanning(true);
    Animated.loop(
      Animated.sequence([
        Animated.timing(lineAnimation, {
          toValue: windowWidth / 2 - 100, // Adjust based on the scanning box height
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(lineAnimation, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();

    setTimeout(() => {
      setIsScan(true)
      setIsModalVisible(true)
      
    }, 1500);

    
  };
  return (
    <>
      <ScreenLayout edges={["left", "right"]}>
        <ImageBackground
          style={{
            ...appStyles.main,
            alignItems: "center",
            justifyContent: "flex-end",
           
          }}
          //   resizeMode="center"
          source={images.scan_image}
        >
          <View
            style={{
              ...appStyles.main,

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
                bgColor={colors.primary}
                iconColor={colors.white}
                onPress={() => navigation.goBack()}
              />
            </View>
            {isScanning ? (
              <>
              {
                !isScan?(
                  <View style={styles.scanningBox}>
                  {/* Scanning line animation */}
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      position: "absolute",
                      top: 0,
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{
                        width: scale(40),
                        height: scale(40),
                      }}
                      source={images.top_left_qr}
                      resizeMode="contain"
                    />
                    <Image
                      style={{
                        width: scale(40),
                        height: scale(40),
                      }}
                      source={images.top_right_qr}
                      resizeMode="contain"
                    />
                  </View>
                  {isScanning && (
                    <Animated.View
                      style={[
                        styles.scanningLine,
                        { transform: [{ translateY: lineAnimation }] },
                      ]}
                    />
                  )}
  
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                    }}
                  >
                    <Image
                      style={{
                        width: scale(40),
                        height: scale(40),
                      }}
                      source={images.bottom_left_qr}
                      resizeMode="contain"
                    />
                    <Image
                      style={{
                        width: scale(40),
                        height: scale(40),
                      }}
                      source={images.bottom_right_qr}
                      resizeMode="contain"
                    />
                  </View>
  
                 
                </View>

                ):(
                  <View style={styles.scanningBox}></View>
                )
              }
              </>
             
            ) : (
              <>
                <View
                  style={{
                    ...styles.blur,
                    marginTop: "20%",
                    marginLeft: scale(20),
                    width: scale(160),
                  }}
                >
                  <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={5}
                    reducedTransparencyFallbackColor="white"
                  />
                  <CustomText
                    size={22}
                    fontFam={font.DarkerGrotesque_Medium}
                    fontWeight="600"
                    lineHeight={33}
                    style={{
                      marginLeft: scale(10),
                      marginBottom: verticalScale(5),
                    }}
                    color={colors.white}
                    text={"Instructions 1"}
                  />
                  <View style={styles.circle}>
                    <Image
                      style={{
                        width: scale(25),
                        height: scale(25),
                      }}
                      source={images.info}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <View
                  style={{
                    ...styles.blur,
                    marginTop: "70%",
                    marginLeft: scale(20),
                    width: scale(200),
                  }}
                >
                  <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={5}
                    reducedTransparencyFallbackColor="white"
                  />
                  <CustomText
                    size={22}
                    fontFam={font.DarkerGrotesque_Medium}
                    fontWeight="600"
                    lineHeight={33}
                    style={{
                      marginLeft: scale(10),
                      marginBottom: verticalScale(5),
                    }}
                    color={colors.white}
                    text={"Other Instructions 1"}
                  />
                  <View style={styles.circle}>
                    <Image
                      style={{
                        width: scale(25),
                        height: scale(25),
                      }}
                      source={images.info}
                      resizeMode="contain"
                    />
                  </View>
                </View>

                <Spacer height={verticalScale(20)} />
              </>
            )}

            <View
              style={{
                padding: scale(20),
                alignItems: "center",
                position: "absolute",
                bottom: verticalScale(30),
                alignSelf: "center",
              }}
            >
              {!isScanning ? (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={startScanning}
                  style={{
                    width: scale(70),
                    height: scale(70),
                    borderRadius: scale(20),
                  }}
                >
                  <Image
                    style={appStyles.main}
                    source={images.scan_btn}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ) : (
                <>
                  <CustomButton
                    text={!isScan ? "Scanning..." : "Submit Scan"}
                    fontWeight="700"
                    onPress={() => navigation.navigate("AfterScanning")}
                    width={windowWidth / 1.3}
                    borderRadius={5}
                    bgColor={colors.secondry}
                  />
                </>
              )}
              {}
            </View>
          </View>
        </ImageBackground>
      </ScreenLayout>
      {
        isModalVisible&&(
          <CompletedModal
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      />

        )

      }

      
    </>
  );
};

export default Scanning;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  circle: {
    width: scale(30),
    height: scale(30),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  blur: {
    height: verticalScale(45),
    borderRadius: scale(15),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: scale(10),
    overflow: "hidden",
  },
  scanningBox: {
    position: "absolute",
    width: windowWidth / 1.4, // Adjust as needed
    height: windowHeight / 2.3, // Adjust based on the image height and scanning area

    borderColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    // alignItems: "center",
    overflow: "hidden", // Clip child elements to stay within this box
    top: "25%",
    alignSelf: "center",
  },
  scanningLine: {
    width: windowWidth - 120, // Narrower than the box width
    height: 2,
    backgroundColor: "#C7000070",
    position: "absolute",
  },
});
