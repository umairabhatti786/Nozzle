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
import Circle from "../../../components/Circle";
import CustomButton from "../../../components/CustomButton";
import { Spacer } from "../../../components/Spacer";

const Profile = ({ navigation }: any) => {
  const profileData = [
    { name: "Notifications", source: images.notification, onPress: () => {navigation.navigate("Notification")} },
    { name: "Language", source: images.language, onPress: () => {navigation.navigate("Language")} },
    { name: "Privacy policy", source: images.privacy, onPress: () => {} },
    {
      name: "Add and link integration",
      source: images.lock,
      onPress: () => {navigation.navigate("Integration")},
    },
    { name: "Events", source: images.events, onPress: () => {navigation.navigate("Events")} },
    { name: "News Feeds", source: images.news, onPress: () => {} },
    { name: "Settings", source: images.settings, onPress: () => {navigation.navigate("SettingsScreen")} },
  ];
  const Header = () => {
    return (
      <View style={{ ...appStyles.rowjustify }}>
        <Image
          style={{ width: scale(18), height: scale(15) }}
          source={images.drawer}
        />
        <CustomText
          text={"Profile"}
          color={"#585858"}
          size={24}
          fontFam={font.RalewaySemiBold}
        />

        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Circle
            width={40}
            height={40}
            onPress={()=>navigation.navigate("Notification")}
            backgroundColor={"#F3F4F5"}
            tintColor={"#292D32"}
            source={images.notification}
          />
        </View>
      </View>
    );
  };

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: scale(20), gap: verticalScale(20) }}>
          <Header />
          <View style={{ alignItems: "center", gap: verticalScale(10) }}>
            <TouchableOpacity style={styles.profileImageContainer}>
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.man2}
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.editContainer}
              >
                <Image
                  style={{ width: "45%", height: "45%" }}
                  source={images.edit}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <CustomText
              text={"Brian Imanuel"}
              color={colors.black200}
              size={24}
              fontFam={font.RalewaySemiBold}
            />

            <CustomText
              text={"#YNWK till the end 🔥"}
              color={colors.gray1200}
              size={13}
              style={{ marginTop: verticalScale(-5) }}
            />

            <CustomButton
              text="Edit Profile"
              width={scale(100)}
              borderRadius={12}
              height={37}
              size={12}
              fontWeight={"600"}
              onPress={() => navigation.navigate("EditProfile")}
              textColor={colors.white}
              bgColor={colors.blue}
            />
          </View>
          <Spacer height={verticalScale(5)} />

          {profileData.map((item, index) => {
            return (
              <TouchableOpacity
              onPress={item.onPress}
                activeOpacity={0.6}
                style={appStyles.rowjustify}
              >
                <View style={{ ...appStyles.row, gap: scale(10) }}>
                  <Circle
                    width={38}
                    height={38}
                    backgroundColor={colors.blue}
                    source={item.source}
                  />

                  <CustomText
                    text={item.name}
                    color={"#404040"}
                    size={14}
                    fontFam={font.poppinsMedium}
                  />
                </View>

                <Circle
                  width={30}
                  height={30}
                  backgroundColor={"#F3F4F5"}
                  tintColor={"#505050"}
                  sourceWidth={"30%"}
                  sourceHeight={"30%"}
                  source={images.nextIcon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  editContainer: {
    width: scale(33),
    height: scale(33),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    position: "absolute",
    bottom: verticalScale(-7),
    right: 10,
    backgroundColor: colors.primary,
    borderWidth: 2.5,
    borderColor: colors.white,
  },
  profileImageContainer: {
    width: scale(100),
    height: scale(100),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
