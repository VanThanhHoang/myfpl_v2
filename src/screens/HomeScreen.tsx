import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import PolyLoadingView from '../components/PolyLoadingView';
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
