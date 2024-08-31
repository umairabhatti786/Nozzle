import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ForgetPassword = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);
  const [convert, setConvert] = useState("Email");

  const [values, setValues] = useState({
    email: "info@gmail.com",
  });

  return (
    <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    style={{ flex: 1, backgroundColor: colors.white }}
    // extraScrollHeight={-100}
  >
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
        text={"FORGET PASSWORD?"}
        color={colors.black100}
        size={24}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <Spacer height={verticalScale(5)} />

      <CustomText
        text={ convert=="Email"? "Enter the password through Email.":"Enter the password through phone number."}
        color={colors.gray500}
        size={12}
        style={{ marginTop: 2 }}
        fontFam={font.poppinsRegular}
        lineHeight={25}
      />
      <Spacer height={verticalScale(25)} />
  

      <View
        style={{
          width: "100%",
          height: verticalScale(40),
          backgroundColor: colors.white,

          borderRadius: scale(10),
          borderWidth: 1,
          borderColor: colors.gray20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setConvert("Email")}
          style={{
            ...styles.convertButton,
            backgroundColor: convert == "Email" ? colors.blue : "transparent",
          }}
        >
          <CustomText
            text={"Email"}
            color={convert == "Email" ? colors.white : colors.gray600}
            size={12}
            fontFam={font.poppinsMedium}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setConvert("Phone Number")}
          style={{
            ...styles.convertButton,
            backgroundColor:
              convert == "Phone Number" ? colors.blue : "transparent",
          }}
        >
          <CustomText
            text={"Phone Number"}
            color={convert == "Phone Number" ? colors.white : colors.gray600}
            size={12}
            fontFam={font.poppinsMedium}
          />
        </TouchableOpacity>
      </View>
      <Spacer height={verticalScale(15)} />

      <CustomText
        text={
          "Please enter your email address and we will send you a password reset code."
        }
        color={colors.gray500}
        size={12}
        // style={{ marginTop: 2 }}
        fontFam={font.poppinsRegular}
        // lineHeight={25}
      />

      <CustomTextInput
        labelImage={images.email}
        label="Email"
        value={values.email}
        onChangeText={(txt: string) => {
          setValues({ ...values, email: txt });
        }}
        placeholder="info@gmail.com"
      />

      <View style={{ alignItems: "center", width: "100%" }}>
        <Spacer height={verticalScale(35)} />

        <CustomButton
          text="Get Code"
          width={"75%"}
          onPress={() => navigation.navigate("Verification")}
          textColor={colors.black}
          bgColor={colors.primary}
        />
      </View>
      </View>

    </SafeAreaView>
    </KeyboardAwareScrollView>
  
  );
};

export default ForgetPassword;

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
