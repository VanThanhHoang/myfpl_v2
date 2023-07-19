import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import PolyLoadingView from '../components/PolyLoadingView';
import ScrollTimeStudy from '../components/ScorllTimeStudy';
import {Text} from 'react-native';
import {Color} from '../constant/Colors';
import Timeline from 'react-native-timeline-flatlist';
import ScheduleTimes from './Timeline';
const ScheduleScreen = () => {
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  return (
    <ScreenContainer>
      <AppToolBar />
      <ScrollTimeStudy />
      <ScheduleTimes />
    </ScreenContainer>
  );
};

export default ScheduleScreen;
