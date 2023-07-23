import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect, useState} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import SearchBar from '../components/SearchBar';
import FakeNews from '../modal/FakeData';
const HomeScreen = () => {
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  const [data, setData] = useState(FakeNews);
  return (
    <ScreenContainer>
      <AppToolBar />
      <SearchBar searchKeyPassed="" />
      <DashBoard setData={setData} newsData={FakeNews} />
    </ScreenContainer>
  );
};
export default HomeScreen;
