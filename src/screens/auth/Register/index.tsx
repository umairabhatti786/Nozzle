import React, { useRef, useState } from "react";
import { View, Image, StyleSheet, ImageBackground, Alert } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { colors } from "../../../utils/colors";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";
import CustomInput from "../../../components/CustomInput";
import { Spacer } from "../../../components/Spacer";
import CompanyModal from "./CompanyModal";
import auth from '@react-native-firebase/auth';
import { useDispatch } from "react-redux";
import { setUserData } from "../../../redux/reducers/authReducer";
import LoadingScreen from "../../../components/LoadingScreen";

const RegisterScreen = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch()

  const [values, setvalues] = useState({
    number: "",
    companyName: "",
  });
  const onLogin = () => {
    if (!values.number) {
      Alert.alert('', 'Registration number is required');

      return;
    }
 

    if (!values.companyName) {
      Alert.alert('', 'Company name is required');

      return;
    }
    navigation.navigate('CharacteristicsForm');

  
    // handleAuth();
  };

  const handleAuth = async () => {
    try {
      setIsLoading(true);
      const currentUser = auth().currentUser;

      if (currentUser) {
        // User is already logged in, so log them out first
        await auth().signOut();
        console.log('User logged out successfully');
      }
      const email = `${values.number}@${values.companyName}.com`;
      const password = values.number + values.companyName;

      // Attempt to create a new user
      const user = await auth().createUserWithEmailAndPassword(
        email.trim(),
        password.trim(),
      );
      const token = await user.user.getIdToken();

      setIsLoading(false);

      if (user.user.uid) {
        let data:any = {
          token: token,
          id:user.user.uid,
          uid:user.user.uid,
          name:user?.user?.displayName,
          email:user?.user?.email,
          companyName:values.companyName,
          registrationNumber:values.number
        };
        dispatch(setUserData(data));
        navigation.navigate('CharacteristicsForm');
      }
    } catch (error: any) {
      setIsLoading(false);

      // Handle email already in use error
      if (
        error?.message ===
        '[auth/email-already-in-use] Registration number or Company name are already in use by another account.'
      ) {
        try {
          // Attempt to sign in with the existing email and password
          const email = `${values.number}@${values.companyName}.com`;
          const password = values.number + values.companyName;
    
          // Attempt to create a new user
          const user = await auth().createUserWithEmailAndPassword(
            email.trim(),
            password.trim(),
          );

          if (user.user.uid) {
            const token=await auth().currentUser?.getIdToken()
         
            let data:any = {
              token: token,
              id:user.user.uid,
              uid:user.user.uid,
              name:user?.user?.displayName,
              email:user?.user?.email,
              companyName:values.companyName,
              registrationNumber:values.number
            };

            dispatch(setUserData(data));
            navigation.navigate('CharacteristicsForm');
          }
        } catch (signInError: any) {
          // Handle wrong password error
          if (
            signInError?.message ==
            '[auth/wrong-password] The password is invalid or the user does not have a password.'
          ) {
            Alert.alert(
              'Error',
              'Registration number or Company name is incorrect. Please try again.',
            );
          } else if (
            signInError?.message ==
            '[Error: [auth/invalid-credential] The supplied auth credential is malformed or has expired.]'
          ) {
            Alert.alert(
              'Error',
              'Registration number or Company name is incorrect. Please try again.',
            );
          } else {
            Alert.alert(
              'Error',
              'Registration number or Company name are incorrect. Please try again.',
            );
          }
        }
      } else {
        // Handle other sign-up errors
        Alert.alert('Error', error.message);
      }
    }
  };


  return (
    <>
      <ScreenLayout edges={["left", "right"]}>
        <ImageBackground
          style={{
            ...appStyles.main,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          source={images.register_background}
        >
          <View
            style={{
              padding: scale(20),
              gap: verticalScale(8),
              alignItems: "center",
              marginBottom: verticalScale(10),
              width: "100%",
            }}
          >
            <CustomText
              size={27}
              fontFam={font.DarkerGrotesque_SemiBold}
              fontWeight="600"
              style={{
                textAlign: "center",
                width: windowWidth / 1.3,
                marginBottom: verticalScale(20),
              }}
              color={colors.white}
              text={"Enter you Registration Number here"}
            />

            <CustomInput
              placeholder="Enter Registration Number"
              width={"100%"}
              value={values.number}
              keyboard={"numeric"}
              onChangeText={(txt: string) => {
                setvalues({ ...values, number: txt });
              }}
              leftSource={images.person}
            />
            <CustomInput
              placeholder="Provide The Company Name"
              width={"100%"}
              value={values.companyName}
              onChangeText={(txt: string) => {
                setvalues({ ...values, companyName: txt });
              }}
              leftSource={images.building}
            />
            <Spacer height={verticalScale(20)} />

            <CustomButton
              text="Login"
              fontWeight="700"
              size={18}
              onPress={onLogin}
              width={"100%"}
              bgColor={colors.secondry}
            />
            <CustomButton
              text="I don't have a registration number"
              fontWeight="700"
              width={"100%"}
              borderWidth={1}
              onPress={()=>setIsModalVisible(true)}        
              borderColor={colors.secondry}
              textColor={colors.secondry}
              bgColor={"transparent"}
            />
                        <Spacer height={verticalScale(20)} />

          </View>
        </ImageBackground>
      </ScreenLayout>
      <CompanyModal
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      />
            {isLoading && <LoadingScreen />}

    
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
