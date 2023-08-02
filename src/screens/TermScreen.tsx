import ScreenContainer from '../components/ScreenContainer';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Term, { Term2 } from '../components/Term';
import ScrollTimeTerm from '../components/ScrollTimeTerm';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Color } from '../constant/Colors';
import { AppIcons, AppImages } from '../constant/AppAsset';
import { Text } from '../components/text/StyledText';
import AxiosInstance from '../helper/axiosInstance';
<<<<<<< HEAD
import {Transcript} from '../types/Grades';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {AppNavigationProp} from '../navigation/AppNavigator';
=======
import { Transcript } from '../types/Grades';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
>>>>>>> 6cf74e6fa0087f8c08b5bc0547aa2aa02882e323
const TermScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const semesters = useSelector(
    (state: RootState) => state.semesterSliceReducer.semesters,
  );
  const [semesterId, setSemesterId] = useState(semesters[0]._id);
  const [gpa, setGpa] = useState(0);
  const [isFlexMode, setflexMode] = useState(false);
  const [transcripts, setTranscripts] = useState<Transcript[]>([]);
  const getTranscript = async () => {
    const res = await AxiosInstance().get(`transcript?termId=${semesterId}`);
    setTranscripts(res.data);
    getGpa(res.data);
  };
  const getGpa = (transcripts: Transcript[]) => {
    let totalWeightedSum = 0;
    for (let i = 0; i < transcripts.length; i++) {
      const weightedSum = transcripts[i].grades.reduce(
        (sum, item) => sum + item.result * item.weight,
        0,
      );
      console.log(weightedSum);
      totalWeightedSum += weightedSum / 100;
    }

    if (transcripts.length !== 0) {
      const gpa = totalWeightedSum / transcripts.length;
      setGpa(gpa);
    } else {
      // Handle the case when the transcripts array is empty
      console.log('Transcripts array is empty.');
    }
  };
  useEffect(() => {
    getTranscript();
  }, [semesterId]);
  return (
    <ScreenContainer>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 10,
          marginHorizontal: 20,
        }}>
        <ScrollTimeTerm
          semesterId={semesterId}
          setSemesterId={setSemesterId}
          semesters={semesters}
          width={'80%'}
        />
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
            value={gpa}
            radius={70}
            duration={1200}
            activeStrokeColor={Color.MAINCOLOR}
            inActiveStrokeColor={'#fceacc'}
            progressValueColor={Color.MAINCOLOR}
            maxValue={10}
            progressValueStyle={{ fontSize: 40 }}
            title={'Overall'}
            titleColor={'#ff9934'}
            titleStyle={{ fontWeight: '900', fontSize: 15 }}
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
      {transcripts && (
        <View
          style={{ flex: 1, backgroundColor: '#f4f9f8', paddingVertical: 10 }}>
          {transcripts.length !== 0 &&
            (isFlexMode ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                key={'_'}
                numColumns={2}
                data={transcripts}
                renderItem={({ item }) => (
                  <Term2
                    item={item}
                    onPress={() =>
                      navigation.navigate('Transcript', {
                        transcript: item,
                      })
                    }
                  />
                )}
                keyExtractor={item => item.subject.code}
              />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                key={'_#'}
                data={transcripts}
                renderItem={({ item }) => (
                  <Term
                    item={item}
                    onPress={() =>
                      navigation.navigate('Transcript', {
                        transcript: item,
                      })
                    }
                  />
                )}
                keyExtractor={item => item.subject.code}
              />
            ))}
        </View>
      )}
    </ScreenContainer>
  );
};
export default TermScreen;
