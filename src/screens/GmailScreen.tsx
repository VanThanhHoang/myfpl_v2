import ScreenContainer from '../components/ScreenContainer';
import {memo, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import {Text} from '../components/text/StyledText';
// cho luu data
// vi tri o nho la 1
const EmailScreen = () => {
  const ham = useCallback(() => {}, []);

  return (
    <ScreenContainer>
      <Test cc={ham}></Test>
    </ScreenContainer>
  );
};
const Test: React.FC<{cc: Function}> = ({cc}) => {
  return <View></View>;
};
export default memo(EmailScreen);
