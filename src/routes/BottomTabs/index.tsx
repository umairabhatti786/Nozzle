import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet, View } from "react-native";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import Notification from "../../screens/main/Notification";
import Events from "../../screens/main/Events";
import CustomText from "../../components/CustomText";
import HomeStack from "../HomeStack";
import NewsStack from "../NewsStack";
import ProfileStack from "../ProfileStack";

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        keyboardHidesTabBar: true,

        // tabBarColor: ({focused, size, color}) => {},
        // tabBarStyle:()=>{innerHeight:1000},
        tabBarStyle: {
          backgroundColor: colors.white,
          justifyContent: "center",
          alignItems: "center",

          borderTopWidth: -1,
          display: "flex",
          // paddingTop: 8,
          height: verticalScale(70),
        },
        headerShown: false,
      })}
    
    >
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.home}
                  style={{...style.img,
                    tintColor: focused ? colors.black : colors.gray900,

                  }}
                />
                <CustomText
                  text={"Home"}
                  color={focused ? colors.black :colors.gray900}
                  size={10}
                />
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="News"
        component={NewsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.news}
                  style={{...style.img,
                    tintColor: focused ? colors.black : colors.gray900,

                  }}
                />
                <CustomText
                  text={"News"}
                  color={focused ? colors.black :colors.gray900}
                  size={10}
                />
              </View>
            );
          },
        }}
      />
      <Bottom.Screen
        name="Notification"
       
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.notification}
                  style={{...style.img,
                    tintColor: focused ? colors.black : colors.gray900,

                  }}
                />
                <CustomText
                  text={"Notification"}
                  color={focused ? colors.black :colors.gray900}
                  size={10}
                />
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="Events"
        component={Events}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.events}
                  style={{...style.img,
                    tintColor: focused ? colors.black : colors.gray900,

                  }}
                />
                <CustomText
                  text={"Events"}
                  color={focused ? colors.black :colors.gray900}
                  size={10}
                />
              </View>
            );
          },
        }}
      />
       <Bottom.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.profile}
                  style={{...style.img,
                    tintColor: focused ? colors.black : colors.gray900,

                  }}
                />
                <CustomText
                  text={"Profile"}
                  color={focused ? colors.black :colors.gray900}
                  size={10}
                />
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: "100%",
    height: Platform.OS === "ios" ? 65 : 65,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 7,
  },
  text: {
    color: colors.white,
  },
  img:{
    height: scale(22),
    width: scale(22),
  }
 
});
