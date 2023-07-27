import ScreenContainer from '../components/ScreenContainer';
import {useEffect, useState} from 'react';
import FakeNews from '../modal/FakeData';
import {View} from 'react-native';
const TermScreen = () => {
  const [data, setData] = useState(FakeNews);
  return (
    <ScreenContainer>
      <View style={{flex: 1, backgroundColor: 'red'}}></View>
    </ScreenContainer>
  );
};
export default TermScreen;
