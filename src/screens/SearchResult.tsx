import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import SearchBar from '../components/SearchBar';
import ScreenToolBar from '../components/ScreenToolBar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AppNavigationProp,
  SearchResultScreenProps,
} from '../navigation/AppNavigator';
import {StyleSheet, Text, View} from 'react-native';
import {Color} from '../constant/Colors';
import FakeNews from '../modal/FakeData';
import {useEffect, useState} from 'react';
import {News} from '../types/News';
import NoResultView from '../components/NoResult';
const SearchResultScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const searchKey =
    useRoute<SearchResultScreenProps['route']>().params.searchKey;
  const [data, setData] = useState<News[]>([]);
  useEffect(() => {
    const dataFiltered = FakeNews.filter(news => {
      return (
        news.content.toLowerCase().includes(searchKey.toLowerCase()) ||
        news.title.toLowerCase().includes(searchKey.toLowerCase())
      );
    });
    setData(dataFiltered);
  }, [searchKey]);
  return (
    <ScreenContainer>
      <ScreenToolBar
        onButtonBackPress={() => {
          navigation.goBack();
        }}
        title="Tìm kiếm bài viết "
      />
      <SearchBar searchKeyPassed={searchKey} />

      {data.length == 0 ? (
        <View style={{paddingHorizontal: 24}}>
          <Text style={{fontWeight: 'bold', fontSize: 17, marginVertical: 20}}>
            Xin lỗi, không có bài viết nào phù hợp với tìm kiếm của bạn !
          </Text>
          <NoResultView />
        </View>
      ) : (
        <>
          <View style={{flexDirection: 'row', paddingHorizontal: 24}}>
            <Text style={styles.searchText}>Kết quả tìm kiếm cho</Text>
            <Text style={styles.searchKey}>{searchKey}</Text>
          </View>
          <DashBoard setData={setData} newsData={data} />
        </>
      )}
    </ScreenContainer>
  );
  //can truyen data vao dashbroad
};
const styles = StyleSheet.create({
  searchKey: {
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '700',
    color: Color.MAINCOLOR,
    textDecorationLine: 'underline',
  },
  searchText: {
    color: 'black',
    fontSize: 15,
  },
});
export default SearchResultScreen;
