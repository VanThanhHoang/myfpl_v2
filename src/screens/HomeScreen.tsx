import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect, useState} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import SearchBar from '../components/SearchBar';
import FakeNews from '../modal/FakeData';
import AxiosInstance from '../helper/axiosInstance';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {getUserInfo} from '../redux/userSlice';
const HomeScreen = () => {
  const disPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    disPatch(getUserInfo());
  }, []);
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  const [data, setData] = useState(undefined);
  const getNews = async () => {
    const res = await AxiosInstance().get('/news');
    setData(res.data);
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <ScreenContainer>
      <AppToolBar />
      <SearchBar searchKeyPassed="" />
      <DashBoard setData={setData} newsData={data} />
    </ScreenContainer>
  );
};
export default HomeScreen;
