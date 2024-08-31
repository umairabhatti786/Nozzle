import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
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
import CustomLine from "../../../components/CustomLine";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import NotificationCard from "../Notification/NotificationCard";
import CustomTextInput from "../../../components/CustomTextInput";
import SearchCard from "./SearchCard";

const Search = ({ navigation }: any) => {
  const [search, setSearch] = useState("");
  const newsUpdatesCard = [
    {
        team1Source:images.leicester,
        team2Source:images.astonvilla,

        title: "Barcelona VS Real Madrid",
        time: "Monday, 12 Feb 2021 . 02.30 am",
      },
      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Aersenal VS Aston Villa",
        time: "Tuesday, 9 Mar 2021 . 05.00 am",
      },

      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },
      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },
      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },
      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },
      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },

      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      },

      {
        team1Source:images.leicester,
        team2Source:images.astonvilla,
        title: "Chelsea VS Liverpool",
        time: "Satuday, 14 Mar 2021 . 01.00 am",
      }
   
  ];



  return (
    <ScreenLayout>
        <View style={{ flex: 1,gap:verticalScale(3),paddingHorizontal:scale(20),paddingTop:verticalScale(20) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              backgroundColor:"#FFFFFF",
              borderWidth:0.5,
              height:verticalScale(40),
              borderColor:colors.gray1000,

              alignItems: "center",
              borderRadius: scale(10),
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Image
                source={images.searchIcon}
                style={{
                  width: scale(20),
                  height: scale(20),
                }}
                resizeMode={"contain"}
              />
            </View>

            <View style={{ flex: 1 ,paddingTop:4}}>
              <TextInput
                value={search}
                style={{
                  fontSize: 14,
                  width: windowWidth / 1.2,
                  alignItems: "center",
                //   paddingTop:5,
                  // backgroundColor:"red",
                  flex: 1,
                  fontFamily: font.poppinsRegular,
                  fontWeight: "500",
                  color: colors.black,
                }}
                placeholder={"Search by events, teams"}
                placeholderTextColor={"#747474"}
                onChangeText={(txt: string) => {
                  setSearch(txt);
                }}
                autoCapitalize="none"
              />
            </View>
          </View>
          {/* 
        <CustomTextInput
            borderWidth={0.4}
            fontSize={16}
            marginTop={1}
            backgroundColor={colors.white}
            leftSource={images.search}
        
            value={search}
            onChangeText={(txt: string) => {
              setSearch(txt);
            }}
            // onShowPassword={() => setShowPAssword(!showPassword)}
            placeholder="Search by events, teams"
          /> */}



          <FlatList
            data={newsUpdatesCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: scale(20) }}
            ListHeaderComponent={()=>{
                return(

                    <View
                    style={{
                      ...appStyles.rowjustify,
                      marginTop:verticalScale(20)
                    }}
                  >
                    <CustomText
                      text={"Past Search"}
                      color={"#727272"}
                      size={15}
                    />

                    <CustomText
                      text={"Clear All"}
                      color={"#727272"}
                      size={14}
                    />
                  </View>

                )
            }}
           
            renderItem={({ item, index }) => {
              return (
                <View>

<SearchCard
                          title={item.title}
                          source1={item.team1Source}
                          source2={item.team2Source}
                          time={item.time}
                        />
                
                 
                </View>
              );
            }}
          />
        </View>
    </ScreenLayout>
  );
};

export default Search;

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
