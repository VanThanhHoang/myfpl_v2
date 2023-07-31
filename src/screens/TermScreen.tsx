import ScreenContainer from '../components/ScreenContainer';
import { useState } from 'react';
import { fakeTerm } from '../modal/FakeData';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Text } from '../components/text/StyledText';
import { useNavigation } from '@react-navigation/native';
import Term from '../components/Term';
import ScrollTimeTerm from '../components/ScrollTimeTerm';

const TermScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(fakeTerm);

  return (
    <ScreenContainer>
      <ScrollTimeTerm />
      <View style={{ flex: 1, backgroundColor: '#fff', paddingVertical: 10 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Term item={item} onPress={() =>
              navigation.navigate('Bảng điểm 2')
            } />
          )}
          keyExtractor={(item) => item._id}
        />
      </View>

    </ScreenContainer>
  );
};

export default TermScreen;
