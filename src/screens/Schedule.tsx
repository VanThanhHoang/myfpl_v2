import React, {useState} from 'react';
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
import {TABSSCHEDULE} from '../types/Tab';

interface Item {
  id: number;
  content?: string;
  description?: string;
  publish?: string;
  name?: string;
}

const Schedule: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<number>(
    TABSSCHEDULE[0].id,
  );

  const getSelectedTabData = (): Item[] => {
    switch (selectedTabId) {
      case 1:
        return FAKEDATAHOCTAP;
      case 2:
        return FAKEDATAHOATDONG;
      case 3:
        return FAKEDATAHOCPHI;
      default:
        return [];
    }
  };

  const renderContent = () => {
    const selectedData: Item[] = getSelectedTabData();
    return (
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        {selectedData.map(item => (
          <View
            key={item.id}
            style={{
              backgroundColor: 'white',
              height: 150,
              borderRadius: 10,
              marginBottom: 22,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {item.content}
            </Text>
            <Text style={{color: Color.TEXT}}>Người đăng: {item.name}</Text>
            <Text style={{color: Color.TEXT}}>Thời gian: {item.publish}</Text>
            <Text style={{color: Color.TEXT}}>{item.description}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.tabsContainer}>
        {TABSSCHEDULE.map(item => (
          <View key={item.id}>
            <TouchableOpacity
              style={[styles.tabItem]}
              onPress={() => setSelectedTabId(item.id)}>
              <Text
                style={[
                  styles.tabTitle,
                  item.id === selectedTabId ? styles.selectedTabTitle : null,
                ]}>
                {item.title}
              </Text>
              {item.id === selectedTabId && (
                <View style={styles.tabUnderline} />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {renderContent()}
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

export default Schedule;
