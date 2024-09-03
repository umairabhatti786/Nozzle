import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { appStyles } from "../../utils/AppStyles";
import CustomButton from "../CustomButton";
import { font } from "../../utils/font";
import { useEffect, useState } from "react";
type Props = {
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  multiline?: boolean;
  height?: any;
  width?: any;
  fontSize?: any;
  placeholderTextColor?: any;
  borderWidth?: any;
  borderRadius?: any;
  sourceWidth?: any;
  sourceHeight?: any;
  rightSource?: any;
  labelColor?: any;
  labelSize?: any;
  labeMarginLeft?: any;
  error?: any;
  textAlignVertical?: any;
  boxText1?:string,
  boxText2?:string
  
};

const CustomInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  props,
  isCenter,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  sourceWidth,
  sourceHeight,
  rightSource,
  labelColor,
  labelSize,
  labeMarginLeft,
  textAlignVertical,
  error,
  boxText1,
  boxText2
}: Props) => {
  const [activeBox, setActiveBox] = useState(boxText1);

  return (
    <View style={{ ...props, width: width || "100%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: scale(10),
          height: verticalScale(height || 42),
          borderColor: "#CCCCCC",
          borderWidth: borderWidth || 1,

          alignItems: "center",
          borderRadius: scale(borderRadius || 8),
          backgroundColor: colors.white,
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              alignSelf: multiline ? "flex-start" : "auto",
              marginTop: multiline ? verticalScale(10) : 0,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: sourceWidth || scale(16),
                height: sourceHeight || scale(16),
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize: fontSize || 14,
              width: rightSource ? windowWidth / 2 : windowWidth / 1.5,
              height: "100%",

              fontFamily: "InterMedium",
              fontWeight: fontWeight,
              color: color || colors.black,
              textAlignVertical: textAlignVertical, // Aligns the text to the top

              ...(isCenter && { alignSelf: "center" }),
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={placeholderTextColor || colors.gray}
            keyboardType={keyboard}
            maxLength={maxLength}
            secureTextEntry={isPassword || false}
            onChangeText={onChangeText}
            onBlur={onBlur}
            autoCapitalize="none"
          />
        </View>
        {rightSource && (
          <View style={{ ...appStyles.row, gap: scale(8) }}>
            <CustomButton
              text={boxText1}
              size={12}
              fontFam={font.Inter_Regular}
              width={scale(40)}
              style={{ paddingTop: 4 }}
              borderRadius={5}
              borderWidth={1}
              onPress={()=>setActiveBox(boxText1)}
              borderColor={activeBox==boxText1? colors.white:colors.darkGray}
              height={30}
              textColor={activeBox==boxText1? colors.white:colors.gray}
              bgColor={ activeBox==boxText1? colors.primary:colors.white}
            />
            <CustomButton
              text={boxText2}
              size={12}
              fontFam={font.Inter_Regular}
              width={scale(40)}
              onPress={()=>setActiveBox(boxText2)}
              style={{ paddingTop: 4 }}
              borderRadius={5}
              borderWidth={1}
              borderColor={activeBox==boxText2? colors.white:colors.darkGray}
              height={30}
              textColor={activeBox==boxText2? colors.white:colors.gray}
              bgColor={ activeBox==boxText2? colors.primary:colors.white}
            />
          </View>
        )}
      </View>

      {error && (
        <View style={{ marginTop: verticalScale(10), alignSelf: "flex-end" }}>
          <CustomText size={11} text={error} color={"#FF0000"} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
