import ScreenContainer from '../components/ScreenContainer';
import {useState} from 'react';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Term, {Term2} from '../components/Term';
import ScrollTimeTerm from '../components/ScrollTimeTerm';
import {fakeTerm} from '../modal/FakeData';
import CircularProgress from 'react-native-circular-progress-indicator';
import {Color} from '../constant/Colors';
import {AppIcons, AppImages} from '../constant/AppAsset';
import {Text} from '../components/text/StyledText';
const TermScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(fakeTerm);
  const [data2, setData2] = useState(fakeTerm);

  const [isFlexMode, setflexMode] = useState(false);
  return (
    <ScreenContainer>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 10,
          marginHorizontal: 20,
        }}>
        <ScrollTimeTerm width={'80%'} />
        <View
          style={{
            alignSelf: 'flex-end',
            elevation: 5,
            borderRadius: 10,
            width: 50,
            height: 50,
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            onPress={() => {
              setflexMode(!isFlexMode);
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: !isFlexMode ? '#939397' : '#ff6f00',
              }}
              source={AppIcons.flex_mode}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isFlexMode && (
        <View
          style={{
            backgroundColor: '#f4f9f8',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CircularProgress
            activeStrokeWidth={25}
            inActiveStrokeWidth={25}
            value={9.0}
            radius={70}
            duration={1200}
            activeStrokeColor={Color.MAINCOLOR}
            inActiveStrokeColor={'#fceacc'}
            progressValueColor={Color.MAINCOLOR}
            maxValue={10}
            progressValueStyle={{fontSize: 40}}
            title={'Overall'}
            titleColor={'#ff9934'}
            titleStyle={{fontWeight: '900', fontSize: 15}}
            progressFormatter={(value: number) => {
              'worklet';

              return value.toFixed(1); // 2 decimal places
            }}
          />
          <Text
            style={{
              marginVertical: 10,
              fontSize: 25,
              color: Color.MAINCOLOR,
              fontWeight: '900',
            }}>
            Summer 2023
          </Text>
          <Image
            style={{
              position: 'absolute',
              top: 20,
              right: 0,
              width: 150,
              height: 30,
              resizeMode: 'center',
            }}
            source={AppImages.poly}
          />
        </View>
      )}
      <View style={{flex: 1, backgroundColor: '#f4f9f8', paddingVertical: 10}}>
        {data.length !== 0 &&
          (isFlexMode ? (
            <FlatList
              key={'_'}
              numColumns={2}
              data={data2}
              renderItem={({item}) => (
                <Term2
                  item={item}
                  onPress={() => navigation.navigate('Bảng điểm 2')}
                />
              )}
              keyExtractor={item => item._id}
            />
          ) : (
            <FlatList
              key={'_#'}
              data={data}
              renderItem={({item}) => (
                <Term
                  item={item}
                  onPress={() => navigation.navigate('Bảng điểm 2')}
                />
              )}
              keyExtractor={item => item._id}
            />
          ))}
      </View>
    </ScreenContainer>
  );
};
export default TermScreen;
