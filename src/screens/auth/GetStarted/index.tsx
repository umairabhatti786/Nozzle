import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { windowHeight } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
import { Spacer } from "../../../components/Spacer";


const GetStarted = () => {
  const navigation: any = useNavigation();

  return (

    <View
    style={{flex:1,alignItems:"center"}}
    >
        <Image
        style={{width:"100%",height:windowHeight/1.6}}
        source={images.footballBackground}
        />
        <View style={{marginTop:verticalScale(40),gap:verticalScale(10),paddingHorizontal:scale(30)}}>
        <CustomText
              text={"YOUR SPORTS HUB LIVE AND HIGHLIGHTS!"}
              color={colors.black100}
              size={21}
              style={{ textAlign: "center" }}
              fontFam={font.RalewayBold}
              lineHeight={25}
              fontWeight="bold"
            />
            <CustomText
              text={"Watch sports live or highlights, read every news from your smartphone"}
              color={colors.gray100}
              size={13}
              lineHeight={21}
              fontFam={font.poppinsRegular}
              style={{ textAlign: "center" }}
            />
            <Spacer height={verticalScale(5)}/>

<CustomButton
              text="Get Started"
              onPress={()=>navigation.navigate("Login")}
              textColor={colors.black}
              bgColor={colors.primary}
            />
                        {/* <Spacer height={verticalScale(5)}/> */}

            
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.navigate("Signup")}
            style={{...appStyles.row,alignSelf:"center",gap:3}}
            >
                 <CustomText
              text={"Don’t have account?"}
              color={colors.gray100}
              size={12}
              lineHeight={21}
              fontFam={font.poppinsRegular}
              style={{ textAlign: "center" }}
            />
                <CustomText
              text={"Sign up"}
              fontFam={font.poppinsRegular}

              color={colors.black}
              size={12}
            />

            </TouchableOpacity>

        </View>



    </View>
  
  );
};

export default GetStarted;
