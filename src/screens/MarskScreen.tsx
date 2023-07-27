import {SafeAreaView, View, Text} from 'react-native';
import Transcript from '../components/Transcript';
import MarksTopTab from '../navigation/MarksTopTab';
import ScreenToolBar from '../components/ScreenToolBar';
import AppToolBar from '../components/AppToolBar';

const MarskScreen = () => {
  return (
    <>
      <AppToolBar />
      <MarksTopTab />
    </>
  );
};
export default MarskScreen;
