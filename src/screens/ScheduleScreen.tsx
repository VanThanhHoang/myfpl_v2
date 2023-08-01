import ScreenContainer from '../components/ScreenContainer';
import { getData } from '../service/test.callapi';
import { useEffect, useState } from 'react';
import AppToolBar from '../components/AppToolBar';
import { getEmail } from '../service/GetEmail';
import ScrollTimeStudy from '../components/ScorllTimeStudy';
import ScheduleTimes from './Timeline';
import { View, FlatList } from 'react-native';
import NewsTabItem from '../components/NewsTabItem';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from '../components/text/StyledText';
import { fakeAttandances, fakeAttandancesType, fakeTerm } from '../modal/FakeData';
import Term from '../components/Term';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProp } from '../navigation/AppNavigator';
import AttandancesItem from '../components/AttendancesItem'

const Tabs = [
  {
    name: 'Lịch học',
    scheduleType: 'All',
  },
  {
    name: ' Lịch thi',
    scheduleType: 'Study',
  },
  {
    name: 'Điểm danh',
    scheduleType: 'Activity',
  },
];
const ScheduleScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  const [tabSelected, setTab] = useState<string>(Tabs[0].scheduleType);
  const onTabPress = (newsType: string) => {
    setTab(newsType);
  };
  const [data, setData] = useState(fakeAttandancesType);
  return (
    <ScreenContainer>
      <AppToolBar />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            height: 60,
          }}>
          {Tabs.map(tab => (
            <NewsTabItem
              onPress={() => {
                onTabPress(tab.scheduleType);
              }}
              key={tab.name}
              name={tab.name}
              isSelected={tab.scheduleType === tabSelected}
            />
          ))}
        </ScrollView>
      </View>
      <ScrollTimeStudy />
      {tabSelected === 'Activity' && (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 10 }}>
          {data.length !== 0 && (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <AttandancesItem
                  item={item}
                  onPress={() => { navigation.navigate('Attendances') }}
                />
              )}
              keyExtractor={item => item._id}
            />
          )}
        </View>
      )}

      {/* <ScheduleTimes /> */}


    </ScreenContainer>
  );
};

export default ScheduleScreen;
