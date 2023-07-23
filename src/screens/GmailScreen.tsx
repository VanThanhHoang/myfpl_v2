import {Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
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
