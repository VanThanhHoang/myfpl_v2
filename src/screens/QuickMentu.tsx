import { View, FlatList } from 'react-native';
import React from 'react';
import { renderItem } from './EventMenu';
import { DATA } from './EventMenu';

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