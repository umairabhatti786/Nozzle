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
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from "react-native-confirmation-code-field";

const Verification = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 6 });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

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
        text={"VERIFICATION"}
        color={colors.black100}
        size={24}
        fontFam={font.RalewayBold}
        lineHeight={25}
        fontWeight="bold"
      />
      <Spacer height={verticalScale(5)} />

      <CustomText
        text={"Enter the verification password."}
        color={colors.gray500}
        size={12}
        style={{ marginTop: 2 }}
        fontFam={font.poppinsRegular}
        lineHeight={25}
      />

      <Spacer height={verticalScale(20)} />

      <View style={{ flexDirection: "row", gap: scale(5),marginBottom:verticalScale(5) }}>
        <CustomText
          text={"Enter OTP here"}
          color={colors.black100}
          size={15}
          fontFam={font.RalewaySemiBold}
          // fontWeight="bold"
        />
        <Image
          style={{ width: 15, height: 15, marginTop: verticalScale(3) }}
          source={images.info}
        />
      </View>

      <CodeField
          ref={ref}
          {...props}
          caretHidden={true}
          value={value}
          onChangeText={(value) => {
            setValue(value);
            if (value.length == 6) {
              // onHandleOTP(value);
            }
          }}
          cellCount={5}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={{
                ...styles.codeFieldCell,
              }}
            >
              <CustomText
                size={15}
                // fontWeight={"600"}
                color={colors.black}
                text={symbol || (isFocused ? <Cursor /> : "0")}
              />
            </View>
          )}
        />
      {/* <Spacer height={verticalScale(10)} /> */}

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Signup")}
        style={{
          ...appStyles.row,
          alignSelf: "flex-end",
          gap: 3,
          marginTop: verticalScale(5),
        }}
      >
        <CustomText
          text={"Didn’t receive?"}
          color={colors.gray100}
          size={12}
          lineHeight={21}
          style={{ textAlign: "center" }}
        />
        <CustomText text={"Send again"} 
        textDecorationLine="underline"
        color={colors.black} size={12} />
      </TouchableOpacity>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Spacer height={verticalScale(30)} />

        <CustomButton
          text="Reset Password"
          width={"75%"}
          onPress={() => navigation.navigate("CreatePassword")}
          textColor={colors.black}
          bgColor={colors.primary}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Verification;

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
  codeFieldRoot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80,
    gap: scale(22),
  },
  codeFieldCell: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.gray700,
  },
});
