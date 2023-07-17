import { Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { useEffect } from 'react';
import { getData } from '../service/test.callapi';
import StatusBar from '../components/StatusBar';
import DashBoard from './DashBoard';
import QuickMenu from './QuickMentu';

const HomeScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <StatusBar />
      {/* <DashBoard /> */}
      <QuickMenu />
    </ScreenContainer>
  );
};

export default HomeScreen;
