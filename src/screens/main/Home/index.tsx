import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import MatchCard from "./MatchCard";
import { EventSportsData } from "../../../utils/Data";
import EventTopContainer from "./EventTopContainer";
import LeagueCard from "../../../components/LeagueCard";

const Home = ({ navigation }: any) => {
  const [selectedEvent, setSelectedEvent] = useState(EventSportsData[0].id);

  const leagueData=[
    {backgroundColor:"#D8DFE9"},
    {backgroundColor:"#cfe1ca"},

  ]
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <FlatList
          data={leagueData}
          ListHeaderComponent={() => {
            return (
              <>
                <View
                  style={{
                    paddingHorizontal: scale(20),
                    paddingTop: scale(20),
                  }}
                >
                  <CustomText
                    text={"Hello,"}
                    color={colors.black200}
                    size={24}
                    fontFam={font.RalewayMedium}
                  />

                  <View style={{ ...appStyles.rowjustify }}>
                    <CustomText
                      text={"WADE WARREN"}
                      color={colors.black200}
                      fontWeight="bold"
                      size={24}
                      fontFam={font.RalewayExtraBold}
                    />

                    <View style={{ ...appStyles.row, gap: scale(10) }}>
                      <TouchableOpacity 
                      activeOpacity={0.4}
                      onPress={()=>navigation.navigate("Search")}
                      style={styles.circleContainer}>
                        <Image
                          style={{ width: "45%", height: "45%" }}
                          resizeMode="contain"
                          source={images.search}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                      activeOpacity={0.4}
                      onPress={()=>navigation.navigate("Notification")}
                       style={styles.circleContainer}>
                        <View
                          style={{
                            width: "55%",
                            height: "55%",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            style={{
                              width: "100%",
                              height: "100%",
                              tintColor: colors.black,
                            }}
                            resizeMode="contain"
                            source={images.notification}
                          />
                          <TouchableOpacity
                            style={{
                              position: "absolute",
                              top: -3,
                              right: -1,
                              width: scale(12),
                              height: scale(12),
                              borderRadius: scale(12),
                              backgroundColor: colors.primary,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <CustomText
                              text={"3"}
                              color={colors.black200}
                              size={10}
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ paddingHorizontal: scale(20) }}>
                  <MatchCard />

                  <View
                    style={{
                      ...appStyles.row,
                      justifyContent: "space-between",
                    }}
                  >
                    <CustomText
                      text={"Top Events"}
                      fontWeight="bold"
                      fontFam={font.RalewayBold}
                      color={"#292323"}
                      size={16}
                    />
                    <TouchableOpacity activeOpacity={0.4}>
                      <CustomText
                        text={"View All"}
                        fontWeight="400"
                        color={colors.gray1100}
                        size={14}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingTop: verticalScale(12),paddingBottom:verticalScale(10) }}
                  >
                    {EventSportsData.map((item, index) => {
                      return (
                        <EventTopContainer
                          item={item}
                          index={index}
                          onPress={() => {
                            setSelectedEvent(item.id);
                          }}
                          selectedEvent={selectedEvent}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              </>
            );
          }}
          renderItem={({item,index}) => {
            return (
              <View style={{ paddingHorizontal: scale(20) }}>
                <LeagueCard 
                item={item}
                onPress={()=>navigation.navigate("MatchDetail")}
                />
              </View>
            );
          }}
        />
      </View>
    </ScreenLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  circleContainer: {
    width: scale(40),
    height: scale(40),
    backgroundColor: colors.gray1000,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(40),
  },
});
