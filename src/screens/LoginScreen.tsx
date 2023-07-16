import ScreenContainer from '../components/ScreenContainer';
import {Image, Text, View, ImageStyle} from 'react-native';
import LoginGoogleButton from '../components/buttons/LoginGooglen';
import ShowModalSelectFacilityButton from '../components/buttons/ShowModalSelectFacility';
import {useCallback, useEffect, useState} from 'react';
import SelectFacilityModal from '../modal/SelectFacility';
import {Facility} from '../types/Facility';
import {AppImages} from '../constant/AppAsset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {getData} from '../service/test.callapi';
const LoginScreen = () => {
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
  const [accTk, setAccTk] = useState<string>();

  const getAccessToken = async () => {
    const acctk = await AsyncStorage.getItem(AsyncStorageKey.AccessTokenKey);
    if (acctk) {
      setAccTk(acctk);
    }
  };
  useEffect(() => {
    getAccessToken();
    getFacilityFromStorage();
  }, []);
  return (
    <ScreenContainer>
      <View
        style={{
          backgroundColor: 'red',
          width: '100%',
          height: '40%',
          marginBottom: 20,
        }}>
        <Text>Thong tin gi do moi</Text>
      </View>
      <ShowModalSelectFacilityButton
        label={facility ? facility.name : ''}
        onPress={onShowModalSelectFacilityButtonPress}
      />
      <Text style={{fontSize: 24, fontWeight: '700'}}>
        {accTk ? 'dang nhap rui' : 'chua dang nhap'}
      </Text>
      <LoginGoogleButton />
      <SelectFacilityModal
        setFacility={setFacility}
        facility={facility}
        isShowModal={isShowModalSelectFacility}
        setVisible={setShowModalSelectFacility}
      />
      <Image style={logoPolyStyles} source={AppImages.poly} />
    </ScreenContainer>
  );
};
const logoPolyStyles: ImageStyle = {
  alignSelf: 'center',
  bottom: 30,
  position: 'absolute',
  resizeMode: 'center',
  width: '100%',
  height: 48,
};
export default LoginScreen;
