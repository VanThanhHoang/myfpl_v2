import AxiosInstance from '../helper/axiosInstance';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ApiKey} from '../constant/ApiKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
export const GetRefeshToken = async () => {
  try {
    const refeshToken = await AsyncStorage.getItem(
      AsyncStorageKey.RefeshTokenKey,
    );
    const res: any = await AxiosInstance().post('auth/refeshtoken', {
      refeshtoken: refeshToken,
    });
    await AsyncStorage.setItem(AsyncStorageKey.AccessTokenKey, res.accessToken);
    await AsyncStorage.setItem(AsyncStorageKey.RefeshTokenKey, res.refeshToken);
  } catch (err) {
    console.log(err);
  }
};
