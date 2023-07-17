import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  FAKEDATAHOCTAP,
  FAKEDATAHOATDONG,
  FAKEDATAHOCPHI,
} from '../modal/FakeData';
import {Color} from '../constant/Colors';
import {TABSHOME} from '../types/Tab';
import {NewsTabItem} from '../components/NewsTabItem';

interface Item {
  id: number;
  content?: string;
  description?: string;
  publish?: string;
  name?: string;
}
const Tabs = [
  {
    name: 'Tab1',
  },
  {
    name: 'Tab2',
  },
  {
    name: 'Tab3',
  },
];
const DashBoard: React.FC = () => {
  const [tabSelected, setTab] = useState<string>(Tabs[0].name);
  const [data, setData] = useState(FAKEDATAHOCTAP);
  const onTabPress = (name: string) => {
    setTab(name);
  };
  useEffect(() => {
    // setData('ass');
  }, [tabSelected]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.tabsContainer}>
        {Tabs.map(tab => (
          <NewsTabItem
            onPress={onTabPress}
            key={tab.name}
            name={tab.name}
            isSelected={tab.name === tabSelected}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
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
