import {
  TouchableOpacity,
  Text,
  ToastAndroid,
  Image,
  View,
  StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {AppIcons} from '../constant/AppAsset';
type ContactInfoItemProps = {
  name: string;
  info: string;
};
const ContactInfoItem = ({info, name}: ContactInfoItemProps) => {
  const CoppyToClipBoard = () => {
    Clipboard.setString(info);
    ToastAndroid.show('Đã sao chép thông tin liên hệ', ToastAndroid.SHORT);
  };
  return (
    <View style={{marginVertical: 10}}>
      <Text style={[styles.textInfo, {color: 'black'}]}>{name} :</Text>
      <TouchableOpacity onPress={CoppyToClipBoard} style={styles.container}>
        <Text style={styles.textInfo}>{info}</Text>
        <Image style={styles.iconClipbroad} source={AppIcons.clipBroad} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconClipbroad: {
    position: 'absolute',
    right: 10,
    resizeMode: 'center',
    width: 23,
    height: 23,
    tintColor: '#0063ac',
  },
  container: {
    marginVertical: 3,
    paddingHorizontal: 30,
    height: 60,
    justifyContent: 'flex-start',
    borderRadius: 15,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 1.5,
    backgroundColor: 'white',
  },
  textInfo: {
    fontWeight: '500',
    fontSize: 15,
    color: '#0063ac',
  },
});
export default ContactInfoItem;
