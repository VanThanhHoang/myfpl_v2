import ScreenContainer from '../components/ScreenContainer';
import {useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Term from '../components/Term';
import ScrollTimeTerm from '../components/ScrollTimeTerm';
import {fakeTerm} from '../modal/FakeData';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Color} from '../constant/Colors';

const TermScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(fakeTerm);
  return (
    <ScreenContainer>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          backgroundColor: 'white',
        }}>
        <CircularProgress
          activeStrokeWidth={20}
          inActiveStrokeWidth={35}
          value={9.5}
          radius={120}
          duration={2000}
          activeStrokeColor={Color.MAINCOLOR}
          inActiveStrokeColor={'#fceacc'}
          progressValueColor={Color.MAINCOLOR}
          maxValue={10}
          progressValueStyle={{fontSize: 80}}
          title={'Overall'}
          titleColor={'#ff9934'}
          titleStyle={{fontWeight: 'bold', fontSize: 18}}
          progressFormatter={(value: number) => {
            'worklet';

            return value.toFixed(1); // 2 decimal places
          }}
        />
      </View>
      <ScrollTimeTerm />
      <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 10}}>
        {data.length !== 0 && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <Term
                item={item}
                onPress={() => navigation.navigate('Bảng điểm 2')}
              />
            )}
            keyExtractor={item => item._id}
          />
        )}
      </View>
    </ScreenContainer>
  );
};
export default TermScreen;
