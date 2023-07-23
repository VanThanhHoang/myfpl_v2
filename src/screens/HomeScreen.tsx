import ScreenContainer from '../components/ScreenContainer';
import DashBoard from './NewsList';
import {getData} from '../service/test.callapi';
import {useEffect} from 'react';
import AppToolBar from '../components/AppToolBar';
import {getEmail} from '../service/GetEmail';
import SearchBar from '../components/SearchBar';
const HomeScreen = () => {
  useEffect(() => {
    getData();
    getEmail();
  }, []);
  const data = [
    'https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png',
    'https://img.vn/uploads/thuvien/singa-png-20220719150401Tdj1WAJFQr.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/800px-IMG_Academy_Logo.svg.png',
  ];
  return (
    <ScreenContainer>
      <AppToolBar />
      <SearchBar />
      <DashBoard />
    </ScreenContainer>
  );
};
export default HomeScreen;
