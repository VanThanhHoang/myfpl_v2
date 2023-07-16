import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorageKey} from '../constant/AsyncStorageKey';
import {Text, View} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import {AppAnimations} from '../constant/AppAsset';
type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};
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
  return isCheckLogin ? (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Main" component={HomeScreen} />
    </RootStack.Navigator>
  ) : (
    <View style={{flex: 1}}>
      <AnimatedLottieView source={AppAnimations.loadingAnm} autoPlay loop />
    </View>
  );
};
export default AppNavigator;
