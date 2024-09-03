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
import CustomInput from "../../../components/CustomInput";
import { Spacer } from "../../../components/Spacer";
import CompanyModal from "./CompanyModal";

const RegisterScreen = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [values, setvalues] = useState({
    number: "",
    companyName: "",
  });
  return (
    <>
      <ScreenLayout edges={["left", "right"]}>
        <ImageBackground
          style={{
            ...appStyles.main,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          source={images.register_background}
        >
          <View
            style={{
              padding: scale(20),
              gap: verticalScale(8),
              alignItems: "center",
              marginBottom: verticalScale(10),
              width: "100%",
            }}
          >
            <CustomText
              size={27}
              fontFam={font.DarkerGrotesque_SemiBold}
              fontWeight="600"
              style={{
                textAlign: "center",
                width: windowWidth / 1.3,
                marginBottom: verticalScale(20),
              }}
              color={colors.white}
              text={"Enter you Registration Number here"}
            />

            <CustomInput
              placeholder="Enter Registration Number"
              width={"100%"}
              value={values.number}
              keyboard={"numeric"}
              onChangeText={(txt: string) => {
                setvalues({ ...values, number: txt });
              }}
              leftSource={images.person}
            />
            <CustomInput
              placeholder="Provide The Company Name"
              width={"100%"}
              value={values.companyName}
              onChangeText={(txt: string) => {
                setvalues({ ...values, companyName: txt });
              }}
              leftSource={images.building}
            />
            <Spacer height={verticalScale(20)} />

            <CustomButton
              text="Login"
              fontWeight="700"
              size={18}
              onPress={()=>{
                // console.log("cldncldn")
                if(values.companyName.length==0){
                    setIsModalVisible(true)
                    return

                }
                navigation.navigate("CharacteristicsForm")
              }}
              width={"100%"}
              bgColor={colors.secondry}
            />
            <CustomButton
              text="I don't have a registration number"
              fontWeight="700"
              width={"100%"}
              borderWidth={1}
             
              borderColor={colors.secondry}
              textColor={colors.secondry}
              bgColor={"transparent"}
            />
                        <Spacer height={verticalScale(20)} />

          </View>
        </ImageBackground>
      </ScreenLayout>
      <CompanyModal
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      />
    
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
