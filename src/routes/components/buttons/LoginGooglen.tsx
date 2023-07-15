import {Image, Text, TouchableOpacity} from 'react-native';
import {AppIcons} from '../../constant/AppAsset';
import {buttonGeneralStyle} from './GenaralStyles';
const LoginGoogleButton = () => {
  return (
    <TouchableOpacity style={buttonGeneralStyle.container}>
      <Image style={buttonGeneralStyle.icon} source={AppIcons.google} />
      <Text style={buttonGeneralStyle.text}>Đăng nhập với Google</Text>
    </TouchableOpacity>
  );
};

export default LoginGoogleButton;
