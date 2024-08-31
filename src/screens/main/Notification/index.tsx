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
import NotificationCard from "./NotificationCard";
import CustomLine from "../../../components/CustomLine";
import { windowHeight } from "../../../utils/Dimensions";

const Notification = ({ navigation }: any) => {
  const newsUpdatesCard = [
    {
      date: "Today",
      unread: "Mark as unread",
      data: [
        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Live Match Update",
          time: "1h",
        },
        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Final Score Update",
          time: "1h",
        },

        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Don't Miss the Action!",
          time: "1h",
        },
      ],
    },

    {
      date: "Yesterday",
      unread: "Mark as unread",
      data: [
        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Player Injury Update",
          time: "1h",
        },

        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Player Injury Update",
          time: "1h",
        },

        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Match Alerts",
          time: "1h",
        },
        {
          des: "Catch the thrilling live action as Team A takes on Team B. Don't miss a moment of the excitement. Tune in now to watch the game live and cheer for your favorite team!",
          title: "Don't Miss the Action!",
          time: "1h",
        },
      ],
    },
  ];

  const Header = () => {
    return (
      <View style={{ ...appStyles.rowjustify, padding: scale(20) }}>
        <TouchableOpacity
          activeOpacity={0.4}
          style={{
            marginTop: verticalScale(5),
            width: scale(30),
            height: scale(30),
            justifyContent: "center",
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
          text={"Notifications"}
          color={"#585858"}
          size={24}
          fontFam={font.RalewaySemiBold}
        />

        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Circle
            width={37}
            height={37}
            onPress={()=>navigation.navigate("SettingsScreen")}
            
            backgroundColor={"#F3F4F5"}
            tintColor={"#292D32"}
            source={images.settings}
          />
        </View>
      </View>
    );
  };

  return (
    <ScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{ flex: 1, gap: verticalScale(20) }}>
          <Header />

          <FlatList
            data={newsUpdatesCard}
            contentContainerStyle={{ gap: scale(20) }}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    height: windowHeight,
                    alignItems: "center",
                    paddingTop: "35%",
                    gap: verticalScale(10),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: scale(150),
                      height: scale(150),
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 999,
                      backgroundColor: "#0053A0",
                    }}
                  >
                    <Image
                      style={{ width: "60%", height: "60%" }}
                      source={images.bellCross}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <CustomText
                    text={"No Notification Yet"}
                    color={"#585858"}
                    size={16}
                    fontFam={font.RalewaySemiBold}
                  />
                  <View
                    style={{
                      width: "60%",
                      alignSelf: "center",
                      alignItems: "center",
                    }}
                  >
                    <CustomText
                      text={
                        "Stay tuned for the latest updates and notifications!"
                      }
                      color={"#5C5C5C"}
                      style={{ textAlign: "center" }}
                      size={13}
                    />
                  </View>
                </View>
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      marginBottom: verticalScale(20),
                      paddingHorizontal: scale(20),
                    }}
                  >
                    <CustomText
                      text={item.date}
                      color={"#757575"}
                      size={16}
                      fontFam={font.RalewaySemiBold}
                    />

                    <CustomText
                      text={item.unread}
                      color={"#0053A0"}
                      size={16}
                      fontFam={font.RalewaySemiBold}
                    />
                  </View>
                  {item?.data.map((it, ind) => {
                    return (
                      <>
                        <NotificationCard
                          title={it.title}
                          des={it.des}
                          time={it.time}
                        />
                        <CustomLine />
                      </>
                    );
                  })}
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Notification;

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
