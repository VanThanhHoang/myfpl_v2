import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ListRenderItem,
} from 'react-native';
import {FakeNews} from '../modal/FakeData';
import {Color} from '../constant/Colors';
import {NewsTabItem} from '../components/NewsTabItem';
import ListNewsItem from '../components/item_card/ListNewsItem';
import {RefreshControl} from 'react-native-gesture-handler';
import {News} from '../types/News';
import {NewsType} from '../types/NewType';
const Tabs = [
  {
    name: 'Tất cả',
    newsType: 'All',
  },
  {
    name: 'Học tập',
    newsType: 'Study',
  },

  {
    name: 'Hoạt động',
    newsType: 'Activity',
  },
  {
    name: 'Học phí',
    newsType: 'Tuition',
  },
];
const DashBoard: React.FC = () => {
  const [tabSelected, setTab] = useState<NewsType | string>(Tabs[0].newsType);
  const [isListNewRefesh, setListNewRefesh] = useState<boolean>(false);
  const [data, setData] = useState(FakeNews);
  const fillterDataByType = () => {
    console.log(FakeNews === data);
    if (tabSelected === 'All') return FakeNews;
    console.log(FakeNews.filter(item => item.type === tabSelected));
    return FakeNews.filter(item => item.type === tabSelected);
  };
  const onTabPress = (newsType: NewsType | string) => {
    setTab(newsType);
  };

  const onListNewsRefesh = () => {
    setListNewRefesh(true);
    setTimeout(() => {
      setListNewRefesh(false);
    }, 3000);
  };
  const RenderItemNews: ListRenderItem<News> = ({item}) => {
    return (
      <ListNewsItem
        content={item.content}
        name={'Hoang Van Thanh'}
        title={item.title}
        timePushlish={item.publishedAt}
      />
    );
  };
  useEffect(() => {
    setData(fillterDataByType());
  }, [tabSelected]);
  return (
    <>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
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
                onTabPress(tab.newsType);
              }}
              key={tab.name}
              name={tab.name}
              isSelected={tab.newsType === tabSelected}
            />
          ))}
        </ScrollView>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isListNewRefesh}
            onRefresh={() => {
              onListNewsRefesh();
            }}
          />
        }
        showsVerticalScrollIndicator={false}
        style={{height: 100}}
        data={data}
        renderItem={RenderItemNews}
      />
    </>
  );
};

export default DashBoard;
