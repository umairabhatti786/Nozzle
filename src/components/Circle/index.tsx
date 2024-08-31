import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { scale } from "react-native-size-matters";
import { colors } from "../../utils/colors";

 const Circle = ({ height, width ,source,sourceWidth,sourceHeight,backgroundColor,tintColor,onPress}:any) => {

    return(
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={{width: scale(width|| 45),height:scale( height||45),alignItems:"center",justifyContent:"center",borderRadius:999,backgroundColor: backgroundColor ||colors.blue}}
        >
            <Image
            style={{width:sourceWidth||"50%",height:sourceHeight||"50%",tintColor: tintColor||colors.white}}
            source={source}
            resizeMode="contain"
            
            />

        </TouchableOpacity>
    )
 }

export default Circle
