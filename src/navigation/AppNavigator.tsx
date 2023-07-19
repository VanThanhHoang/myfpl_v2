import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AppAnimations} from '../constant/AppAsset';
import {RootState} from '../redux/store';
import LoadingModal from '../modal/Loading';
import {ApiKey} from '../constant/ApiKey';
import MainBottomNavigatior from './MainBottomNavigator';
import EmailScreen from '../screens/GmailScreen';
import ContactScreen from '../screens/ContactsScreen';
type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Email: undefined;
  Contact: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main',
  'Login'
>;

export type EmailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main',
  'Email'
>;

export type ContactNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main',
  'Contact'
>;
const RootStack = createNativeStackNavigator<RootStackParamList>();
const AppNavigator = () => {
  //google config
  GoogleSignin.configure({
    webClientId: ApiKey.googleClientId,
  });

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
  return isCheckLogin ? (
    <>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRouteName}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Main" component={MainBottomNavigatior} />
        <RootStack.Screen name="Email" component={EmailScreen} />
        <RootStack.Screen name="Contact" component={ContactScreen} />
      </RootStack.Navigator>
    </>
  ) : (
    <View style={{flex: 1}}>
      <AnimatedLottieView source={AppAnimations.loadingAnm} autoPlay loop />
    </View>
  );
};
export default AppNavigator;
