import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { font } from "../../utils/font";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  phoneInputValue?: any;
  setPhoneInputValue?: any;
  phoneInputRef?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  isPhoneField?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  complusory?: boolean;
  color?: string;
  onChangeCountry?: any;
  countryFlag?: string;
  maxLength?: number;
  onChangeFormattedText?: any;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?: any;
  labelImage?: any;
  width?:any
  fontSize?:any
  placeholderTextColor?:any
  borderWidth?:any,
  title?:any,
  borderRadius?:any,
  sourceWidth?:any,
  sourceHeight?:any,
  backgroundColor?:any,
  paddingTop?:any
};

const CustomTextInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  fontSize,
  dropdown,
  open,
  isPhoneField,
  phoneInputValue,
  setPhoneInputValue,
  phoneInputRef,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  complusory,
  color,
  onChangeCountry,
  countryFlag,
  maxLength,
  onChangeFormattedText,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
  labelImage,
  width,
  placeholderTextColor,
  borderWidth,
  title,
  borderRadius,
  sourceWidth,
  sourceHeight,
  backgroundColor,
  paddingTop
}: Props) => {

  return (
    <View style={{ ...props, marginTop: marginTop || 15,width: width||"100%" }}>
      {
        label&&(

          <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: scale(7),
            marginBottom: verticalScale(5),
          }}
        >
          {labelImage && (
            <Image
              source={labelImage}
              style={{
                width: 18,
                height: 18,
              }}
              resizeMode={"contain"}
            />
          )}
  
          <CustomText
            fontWeight={"600"}
            fontFam={font.poppinsMedium}
            style={{marginTop:4}}
            size={labelSize || 14}
            text={label}
            color={colors.black}
          />
        </View>

        )
      }
      <View

      style={{
       
        borderColor: colors.gray200,
        borderWidth:borderWidth || 1,

        borderRadius:borderRadius || scale(10),
        backgroundColor:backgroundColor|| colors.gray300,
        paddingTop:title? verticalScale(5):0
      }}
      >
        {
          title&&(
            <CustomText
            style={{marginBottom:verticalScale(-10),marginLeft:scale(13),}}
            size={labelSize || 11}
            text={title}
            color={"#757575"}
          />

          )
        }
      

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          height: verticalScale(height || 42),

          alignItems: "center",
          borderRadius: scale(10),
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: 25,
                height: 25,
                tintColor: "#CCCCCC",
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1,paddingTop: paddingTop||verticalScale(5) }}>
          <TextInput
            value={value}
            editable={editable}
            style={{
              fontSize:fontSize || 14,
              width: windowWidth / 1.2,
              alignItems: "center",
              // backgroundColor:"red",
              flex:1,
              fontFamily: font.poppinsRegular,
              fontWeight: fontWeight,
              color: color || colors.black,
              ...(isCenter && { alignSelf: "center" }),
            }}
            // fontSize: 16,
            // width:source?windowWidth / 1.3: windowWidth / 1.2,
            // alignItems:"center",
            // flex:1,
            // // paddingTop:20,
            // fontFamily:"Poppins-Regular",
            // fontWeight: fontWeight,
            // color: color || colors.grey400,
            // ...(isCenter && { alignSelf: "center" }),


            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={ placeholderTextColor || colors.gray200}
            keyboardType={keyboard}
            maxLength={maxLength}
            secureTextEntry={isPassword || false}
            onChangeText={onChangeText}
            onBlur={onBlur}
            autoCapitalize="none"
          />
        </View>
        {source && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            disabled={!onShowPassword}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={source}
              style={{
                width:sourceWidth|| 17,
                height: sourceHeight||17,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      </View>
    

      
    </View>
  );
};
export default CustomTextInput;
