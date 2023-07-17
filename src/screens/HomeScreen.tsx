import {Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import StatusBar from '../components/StatusBar';
import DashBoard from './DashBoard';
import QuickMenu from './QuickMentu';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
const HomeScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <StatusBar />
    </ScreenContainer>
  );
};

export default HomeScreen;
