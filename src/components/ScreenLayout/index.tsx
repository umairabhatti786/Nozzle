import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';
import {images} from '../../assets/images';
import {verticalScale} from 'react-native-size-matters';

const ScreenLayout = ({children, color}: any) => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={{flex: 1, backgroundColor: colors.white}}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '50%',
          }}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={images.gradient}
          />
        </View>
        <View
          style={{marginTop: Platform.OS == 'ios' ? verticalScale(35) : 0}}
        />

        {children}
      </View>
    </>
  );
};
export default ScreenLayout;

const styles = StyleSheet.create({});

// const
