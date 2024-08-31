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
import { windowWidth } from "../../../utils/Dimensions";

const Premium = ({ navigation }: any) => {
  const [selctedPremium, setSelectedPremium] = useState("Annual");
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          height: verticalScale(40),
          marginBottom: verticalScale(30),
          gap: verticalScale(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            width: "27%",
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
          text={"Premium"}
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
            text={"Get Premium Now!"}
            color={colors.black}
            size={19}
            style={{ marginBottom: verticalScale(10) }}
            fontFam={font.poppinsSemiBold}
          />
          <CustomText
            text={
              "Unlock all the power of this mobile tool and enjoy digital experience like never before!"
            }
            color={colors.black}
            size={14}
            style={{ marginBottom: verticalScale(15) }}
          />
          <Image
            style={{
              width: windowWidth / 1,
              height: verticalScale(140),
              alignSelf: "center",
            }}
            source={images.gift}
            resizeMode="contain"
          />

          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => setSelectedPremium("Annual")}
            style={{
              ...styles.LinkBox,
              marginTop: verticalScale(10),
              borderColor:
                selctedPremium == "Annual" ? "#002149" : "transparent",
              borderWidth: selctedPremium == "Annual" ? 2 : -1,
            }}
          >
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Annual"}
                color={colors.black}
                size={18}
                fontFam={font.poppinsSemiBold}
              />
              <CustomButton
                text="Best Value"
                borderRadius={30}
                disable={true}
                height={28}
                size={13}
                paddingHorizontal={scale(13)}
                fontFam={font.poppinsRegular}
                textColor={colors.white}
                bgColor={"#26CB63"}
              />
            </View>

            <CustomText
              text={"First 30 days free - Then $999/Year"}
              color={colors.black}
              size={13}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => setSelectedPremium("Monthly")}
            style={{
              ...styles.LinkBox,
              marginTop: verticalScale(15),
              borderColor:
                selctedPremium == "Monthly" ? "#002149" : "transparent",
              borderWidth: selctedPremium == "Monthly" ? 2 : -1,
            }}
          >
            <View style={appStyles.rowjustify}>
              <CustomText
                text={"Monthly"}
                color={colors.black}
                size={18}
                fontFam={font.poppinsSemiBold}
              />
            </View>

            <CustomText
              text={"First 7 days free - Then $99/Month"}
              color={colors.black}
              size={13}
            />
          </TouchableOpacity>

          <View
            style={{
              gap: verticalScale(10),
              marginTop: verticalScale(20),
            }}
          >
            <CustomButton
              text="Start 30-day free trial"
              width={"100%"}
              paddingHorizontal={scale(30)}
              height={50}
              onPress={()=>navigation.navigate("BottomTab")}
              textColor={colors.black}
              bgColor={colors.primary}
            />
            <View>
              <Text style={styles.text}>
                By placing this order, you agree to the{" "}
                <Text style={styles.boldText}>Terms of Service</Text> and{" "}
                <Text style={styles.boldText}>Privacy Policy</Text>.
                Subscription automatically renews unless auto-renew is turned
                off at least 24-hours before the end of the current period.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Premium;

const styles = StyleSheet.create({
  LinkBox: {
    paddingVertical: verticalScale(13),
    paddingHorizontal: scale(15),
    backgroundColor: "#00214920",
    borderRadius: scale(15),
    gap: verticalScale(5),
  },

  container: {
    padding: 16,
  },
  text: {
    fontSize: 12,
    color: "black",
    lineHeight: 22,
    textAlign: "center",
    fontFamily: font.poppinsRegular,
  },
  boldText: {
    fontWeight: "bold",
    fontFamily: font.poppinsBold,
  },
});
