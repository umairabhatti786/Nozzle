import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { ScrollView } from "react-native-gesture-handler";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";

const Language = ({ navigation }: any) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English (UK)");

  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          height: verticalScale(40),
          marginBottom: verticalScale(30),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: "30%",
            height: verticalScale(20),
            justifyContent: "center",
            marginTop: verticalScale(7),
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: scale(18), height: scale(15) }}
            source={images.backArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText
          text={"Languages"}
          color={colors.black}
          size={22}
          fontFam={font.RalewaySemiBold}
        />
      </View>
    );
  };

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: scale(20) }}>
          <Header />

          <CustomText
            text={"Suggested"}
            color={colors.black}
            size={16}
            style={{ marginBottom: verticalScale(10) }}
            fontFam={font.poppinsSemiBold}
          />

          {["English (US)", "English (UK)"].map((item, ind) => {
            return (
              <>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedLanguage(item)}
                  style={{
                    ...appStyles.rowjustify,
                    paddingBottom: verticalScale(13),
                  }}
                >
                  <CustomText text={item} color={colors.black} size={16} />
                  <View
                    style={{
                      ...styles.checkBox,

                      borderWidth: selectedLanguage == item ? 7 : 2,
                      backgroundColor:
                        selectedLanguage == item ? colors.white : "#00214920",
                    }}
                  ></View>
                </TouchableOpacity>
              </>
            );
          })}

          <CustomText
            text={"Others"}
            color={colors.black}
            size={16}
            style={{
              marginBottom: verticalScale(10),
              marginTop: verticalScale(30),
            }}
            fontFam={font.poppinsSemiBold}
          />

          {[
            "Mandarin",
            "Hindi",
            "Spanish",
            "French",
            "Arabic",
            "Russian",
            "Indonesia",
            "Vietnamese",
          ].map((item, ind) => {
            return (
              <>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setSelectedLanguage(item)}
                  style={{
                    ...appStyles.rowjustify,
                    paddingBottom: verticalScale(13),
                  }}
                >
                  <CustomText text={item} color={colors.black} size={16} />
                  <View
                    style={{
                      ...styles.checkBox,

                      borderWidth: selectedLanguage == item ? 7 : 2,
                      backgroundColor:
                        selectedLanguage == item ? colors.white : "#00214920",
                    }}
                  ></View>
                </TouchableOpacity>
              </>
            );
          })}
        </View>

        <View
          style={{
            alignItems: "center",
            padding: scale(20),
            marginTop: verticalScale(30),
          }}
        >
          <CustomButton
            text="Get Code"
            width={"100%"}
            // onPress={() => navigation.navigate("Verification")}
            textColor={colors.black}
            bgColor={colors.primary}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Language;

const styles = StyleSheet.create({
  checkBox: {
    width: scale(23),
    height: scale(23),
    borderRadius: scale(23),
    borderColor: "#002149",
  },
});
