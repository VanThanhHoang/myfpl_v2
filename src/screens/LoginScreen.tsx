import {Image, Text, View, ImageStyle, StyleSheet} from 'react-native';
import LoginGoogleButton from '../components/buttons/LoginGooglen';
import ShowModalSelectFacilityButton from '../components/buttons/ShowModalSelectFacility';
import {useCallback, useEffect, useState} from 'react';
import SelectFacilityModal from '../modal/SelectFacility';
import {Facility} from '../types/Facility';
import {AppImages} from '../constant/AppAsset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {loginWithGoogle} from '../service/LoginWithGoogle';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigation/AppNavigator';
const LoginScreen = () => {
  const appNavigation = useNavigation<AppNavigationProp>();
  const [facility, setFacility] = useState<Facility>();
  const [isShowModalSelectFacility, setShowModalSelectFacility] =
    useState<boolean>(false);
  const onShowModalSelectFacilityButtonPress = useCallback(() => {
    setShowModalSelectFacility(true);
  }, []);
  const getFacilityFromStorage = async () => {
    const facilityMemo = await AsyncStorage.getItem(
      AsyncStorageKey.FacilityKey,
    );
    if (facilityMemo != null) {
      setFacility(JSON.parse(facilityMemo));
    }
  };
  const [isLoading, setLoading] = useState<boolean>(false);

  const onGoogleLoginButtonPress = useCallback(async () => {
    setLoading(true);
    await loginWithGoogle();
    setLoading(false);
    appNavigation.reset({
      index: 0, // chỉ định vị trí màn hình muốn reset
      routes: [{name: 'Main'}], // chỉ định tên màn hình mà bạn muốn reset đến
    });
  }, []);
  useEffect(() => {
    getFacilityFromStorage();
  }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
      <View style={styles.container}>
        <Text>Thong tin gi do moi</Text>
      </View>
      <ShowModalSelectFacilityButton
        label={facility ? facility.name : ''}
        onPress={onShowModalSelectFacilityButtonPress}
      />
      <LoginGoogleButton
        isLoading={isLoading}
        onPress={onGoogleLoginButtonPress}
      />
      <SelectFacilityModal
        setFacility={setFacility}
        facility={facility}
        isShowModal={isShowModalSelectFacility}
        setVisible={setShowModalSelectFacility}
      />
      <Image style={logoPolyStyles} source={AppImages.poly} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '40%',
    marginBottom: 20,
  },
});
const logoPolyStyles: ImageStyle = {
  alignSelf: 'center',
  bottom: 30,
  position: 'absolute',
  resizeMode: 'center',
  width: '100%',
  height: 48,
};
export default LoginScreen;
