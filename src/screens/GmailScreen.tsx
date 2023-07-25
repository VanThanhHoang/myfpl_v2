import ScreenContainer from '../components/ScreenContainer';
import { getData } from '../service/test.callapi';
import { useEffect } from 'react';
import { Text } from '../components/text/StyledText';
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
