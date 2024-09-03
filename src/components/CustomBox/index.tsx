import {
    TouchableOpacity,
    ActivityIndicator,
    Image
  } from 'react-native';
  import { colors } from '../../utils/colors';
  import { scale, verticalScale } from 'react-native-size-matters';
import { images } from '../../assets/images';
  type Props = {
    onPress?:()=>void
    width?:any
    height?:any
    bgColor?:any
    img?:any,
    imgHeight?:any,
    imgWidth?:any
  
  };
  
  const CustomBox = ({
    onPress,
    height,
    width,
    bgColor,
    img,
    imgHeight,
    imgWidth


  }: Props) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.3}
        style={{
     
          width: scale(  width||110),
          height:scale( height ||  110),
          backgroundColor: bgColor || colors.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 999,
          borderWidth:6,
          borderColor:"#1D3557"
    
        }}>
       <Image
       style={{width: imgWidth||"50%",height: imgHeight||"50%"}}
       source={ img|| images.image_plus}
       resizeMode="contain"
       />
      </TouchableOpacity>
    );
  };
  export default CustomBox;
  