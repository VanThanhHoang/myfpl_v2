import ScreenContainer from '../components/ScreenContainer';
import {useEffect} from 'react';
import {getData} from '../service/test.callapi';
import DashBoard from './DashBoard';

const HomeScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <DashBoard />
    </ScreenContainer>
  );
};

export default HomeScreen;
