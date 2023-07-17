import {Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import QuickMenu from './QuickMentu';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
const EmailScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <Text>mail</Text>
    </ScreenContainer>
  );
};

export default EmailScreen;
