import {Text} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import {useEffect} from 'react';
import {getData} from '../service/test.callapi';

const HomeScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <Text>Home</Text>
    </ScreenContainer>
  );
};

export default HomeScreen;
