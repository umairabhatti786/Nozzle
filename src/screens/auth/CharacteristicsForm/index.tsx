import React, { useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,

  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import { Spacer } from "../../../components/Spacer";
import BackButton from "../../../components/BackButton";

const CharacteristicsForm = ({ navigation }: any) => {
  const [active, setActive] = useState([1, 2, 3]);
  const [values, setvalues] = useState({
    sitting: "",
    weigth: "",
    height:"",
    medicalCondition:"",
    running:""
  });
  return (
    <>
      <ScreenLayout edges={["left", "right"]}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={{
            ...appStyles.main,
            backgroundColor: colors.primary,
            paddingTop:Platform.OS=="ios"?verticalScale(50):verticalScale(0)
          }}
        >
          <View
            style={{
              ...appStyles.main,
              backgroundColor: colors.primary,
              padding: scale(20),
            }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
                paddingBottom: verticalScale(20),
              }}
            >
              <BackButton bgColor={colors.white} 
                          onPress={()=>navigation.goBack()}

              />

              <Image
                style={{
                  width: scale(65),
                  height: scale(65),
                }}
                source={images.logo_crop}
                resizeMode="contain"
              />
            </View>

            <CustomText
              size={38}
              fontFam={font.DarkerGrotesque_Medium}
              fontWeight="600"
              lineHeight={33}
              color={colors.white}
              text={"Complete Your Basic Characteristics"}
            />
            <View
              style={{
                paddingVertical: verticalScale(20),
                gap: verticalScale(10),
              }}
            >
              <CustomText
                size={18}
                fontFam={font.DarkerGrotesque_SemiBold}
                fontWeight="600"
                color={colors.white}
                text={"How active vs passive do you sit?"}
              />

              <View style={appStyles.rowjustify}>
                <CustomText
                  size={13}
                  fontFam={font.Inter_Regular}
                  color={colors.gray}
                  text={"Very active"}
                />
                <View style={{ ...appStyles.row, gap: scale(7) }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={{
                          ...styles.circle,
                          backgroundColor: active.includes(item)
                            ? colors.white
                            : "transparent",
                        }}
                      ></TouchableOpacity>
                    );
                  })}
                </View>

                <CustomText
                  size={13}
                  fontFam={font.Inter_Regular}
                  color={colors.gray}
                  text={"Very passive"}
                />
              </View>
            </View>

            <View
              style={{
                gap: verticalScale(8),
              }}
            >
              <CustomInput
                placeholder="Activity Level While Sitting"
                width={"100%"}
                value={values.sitting}
                onChangeText={(txt: string) => {
                  setvalues({ ...values, sitting: txt });
                }}
                leftSource={images.chair}
              />
              <CustomInput
                placeholder="Enter your weight e.g 80kg"
                width={"100%"}
                boxText1={"KG"}
                boxText2={"CM"}
                rightSource={true}
                value={values.weigth}
                keyboard={"numeric"}
                onChangeText={(txt: string) => {
                  setvalues({ ...values, weigth: txt });
                }}
                leftSource={images.weight}
              />
               
  

              <CustomInput
                placeholder="Enter you Height e.g 5’11”"
                width={"100%"}
              boxText1={"FT"}
              boxText2={"CM"}

                value={values.height}
                keyboard={"numeric"}
                rightSource={true}
                onChangeText={(txt: string) => {
                  setvalues({ ...values, height: txt });
                }}
                leftSource={images.person}
              />

              <CustomInput
                placeholder="Enter Relevant Medical Conditions"
                width={"100%"}
                value={values.medicalCondition}
                multiline={true}
                textAlignVertical={"top"}
                height={80}
                onChangeText={(txt: string) => {
                  setvalues({ ...values, medicalCondition: txt });
                }}
                leftSource={images.medkit}
              />

              <CustomInput
                placeholder="Are the shoes you are wearing for the scan an average height of shoe you normally wear? "
                width={"100%"}
                multiline={true}
                textAlignVertical={"top"}
                height={80}
                value={values.running}
                onChangeText={(txt: string) => {
                  setvalues({ ...values, running: txt });
                }}
                leftSource={images.running}
              />
              <Spacer height={verticalScale(10)} />

              <CustomButton
                text="Next"
                fontWeight="700"
                width={"100%"}
                onPress={()=>navigation.navigate("UploadPhoto")}
                size={18}
                bgColor={colors.secondry}
              />

            </View>
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default CharacteristicsForm;

const styles = StyleSheet.create({
  circle: {
    width: scale(13),
    height: scale(13),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 999,
  },
});
