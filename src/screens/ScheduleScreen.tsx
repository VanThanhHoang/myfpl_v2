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
import AxiosInstance from '../helper/axiosInstance';

const Tabs = [
  {
    name: 'Lịch học',
    scheduleType: 'All',
    scheduleQuery: 'type=1&limit=20',
  },
  {
    name: ' Lịch thi',
    scheduleType: 'Study',
    scheduleQuery: 'type=2&limit=20',
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
  const [attandance, setAttendance] = useState(fakeAttandancesType);
  const [data, setData] = useState(undefined);

  const getSchedule = async () => {
    const selectedTab = Tabs.find(tab => tab.scheduleType === tabSelected);
    console.log(selectedTab);
    if (selectedTab) {
      const res = await AxiosInstance().get(`/schedule?${selectedTab.scheduleQuery}`);
      setData(res.data);
    }
  };
  useEffect(() => {
    getSchedule();
  }, [tabSelected]);
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
      {tabSelected === 'Activity' ? (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 10 }}>
          {attandance.length !== 0 && (
            <FlatList
              data={attandance}
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
      ) : null}
      {data && tabSelected !== 'Activity' && (
        <ScheduleTimes selectedTabQuery={Tabs.find(tab => tab.scheduleType === tabSelected)?.scheduleQuery} />
      )}


    </ScreenContainer>
  );
};

export default ScheduleScreen;
