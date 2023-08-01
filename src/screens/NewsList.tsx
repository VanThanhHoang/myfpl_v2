import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, ListRenderItem} from 'react-native';
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
export type DashBoardProps = {
  newsData?: News[];
  setData: Function;
};
const DashBoard = ({newsData, setData}: DashBoardProps): React.JSX.Element => {
  const [tabSelected, setTab] = useState<NewsType | string>(Tabs[0].newsType);
  const [isListNewRefesh, setListNewRefesh] = useState<boolean>(false);
  const onTabPress = (newsType: NewsType | string) => {
    setTab(newsType);
  };

  const onListNewsRefesh = () => {
    setListNewRefesh(true);
    setTimeout(() => {
      setListNewRefesh(false);
    }, 3000);
  };
  useEffect(() => {}, [tabSelected]);
  const RenderItemNews: ListRenderItem<News> = ({item}) => {
    return <ListNewsItem news={item} />;
  };
  return (
    <>
      <View
        style={{
          paddingHorizontal: 15,
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
      {newsData && (
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
          data={newsData}
          renderItem={RenderItemNews}
        />
      )}
    </>
  );
};

export default DashBoard;
