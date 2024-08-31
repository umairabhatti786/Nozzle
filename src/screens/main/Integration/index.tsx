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
import CustomLine from "../../../components/CustomLine";

const Integration = ({ navigation }: any) => {
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
          text={"Integration"}
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
            text={"Add and link integration"}
            color={colors.black}
            size={17}
            style={{ marginBottom: verticalScale(10) }}
            fontFam={font.poppinsSemiBold}
          />
          <CustomText
            text={"Manage the connection of your integration."}
            color={colors.black}
            size={15}
            style={{ marginBottom: verticalScale(30) }}
          />

          <View style={{ gap: verticalScale(20) }}>
            <View
              style={{
                ...appStyles.rowjustify,
              }}
            >
              <CustomText
                text={"Connection Status:"}
                color={colors.black}
                size={15}
              />

              <TouchableOpacity
                style={styles.ActiveContainer}
                activeOpacity={0.4}
              >
                <View
                  style={{
                    width: scale(7),
                    height: scale(7),
                    borderRadius: scale(10),
                    backgroundColor: "#00B712",
                  }}
                />
                <CustomText
                  text={"Active"}
                  fontWeight="400"
                  color={"#00B712"}
                  style={{ marginTop: 3 }}
                  size={15}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
              }}
            >
              <CustomText text={"Last Sync:"} color={colors.black} size={15} />

              <CustomButton
                text="24 February, 16:24"
                borderRadius={30}
                disable={true}
                height={35}
                size={13}
                paddingHorizontal={scale(10)}
                fontWeight={"500"}
                fontFam={font.poppinsRegular}
                textColor={colors.black}
                bgColor={"#F4EBFF"}
              />

              {/* <TouchableOpacity style={styles.ActiveContainer} activeOpacity={0.4}>

            <View
            style={{width:scale(7),height:scale(7),borderRadius:scale(10),backgroundColor:"#00B712"}}
            />
            <CustomText
              text={"Active"}
              fontWeight="400"
              color={"#00B712"}
              style={{marginTop:3}}
              size={15}
            />
          
          </TouchableOpacity> */}
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
                paddingBottom: verticalScale(30),
              }}
            >
              <CustomText
                text={"Date Connected:"}
                color={colors.black}
                size={15}
              />

              <CustomButton
                text="24 Feb 2023"
                borderRadius={30}
                disable={true}
                height={35}
                size={13}
                paddingHorizontal={scale(10)}
                fontFam={font.poppinsRegular}
                textColor={colors.black}
                bgColor={"#F4F4F5"}
              />
            </View>
          </View>
          <CustomLine backgroundColor="#F4F4F5" height={2} />

          <View
            style={{
              width: "100%",
              borderRadius: scale(20),
              borderColor: "#E8E8E8",
              paddingHorizontal: scale(10),
              paddingVertical: verticalScale(15),
              borderWidth: 1,
              gap: verticalScale(20),
              marginTop: verticalScale(25),
            }}
          >
            <View>
              <CustomText text={"Enter URL"} color={colors.black} size={13} />
              <View style={styles.LinkBox}>
                <CustomText
                  text={"https://yourwebsite.com/api/segment-webhook"}
                  color={colors.black}
                  size={11}
                />
              </View>
            </View>

            <View>
              <CustomText
                text={"Shared Secret"}
                color={colors.black}
                size={13}
              />
              <View style={styles.LinkBox}>
                <CustomText
                  text={"A876456789gvbnmftyu678uygfbnfr56789okm"}
                  color={colors.black}
                  size={11}
                />
                <Image
                  style={{ width: scale(18), height: scale(18) }}
                  source={images.copy}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          <View
            style={{
              ...appStyles.rowjustify,
              marginTop: "20%",
            }}
          >
            <CustomText
              text={"Date Connected:"}
              color={colors.black}
              size={15}
            />
            <CustomButton
              text="Connect"
              paddingHorizontal={scale(30)}
              height={50}
              textColor={colors.black}
              bgColor={colors.primary}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default Integration;

const styles = StyleSheet.create({
  checkBox: {
    width: scale(23),
    height: scale(23),
    borderRadius: scale(23),
    borderColor: "#002149",
  },

  ActiveContainer: {
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(14),
    backgroundColor: "#00B71214",
    alignItems: "center",
    borderRadius: scale(100),
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(10),
    borderWidth: 1.5,
    borderColor: "#00B712",
  },

  LinkBox: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(14),
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    borderRadius: scale(12),
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    gap: scale(10),
    borderColor: "#E8E8E8",
  },
});
