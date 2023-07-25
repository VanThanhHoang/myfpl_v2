import {SafeAreaView} from 'react-native-safe-area-context';
import Transcript from '../components/Transcript';

const MarskScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Transcript />
    </SafeAreaView>
  );
};
export default MarskScreen;
