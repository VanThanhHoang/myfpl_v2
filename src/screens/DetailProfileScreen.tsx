
import {View, StatusBar, Image, StyleSheet, Text} from 'react-native';
import {AppIcons, AppImages} from '../constant/AppAsset';
import UserInfoCard from '../components/UserInfoCard';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigation/AppNavigator';

const DetailProFile = () => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{elevation: 3}}>
        <Image
          style={styles.banner}
          source={require('../assets/img/bannerFpoly.png')}
        />
        <View style={styles.backGround}></View>

        <Image style={styles.logo} source={AppImages.poly} />
        <NameAndAvatarContainer />
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={{tintColor: 'white', width: 24, height: 24}}
              source={AppIcons.back}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{justifyContent: 'flex-start', padding: 24}}>
        <UserInfoCard infoLabel="Mã số sinh viên" info="VIET69812" />
        <UserInfoCard infoLabel="Giới tính" info="Nam" />
        <UserInfoCard infoLabel="Ngày sinh" info="05-06-2002" />
        <UserInfoCard
          infoLabel="Địa chỉ"
          info="Nhà số 10C đường 73A xã Tân Phú Trung huyện Củ Chi"
        />
        <UserInfoCard infoLabel="Chuyên ngành" info="Lập trình mobile" />
      </ScrollView>
      <StatusBar translucent backgroundColor="transparent" />
    </View>
  );
};
const NameAndAvatarContainer = () => {
  return (
    <View style={styles.nameContainer}>
      <Image
        style={styles.avatar}
        source={{
          uri: 'https://lh3.googleusercontent.com/a/AAcHTte2VKLwxVyZVUb1QeGJyX2kA6Mag2ykCqsxZxeglZDc=s96-c',
        }}
      />

      <Text style={styles.name}>Hoàng Văn Thành</Text>
      <Text style={[styles.name, {fontSize: 14}]}>
        Thanhhvps25812@fpt.edu.vn
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  logo: {
    position: 'absolute',
    top: 40,
    right: 10,
    alignSelf: 'center',
    resizeMode: 'center',
    width: 120,
    height: 40,
  },
  banner: {
    resizeMode: 'contain',
    width: '100%',
    height: 250,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  name: {
    fontWeight: '900',
    fontSize: 22,
    color: 'white',
    marginTop: 5,
  },
  backGround: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 90,
    position: 'absolute',
    bottom: 50,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    position: 'absolute',
  },
});
export default DetailProFile;
