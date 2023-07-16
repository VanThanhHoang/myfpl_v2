import {Image, Text, TouchableOpacity} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';
import {buttonGeneralStyle} from './GenaralStyles';
import {loginWithGoogle} from '../../service/LoginWithGoogle';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ApiKey} from '../../constant/ApiKey';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {showLoadingModal} from '../../helper/showLoadingModal';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../../navigation/AppNavigator';
const LoginGoogleButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const appNavigation = useNavigation<AppNavigationProp>();
  GoogleSignin.configure({
    webClientId: ApiKey.googleClientId,
  });
  const onLoginButtonPress = async () => {
    showLoadingModal(dispatch, true);
    await loginWithGoogle();
    showLoadingModal(dispatch, false);
    appNavigation.reset({
      index: 0, // chỉ định vị trí màn hình muốn reset
      routes: [{name: 'Main'}], // chỉ định tên màn hình mà bạn muốn reset đến
    });
  };
  return (
    <TouchableOpacity
      onPress={onLoginButtonPress}
      style={buttonGeneralStyle.container}>
      <Image style={buttonGeneralStyle.icon} source={AppIcons.google} />
      <Text style={buttonGeneralStyle.text}>Đăng nhập với Google</Text>
    </TouchableOpacity>
  );
};

export default LoginGoogleButton;
