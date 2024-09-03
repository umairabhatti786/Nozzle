import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";
import CustomInput from "../../../components/CustomInput";
import { Spacer } from "../../../components/Spacer";
import CustomModal from "../../../components/CustomModal";
import { BlurView } from "@react-native-community/blur";

const CompletedModal = ({
  navigation,
  setIsModalVisible,
  isModalVisible,
}: any) => {
  return (
    <>
     <Pressable
     onPress={()=>setIsModalVisible(false)}
            style={{
              width: windowWidth/1.4,
              backgroundColor: "transparent",
              paddingHorizontal: verticalScale(8),
              paddingVertical: verticalScale(15),
              borderRadius: scale(15),
              overflow:"hidden",
              position:"absolute",
              alignSelf:"center",
              top:"40%",
            
              gap: verticalScale(10),

              justifyContent: "center",
            }}
          >
            <BlurView
                       style={styles.absolute}
                       blurType="light"
                       blurAmount={5}
                       reducedTransparencyFallbackColor="white"
                  />

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={{...styles.circle,marginTop:verticalScale(5)}}
            >
              <Image
                style={{ width: "80%", height: "80%" }}
                source={images.completed}
              />
            </TouchableOpacity> 

             <CustomText
              size={16}
              fontFam={font.Inter_Regular}
              style={{ textAlign: "center" }}
              color={colors.white}
              text={"Scanning Completed "}
            />
          </Pressable>
     
    </>
  );
};

export default CompletedModal;

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius:scale(15),
  },

  circle: {
    width: scale(50),
    height: scale(50),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    alignSelf: "center",
  },
});
