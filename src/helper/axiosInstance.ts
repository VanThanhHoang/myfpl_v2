import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {GetRefeshToken} from '../service/RefeshToken';
const AxiosInstance = (contentType = 'application/json') => {
  let isRefreshing = false;
  const axiosInstance = axios.create({
    baseURL: 'https://appfoodfoly.onrender.com/',
  });
  axiosInstance.interceptors.request.use(
    async (config: any) => {
      const token = await AsyncStorage.getItem(AsyncStorageKey.AccessTokenKey);
      config.headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Types': contentType,
      };
      return config;
    },
    err => Promise.reject(err),
  );

  axiosInstance.interceptors.response.use(
    res => res.data,
    async err => {
      console.log(err);
      const originalRequest = err.config;
      if (!err.response) {
        Alert.alert('network error');
        return Promise.reject(err);
      }
      if (err.response.status === 401) {
        if (!isRefreshing) {
          console.log('loi accesstoke het han');
          try {
            await GetRefeshToken();
            axiosInstance(originalRequest);
            isRefreshing = true;
          } catch (err) {
            console.log('refeshToken het han login di');
            return Promise.reject(err);
          }
        }
      }
      Promise.reject(err);
    },
  );
  return axiosInstance;
};

export default AxiosInstance;
