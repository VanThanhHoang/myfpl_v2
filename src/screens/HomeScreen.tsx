import {Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './DashBoard';
import QuickMenu from './QuickMentu';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
const HomeScreen = () => {
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  return (
    <ScreenContainer>
      <AppToolBar />
      <DashBoard />
    </ScreenContainer>
  );
};

export default HomeScreen;
