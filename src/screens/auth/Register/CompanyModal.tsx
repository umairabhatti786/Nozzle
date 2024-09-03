import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, ImageBackground,TouchableOpacity } from "react-native";
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

const CompanyModal = ({ navigation,setIsModalVisible,isModalVisible }: any) => {
;
  return (
    <>
     
     <CustomModal
        isModalVisible={isModalVisible}
        setModalVisible={setIsModalVisible}
      >
        <View style={{ alignItems: "center", width: "80%" }}>
          <View
            style={{
              width: "90%",
              backgroundColor: colors.white,
              padding: verticalScale(8),
              borderRadius: scale(12),
            }}
          >
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>{
                setIsModalVisible(false)

            }}
              style={{
                width: scale(30),
                height: scale(30),
                borderRadius: 999,
                alignSelf: "flex-end",
              }}
            >
              <Image
              
               style={appStyles.main} source={images.cross} />
            </TouchableOpacity>

            <CustomText
              size={16}
              fontFam={font.Inter_Regular}
              style={{ textAlign: "center" }}
              color={colors.black}
              text={"Please contact us at "}
            />
            <Spacer height={verticalScale(15)} />
            <CustomText
              size={16}
              fontFam={font.Inter_Regular}
              style={{ textAlign: "center" }}
              textDecorationLine="underline"
              color={colors.blue}
              text={"hello@nozzle.be"}
            />
            <Spacer height={verticalScale(15)} />
          </View>
        </View>
      </CustomModal>
    </>
  );
};

export default CompanyModal;

const styles = StyleSheet.create({});
