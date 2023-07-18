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
import {
  FAKEDATAHOCTAP,
  FAKEDATAHOATDONG,
  FAKEDATAHOCPHI,
  News,
} from '../modal/FakeData';
import {Color} from '../constant/Colors';
import {NewsTabItem} from '../components/NewsTabItem';
import ListNewsItem from '../components/item_card/ListNewsItem';
import {RefreshControl} from 'react-native-gesture-handler';

interface Item {
  id: number;
  content?: string;
  description?: string;
  publish?: string;
  name?: string;
}
const Tabs = [
  {
    name: 'Tất cả',
  },
  {
    name: 'Học tập',
  },
  {
    name: 'Hoạt động',
  },
  {
    name: 'Học phí',
  },
];
const DashBoard: React.FC = () => {
  const [tabSelected, setTab] = useState<string>(Tabs[0].name);
  const [isListNewRefesh, setListNewRefesh] = useState<boolean>(false);
  const [data, setData] = useState(FAKEDATAHOCTAP);
  const onTabPress = (name: string) => {
    setTab(name);
  };
  const onListNewsRefesh = () => {
    setListNewRefesh(true);
    setTimeout(() => {
      setListNewRefesh(false);
    }, 3000);
  };
  const RenderItemNews: ListRenderItem<News> = ({item}) => {
    return (
      <ListNewsItem name={item.name} title={item.content} time={item.publish} />
    );
  };
  useEffect(() => {
    // setData('ass');
  }, [tabSelected]);
  return (
    <>
      <View style={styles.tabsContainer}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{width: '100%'}}
          horizontal>
          {Tabs.map(tab => (
            <NewsTabItem
              onPress={onTabPress}
              key={tab.name}
              name={tab.name}
              isSelected={tab.name === tabSelected}
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
        data={FAKEDATAHOCTAP}
        renderItem={RenderItemNews}
      />
    </>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    marginVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    width: '100%',
  },
  tabItem: {
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  tabTitle: {
    color: Color.MAINCOLOR,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  selectedTabTitle: {
    color: Color.MAINCOLOR,
    fontWeight: 'bold',
  },
  tabUnderline: {
    backgroundColor: Color.MAINCOLOR,
    height: 3,
    width: 80,
    borderRadius: 2,
    position: 'absolute',
    bottom: 0,
  },
});

export default DashBoard;
