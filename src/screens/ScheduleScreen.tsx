import ScreenContainer from '../components/ScreenContainer';
import {getData} from '../service/test.callapi';
import {useEffect, useState} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import ScrollTimeStudy from '../components/ScorllTimeStudy';
import ScheduleTimes from './Timeline';
import {View} from 'react-native';
import NewsTabItem from '../components/NewsTabItem';
import {ScrollView} from 'react-native-gesture-handler';
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
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  const [tabSelected, setTab] = useState<string>(Tabs[0].scheduleType);
  const onTabPress = (newsType: string) => {
    setTab(newsType);
  };
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
      <ScheduleTimes />
    </ScreenContainer>
  );
};

export default ScheduleScreen;
