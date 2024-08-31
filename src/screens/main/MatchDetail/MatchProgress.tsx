import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { scale } from "react-native-size-matters";

const MatchProgress = ({
  navigation,
  title,
  startProgress,
  endProgress,
  progressData,
}: any) => {
  return (
    <View style={appStyles.rowjustify}>
      <CustomText text={title} color={"#808080"} size={13} />
      <View style={{ ...appStyles.row, gap: scale(10) }}>
        <View style={{ width: scale(30), alignItems: "center" }}>
          <CustomText
            text={startProgress}
            fontWeight="600"
            fontFam={font.poppinsMedium}
            color={colors.black200}
            size={14}
          />
        </View>

        <Progress.Bar
          color={"#201C1C"}
          unfilledColor={colors.primary}
          animated={true}
          borderWidth={-1}
          progress={progressData}
          width={scale(130)}
        />
        <View style={{ width: scale(30), alignItems: "center" }}>
          <CustomText
            text={endProgress}
            fontFam={font.poppinsMedium}
            style={{ marginTop: 2 }}
            color={colors.black200}
            size={14}
          />
        </View>
      </View>
    </View>
  );
};

export default MatchProgress;

const styles = StyleSheet.create({});
