import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
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
import PhoneNumberInput from "../../../components/PhoneNumberInput";

const Signup = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);

  const [values, setValues] = useState({
    name: "Jeff",
    lastName: "Kevin",
    email: "info@gmail.com",
    password: "1234567890",
    phoneNumber: "97355465443626",
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
       
      }}
    >
      <ScrollView
      contentContainerStyle={{ paddingHorizontal: scale(20),
        paddingTop: verticalScale(40),
        paddingBottom:verticalScale(20)
      }}
      >

      <CustomText
        text={"REGISTER YOUR"}
        color={colors.black100}
        size={24}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <CustomText
        text={"ACCOUNT"}
        color={colors.black100}
        size={24}
        style={{ marginTop: 2 }}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <Spacer height={verticalScale(25)} />
      <View style={{ gap: verticalScale(15) }}>
        <View style={{ ...appStyles.row, justifyContent: "space-between" }}>
          <CustomTextInput
            labelImage={images.user}
            label="First Name"
            width="45%"
            value={values.name}
            onChangeText={(txt: string) => {
              setValues({ ...values, email: txt });
            }}
            placeholder="Enter username here"
          />

          <CustomTextInput
            labelImage={images.user}
            label="Last Name"
            width="45%"
            value={values.lastName}
            onChangeText={(txt: string) => {
              setValues({ ...values, email: txt });
            }}
            placeholder="Enter username here"
          />
        </View>

        <CustomTextInput
          labelImage={images.email}
          label="Email"
          value={values.email}
          onChangeText={(txt: string) => {
            setValues({ ...values, email: txt });
          }}
          placeholder="Enter username here"
        />

        <View style={{marginTop:verticalScale(10)}}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: scale(7),
              marginBottom: verticalScale(-8),
            }}
          >
            <Image
              source={images.phone}
              style={{
                width: 18,
                height: 18,
              }}
              resizeMode={"contain"}
            />

            <CustomText
              fontWeight={"600"}
              fontFam={font.poppinsMedium}
              style={{ marginTop: 4 }}
              size={14}
              text={"Phone Number"}
              color={colors.black}
            />
          </View>
          <View style={{ ...appStyles.row, gap: scale(20) }}>
            <View style={styles.countryInput}>
              <Image
                source={images.flag}
                style={{
                  width: scale(23),
                  height: scale(23),
                }}
                resizeMode={"contain"}
              />
              <Spacer width={scale(3)} />

              <CustomText text={"92"} color={colors.black100} size={12} />
              <Spacer width={scale(2)} />

              <Image
                source={images.dropdown}
                style={{
                  width: scale(8),
                  height: scale(8),
                }}
                resizeMode={"contain"}
              />
            </View>
            <CustomTextInput
              labelImage={images.email}
              width={"65%"}
              // label="Email"
              value={values.phoneNumber}
              onChangeText={(txt: string) => {
                setValues({ ...values, phoneNumber: txt });
              }}
              placeholder="Enter username here"
            />
          </View>
        </View>

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

        <View
          style={{
            alignItems: "center",
            width: "100%",
            marginTop: verticalScale(20),
            gap: verticalScale(30),
          }}
        >
          <CustomButton
            text="REGISTER"
            width={"60%"}
            onPress={() => navigation.navigate("SelectGame")}
            textColor={colors.black}
            bgColor={colors.primary}
          />

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
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Login")}
          style={{
            ...appStyles.row,
            alignSelf: "center",
            gap: 3,
          }}
        >
          <CustomText
            text={"Have an account?"}
            color={colors.gray100}
            size={13}
            lineHeight={21}
            style={{ textAlign: "center" }}
          />
          <CustomText text={"Sign in"} color={colors.black} size={13} />
        </TouchableOpacity>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default Signup;

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
  countryInput: {
    flexDirection: "row",
    paddingHorizontal: scale(20),
    width: "30%",
    height: verticalScale(42),
    borderColor: colors.gray200,
    borderWidth: 1,
    marginTop: 15,
    alignItems: "center",
    borderRadius: scale(10),
    backgroundColor: colors.gray300,
  },
});
