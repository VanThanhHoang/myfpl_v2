import ScreenContainer from '../components/ScreenContainer';
import {Image, Text, View} from 'react-native';
import LoginGoogleButton from '../components/buttons/LoginGooglen';
import ShowModalSelectFacilityButton from '../components/buttons/ShowModalSelectFacility';
import {useCallback, useEffect, useState} from 'react';
import SelectFacilityModal from '../modal/SelectFacility';
import {Facility} from '../types/Facility';
import {AppImages} from '../constant/AppAsset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
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
  useEffect(() => {
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
      <LoginGoogleButton />
      <SelectFacilityModal
        setFacility={setFacility}
        facility={facility}
        isShowModal={isShowModalSelectFacility}
        setVisible={setShowModalSelectFacility}
      />
      <Image
        style={{
          alignSelf: 'center',
          bottom: 30,
          position: 'absolute',
          resizeMode: 'center',
          width: '100%',
          height: 48,
        }}
        source={AppImages.poly}
      />
    </ScreenContainer>
  );
};
export default LoginScreen;
