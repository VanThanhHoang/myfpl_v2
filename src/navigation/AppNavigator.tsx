import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';

import {AppAnimations} from '../constant/AppAsset';
import {RootState} from '../redux/store';
import LoadingModal from '../modal/Loading';
import MainBottomNavigatior from './MainBottomNavigator';
type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main',
  'Login'
>;
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  const [initialRouteName, setInitialRouteName] = useState<'Login' | 'Main'>(
    'Login',
  );
  const [isCheckLogin, setCheckIsLogin] = useState<boolean>(false);
  const getAccessToken = async () => {
    const accessToken = await AsyncStorage.getItem(
      AsyncStorageKey.AccessTokenKey,
    );
    if (accessToken) setInitialRouteName('Main');
    setCheckIsLogin(true);
  };
  useEffect(() => {
    getAccessToken();
  }, []);
  const isLoading: boolean = useSelector(
    (state: RootState) => state.showLoadingModalReducer.isShowLoadingModal,
  );
  return isCheckLogin ? (
    <>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRouteName}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Main" component={MainBottomNavigatior} />
      </RootStack.Navigator>
      <LoadingModal isShowModal={isLoading} />
    </>
  ) : (
    <View style={{flex: 1}}>
      <AnimatedLottieView source={AppAnimations.loadingAnm} autoPlay loop />
    </View>
  );
};
export default AppNavigator;
