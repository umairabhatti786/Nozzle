import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";
import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import CustomTextInput from "../../../components/CustomInput";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colors.white }}
      // extraScrollHeight={-100}
    >
       <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.white,
       
        }}
      >
        <View

        style={{
          flex:1,
          backgroundColor:colors.white,

          paddingHorizontal: scale(20),
          paddingTop: verticalScale(40),
        }}
        >

        <CustomText
          text={"SIGN IN WITH "}
          color={colors.black100}
          size={24}
          fontFam={font.RalewayBold}
          lineHeight={25}
          fontWeight="bold"
        />
        <CustomText
          text={"TO YOUR ACCOUNT"}
          color={colors.black100}
          size={24}
          style={{ marginTop: 2 }}
          fontFam={font.RalewayBold}
          lineHeight={25}
          fontWeight="bold"
        />
        <Spacer height={verticalScale(25)} />

        <CustomTextInput
          labelImage={images.user}
          label="Username"
          value={values.email}
          onChangeText={(txt: string) => {
            setValues({ ...values, email: txt });
          }}
          // onShowPassword={() => setShowPAssword(!showPassword)}
          placeholder="Enter username here"
          // source={showPassword ? images.eyeclose : images.eye}
        />
        <Spacer height={verticalScale(10)} />

        <CustomTextInput
          labelImage={images.lock}
          label="Password"
          isPassword={showPassword}
          value={values.password}
          onChangeText={(txt: string) => {
            setValues({ ...values, password: txt });
          }}
          // onShowPassword={() => setShowPAssword(!showPassword)}
          placeholder="*************"
          source={images.eyeOff}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("ForgetPassword")}
          style={{ alignSelf: "flex-end", marginVertical: verticalScale(8) }}
        >
          <CustomText
            text={"Forget password?"}
            fontFam={font.poppinsRegular}
            color={colors.black}
            size={12}
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center", width: "100%" }}>
          <Spacer height={verticalScale(35)} />

          <CustomButton
            text="LOGIN"
            width={"90%"}
            onPress={() => navigation.navigate("Premium")}
            textColor={colors.black}
            bgColor={colors.primary}
          />
          <Spacer height={verticalScale(35)} />

          <View
            style={{
              ...appStyles.row,
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <View
              style={{ backgroundColor: colors.gray200, flex: 1, height: 1 }}
            />

            <CustomText text={"OR"} color={colors.black} size={15} />
            <View
              style={{ backgroundColor: colors.gray200, flex: 1, height: 1 }}
            />
          </View>
          <Spacer height={verticalScale(35)} />

          <View style={{ ...appStyles.row, gap: scale(15) }}>
            <TouchableOpacity style={styles.authContainer}>
              <Image
                source={images.facebook}
                style={{
                  width: scale(25),
                  height: scale(25),
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.authContainer}>
              <Image
                source={images.google}
                style={{
                  width: scale(25),
                  height: scale(25),
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.authContainer}>
              <Image
                source={images.apple}
                style={{
                  width: scale(25),
                  height: scale(25),
                }}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Signup")}
            style={{
              ...appStyles.row,
              alignSelf: "center",
              gap: 3,
              marginTop: verticalScale(15),
            }}
          >
            <CustomText
              text={"Don’t have account?"}
              color={colors.gray100}
              size={13}
              lineHeight={21}
              style={{ textAlign: "center" }}
            />
            <CustomText text={"Sign up"} color={colors.black} size={13} />
          </TouchableOpacity>
        </View>

        </View>

      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
});
