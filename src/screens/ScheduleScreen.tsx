import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import ScrollTimeStudy from '../components/ScorllTimeStudy';
const ScheduleScreen = () => {
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  return (
    <ScreenContainer>
      <AppToolBar />
      <ScrollTimeStudy />
    </ScreenContainer>
  );
};

export default ScheduleScreen;
