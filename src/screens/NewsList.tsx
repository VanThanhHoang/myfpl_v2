import React, { useState, useEffect } from 'react';
import { View, FlatList, ScrollView, ListRenderItem } from 'react-native';
import { NewsTabItem } from '../components/NewsTabItem';
import ListNewsItem from '../components/item_card/ListNewsItem';
import { RefreshControl } from 'react-native-gesture-handler';
import { News } from '../types/News';
import { NewsType } from '../types/NewType';
import LoadingModal from '../modal/Loading';
import AxiosInstance from '../helper/axiosInstance';
import { set } from 'lodash';

const Tabs = [
  {
    name: 'Tất cả',
    newsType: 'All',
  },
  {
    name: 'Học tập',
    newsType: 'hoctap',
  },

  {
    name: 'Hoạt động',
    newsType: 'hoatdong',
  },
  {
    name: 'Học phí',
    newsType: 'hocphi',
  },
];
export type DashBoardProps = {
  newsData?: News[];
  setData: Function;
  isLoading?: boolean;
};
const DashBoard = ({ newsData, setData, isLoading }: DashBoardProps): React.JSX.Element => {
  const [tabSelected, setTab] = useState<NewsType | string>(Tabs[0].newsType);
  const [isListNewRefesh, setListNewRefesh] = useState<boolean>(false);
  const [loadingStatus, setLoadingStatus] = useState<{ [key: string]: boolean }>({});


  const fetchDataForTab = async (newsType: NewsType | string) => {
    setLoadingStatus(prev => ({ ...prev, [newsType]: true }));
    if (newsType === 'All') {
      const resAll = await AxiosInstance().get(`/news`);
      setData(resAll.data);
      setLoadingStatus(prev => ({ ...prev, [newsType]: false }));
      return;
    }
    try {
      const res = await AxiosInstance().get(`/news/type/${newsType}`);
      setData(res.data);
    } catch (error) {
      console.log(`/news/type/${newsType.toLowerCase()}`)
    } finally {
      setLoadingStatus(prev => ({ ...prev, [newsType]: false }));
    }
    setLoadingStatus(prev => ({ ...prev, [newsType]: false }));
  };
  const onTabPress = (newsType: NewsType | string) => {
    setTab(newsType);
    fetchDataForTab(newsType);
  };

  const onListNewsRefesh = () => {
    setListNewRefesh(true);
    setTimeout(() => {
      setListNewRefesh(false);
    }, 3000);
  };

  useEffect(() => { }, [tabSelected]);

  const RenderItemNews: ListRenderItem<News> = ({ item }) => {
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
          style={{ height: 100 }}
          data={newsData}
          renderItem={RenderItemNews}
        />
      )}
      {isLoading && <LoadingModal isShowModal={isLoading} />}
      {loadingStatus[tabSelected] && <LoadingModal isShowModal={true} />}
    </>
  );
};

export default DashBoard;
