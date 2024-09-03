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
    iconColor?:any

  
  };
  
  const BackButton = ({
    onPress,
    height,
    width,
    bgColor,
    iconColor


  }: Props) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.3}
        style={{
     
          width: scale(  width||48),
          height:verticalScale( height ||  47),
          backgroundColor: bgColor || colors.primary,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: scale(8),
    
        }}>
       <Image
       style={{width:"45%",height:"45%",tintColor:  iconColor||colors.black}}
       source={images.left_arrow}
       resizeMode="contain"
       />
      </TouchableOpacity>
    );
  };
  export default BackButton;
  