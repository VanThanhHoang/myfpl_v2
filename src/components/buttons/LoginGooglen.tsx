import {Image, Text, TouchableOpacity} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';
import {buttonGeneralStyle} from './GenaralStyles';
import {loginWithGoogle} from '../../service/LoginWithGoogle';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ApiKey} from '../../constant/ApiKey';
const LoginGoogleButton = () => {
  GoogleSignin.configure({
    webClientId: ApiKey.googleClientId,
  });
  const onLoginButtonPress = () => {
    loginWithGoogle();
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
