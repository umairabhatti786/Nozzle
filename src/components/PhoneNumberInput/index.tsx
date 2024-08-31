import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { font } from "../../utils/font";
import PhoneInput from "react-native-phone-number-input";

type Props = {
  props?: any;
  marginTop?: any;
  value?: any;
  width?: any;
};

const PhoneNumberInput = ({ props, marginTop, value, width }: Props) => {
  return (
    <View
      style={{ ...props, marginTop: marginTop || 15, width: width || "100%" }}
    >
      <PhoneInput
        // ref={phoneInput}
        defaultValue={value}
        defaultCode="DM"
        layout="first"
        onChangeText={(text) => {
          //   setValue(text);
        }}
        onChangeFormattedText={(text) => {
          //   setFormattedValue(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
    </View>
  );
};
export default PhoneNumberInput;
