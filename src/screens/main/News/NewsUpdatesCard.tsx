import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";

const NewsUpdatesCard = ({ navigation,image,title,date }: any) => {
  return (
    <View style={{ flexDirection: "row", gap: scale(15) }}>
      <Image
        style={{ width: scale(90), height: scale(85), borderRadius: scale(15) }}
        source={image}
      />
      <View style={{ width: "70%" ,gap:verticalScale(15),marginTop:4}}>
        <CustomText
          text={
      title
          }
          fontWeight="400"
          numberOfLines={2}
          color={colors.black}
          size={13.5}
        />
        <View style={{...appStyles.row,gap:scale(20)}}>
        <CustomButton
          text="Exclusive"
          width={scale(85)}
          borderRadius={12}
          height={31}
          size={12}
          fontWeight={"600"}
          fontFam={font.poppinsSemiBold}
          // onPress={() => navigation.navigate("SelectGame")}
          textColor={colors.white}
          bgColor={colors.blue}
        />
        <View style={{...appStyles.row,gap:scale(5)}}>
            <Image
            style={{width:scale(16),height:scale(16)}}
            source={images.calendar}
            />

        <CustomText
          text={
           date
          }
          fontWeight="400"
          numberOfLines={2}
          color={"#666666"}
          size={12}
        />

        </View>

        </View>

      
      </View>
    </View>
  );
};

export default NewsUpdatesCard;

const styles = StyleSheet.create({});
