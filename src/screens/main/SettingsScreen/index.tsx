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
import ToggleSwitch from "toggle-switch-react-native";

import CustomLine from "../../../components/CustomLine";

const SettingsScreen = ({ navigation }: any) => {

  const [liveUpdates, setLiveUpdates] = useState([
    { name: "Instant Game Alerts", isActive: false },
    { name: "Match Highlights", isActive: true },
  ]);
  const [GameAlerts, setGameAlerts] = useState([
    { name: "Live Score Notifications", isActive: false },
    { name: "Play-by-Play Updates", isActive: true },
    { name: "Match Flash", isActive: true },
    { name: "Quick Match Alerts", isActive: false },
    { name: "Live Event Updates", isActive: false },
  ]);
  const [SportsNotifications, setSportsNotifications] = useState([
    { name: "Score Updates", isActive: false },
    { name: "Event Alerts", isActive: true },
    
  ]);

  const Header = () => {
    return (
      <View
        style={{ ...appStyles.rowjustify, marginBottom: verticalScale(20) }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          style={{ marginTop: verticalScale(5),width:scale(30),height:scale(30),justifyContent:"center", }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: scale(18), height: scale(15) }}
            source={images.backArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText
          text={"Settings"}
          color={"#585858"}
          size={24}
          
          fontFam={font.RalewaySemiBold}
        />

        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Circle
            width={37}
            height={37}
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
        <View style={{ flex: 1, padding: scale(20) }}>
          <Header />

          <CustomText
            text={"Live Updates"}
            color={colors.black}
            size={16}
            style={{ marginBottom: verticalScale(10) }}
            fontFam={font.poppinsSemiBold}
          />

          <CustomText
            text={"Real Time Notifications"}
            size={15}
            style={{ marginBottom: verticalScale(10) }}
            color={colors.black}
          />

          {liveUpdates.map((item, ind) => {
            return (
              <>
                <View
                  style={{
                    ...appStyles.rowjustify,
                    paddingBottom: verticalScale(13),
                  }}
                >
                  <CustomText text={item?.name} color={colors.black} size={14} />

                  <ToggleSwitch
                    isOn={item?.isActive}
                    onColor={"#0053A0"}
                    offColor={"#D9D9D9"}
                    size="small"
                    onToggle={() => {
                      const data = [...liveUpdates];

                      data[ind].isActive = !item.isActive;

                      setLiveUpdates(data);
                    }}
                    thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                    thumbOffStyle={{
                      width: 17,
                      height: 17,
                      borderRadius: 9999,
                    }}
                    trackOffStyle={{ width: 46, height: 25 }}
                    trackOnStyle={{ width: 46, height: 25 }}
                  />
                </View>
              </>
            );
          })}
          <CustomLine backgroundColor={"#EEEEEE"} />

          <CustomText
            text={"Game Alerts"}
            color={colors.black}
            size={16}
            style={{
              marginBottom: verticalScale(10),
              marginTop: verticalScale(30),
            }}
            fontFam={font.poppinsSemiBold}
          />

          {GameAlerts?.map((item, ind) => {
            return (
              <>
                <View
                  style={{
                    ...appStyles.rowjustify,
                    paddingBottom: verticalScale(13),
                  }}
                >
                  <CustomText text={item?.name} color={colors.black} size={14} />

                  <ToggleSwitch
                    isOn={item?.isActive}
                    onColor={"#0053A0"}
                    offColor={"#D9D9D9"}
                    size="small"
                    onToggle={() => {
                      const data = [...GameAlerts];

                      data[ind].isActive = !item.isActive;

                      setGameAlerts(data);
                    }}
                    thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                    thumbOffStyle={{
                      width: 17,
                      height: 17,
                      borderRadius: 9999,
                    }}
                    trackOffStyle={{ width: 46, height: 25 }}
                    trackOnStyle={{ width: 46, height: 25 }}
                  />
                </View>
              </>
            );
          })}

          <CustomLine backgroundColor={"#EEEEEE"} />

          <CustomText
            text={"Sports Notifications"}
            color={colors.black}
            size={16}
            style={{
              marginBottom: verticalScale(10),
              marginTop: verticalScale(30),
            }}
            fontFam={font.poppinsSemiBold}
          />

          {SportsNotifications?.map((item: any, ind) => {
            return (
              <>
                <View
                  style={{
                    ...appStyles.rowjustify,
                    paddingBottom: verticalScale(13),
                  }}
                >
                  <CustomText text={item?.name} color={colors.black} size={14} />

                  <ToggleSwitch
                    isOn={item?.isActive}
                    onColor={"#0053A0"}
                    offColor={"#D9D9D9"}
                    size="small"
                    onToggle={() => {
                      const data: any = [...SportsNotifications];

                      data[ind].isActive = !item.isActive;

                      setSportsNotifications(data);
                    }}
                    thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                    thumbOffStyle={{
                      width: 17,
                      height: 17,
                      borderRadius: 9999,
                    }}
                    trackOffStyle={{ width: 46, height: 25 }}
                    trackOnStyle={{ width: 46, height: 25 }}
                  />
                </View>
              </>
            );
          })}
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  checkBox: {
    width: scale(23),
    height: scale(23),
    borderRadius: scale(23),
    borderColor: "#002149",
  },
});
