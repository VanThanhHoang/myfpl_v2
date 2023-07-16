import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppIcons } from '../constant/AppAsset';
import { Item } from '../types/QuickMenuItem';

const DATA: Item[] = [
  {
    id: '1',
    title: 'Dashboard',
    icon: AppIcons.dashboard,
  },
  {
    id: '2',
    title: 'FAQ',
    icon: AppIcons.faq,
  },
  {
    id: '3',
    title: 'Upload Image',
    icon: AppIcons.uploadImage,
  },
  {
    id: '4',
    title: 'Re’n’Dis',
    icon: AppIcons.rnd,
  },
  {
    id: '5',
    title: 'Setting',
    icon: AppIcons.setting,
  },
  {
    id: '6',
    title: 'SMS',
    icon: AppIcons.sms,
  },
  {
    id: '7',
    title: 'User',
    icon: AppIcons.user,
  },
];

const renderItem = ({ item }: { item: Item }) => (
  <View>
    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 100, height: 100, borderRadius: 50 }}>
      <Image source={item.icon} />
    </TouchableOpacity>
    <Text style={{ fontSize: 12, marginTop: 5, alignSelf: 'center' }}>{item.title}</Text>
  </View>
);

const QuickMenu: React.FC = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        numColumns={3}
        columnWrapperStyle={{ justifyContent: 'space-evenly', paddingHorizontal: 10 }}
        ItemSeparatorComponent={() => <View style={{ paddingTop: 30 }} />}
      />
    </View>
  );
};

export default QuickMenu;

const styles = StyleSheet.create({});
