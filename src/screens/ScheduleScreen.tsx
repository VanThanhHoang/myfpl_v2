import ScreenContainer from '../components/ScreenContainer';
import {useState} from 'react';
import AppToolBar from '../components/AppToolBar';
import ScrollTimeStudy from '../components/ScorllTimeStudy';
import ScheduleTimes from './Timeline';
import {View, FlatList} from 'react-native';
import NewsTabItem from '../components/NewsTabItem';
import {ScrollView} from 'react-native-gesture-handler';
import {fakeAttandancesType} from '../modal/FakeData';
import {PreventRemoveContext, useNavigation} from '@react-navigation/native';
import {AppNavigationProp} from '../navigation/AppNavigator';
import AttandancesItem from '../components/AttendancesItem';
import {TabBar} from 'react-native-tab-view';
type Scheduletab = {
  name: string;
  scheduleType: string;
};
const Tabs: Scheduletab[] = [
  {
    name: 'Lịch học',
    scheduleType: '1',
  },
  {
    name: ' Lịch thi',
    scheduleType: '2',
  },
];
export type ScheduleQuery = {
  type: string;
  limit: string;
};
const ScheduleScreen = () => {
  const [scheduleQuery, setScheduleQuery] = useState<ScheduleQuery>({
    type: '1',
    limit: '0',
  });
  const navigation = useNavigation<AppNavigationProp>();
  const [tabSelected, setTab] = useState<Scheduletab>(Tabs[0]);
  const onTabPress = (tab: Scheduletab) => {
    setScheduleQuery(prev => {
      console.log(prev);
      return {...prev, type: tab.scheduleType};
    });
    setTab(tab);
  };
  const [attandance, setAttendance] = useState(fakeAttandancesType);
  return (
    <ScreenContainer>
      <AppToolBar />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
                onTabPress(tab);
              }}
              key={tab.name}
              name={tab.name}
              isSelected={tab.name === tabSelected.name}
            />
          ))}
        </ScrollView>
      </View>
      <ScrollTimeStudy setTabQuery={setScheduleQuery} />
      {tabSelected.name === 'Activity' ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#f4f9f8',
            paddingVertical: 10,
          }}>
          {attandance.length !== 0 && (
            <FlatList
              data={attandance}
              renderItem={({item}) => (
                <AttandancesItem
                  item={item}
                  onPress={() => {
                    navigation.navigate('Attendances');
                  }}
                />
              )}
              keyExtractor={item => item._id}
            />
          )}
        </View>
      ) : null}
      <ScheduleTimes selectedTabQuery={scheduleQuery} />
    </ScreenContainer>
  );
};

export default ScheduleScreen;
