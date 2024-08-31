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
import CustomTextInput from "../../../components/CustomTextInput";

const EditProfile = ({ navigation }: any) => {
  const [values, setValues] = useState({
    name: "Brian Imanuel",
    nikcname: "Imanuel",
    email: "youremail@domain.com",
    Country: "United States",
    Genre: "Female",
    Address: "45 New Avenue, New York",
    number: "123-456-7890",
  });

  const Header = () => {
    return (
      <View style={{ ...appStyles.rowjustify }}>
        <Image
          style={{ width: scale(18), height: scale(15) }}
          source={images.drawer}
        />
        <CustomText
          text={"Edit Profile"}
          color={"#585858"}
          size={24}
          fontFam={font.RalewaySemiBold}
        />

        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Circle
            width={40}
            height={40}
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
          </View>

          <CustomTextInput
            title={"Full name"}
            borderWidth={-1}
            fontSize={16}
            paddingTop={1}

            borderRadius={scale(15)}
            value={values.email}
            onChangeText={(txt: string) => {
              setValues({ ...values, email: txt });
            }}
            // onShowPassword={() => setShowPAssword(!showPassword)}
            placeholder="Enter name"
          />

          <CustomTextInput
            title={"Nick name"}
            borderWidth={-1}
            fontSize={16}
            paddingTop={1}
            borderRadius={scale(15)}
            marginTop={1}
            value={values.nikcname}
            onChangeText={(txt: string) => {
              setValues({ ...values, nikcname: txt });
            }}
            // onShowPassword={() => setShowPAssword(!showPassword)}
            placeholder="Enter name"
          />

          <CustomTextInput
            title={"Label"}
            borderWidth={-1}
            fontSize={16}
            paddingTop={1}
            borderRadius={scale(15)}
            marginTop={1}
            value={values.email}
            onChangeText={(txt: string) => {
              setValues({ ...values, email: txt });
            }}
            // onShowPassword={() => setShowPAssword(!showPassword)}
            placeholder="Enter name"
          />

          <View
            style={{
              borderColor: colors.gray200,
              borderWidth: -1,
              flexDirection:"row",
              alignItems:"center",

              borderRadius: scale(15),
              backgroundColor: colors.gray300,
              paddingTop: verticalScale(5),
            }}
          >

<View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={images.countyAmerica}
                    style={{
                      width: scale(30),
                      height: verticalScale(30),
                      marginBottom: verticalScale(10),

                    }}
                  />
                </View>

                <View
              style={{
                paddingHorizontal: 10,
                height: verticalScale( 42),

                // alignItems: "center",
                borderRadius: scale(10),
              }}
            >
                 <CustomText
              style={{
                marginBottom: verticalScale(-10),
                marginTop:verticalScale(3)
              }}
              size={11}
              text={"Phone number"}
              color={"#757575"}
            />
           
               
          
              <View style={{ flex: 1 }}>
                <TextInput
                  value={values.number}
                  style={{
                    fontSize: 16,
                    width:scale(200),
                    alignItems: "center",
                    marginLeft:scale(-3),
                    height: verticalScale( 42),

                    // backgroundColor:"red",
                    // flex: 1,
                    fontFamily: font.poppinsRegular,

                    color: colors.black,
                    alignSelf: "center",
                  }}
                  placeholder="Enter Phone number"
                  placeholderTextColor={"#757575"}
                  onChangeText={(txt: string) => {
                    setValues({ ...values, number: txt });
                  }}
                  autoCapitalize="none"
                />
              </View>
            </View>
           

           
          </View>

          {/* <CustomTextInput
          title={"Phone number"}
          borderWidth={-1}
          fontSize={16}
          leftSource={images.apple}
          borderRadius={scale(15)}
          marginTop={1}
    
        value={values.number}
        onChangeText={(txt: string) => {
          setValues({ ...values, number: txt });
        }}
        // onShowPassword={() => setShowPAssword(!showPassword)}
        placeholder="Enter Phone number"
      /> */}
          <View style={appStyles.rowjustify}>
            <CustomTextInput
              title={"Country"}
              borderWidth={-1}
              fontSize={16}
              width={"47%"}
              source={images.down}
              borderRadius={scale(15)}
              marginTop={1}
              paddingTop={1}
              sourceHeight={scale(12)}
              sourceWidth={scale(12)}
              value={values.Country}
              onChangeText={(txt: string) => {
                setValues({ ...values, Country: txt });
              }}
              // onShowPassword={() => setShowPAssword(!showPassword)}
              placeholder="Select Country"
            />

            <CustomTextInput
              title={"Genre"}
              borderWidth={-1}
              fontSize={16}
              width={"47%"}
              paddingTop={1}

              borderRadius={scale(15)}
              marginTop={1}
              value={values.Genre}
              onChangeText={(txt: string) => {
                setValues({ ...values, Genre: txt });
              }}
              // onShowPassword={() => setShowPAssword(!showPassword)}
              placeholder="Enter Genre"
            />
          </View>

          <CustomTextInput
            title={"Address"}
            borderWidth={-1}
            fontSize={16}
            borderRadius={scale(15)}
            marginTop={1}
            paddingTop={1}
            value={values.Address}
            onChangeText={(txt: string) => {
              setValues({ ...values, Address: txt });
            }}
            // onShowPassword={() => setShowPAssword(!showPassword)}
            placeholder="Enter name"
          />

          <CustomButton
            text="Save"
            // width={"90%"}
            onPress={() => navigation.navigate("BottomTab")}
            textColor={colors.black}
            bgColor={colors.primary}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default EditProfile;

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
