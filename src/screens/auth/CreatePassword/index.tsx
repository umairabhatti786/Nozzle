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

const CreatePassword = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);
  const [convert, setConvert] = useState("Email");

  const [values, setValues] = useState({
    email: "info@gmail.com",
    password:"123456789",
    confirmPassword:"123456789"

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
        text={"Enter your new password here to reset and then confirm."}
        color={colors.gray500}
        size={12}
        style={{ marginTop: 2 }}
        fontFam={font.poppinsRegular}
        lineHeight={25}
      />
      <Spacer height={verticalScale(25)} />
  

     

      <CustomTextInput
        labelImage={images.lock}
        label="Password"
        fontSize={18}
        source={images.eyeOff}
        isPassword={showPassword}
        value={values.password}
        borderWidth={-1}

        placeholderTextColor={colors.black}
    
        onChangeText={(txt: string) => {
          setValues({ ...values, password: txt });
        }}
        placeholder="*****************"
      />
            <Spacer height={verticalScale(10)} />

       <CustomTextInput
        labelImage={images.lock}
        label="Confirm Password"
        fontSize={18}
        borderWidth={-1}
        source={images.eyeOff}
        isPassword={showPassword}
        value={values.confirmPassword}
        placeholderTextColor={colors.black}
    
        onChangeText={(txt: string) => {
          setValues({ ...values, confirmPassword: txt });
        }}
        placeholder="*****************"
      />

      <View style={{ alignItems: "center", width: "100%" }}>
        <Spacer height={verticalScale(35)} />

        <CustomButton
          text="Setup"
          width={"75%"}
          onPress={() => navigation.navigate("Login")}
          textColor={colors.black}
          bgColor={colors.primary}
        />
      </View>
      </View>
    </SafeAreaView>
    
    </KeyboardAwareScrollView>
   
  );
};

export default CreatePassword;

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
