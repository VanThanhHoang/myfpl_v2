import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppIcons} from '../constant/AppAsset';
import {Color} from '../constant/Colors';
import {useNavigation} from '@react-navigation/native';
import {EmailNavigationProp} from '../navigation/AppNavigator';

interface ItemData {
  id: number;
  name: string;
  email: string;
  photo: string;
  familyName: string;
  givenName: string;
}

const AppToolBar: React.FC = () => {
  const navigation = useNavigation<EmailNavigationProp>();
  return (
    <View
      style={{
        height: 50,
        backgroundColor: Color.MAINCOLOR,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}>
      <Image
        source={{
          uri: 'https://lh3.googleusercontent.com/a/AAcHTteekTstA5kgs1FHesSYpP7-lUiLXgONjLeDp_-IhzB0=s96-c',
        }}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>{'cc'}</Text>
      <View style={styles.qrNotificationContainer}>
        <TouchableOpacity>
          <Image source={AppIcons.qr} style={styles.qrImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={AppIcons.notification}
            style={styles.notificationImage}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Email');
          }}
          style={{marginLeft: 10}}>
          <Image source={AppIcons.mail} style={styles.notificationImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppToolBar;
const styles = StyleSheet.create({
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  qrNotificationContainer: {
    tintColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  qrImage: {
    tintColor: 'black',
    width: 20,
    height: 20,
    marginRight: 15,
  },
  notificationImage: {
    tintColor: 'black',
    width: 20,
    height: 20,
  },
});

const DATA: ItemData[] = [
  {
    id: 111385531577159129259,
    name: 'Van Nam Phuc (FPL HCM)',
    email: 'phucvnps25452@fpt.edu.vn',
    photo:
      'https://lh3.googleusercontent.com/a/AAcHTteekTstA5kgs1FHesSYpP7-lUiLXgONjLeDp_-IhzB0=s96-c',
    familyName: '(FPL HCM)',
    givenName: 'Van Nam Phuc',
  },
];
