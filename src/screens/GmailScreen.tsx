import { Text } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import { getData } from '../service/test.callapi';
import { useEffect } from 'react';
import { PoppinsText } from '../components/text/StyledText';
const EmailScreen = () => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScreenContainer>
      <PoppinsText>mail</PoppinsText>
    </ScreenContainer>
  );
};

export default EmailScreen;
