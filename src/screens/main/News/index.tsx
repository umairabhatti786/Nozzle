import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { EventSportsData } from "../../../utils/Data";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import NewsCard from "./NewsCard";
import NewsUpdatesCard from "./NewsUpdatesCard";
import CustomButton from "../../../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";

const News = ({ navigation }: any) => {
  const [isScrollNewsFeed, setIsScrollNewsFeed] = useState(0);
  const newsUpdatesCard = [
    { image: images.news2,title:"Joleon column: Conte should be getting more out of struggling spurs",date:"22 April,2023" },
    { image: images.news3,title:"Man City to assess Haaland fitness ahead of Leicester clash",date:"22 April,2023" },
    { image: images.news4,title:"Klopp calls on Liverpool to 'create basis' for season before World Cup",date:"22 April,2023" },
    { image: images.news5,title:"Joleon column: Conte should be getting more out of struggling spurs",date:"22 April,2023" },
  ];
  const onScroll = (x: any) => {
    const xPos =
      x.nativeEvent?.contentOffset?.x < 0 ? 0 : x.nativeEvent?.contentOffset?.x;
    const current = Math.floor(xPos / 200);
    if (current > 4) {
      setIsScrollNewsFeed(4);
      return;
    }
    setIsScrollNewsFeed(current);
  };
  return (
    <ScreenLayout>
      <View style={{ flex: 1, gap: verticalScale(20) }}>

      <ScrollView>

<View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            paddingHorizontal: scale(20),
            paddingTop: verticalScale(20),
          }}
        >
          <CustomText
            text={"News Feed"}
            fontFam={font.RalewayBold}
            color={"#292323"}
            size={19}
          />
          <TouchableOpacity style={styles.nextContainer} activeOpacity={0.4}>
            <CustomText
              text={"See all"}
              fontWeight="400"
              color={colors.black200}
              size={10}
            />
            <Image
              style={{ width: scale(11), height: scale(10) }}
              source={images.nextArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={[1, 2, 3]}
            horizontal
            onScroll={onScroll}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: scale(20) }}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginRight: scale(15) }}>
                  <NewsCard
                    item={item}
                    onPress={() => navigation.navigate("NewsDetail")}
                  />
                </View>
              );
            }}
          />

          <View
            style={{
              ...appStyles.row,
              gap: scale(8),
              alignSelf: "center",
            }}
          >
            {[1, 2, 3].map((item, index) => {
              return (
                <View style={styles.dotImageContainer}>
                  <Image
                    source={
                      isScrollNewsFeed == index
                        ? images.rectangleBlueDot
                        : images.rectangleGrayDot
                    }
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              );
            })}
          </View>
        </View>

        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
         padding:scale(20)
          }}
        >
          <CustomText
            text={"Updates"}
            fontFam={font.RalewayBold}
            color={"#292323"}
            size={18}
          />
          <TouchableOpacity style={styles.nextContainer} activeOpacity={0.4}>
            <CustomText
              text={"See all"}
              fontWeight="400"
              color={colors.black200}
              size={10}
            />
            <Image
              style={{ width: scale(11), height: scale(10) }}
              source={images.nextArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      
        <View >
          <FlatList
            data={newsUpdatesCard}
            contentContainerStyle={{ gap: scale(20),paddingHorizontal:scale(20) }}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <NewsUpdatesCard 
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  />
                </View>
              );
            }}
          />
        </View>

        </ScrollView>

      </View>
    </ScreenLayout>
  );
};

export default News;

const styles = StyleSheet.create({
  circleContainer: {
    width: scale(40),
    height: scale(40),
    backgroundColor: colors.gray1000,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(40),
  },
  nextContainer: {
    width: scale(75),
    height: verticalScale(26),
    backgroundColor: colors.primary,
    alignItems: "center",
    borderRadius: scale(10),
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(5),
  },
  dotImageContainer: {
    width: scale(8),
    height: scale(8),
  },
});
